import Configuration from "./entites/configuration";
import PanelManager from "./panelManager";
import Sauvegardeur from "./sauvegardeur";

export default class ReglesPanel {
  private readonly _panelManager: PanelManager;
  private readonly _rulesBouton: HTMLElement;

  public constructor(panelManager: PanelManager) {
    this._panelManager = panelManager;
    this._rulesBouton = document.getElementById("configuration-regles-bouton") as HTMLElement;

    this._rulesBouton.addEventListener(
      "click",
      (() => {
        this.afficher();
      }).bind(this)
    );
  }

  public afficher(): void {
    let titre = "Rules";
    let contenu =
      "<p>" +
      "You have six tries to guess the word of the day, between 6 and 9 letters <br />" +
      "You can only suggest words starting with the same letter as the searched word <br />" +
      "The word changes every day. So avoid spoilers and use the share button <br />" +
      "</p>" +
      '<div class="grille">' +
      "<table>" +
      "<tr>" +
      '<td class="resultat bien-place">M</td>' +
      '<td class="resultat  mal-place">O</td>' +
      '<td class="resultat non-trouve">O</td>' +
      '<td class="resultat mal-place">N</td>' +
      '<td class="resultat mal-place">M</td>' +
      '<td class="resultat non-trouve">O</td>' +
      '<td class="resultat bien-place">O</td>' +
      '<td class="resultat bien-place">N</td>' +
      "</tr>" +
      "</table>" +
      "The letters surrounded by a purple square are well placed<br />" +
      "The letters surrounded by an orange square are misplaced (but present in the word) <br />" +
      "The letters that remain on a dark background are not in the word <br />" +
      "</div>" +
      "<p>" +
      'If you experience any issues, please contact Kappawaii#9448 on discord. − ' +
      '<a target="_blank" href="https://framagit.org/JonathanMM/sutom">Repository Page</a><br />' +
      'Based on the wordle clone by <a href="https://twitter.com/Jonamaths">@Jonamaths</a> (his repo is <a target="_blank" href="https://framagit.org/JonathanMM/sutom">here</a>) <br />' +
      'Thanks to Pseudo#6900 for the playtesting help ❤️'
      "</p>";

    this._panelManager.setContenu(titre, contenu);
    this._panelManager.setClasses(["regles-panel"]);
    this._panelManager.setCallbackFermeture(() => {
      Sauvegardeur.sauvegarderConfig({
        ...(Sauvegardeur.chargerConfig() ?? Configuration.Default),
        afficherRegles: false,
      });
    });
    this._panelManager.afficherPanel();
  }
}
