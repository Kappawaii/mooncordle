import Dictionnaire from "./dictionnaire";
import Grille from "./grille";
import Input, { ContexteBloquage } from "./input";
import LettreResultat from "./entites/lettreResultat";
import { LettreStatut } from "./entites/lettreStatut";
import FinDePartiePanel from "./finDePartiePanel";
import NotificationMessage from "./notificationMessage";
import SauvegardeStats from "./entites/sauvegardeStats";
import Sauvegardeur from "./sauvegardeur";
import Configuration from "./entites/configuration";
import AudioPanel from "./audioPanel";
import ConfigurationPanel from "./configurationPanel";
import PartieEnCours from "./entites/partieEnCours";
import PanelManager from "./panelManager";
import ReglesPanel from "./reglesPanel";
import ThemeManager from "./themeManager";
import InstanceConfiguration from "./instanceConfiguration";
import FinDuJeuPanel from "./finDuJeuPanel";

export default class Gestionnaire {
  private _grille: Grille | null = null;
  private _input: Input | null = null;
  private readonly _reglesPanel: ReglesPanel;
  private readonly _finDePartiePanel: FinDePartiePanel;
  private readonly _configurationPanel: ConfigurationPanel;
  private readonly _propositions: Array<string>;
  private readonly _resultats: Array<Array<LettreResultat>>;
  private readonly _panelManager: PanelManager;
  private readonly _themeManager: ThemeManager;
  private readonly _audioPanel: AudioPanel;

  private _motATrouver: string = "";
  private _compositionMotATrouver: { [lettre: string]: number } = {};
  private _maxNbPropositions: number = 6;
  private _datePartieEnCours: Date;
  private _idPartieEnCours: string;
  private _dateFinPartie: Date | undefined;
  private _stats: SauvegardeStats = SauvegardeStats.Default;
  private _config: Configuration = Configuration.Default;

  public constructor() {
    this._config = Sauvegardeur.chargerConfig() ?? this._config;

    let partieEnCours = this.chargerPartieEnCours();

    this._idPartieEnCours = this.getIdPartie(partieEnCours);

    if (this._idPartieEnCours !== partieEnCours.idPartie && partieEnCours.idPartie !== undefined) {
      console.log("bad partie");
      partieEnCours = new PartieEnCours();
    }

    if (partieEnCours.datePartie) {
      console.log("hi2");
      this._datePartieEnCours = partieEnCours.datePartie;
    } else {
      this._datePartieEnCours = new Date();
    }

    if (partieEnCours.dateFinPartie) {
      this._dateFinPartie = partieEnCours.dateFinPartie;
    }
    this._propositions = new Array<string>();
    this._resultats = new Array<Array<LettreResultat>>();
    this._panelManager = new PanelManager();
    this._audioPanel = new AudioPanel(this._config);
    let finDuJeuPanel = new FinDuJeuPanel(this._panelManager);
    finDuJeuPanel.afficher();

    this._themeManager = new ThemeManager(this._config);
    this._reglesPanel = new ReglesPanel(this._panelManager);
    this._finDePartiePanel = new FinDePartiePanel(this._datePartieEnCours, this._panelManager);
    this._configurationPanel = new ConfigurationPanel(this._panelManager, this._audioPanel, this._themeManager);
    this._motATrouver = "BEDGE";
    this._input = new Input(this, this._config, this._motATrouver.length, this._motATrouver[0]);
    this._panelManager.setInput(this._input);
    this._grille = new Grille(this._motATrouver.length, this._maxNbPropositions, this._motATrouver[0], this._audioPanel);
    this._compositionMotATrouver = this.decompose(this._motATrouver);
    this.chargerPropositions(partieEnCours.propositions);

    this.afficherReglesSiNecessaire();
  }

  private getIdPartie(partieEnCours: PartieEnCours) {
    if (window.location.hash !== "" && window.location.hash !== "#") {
      let hashPart = Buffer.from(window.location.hash.substring(1), 'base64').toString().split("/");
      for (let infoPos in hashPart) {
        let info = hashPart[infoPos];
        if (!info.includes("=")) continue;
        let infoPart = info.split("=");
        let infoKey = infoPart[0];

        if (infoKey !== "p") continue;

        return infoPart[1];
      }
    }

    if (partieEnCours.idPartie !== undefined) return partieEnCours.idPartie;

    return InstanceConfiguration.idPartieParDefaut;
  }

  private chargerPartieEnCours(): PartieEnCours {
    this._stats = Sauvegardeur.chargerSauvegardeStats() ?? SauvegardeStats.Default;
    let sauvegardePartieEnCours = Sauvegardeur.chargerSauvegardePartieEnCours();
    if (sauvegardePartieEnCours) return sauvegardePartieEnCours;

    return new PartieEnCours();
  }

  private async chargerPropositions(propositions: Array<string> | undefined): Promise<void> {
    if (!propositions || propositions.length === 0) return;
    for (let mot of propositions) {
      await this.verifierMot(mot, true);
    }
  }

