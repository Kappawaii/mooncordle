export default class Dictionnaire {
  public constructor() {}

  public static async getMot(idPartie: string, datePartie: Date): Promise<string> {
    return await this.getNomFichier(idPartie, datePartie)
      .then((nom) => fetch("mots/" + nom + ".txt"))
      .then(
        (result) =>
          new Promise<string>((resolve, reject) => {
            if (!result.ok) return reject("Mot non trouvé");

            return resolve(result.text());
          })
      )
      .then(async (motBrut) => {
        let mot = Dictionnaire.nettoyerMot(motBrut);
        let longueur = mot.length;
        let premiereLettre = mot[0];
        let _ = await import("./mots/listeMotsProposables." + longueur + "." + premiereLettre);
        return mot;
      });
  }

  private static async getNomFichier(idPartie: string, datePartie: Date): Promise<string> {
    let datePartieStr =
      datePartie.getFullYear().toString() +
      "-" +
      (datePartie.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      datePartie.getDate().toString().padStart(2, "0");
      console.log(idPartie + "-" + datePartieStr);

    return btoa(idPartie + "-" + datePartieStr);
  }

  public static async estMotValide(mot: string, premiereLettre: string, longueur: number): Promise<boolean> {
    mot = this.nettoyerMot(mot);
    let ListeMotsProposables = await import("./mots/listeMotsProposables." + longueur + "." + premiereLettre);
    return mot.length >= 6 && mot.length <= 9 && ListeMotsProposables.default.Dictionnaire.includes(mot);
  }

  public static nettoyerMot(mot: string): string {
    return mot
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();
  }
}
