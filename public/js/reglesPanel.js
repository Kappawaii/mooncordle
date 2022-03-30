var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./entites/configuration", "./sauvegardeur"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var configuration_1 = __importDefault(require("./entites/configuration"));
    var sauvegardeur_1 = __importDefault(require("./sauvegardeur"));
    var ReglesPanel = /** @class */ (function () {
        function ReglesPanel(panelManager) {
            var _this = this;
            this._panelManager = panelManager;
            this._rulesBouton = document.getElementById("configuration-regles-bouton");
            this._rulesBouton.addEventListener("click", (function () {
                _this.afficher();
            }).bind(this));
        }
        ReglesPanel.prototype.afficher = function () {
            var titre = "Rules";
            var contenu = "<p>" +
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
                '<a target="_blank" href="https://github.com/Kappawaii/mooncordle">Repository Page</a><br />' +
                'Based on the wordle clone by <a href="https://twitter.com/Jonamaths">@Jonamaths</a> (his repo is <a target="_blank" href="https://framagit.org/JonathanMM/sutom">here</a>) <br />' +
                'Thanks to Pseudo#6900 for the playtesting help ❤️';
            "</p>";
            this._panelManager.setContenu(titre, contenu);
            this._panelManager.setClasses(["regles-panel"]);
            this._panelManager.setCallbackFermeture(function () {
                var _a;
                sauvegardeur_1.default.sauvegarderConfig(__assign(__assign({}, ((_a = sauvegardeur_1.default.chargerConfig()) !== null && _a !== void 0 ? _a : configuration_1.default.Default)), { afficherRegles: false }));
            });
            this._panelManager.afficherPanel();
        };
        return ReglesPanel;
    }());
    exports.default = ReglesPanel;
});
//# sourceMappingURL=reglesPanel.js.map