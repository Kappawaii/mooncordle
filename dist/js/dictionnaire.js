var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
    var __syncRequire = typeof module === "object" && typeof module.exports === "object";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dictionnaire = /** @class */ (function () {
        function Dictionnaire() {
        }
        Dictionnaire.getMot = function (idPartie, datePartie) {
            return __awaiter(this, void 0, Promise, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getNomFichier(idPartie, datePartie)
                                .then(function (nom) { return fetch("mots/" + nom + ".txt"); })
                                .then(function (result) {
                                return new Promise(function (resolve, reject) {
                                    if (!result.ok)
                                        return reject("Mot non trouvé");
                                    return resolve(result.text());
                                });
                            })
                                .then(function (motBrut) { return __awaiter(_this, void 0, void 0, function () {
                                var mot, longueur, premiereLettre, _;
                                return __generator(this, function (_a) {
                                    var _b;
                                    switch (_a.label) {
                                        case 0:
                                            mot = Dictionnaire.nettoyerMot(motBrut);
                                            longueur = mot.length;
                                            premiereLettre = mot[0];
                                            return [4 /*yield*/, (_b = "./mots/listeMotsProposables." + longueur + "." + premiereLettre, __syncRequire ? Promise.resolve().then(function () { return __importStar(require(_b)); }) : new Promise(function (resolve_1, reject_1) { require([_b], resolve_1, reject_1); }).then(__importStar))];
                                        case 1:
                                            _ = _a.sent();
                                            return [2 /*return*/, mot];
                                    }
                                });
                            }); })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        Dictionnaire.getNomFichier = function (idPartie, datePartie) {
            return __awaiter(this, void 0, Promise, function () {
                var datePartieStr;
                return __generator(this, function (_a) {
                    datePartieStr = datePartie.getFullYear().toString() +
                        "-" +
                        (datePartie.getMonth() + 1).toString().padStart(2, "0") +
                        "-" +
                        datePartie.getDate().toString().padStart(2, "0");
                    console.log(idPartie + "-" + datePartieStr);
                    return [2 /*return*/, btoa(idPartie + "-" + datePartieStr)];
                });
            });
        };
        Dictionnaire.estMotValide = function (mot, premiereLettre, longueur) {
            return __awaiter(this, void 0, Promise, function () {
                var ListeMotsProposables;
                return __generator(this, function (_a) {
                    var _b;
                    switch (_a.label) {
                        case 0:
                            mot = this.nettoyerMot(mot);
                            return [4 /*yield*/, (_b = "./mots/listeMotsProposables." + longueur + "." + premiereLettre, __syncRequire ? Promise.resolve().then(function () { return __importStar(require(_b)); }) : new Promise(function (resolve_2, reject_2) { require([_b], resolve_2, reject_2); }).then(__importStar))];
                        case 1:
                            ListeMotsProposables = _a.sent();
                            return [2 /*return*/, mot.length >= 6 && mot.length <= 9 && ListeMotsProposables.default.Dictionnaire.includes(mot)];
                    }
                });
            });
        };
        Dictionnaire.nettoyerMot = function (mot) {
            return mot
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toUpperCase();
        };
        return Dictionnaire;
    }());
    exports.default = Dictionnaire;
});
//# sourceMappingURL=dictionnaire.js.map