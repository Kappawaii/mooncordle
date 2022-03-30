var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        define(["require", "exports", "./entites/lettreStatut", "./entites/clavierDisposition", "./entites/configuration", "./dictionnaire"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContexteBloquage = void 0;
    var lettreStatut_1 = require("./entites/lettreStatut");
    var clavierDisposition_1 = require("./entites/clavierDisposition");
    var configuration_1 = __importDefault(require("./entites/configuration"));
    var dictionnaire_1 = __importDefault(require("./dictionnaire"));
    var ContexteBloquage;
    (function (ContexteBloquage) {
        ContexteBloquage[ContexteBloquage["ValidationMot"] = 0] = "ValidationMot";
        ContexteBloquage[ContexteBloquage["Panel"] = 1] = "Panel";
    })(ContexteBloquage = exports.ContexteBloquage || (exports.ContexteBloquage = {}));
    var Input = /** @class */ (function () {
        function Input(gestionnaire, configuration, longueurMot, premiereLettre) {
            var _a;
            this._grille = document.getElementById("grille");
            this._inputArea = document.getElementById("input-area");
            this._premiereLettre = premiereLettre;
            this._longueurMot = longueurMot;
            this._gestionnaire = gestionnaire;
            this._motSaisi = "";
            this._estBloque = new Array();
            this._resultats = new Array();
            this.ajouterEvenementClavierPhysique();
            this.dessinerClavier((_a = configuration.disposition) !== null && _a !== void 0 ? _a : configuration_1.default.Default.disposition);
        }
        Input.prototype.dessinerClavier = function (disposition) {
            var clavier = this.getDisposition(disposition);
            this._inputArea.innerHTML = "";
            for (var _i = 0, clavier_1 = clavier; _i < clavier_1.length; _i++) {
                var ligne = clavier_1[_i];
                var ligneDiv = document.createElement("div");
                ligneDiv.className = "input-ligne";
                for (var _a = 0, ligne_1 = ligne; _a < ligne_1.length; _a++) {
                    var lettre = ligne_1[_a];
                    var lettreDiv = document.createElement("div");
                    lettreDiv.className = "input-lettre";
                    switch (lettre) {
                        case "_effacer":
                            lettreDiv.dataset["lettre"] = lettre;
                            lettreDiv.innerText = "⌫";
                            break;
                        case "_entree":
                            lettreDiv.innerText = "↲";
                            lettreDiv.dataset["lettre"] = lettre;
                            lettreDiv.classList.add("input-lettre-entree");
                            break;
                        case "_vide":
                            lettreDiv.classList.add("input-lettre-vide");
                            break;
                        case "_videdouble":
                            lettreDiv.classList.add("input-lettre-vide-double");
                            break;
                        default:
                            lettreDiv.dataset["lettre"] = lettre;
                            lettreDiv.innerText = lettre;
                    }
                    ligneDiv.appendChild(lettreDiv);
                }
                this._inputArea.appendChild(ligneDiv);
            }
            this.ajouterEvenementClavierVirtuel();
            this.remettrePropositions();
        };
        Input.prototype.getDisposition = function (clavier) {
            switch (clavier) {
                case clavierDisposition_1.ClavierDisposition.Bépo:
                    return [
                        ["B", "E", "P", "O", "V", "D", "L", "J", "Z", "W"],
                        ["A", "U", "I", "E", "C", "T", "S", "R", "N", "M"],
                        ["Y", "X", "K", "Q", "G", "H", "F", "_effacer", "_entree"],
                    ];
                case clavierDisposition_1.ClavierDisposition.Qwerty:
                    return [
                        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
                        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
                        ["_vide", "Z", "X", "C", "V", "B", "N", "M", "_effacer", "_entree"],
                    ];
                case clavierDisposition_1.ClavierDisposition.Qwertz:
                    return [
                        ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"],
                        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
                        ["_vide", "Y", "X", "C", "V", "B", "N", "M", "_effacer", "_entree"],
                    ];
                default:
                    return [
                        ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"],
                        ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"],
                        ["_videdouble", "W", "X", "C", "V", "B", "N", "_effacer", "_entree"],
                    ];
            }
        };
        Input.prototype.ajouterEvenementClavierVirtuel = function () {
            var _this = this;
            this._inputArea.querySelectorAll(".input-lettre").forEach(function (lettreDiv) {
                return lettreDiv.addEventListener("click", function (event) {
                    event.stopPropagation();
                    var div = event.currentTarget;
                    if (!div)
                        return;
                    var lettre = div.dataset["lettre"];
                    if (lettre === undefined) {
                        return;
                    }
                    else if (lettre === "_effacer") {
                        _this.effacerLettre();
                    }
                    else if (lettre === "_entree") {
                        _this.validerMot();
                    }
                    else {
                        _this.saisirLettre(lettre);
                    }
                });
            });
        };
        Input.prototype.ajouterEvenementClavierPhysique = function () {
            var _this = this;
            document.addEventListener("keypress", (function (event) {
                event.stopPropagation();
                var touche = event.key;
                if (touche === "Enter") {
                    _this.validerMot();
                }
                else if (/^[A-Z]$/.test(dictionnaire_1.default.nettoyerMot(touche))) {
                    _this.saisirLettre(touche);
                }
            }).bind(this));
            // Le retour arrière n'est détecté que par keydown
            document.addEventListener("keydown", (function (event) {
                event.stopPropagation();
                var touche = event.key;
                if (touche === "Backspace") {
                    event.preventDefault();
                    _this.effacerLettre();
                }
            }).bind(this));
        };
        Input.prototype.effacerLettre = function () {
            if (this.estBloque())
                return;
            if (this._motSaisi.length !== 0) {
                this._motSaisi = this._motSaisi.substring(0, this._motSaisi.length - 1);
            }
            this._gestionnaire.actualiserAffichage(this._motSaisi);
        };
        Input.prototype.validerMot = function () {
            return __awaiter(this, void 0, Promise, function () {
                var mot, isMotValide;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.estBloque())
                                return [2 /*return*/];
                            this.bloquer(ContexteBloquage.ValidationMot);
                            mot = this._motSaisi;
                            return [4 /*yield*/, this._gestionnaire.verifierMot(mot)];
                        case 1:
                            isMotValide = _a.sent();
                            if (isMotValide) {
                                // Si le mot est valide, alors c'est la grille qui nous débloque
                                this._motSaisi = "";
                            }
                            else
                                this.debloquer(ContexteBloquage.ValidationMot);
                            return [2 /*return*/];
                    }
                });
            });
        };
        Input.prototype.saisirLettre = function (lettre) {
            if (this.estBloque())
                return;
            if (this._motSaisi.length >= this._longueurMot)
                return;
            if (this._motSaisi.length === 0 && lettre.toUpperCase() !== this._premiereLettre)
                this._motSaisi += this._premiereLettre;
            this._motSaisi += lettre;
            this._gestionnaire.actualiserAffichage(this._motSaisi);
        };
        Input.prototype.bloquer = function (contexte) {
            if (!this._estBloque.includes(contexte))
                this._estBloque.push(contexte);
        };
        Input.prototype.debloquer = function (contexte) {
            if (this._estBloque.includes(contexte))
                this._estBloque.splice(this._estBloque.indexOf(contexte), 1);
        };
        Input.prototype.estBloque = function () {
            return this._estBloque.length > 0;
        };
        Input.prototype.updateClavier = function (resultats) {
            this._resultats.push(resultats); // On sauvegarde au cas où on doit redessiner tout le clavier
            this.updateClavierAvecProposition(resultats);
        };
        Input.prototype.remettrePropositions = function () {
            for (var _i = 0, _a = this._resultats; _i < _a.length; _i++) {
                var resultat = _a[_i];
                this.updateClavierAvecProposition(resultat);
            }
        };
        Input.prototype.updateClavierAvecProposition = function (resultats) {
            var statutLettres = {};
            // console.log(statutLettres);
            for (var _i = 0, resultats_1 = resultats; _i < resultats_1.length; _i++) {
                var resultat = resultats_1[_i];
                if (!statutLettres[resultat.lettre])
                    statutLettres[resultat.lettre] = resultat.statut;
                else {
                    switch (resultat.statut) {
                        case lettreStatut_1.LettreStatut.BienPlace:
                            statutLettres[resultat.lettre] = lettreStatut_1.LettreStatut.BienPlace;
                            break;
                        case lettreStatut_1.LettreStatut.MalPlace:
                            if (statutLettres[resultat.lettre] !== lettreStatut_1.LettreStatut.BienPlace) {
                                statutLettres[resultat.lettre] = lettreStatut_1.LettreStatut.MalPlace;
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
            // console.log(statutLettres);
            var touches = this._inputArea.querySelectorAll(".input-lettre");
            for (var lettre in statutLettres) {
                var statut = statutLettres[lettre];
                for (var numTouche = 0; numTouche < touches.length; numTouche++) {
                    var touche = touches.item(numTouche);
                    if (touche === undefined || touche === null)
                        continue;
                    if (touche.dataset["lettre"] === lettre) {
                        // console.log(lettre + " => " + statut);
                        switch (statut) {
                            case lettreStatut_1.LettreStatut.BienPlace:
                                touche.className = "";
                                touche.classList.add("input-lettre");
                                touche.classList.add("lettre-bien-place");
                                break;
                            case lettreStatut_1.LettreStatut.MalPlace:
                                if (touche.classList.contains("lettre-bien-place"))
                                    break;
                                touche.className = "";
                                touche.classList.add("input-lettre");
                                touche.classList.add("lettre-mal-place");
                                break;
                            default:
                                if (touche.classList.contains("lettre-bien-place"))
                                    break;
                                if (touche.classList.contains("lettre-mal-place"))
                                    break;
                                touche.className = "";
                                touche.classList.add("input-lettre");
                                touche.classList.add("lettre-non-trouve");
                                break;
                        }
                    }
                }
            }
        };
        return Input;
    }());
    exports.default = Input;
});
//# sourceMappingURL=input.js.map