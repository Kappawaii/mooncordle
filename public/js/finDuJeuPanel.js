(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FinDuJeuPanel = /** @class */ (function () {
        function FinDuJeuPanel(panelManager) {
            this._panelManager = panelManager;
        }
        FinDuJeuPanel.prototype.afficher = function () {
            var titre = "End of mooncordle";
            var contenu = "<p>" +
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
        };
        return FinDuJeuPanel;
    }());
    exports.default = FinDuJeuPanel;
});
//# sourceMappingURL=finDuJeuPanel.js.map