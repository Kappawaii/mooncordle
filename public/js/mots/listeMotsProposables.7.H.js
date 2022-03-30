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
            "HABILES",
            "HABILLA",
            "HABILLE",
            "HABITAI",
            "HABITAS",
            "HABITAT",
            "HABITEE",
            "HABITER",
            "HABITES",
            "HABITEZ",
            "HABITUA",
            "HABITUE",
            "HABITUS",
            "HABLAIS",
            "HABLAIT",
            "HABLANT",
            "HABLEES",
            "HABLENT",
            "HABLERA",
            "HABLEUR",
            "HABLIEZ",
            "HABLONS",
            "HACHAGE",
            "HACHAIS",
            "HACHAIT",
            "HACHANT",
            "HACHEES",
            "HACHENT",
            "HACHERA",
            "HACHEUR",
            "HACHICH",
            "HACHIEZ",
            "HACHOIR",
            "HACHONS",
            "HACHURA",
            "HACHURE",
            "HACKERS",
            "HACKEUR",
            "HACKING",
            "HADALES",
            "HADDOCK",
            "HADITHS",
            "HADRONS",
            "HAFNIUM",
            "HAGARDE",
            "HAGARDS",
            "HAIKAIS",
            "HAILLON",
            "HAINEUX",
            "HAIRAIS",
            "HAIRAIT",
            "HAIRENT",
            "HAIRIEZ",
            "HAIRONS",
            "HAIRONT",
            "HAISSES",
            "HAISSEZ",
            "HAITIEN",
            "HAKAMAS",
            "HALAGES",
            "HALAMES",
            "HALASSE",
            "HALATES",
            "HALBRAN",
            "HALEINE",
            "HALENAI",
            "HALENAS",
            "HALENAT",
            "HALENEE",
            "HALENER",
            "HALENES",
            "HALENEZ",
            "HALERAI",
            "HALERAS",
            "HALEREZ",
            "HALETAI",
            "HALETAS",
            "HALETAT",
            "HALETER",
            "HALETES",
            "HALETEZ",
            "HALEURS",
            "HALEUSE",
            "HALICTE",
            "HALINES",
            "HALIONS",
            "HALIPLE",
            "HALITES",
            "HALKINA",
            "HALKINE",
            "HALLAGE",
            "HALLALI",
            "HALLIER",
            "HALOIDE",
            "HALOIRS",
            "HALTERE",
            "HAMADAS",
            "HAMEAUX",
            "HAMECON",
            "HAMMAMS",
            "HAMSTER",
            "HANCHAI",
            "HANCHAS",
            "HANCHAT",
            "HANCHEE",
            "HANCHER",
            "HANCHES",
            "HANCHEZ",
            "HANDELA",
            "HANDELE",
            "HANGARS",
            "HANSART",
            "HANTAIS",
            "HANTAIT",
            "HANTANT",
            "HANTEES",
            "HANTENT",
            "HANTERA",
            "HANTIEZ",
            "HANTISE",
            "HANTONS",
            "HAOUSSA",
            "HAPPAIS",
            "HAPPAIT",
            "HAPPANT",
            "HAPPEES",
            "HAPPENT",
            "HAPPERA",
            "HAPPIEZ",
            "HAPPONS",
            "HAPTENE",
            "HAQUETS",
            "HARASSA",
            "HARASSE",
            "HARCELA",
            "HARCELE",
            "HARDAIS",
            "HARDAIT",
            "HARDANT",
            "HARDEES",
            "HARDENT",
            "HARDERA",
            "HARDEUR",
            "HARDIES",
            "HARDIEZ",
            "HARDONS",
            "HARENGS",
            "HARFANG",
            "HARGNES",
            "HARICOT",
            "HARISSA",
            "HARKIES",
            "HARNAIS",
            "HARNOIS",
            "HARPAIL",
            "HARPAIS",
            "HARPAIT",
            "HARPANT",
            "HARPEES",
            "HARPENT",
            "HARPERA",
            "HARPIES",
            "HARPIEZ",
            "HARPONS",
            "HARRAGA",
            "HASARDA",
            "HASARDE",
            "HASARDS",
            "HASHTAG",
            "HASSIUM",
            "HASTEES",
            "HATAMES",
            "HATASSE",
            "HATATES",
            "HATELET",
            "HATELLE",
            "HATERAI",
            "HATERAS",
            "HATEREZ",
            "HATIERS",
            "HATIONS",
            "HATIVES",
            "HAUBANA",
            "HAUBANE",
            "HAUBANS",
            "HAUBERT",
            "HAUSSAI",
            "HAUSSAS",
            "HAUSSAT",
            "HAUSSEE",
            "HAUSSER",
            "HAUSSES",
            "HAUSSEZ",
            "HAUTAIN",
            "HAUTEUR",
            "HAUTINS",
            "HAUYNES",
            "HAVAGES",
            "HAVAMES",
            "HAVANES",
            "HAVASSE",
            "HAVATES",
            "HAVENET",
            "HAVERAI",
            "HAVERAS",
            "HAVEREZ",
            "HAVEURS",
            "HAVEUSE",
            "HAVIMES",
            "HAVIONS",
            "HAVIRAI",
            "HAVIRAS",
            "HAVIREZ",
            "HAVISSE",
            "HAVITES",
            "HAVRAIS",
            "HAWAIEN",
            "HEAUMES",
            "HEBERGE",
            "HEBETAI",
            "HEBETAS",
            "HEBETAT",
            "HEBETEE",
            "HEBETER",
            "HEBETES",
            "HEBETEZ",
            "HEBREUX",
            "HECTARE",
            "HEGIRES",
            "HELAMES",
            "HELASSE",
            "HELATES",
            "HELERAI",
            "HELERAS",
            "HELEREZ",
            "HELICES",
            "HELICON",
            "HELICOS",
            "HELIONS",
            "HELIUMS",
            "HELLENE",
            "HELODEE",
            "HELVETE",
            "HEMATIE",
            "HEMINEE",
            "HEMINES",
            "HEMIOLE",
            "HEMIONE",
            "HENNINS",
            "HENNIRA",
            "HENTAIS",
            "HEPIALE",
            "HEPTANE",
            "HEPTOSE",
            "HERAUTS",
            "HERBACE",
            "HERBAGE",
            "HERBAIS",
            "HERBAIT",
            "HERBANT",
            "HERBEES",
            "HERBENT",
            "HERBERA",
            "HERBEUX",
            "HERBIER",
            "HERBIEZ",
            "HERBONS",
            "HERBUES",
            "HERCHAI",
            "HERCHAS",
            "HERCHAT",
            "HERCHER",
            "HERCHES",
            "HERCHEZ",
            "HERCULE",
            "HERESIE",
            "HERISSA",
            "HERISSE",
            "HERITAI",
            "HERITAS",
            "HERITAT",
            "HERITEE",
            "HERITER",
            "HERITES",
            "HERITEZ",
            "HERMINE",
            "HERNIEE",
            "HERNIES",
            "HEROIDE",
            "HEROINE",
            "HERSAGE",
            "HERSAIS",
            "HERSAIT",
            "HERSANT",
            "HERSCHA",
            "HERSCHE",
            "HERSEES",
            "HERSENT",
            "HERSERA",
            "HERSEUR",
            "HERSIEZ",
            "HERSONS",
            "HERVIEN",
            "HESITAI",
            "HESITAS",
            "HESITAT",
            "HESITER",
            "HESITES",
            "HESITEZ",
            "HESSIEN",
            "HETAIRE",
            "HETEROS",
            "HETMANS",
            "HETRAIE",
            "HEUREUX",
            "HEURTAI",
            "HEURTAS",
            "HEURTAT",
            "HEURTEE",
            "HEURTER",
            "HEURTES",
            "HEURTEZ",
            "HEXANES",
            "HEXITOL",
            "HEXOSES",
            "HIATALE",
            "HIATAUX",
            "HIBERNA",
            "HIBERNE",
            "HICKORY",
            "HIDALGO",
            "HIDEURS",
            "HIDEUSE",
            "HIDJABS",
            "HIEBLES",
            "HIEMALE",
            "HIEMAUX",
            "HIEMENT",
            "HILAIRE",
            "HILARES",
            "HILOIRE",
            "HILOTES",
            "HINDIES",
            "HINDOUE",
            "HINDOUS",
            "HIPPIES",
            "HIPSTER",
            "HIRCINE",
            "HIRCINS",
            "HIRSUTE",
            "HISPANO",
            "HISPIDE",
            "HISSAGE",
            "HISSAIS",
            "HISSAIT",
            "HISSANT",
            "HISSEES",
            "HISSENT",
            "HISSERA",
            "HISSIEZ",
            "HISSONS",
            "HISTONE",
            "HITTITE",
            "HIVERNA",
            "HIVERNE",
            "HOBBIES",
            "HOBBITS",
            "HOCHAIS",
            "HOCHAIT",
            "HOCHANT",
            "HOCHEES",
            "HOCHENT",
            "HOCHERA",
            "HOCHETS",
            "HOCHIEZ",
            "HOCHONS",
            "HOCKEYS",
            "HOIRIES",
            "HOLDING",
            "HOLDUPS",
            "HOLISME",
            "HOLISTE",
            "HOLMIUM",
            "HOLSTER",
            "HOMARDS",
            "HOMBRES",
            "HOMELIE",
            "HOMINEM",
            "HOMMAGE",
            "HONGRAI",
            "HONGRAS",
            "HONGRAT",
            "HONGREE",
            "HONGRER",
            "HONGRES",
            "HONGREZ",
            "HONNETE",
            "HONNEUR",
            "HONNIES",
            "HONNIRA",
            "HONORAI",
            "HONORAS",
            "HONORAT",
            "HONOREE",
            "HONORER",
            "HONORES",
            "HONOREZ",
            "HONORIS",
            "HONTEUX",
            "HOPITAL",
            "HOPLITE",
            "HOQUETA",
            "HOQUETE",
            "HOQUETS",
            "HORAIRE",
            "HORIONS",
            "HORIZON",
            "HORLOGE",
            "HORMONA",
            "HORMONE",
            "HORREUR",
            "HORSAIN",
            "HOSANNA",
            "HOSPICE",
            "HOSTIES",
            "HOSTILE",
            "HOTDOGS",
            "HOTESSE",
            "HOTLINE",
            "HOTTEES",
            "HOUACHE",
            "HOUAMES",
            "HOUASSE",
            "HOUATES",
            "HOUBLON",
            "HOUDANS",
            "HOUERAI",
            "HOUERAS",
            "HOUEREZ",
            "HOUILLE",
            "HOUIONS",
            "HOULEUX",
            "HOULQUE",
            "HOUMOUS",
            "HOUPPAI",
            "HOUPPAS",
            "HOUPPAT",
            "HOUPPEE",
            "HOUPPER",
            "HOUPPES",
            "HOUPPEZ",
            "HOUQUES",
            "HOURDAI",
            "HOURDAS",
            "HOURDAT",
            "HOURDEE",
            "HOURDER",
            "HOURDES",
            "HOURDEZ",
            "HOURDIE",
            "HOURDIR",
            "HOURDIS",
            "HOURDIT",
            "HOURQUE",
            "HOURRAS",
            "HOUSARD",
            "HOUSEAU",
            "HOUSSAI",
            "HOUSSAS",
            "HOUSSAT",
            "HOUSSEE",
            "HOUSSER",
            "HOUSSES",
            "HOUSSEZ",
            "HUAIENT",
            "HUASSES",
            "HUBLOTS",
            "HUCHAIS",
            "HUCHAIT",
            "HUCHANT",
            "HUCHEES",
            "HUCHENT",
            "HUCHERA",
            "HUCHETS",
            "HUCHIEZ",
            "HUCHONS",
            "HUERAIS",
            "HUERAIT",
            "HUERENT",
            "HUERIEZ",
            "HUERONS",
            "HUERONT",
            "HUERTAS",
            "HUILAGE",
            "HUILAIS",
            "HUILAIT",
            "HUILANT",
            "HUILEES",
            "HUILENT",
            "HUILERA",
            "HUILEUX",
            "HUILIER",
            "HUILIEZ",
            "HUILONS",
            "HUITAIN",
            "HUITRES",
            "HULOTTE",
            "HULULAI",
            "HULULAS",
            "HULULAT",
            "HULULER",
            "HULULES",
            "HULULEZ",
            "HUMAGES",
            "HUMAGNE",
            "HUMAINE",
            "HUMAINS",
            "HUMAMES",
            "HUMASSE",
            "HUMATES",
            "HUMBLES",
            "HUMECTA",
            "HUMECTE",
            "HUMERAI",
            "HUMERAL",
            "HUMERAS",
            "HUMEREZ",
            "HUMERUS",
            "HUMEURS",
            "HUMIDES",
            "HUMIFIA",
            "HUMIFIE",
            "HUMILIA",
            "HUMILIE",
            "HUMINES",
            "HUMIONS",
            "HUMIQUE",
            "HUMMOCK",
            "HUMORAL",
            "HUMOURS",
            "HUNIERS",
            "HUNTERS",
            "HUPPEES",
            "HURDLER",
            "HURLAIS",
            "HURLAIT",
            "HURLANT",
            "HURLEES",
            "HURLENT",
            "HURLERA",
            "HURLEUR",
            "HURLIEZ",
            "HURLONS",
            "HURONNE",
            "HURRAHS",
            "HUSKIES",
            "HUSSARD",
            "HUSSITE",
            "HUTINET",
            "HYALINE",
            "HYALINS",
            "HYALITE",
            "HYBRIDA",
            "HYBRIDE",
            "HYDRATA",
            "HYDRATE",
            "HYDRIES",
            "HYDRURE",
            "HYGIENE",
            "HYGROMA",
            "HYMENEE",
            "HYOIDES",
            "HYPERON",
            "HYPNOSE",
            "HYPOGEE",
            "HYPOGES",
            "HYPOIDE",
            "HYPOXIE",
            "HYSOPES",
        ];
        return ListeMotsProposables;
    }());
    exports.default = ListeMotsProposables;
});
//# sourceMappingURL=listeMotsProposables.7.H.js.map