  private enregistrerPartieDansStats(): void {
    this._stats.partiesJouees++;
    let estVictoire = this._resultats.some((resultat) => resultat.every((item) => item.statut === LettreStatut.BienPlace));
    if (estVictoire) {
      this._stats.partiesGagnees++;
      let nbEssais = this._resultats.length;
      if (nbEssais >= 1 && nbEssais <= 6) {
        this._stats.repartition[nbEssais as 1 | 2 | 3 | 4 | 5 | 6]++;
      }
    } else {
      this._stats.repartition["-"]++;
    }
    this._stats.lettresRepartitions.bienPlace += this._resultats.reduce((accumulateur: number, mot: Array<LettreResultat>) => {
      accumulateur += mot.filter((item) => item.statut == LettreStatut.BienPlace).length;
      return accumulateur;
    }, 0);
    this._stats.lettresRepartitions.malPlace += this._resultats.reduce((accumulateur: number, mot: Array<LettreResultat>) => {
      accumulateur += mot.filter((item) => item.statut == LettreStatut.MalPlace).length;
      return accumulateur;
    }, 0);
    this._stats.lettresRepartitions.nonTrouve += this._resultats.reduce((accumulateur: number, mot: Array<LettreResultat>) => {
      accumulateur += mot.filter((item) => item.statut == LettreStatut.NonTrouve).length;
      return accumulateur;
    }, 0);
    this._stats.dernierePartie = this._datePartieEnCours;

    Sauvegardeur.sauvegarderStats(this._stats);
  }

  private sauvegarderPartieEnCours(): void {
    Sauvegardeur.sauvegarderPartieEnCours(this._idPartieEnCours, this._datePartieEnCours, this._propositions, this._dateFinPartie);
  }

  private decompose(mot: string): { [lettre: string]: number } {
    let composition: { [lettre: string]: number } = {};
    for (let position = 0; position < mot.length; position++) {
      let lettre = mot[position];
      if (composition[lettre]) composition[lettre]++;
      else composition[lettre] = 1;
    }
    return composition;
  }

  public async verifierMot(mot: string, chargementPartie: boolean = false): Promise<boolean> {
    mot = Dictionnaire.nettoyerMot(mot);
    if (!chargementPartie && mot.length !== this._motATrouver.length) {
      NotificationMessage.ajouterNotification("The suggested word is too short");
      return false;
    }
    if (!chargementPartie && mot[0] !== this._motATrouver[0]) {
      NotificationMessage.ajouterNotification("The proposed word must begin with the same letter as the searched word");
      return false;
    }
    /*if (!(await Dictionnaire.estMotValide(mot, this._motATrouver[0], this._motATrouver.length))) {
      NotificationMessage.ajouterNotification("This word is not in our dictionary");
      return false;
    }*/
    if (!this._datePartieEnCours) this._datePartieEnCours = new Date();
    let resultats = this.analyserMot(mot);
    let isBonneReponse = resultats.every((item) => item.statut === LettreStatut.BienPlace);
    this._propositions.push(mot);
    this._resultats.push(resultats);

    if (isBonneReponse || this._propositions.length === this._maxNbPropositions) {
      if (!this._dateFinPartie) this._dateFinPartie = new Date();
      let duree = this._dateFinPartie.getTime() - this._datePartieEnCours.getTime();
      this._finDePartiePanel.genererResume(isBonneReponse, this._motATrouver, this._resultats, duree);
      if (!chargementPartie) this.enregistrerPartieDansStats();
    }

    if (this._grille) {
      this._grille.validerMot(mot, resultats, isBonneReponse, chargementPartie, () => {
        if (this._input) {
          this._input.updateClavier(resultats);
          if (isBonneReponse || this._propositions.length === this._maxNbPropositions) {
            this._finDePartiePanel.afficher();
          } else {
            // La partie n'est pas fini, on débloque
            this._input.debloquer(ContexteBloquage.ValidationMot);
          }
        }
      });
    }

    this.sauvegarderPartieEnCours();

    return true;
  }

  public actualiserAffichage(mot: string): void {
    if (this._grille) this._grille.actualiserAffichage(Dictionnaire.nettoyerMot(mot));
  }

  private analyserMot(mot: string): Array<LettreResultat> {
    let resultats = new Array<LettreResultat>();
    mot = mot.toUpperCase();

    let composition = { ...this._compositionMotATrouver };

    for (let position = 0; position < this._motATrouver.length; position++) {
      let lettreATrouve = this._motATrouver[position];
      let lettreProposee = mot[position];

      if (lettreATrouve === lettreProposee) {
        composition[lettreProposee]--;
      }
    }

    for (let position = 0; position < this._motATrouver.length; position++) {
      let lettreATrouve = this._motATrouver[position];
      let lettreProposee = mot[position];

      let resultat = new LettreResultat();
      resultat.lettre = lettreProposee;

      if (lettreATrouve === lettreProposee) {
        resultat.statut = LettreStatut.BienPlace;
      } else if (this._motATrouver.includes(lettreProposee)) {
        if (composition[lettreProposee] > 0) {
          resultat.statut = LettreStatut.MalPlace;
          composition[lettreProposee]--;
        } else {
          resultat.statut = LettreStatut.NonTrouve;
        }
      } else {
        resultat.statut = LettreStatut.NonTrouve;
      }

      resultats.push(resultat);
    }

    return resultats;
  }

  private afficherReglesSiNecessaire(): void {
    if (this._config.afficherRegles !== undefined && !this._config.afficherRegles) return;

    //this._reglesPanel.afficher();
  }
}
