import PanelManager from "./panelManager";

export default class FinDuJeuPanel {
  private readonly _panelManager: PanelManager;

  public constructor(panelManager: PanelManager) {
    this._panelManager = panelManager;
  }

  public afficher(): void {
    let titre = "End of no";
    let contenu =
      "<p>" +
      "Mooncordle has finally run its course, the last word has been added and will stay available for the time being." +
      "<br /><br />" +
      "Thank you so much for playing" +
      "<br /><br />" +
      "Kappawaii" +
      "</p>" +
      "<img width=\"48px\" src=\"images/moon2CUTE.webp\" alt=\"moon2N\">";

    this._panelManager.setContenu(titre, contenu);
    this._panelManager.setClasses(["regles-panel"]);
    this._panelManager.afficherPanel();
  }
}
