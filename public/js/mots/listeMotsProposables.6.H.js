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
    var ListeMotsProposables = /** @class */ (function () {
        function ListeMotsProposables() {
        }
        ListeMotsProposables.Dictionnaire = [
            "HABEAS",
            "HABILE",
            "HABITA",
            "HABITE",
            "HABITS",
            "HABLAI",
            "HABLAS",
            "HABLAT",
            "HABLEE",
            "HABLER",
            "HABLES",
            "HABLEZ",
            "HACHAI",
            "HACHAS",
            "HACHAT",
            "HACHEE",
            "HACHER",
            "HACHES",
            "HACHEZ",
            "HACHIS",
            "HACKER",
            "HADALE",
            "HADAUX",
            "HADITH",
            "HADJIS",
            "HADRON",
            "HAGARD",
            "HAGGIS",
            "HAIKAI",
            "HAIKUS",
            "HAIMES",
            "HAINES",
            "HAIRAI",
            "HAIRAS",
            "HAIRES",
            "HAIREZ",
            "HAISSE",
            "HAITES",
            "HAKAMA",
            "HAKKAS",
            "HALAGE",
            "HALAIS",
            "HALAIT",
            "HALALS",
            "HALANT",
            "HALBIS",
            "HALDES",
            "HALEES",
            "HALENA",
            "HALENE",
            "HALENT",
            "HALERA",
            "HALETA",
            "HALETE",
            "HALEUR",
            "HALIEZ",
            "HALINE",
            "HALINS",
            "HALITE",
            "HALLAL",
            "HALLES",
            "HALOIR",
            "HALONS",
            "HALTES",
            "HALVAS",
            "HAMACS",
            "HAMADA",
            "HAMEAU",
            "HAMMAM",
            "HAMPES",
            "HANAPS",
            "HANCHA",
            "HANCHE",
            "HANGAR",
            "HANSES",
            "HANTAI",
            "HANTAS",
            "HANTAT",
            "HANTEE",
            "HANTER",
            "HANTES",
            "HANTEZ",
            "HAPPAI",
            "HAPPAS",
            "HAPPAT",
            "HAPPEE",
            "HAPPER",
            "HAPPES",
            "HAPPEZ",
            "HAQUET",
            "HARAMS",
            "HARDAI",
            "HARDAS",
            "HARDAT",
            "HARDEE",
            "HARDER",
            "HARDES",
            "HARDEZ",
            "HARDIE",
            "HARDIS",
            "HAREMS",
            "HARENG",
            "HARETS",
            "HARGNE",
            "HARKAS",
            "HARKIE",
            "HARKIS",
            "HARLES",
            "HARPAI",
            "HARPAS",
            "HARPAT",
            "HARPEE",
            "HARPER",
            "HARPES",
            "HARPEZ",
            "HARPIE",
            "HARPON",
            "HASARD",
            "HASCHS",
            "HASTEE",
            "HASTES",
            "HATAIS",
            "HATAIT",
            "HATANT",
            "HATEES",
            "HATENT",
            "HATERA",
            "HATIER",
            "HATIEZ",
            "HATIFS",
            "HATIVE",
            "HATONS",
            "HAUBAN",
            "HAUSSA",
            "HAUSSE",
            "HAUTES",
            "HAUTIN",
            "HAUYNE",
            "HAVAGE",
            "HAVAIS",
            "HAVAIT",
            "HAVANE",
            "HAVANT",
            "HAVEES",
            "HAVENT",
            "HAVERA",
            "HAVEUR",
            "HAVIES",
            "HAVIEZ",
            "HAVIRA",
            "HAVONS",
            "HAVRES",
            "HAYONS",
            "HEAUME",
            "HEBDOS",
            "HEBETA",
            "HEBETE",
            "HEBREU",
            "HEGIRE",
            "HELAIS",
            "HELAIT",
            "HELANT",
            "HELEES",
            "HELENT",
            "HELERA",
            "HELICE",
            "HELICO",
            "HELIEZ",
            "HELION",
            "HELIOS",
            "HELIUM",
            "HELONS",
            "HEMINE",
            "HENNES",
            "HENNIN",
            "HENNIR",
            "HENNIS",
            "HENNIT",
            "HENRYS",
            "HENTAI",
            "HERAUT",
            "HERBAI",
            "HERBAS",
            "HERBAT",
            "HERBEE",
            "HERBER",
            "HERBES",
            "HERBEZ",
            "HERBUE",
            "HERBUS",
            "HERCHA",
            "HERCHE",
            "HERITA",
            "HERITE",
            "HERMES",
            "HERNIE",
            "HERONS",
            "HERPES",
            "HERSAI",
            "HERSAS",
            "HERSAT",
            "HERSEE",
            "HERSER",
            "HERSES",
            "HERSEZ",
            "HESITA",
            "HESITE",
            "HETERO",
            "HETMAN",
            "HETRES",
            "HEURES",
            "HEURTA",
            "HEURTE",
            "HEURTS",
            "HEVEAS",
            "HEXANE",
            "HEXOSE",
            "HIATAL",
            "HIATUS",
            "HIBOUX",
            "HIDEUR",
            "HIDEUX",
            "HIDJAB",
            "HIEBLE",
            "HIEMAL",
            "HIHANS",
            "HIJABS",
            "HILARE",
            "HILOTE",
            "HINDIE",
            "HINDIS",
            "HINDOU",
            "HIPPIE",
            "HIPPYS",
            "HIRCIN",
            "HISSAI",
            "HISSAS",
            "HISSAT",
            "HISSEE",
            "HISSER",
            "HISSES",
            "HISSEZ",
            "HIVERS",
            "HOBBIT",
            "HOBBYS",
            "HOCCOS",
            "HOCHAI",
            "HOCHAS",
            "HOCHAT",
            "HOCHEE",
            "HOCHER",
            "HOCHES",
            "HOCHET",
            "HOCHEZ",
            "HOCKEY",
            "HOIRIE",
            "HOLDUP",
            "HOMARD",
            "HOMBRE",
            "HOMMES",
            "HONGRA",
            "HONGRE",
            "HONNIE",
            "HONNIR",
            "HONNIS",
            "HONNIT",
            "HONORA",
            "HONORE",
            "HONTES",
            "HOQUET",
            "HORDES",
            "HORECA",
            "HORION",
            "HORMIS",
            "HORSTS",
            "HOSTIE",
            "HOSTOS",
            "HOTDOG",
            "HOTELS",
            "HOTTEE",
            "HOTTES",
            "HOUAIS",
            "HOUAIT",
            "HOUANT",
            "HOUDAN",
            "HOUEES",
            "HOUENT",
            "HOUERA",
            "HOUIEZ",
            "HOUKAS",
            "HOULES",
            "HOUONS",
            "HOUPPA",
            "HOUPPE",
            "HOUQUE",
            "HOURDA",
            "HOURDE",
            "HOURDI",
            "HOURDS",
            "HOURIS",
            "HOURRA",
            "HOUSES",
            "HOUSSA",
            "HOUSSE",
            "HOYAUX",
            "HUAMES",
            "HUARDS",
            "HUARTS",
            "HUASSE",
            "HUATES",
            "HUBLOT",
            "HUBRIS",
            "HUCHAI",
            "HUCHAS",
            "HUCHAT",
            "HUCHEE",
            "HUCHER",
            "HUCHES",
            "HUCHET",
            "HUCHEZ",
            "HUERAI",
            "HUERAS",
            "HUEREZ",
            "HUERTA",
            "HUILAI",
            "HUILAS",
            "HUILAT",
            "HUILEE",
            "HUILER",
            "HUILES",
            "HUILEZ",
            "HUIONS",
            "HUITRE",
            "HULULA",
            "HULULE",
            "HUMAGE",
            "HUMAIN",
            "HUMAIS",
            "HUMAIT",
            "HUMANT",
            "HUMBLE",
            "HUMEES",
            "HUMENT",
            "HUMERA",
            "HUMEUR",
            "HUMIDE",
            "HUMIEZ",
            "HUMINE",
            "HUMONS",
            "HUMOUR",
            "HUNIER",
            "HUNTER",
            "HUPPEE",
            "HUPPES",
            "HURLAI",
            "HURLAS",
            "HURLAT",
            "HURLEE",
            "HURLER",
            "HURLES",
            "HURLEZ",
            "HURONS",
            "HURRAH",
            "HUSKYS",
            "HUTINS",
            "HUTTES",
            "HUTUES",
            "HYALIN",
            "HYBRIS",
            "HYDNES",
            "HYDRES",
            "HYDRIE",
            "HYENES",
            "HYMENS",
            "HYMNES",
            "HYOIDE",
            "HYPERS",
            "HYPHES",
            "HYPOGE",
            "HYSOPE",
        ];
        return ListeMotsProposables;
    }());
    exports.default = ListeMotsProposables;
});
//# sourceMappingURL=listeMotsProposables.6.H.js.map