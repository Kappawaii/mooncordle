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
            "MABOUL",
            "MACERA",
            "MACERE",
            "MACHAI",
            "MACHAS",
            "MACHAT",
            "MACHEE",
            "MACHER",
            "MACHES",
            "MACHEZ",
            "MACHIN",
            "MACHON",
            "MACHOS",
            "MACLAI",
            "MACLAS",
            "MACLAT",
            "MACLEE",
            "MACLER",
            "MACLES",
            "MACLEZ",
            "MACONS",
            "MACQUA",
            "MACQUE",
            "MACRES",
            "MACRON",
            "MACROS",
            "MACULA",
            "MACULE",
            "MADAME",
            "MADERE",
            "MADONE",
            "MADRAS",
            "MADREE",
            "MADRES",
            "MAERLS",
            "MAFFIA",
            "MAFFLU",
            "MAFIAS",
            "MAGAHI",
            "MAGANA",
            "MAGANE",
            "MAGIES",
            "MAGMAS",
            "MAGNAI",
            "MAGNAS",
            "MAGNAT",
            "MAGNEE",
            "MAGNER",
            "MAGNES",
            "MAGNET",
            "MAGNEZ",
            "MAGNUM",
            "MAGOTA",
            "MAGOTE",
            "MAGOTS",
            "MAGRET",
            "MAGYAR",
            "MAHDIS",
            "MAHOUS",
            "MAIEUR",
            "MAIGRE",
            "MAIGRI",
            "MAILLA",
            "MAILLE",
            "MAINTE",
            "MAINTS",
            "MAIRES",
            "MAIRIE",
            "MAISON",
            "MAITRE",
            "MAJEUR",
            "MAJONG",
            "MAJORA",
            "MAJORE",
            "MAJORS",
            "MAKACH",
            "MALADE",
            "MALAGA",
            "MALAIS",
            "MALARD",
            "MALART",
            "MALAXA",
            "MALAXE",
            "MALBAR",
            "MALBEC",
            "MALFIS",
            "MALFIT",
            "MALGRE",
            "MALICE",
            "MALIEN",
            "MALINE",
            "MALINS",
            "MALLES",
            "MALOUF",
            "MALOYA",
            "MALTAI",
            "MALTAS",
            "MALTAT",
            "MALTEE",
            "MALTER",
            "MALTES",
            "MALTEZ",
            "MAMANS",
            "MAMBAS",
            "MAMBOS",
            "MAMELU",
            "MAMIES",
            "MAMMYS",
            "MANADE",
            "MANAGE",
            "MANANT",
            "MANCHE",
            "MANCIE",
            "MANDAI",
            "MANDAS",
            "MANDAT",
            "MANDEE",
            "MANDER",
            "MANDES",
            "MANDEZ",
            "MANEGE",
            "MANGAS",
            "MANGEA",
            "MANGEE",
            "MANGER",
            "MANGES",
            "MANGEZ",
            "MANGUE",
            "MANIAI",
            "MANIAS",
            "MANIAT",
            "MANIEE",
            "MANIER",
            "MANIES",
            "MANIEZ",
            "MANIFS",
            "MANIOC",
            "MANIPE",
            "MANIPS",
            "MANNES",
            "MANOIR",
            "MANQUA",
            "MANQUE",
            "MANSES",
            "MANTAS",
            "MANTES",
            "MANTRA",
            "MANUEL",
            "MAORIE",
            "MAORIS",
            "MAPPAI",
            "MAPPAS",
            "MAPPAT",
            "MAPPEE",
            "MAPPER",
            "MAPPES",
            "MAPPEZ",
            "MAQUAI",
            "MAQUAS",
            "MAQUAT",
            "MAQUEE",
            "MAQUER",
            "MAQUES",
            "MAQUEZ",
            "MAQUIS",
            "MARACA",
            "MARAIS",
            "MARAUD",
            "MARAVA",
            "MARAVE",
            "MARBRA",
            "MARBRE",
            "MARCEL",
            "MARCHA",
            "MARCHE",
            "MARDIS",
            "MAREES",
            "MARFIL",
            "MARGAY",
            "MARGEA",
            "MARGEE",
            "MARGER",
            "MARGES",
            "MARGEZ",
            "MARGIS",
            "MARIAI",
            "MARIAL",
            "MARIAS",
            "MARIAT",
            "MARIEE",
            "MARIER",
            "MARIES",
            "MARIEZ",
            "MARINA",
            "MARINE",
            "MARINS",
            "MARIOL",
            "MARLIN",
            "MARLIS",
            "MARLOU",
            "MARMOT",
            "MARNAI",
            "MARNAS",
            "MARNAT",
            "MARNEE",
            "MARNER",
            "MARNES",
            "MARNEZ",
            "MARQUA",
            "MARQUE",
            "MARRAI",
            "MARRAS",
            "MARRAT",
            "MARREE",
            "MARRER",
            "MARRES",
            "MARREZ",
            "MARRIE",
            "MARRIS",
            "MARRON",
            "MARTEL",
            "MARTES",
            "MARTIN",
            "MARTRE",
            "MARTYR",
            "MASERS",
            "MASQUA",
            "MASQUE",
            "MASSAI",
            "MASSAS",
            "MASSAT",
            "MASSEE",
            "MASSER",
            "MASSES",
            "MASSEZ",
            "MASSIF",
            "MASSUE",
            "MASTER",
            "MASTIC",
            "MASTOC",
            "MASURE",
            "MATAFS",
            "MATAGE",
            "MATAIS",
            "MATAIT",
            "MATANT",
            "MATCHA",
            "MATCHE",
            "MATCHS",
            "MATEES",
            "MATENT",
            "MATERA",
            "MATEUR",
            "MATIES",
            "MATIEZ",
            "MATINA",
            "MATINE",
            "MATINS",
            "MATIRA",
            "MATITE",
            "MATOIR",
            "MATOIS",
            "MATONS",
            "MATOUS",
            "MATRAS",
            "MATRIE",
            "MATTES",
            "MATURA",
            "MATURE",
            "MAUDIS",
            "MAUDIT",
            "MAURES",
            "MAUSER",
            "MAUVES",
            "MAUVIS",
            "MAUZAC",
            "MAXIMA",
            "MAXIME",
            "MAYENS",
            "MAZAMA",
            "MAZOTS",
            "MAZOUT",
            "MBALAX",
            "MECANE",
            "MECANO",
            "MECENE",
            "MECHAI",
            "MECHAS",
            "MECHAT",
            "MECHEE",
            "MECHER",
            "MECHES",
            "MECHEZ",
            "MECHTA",
            "MECRUE",
            "MECRUS",
            "MECRUT",
            "MEDIAL",
            "MEDIAN",
            "MEDIAS",
            "MEDIAT",
            "MEDINA",
            "MEDIRA",
            "MEDIRE",
            "MEDISA",
            "MEDISE",
            "MEDITA",
            "MEDITE",
            "MEDIUM",
            "MEDIUS",
            "MEDOCS",
            "MEDUSA",
            "MEDUSE",
            "MEFAIS",
            "MEFAIT",
            "MEFERA",
            "MEFIAI",
            "MEFIAS",
            "MEFIAT",
            "MEFIEE",
            "MEFIER",
            "MEFIES",
            "MEFIEZ",
            "MEFONT",
            "MEGALO",
            "MEGERE",
            "MEGIES",
            "MEGIRA",
            "MEGOTA",
            "MEGOTE",
            "MEGOTS",
            "MEHARA",
            "MEHARI",
            "MEIOSE",
            "MEJUGE",
            "MELAIS",
            "MELAIT",
            "MELANT",
            "MELBAS",
            "MELEES",
            "MELENA",
            "MELENT",
            "MELERA",
            "MELEZE",
            "MELIAS",
            "MELIEZ",
            "MELLAH",
            "MELONS",
            "MEMBRE",
            "MEMBRU",
            "MEMERE",
            "MENACA",
            "MENACE",
            "MENADE",
            "MENAGE",
            "MENAIS",
            "MENAIT",
            "MENANT",
            "MENDIA",
            "MENDIE",
            "MENEAU",
            "MENEES",
            "MENENT",
            "MENERA",
            "MENEUR",
            "MENHIR",
            "MENIEZ",
            "MENINE",
            "MENINS",
            "MENONS",
            "MENSES",
            "MENTAL",
            "MENTES",
            "MENTEZ",
            "MENTHE",
            "MENTIR",
            "MENTIS",
            "MENTIT",
            "MENTON",
            "MENTOR",
            "MENUES",
            "MENUET",
            "MENURE",
            "MEPLAT",
            "MEPRIS",
            "MEPRIT",
            "MERBAU",
            "MERCIS",
            "MERDAI",
            "MERDAS",
            "MERDAT",
            "MERDER",
            "MERDES",
            "MERDEZ",
            "MERISE",
            "MERITA",
            "MERITE",
            "MERLAN",
            "MERLES",
            "MERLIN",
            "MERLON",
            "MERLOT",
            "MERLUS",
            "MEROUS",
            "MERULE",
            "MESCAL",
            "MESIAL",
            "MESONS",
            "MESSER",
            "MESSES",
            "MESSIE",
            "MESSIN",
            "MESTRE",
            "MESURA",
            "MESURE",
            "MESUSA",
            "MESUSE",
            "METAUX",
            "METEIL",
            "METEOS",
            "METHYL",
            "METIER",
            "METOPE",
            "METRAI",
            "METRAS",
            "METRAT",
            "METREE",
            "METRER",
            "METRES",
            "METREZ",
            "METROS",
            "METTES",
            "METTEZ",
            "METTRA",
            "METTRE",
            "MEUBLA",
            "MEUBLE",
            "MEUGLA",
            "MEUGLE",
            "MEULAI",
            "MEULAS",
            "MEULAT",
            "MEULEE",
            "MEULER",
            "MEULES",
            "MEULEZ",
            "MEULON",
            "MEURES",
            "MEUTES",
            "MEUVES",
            "MEVEND",
            "MEZAIL",
            "MEZZOS",
            "MIAOUS",
            "MIASME",
            "MIAULA",
            "MIAULE",
            "MICACE",
            "MICHES",
            "MICMAC",
            "MICRON",
            "MICROS",
            "MIELLE",
            "MIENNE",
            "MIETTE",
            "MIEVRE",
            "MIGNON",
            "MIGRAI",
            "MIGRAS",
            "MIGRAT",
            "MIGREE",
            "MIGRER",
            "MIGRES",
            "MIGREZ",
            "MIHRAB",
            "MIJOLA",
            "MIJOLE",
            "MIJOTA",
            "MIJOTE",
            "MIKADO",
            "MILADY",
            "MILANS",
            "MILICE",
            "MILIEU",
            "MILITA",
            "MILITE",
            "MILLAS",
            "MILLES",
            "MILLET",
            "MILORD",
            "MIMAIS",
            "MIMAIT",
            "MIMANT",
            "MIMEES",
            "MIMENT",
            "MIMERA",
            "MIMIEZ",
            "MIMINE",
            "MIMONS",
            "MIMOSA",
            "MINAGE",
            "MINAIS",
            "MINAIT",
            "MINANT",
            "MINBAR",
            "MINCES",
            "MINCIR",
            "MINCIS",
            "MINCIT",
            "MINEES",
            "MINENT",
            "MINERA",
            "MINETS",
            "MINEUR",
            "MINIER",
            "MINIEZ",
            "MINIMA",
            "MINIME",
            "MINIUM",
            "MINNAN",
            "MINOEN",
            "MINOIS",
            "MINONS",
            "MINORA",
            "MINORE",
            "MINOTS",
            "MINOUS",
            "MINUIT",
            "MINUTA",
            "MINUTE",
            "MIOCHE",
            "MIRAGE",
            "MIRAIS",
            "MIRAIT",
            "MIRANT",
            "MIREES",
            "MIRENT",
            "MIRERA",
            "MIREUR",
            "MIRIEZ",
            "MIROIR",
            "MIRONS",
            "MISAIS",
            "MISAIT",
            "MISANT",
            "MISEES",
            "MISENT",
            "MISERA",
            "MISERE",
            "MISIEZ",
            "MISONS",
            "MISSEL",
            "MISSES",
            "MISTON",
            "MITAGE",
            "MITAIS",
            "MITAIT",
            "MITANS",
            "MITANT",
            "MITARD",
            "MITEES",
            "MITENT",
            "MITERA",
            "MITEUX",
            "MITIEZ",
            "MITIGE",
            "MITONS",
            "MITOSE",
            "MITRAL",
            "MITREE",
            "MITRES",
            "MITRON",
            "MIXAGE",
            "MIXAIS",
            "MIXAIT",
            "MIXANT",
            "MIXEES",
            "MIXENT",
            "MIXERA",
            "MIXERS",
            "MIXEUR",
            "MIXIEZ",
            "MIXITE",
            "MIXONS",
            "MIXTES",
            "MNEMES",
            "MOBILE",
            "MOBLOT",
            "MOCHES",
            "MODALE",
            "MODAUX",
            "MODELA",
            "MODELE",
            "MODEMS",
            "MODERA",
            "MODERE",
            "MODERS",
            "MODIFS",
            "MODULA",
            "MODULE",
            "MODULO",
            "MOELLE",
            "MOERES",
            "MOEURS",
            "MOFLAI",
            "MOFLAS",
            "MOFLAT",
            "MOFLEE",
            "MOFLER",
            "MOFLES",
            "MOFLEZ",
            "MOGHOL",
            "MOGOLE",
            "MOGOLS",
            "MOHAIR",
            "MOHAWK",
            "MOINES",
            "MOIRAI",
            "MOIRAS",
            "MOIRAT",
            "MOIREE",
            "MOIRER",
            "MOIRES",
            "MOIREZ",
            "MOISAI",
            "MOISAS",
            "MOISAT",
            "MOISEE",
            "MOISER",
            "MOISES",
            "MOISEZ",
            "MOISIE",
            "MOISIR",
            "MOISIS",
            "MOISIT",
            "MOITAI",
            "MOITAS",
            "MOITAT",
            "MOITER",
            "MOITES",
            "MOITEZ",
            "MOITIE",
            "MOITIR",
            "MOITIS",
            "MOITIT",
            "MOJITO",
            "MOKSHA",
            "MOLARD",
            "MOLENE",
            "MOLETA",
            "MOLETE",
            "MOLLAH",
            "MOLLES",
            "MOLLET",
            "MOLLIE",
            "MOLLIR",
            "MOLLIS",
            "MOLLIT",
            "MOLOCH",
            "MOMBIN",
            "MOMENT",
            "MOMIES",
            "MONADE",
            "MONDAI",
            "MONDAS",
            "MONDAT",
            "MONDEE",
            "MONDER",
            "MONDES",
            "MONDEZ",
            "MONELS",
            "MONEME",
            "MONGOL",
            "MONIAL",
            "MONOME",
            "MONTAI",
            "MONTAS",
            "MONTAT",
            "MONTEE",
            "MONTER",
            "MONTES",
            "MONTEZ",
            "MONTRA",
            "MONTRE",
            "MOQUAI",
            "MOQUAS",
            "MOQUAT",
            "MOQUEE",
            "MOQUER",
            "MOQUES",
            "MOQUEZ",
            "MORALE",
            "MORAUX",
            "MORAVE",
            "MORDES",
            "MORDEZ",
            "MORDIS",
            "MORDIT",
            "MORDRA",
            "MORDRE",
            "MORDUE",
            "MORDUS",
            "MOREAU",
            "MORENE",
            "MORFAL",
            "MORFIL",
            "MORFLA",
            "MORFLE",
            "MORGUE",
            "MORION",
            "MORIOS",
            "MORMON",
            "MORNAS",
            "MORNEE",
            "MORNES",
            "MOROSE",
            "MORPHE",
            "MORSES",
            "MORTEL",
            "MORTEM",
            "MORTES",
            "MORUES",
            "MORULA",
            "MORVES",
            "MOSANE",
            "MOSANS",
            "MOSSIS",
            "MOTARD",
            "MOTELS",
            "MOTETS",
            "MOTEUR",
            "MOTIFS",
            "MOTION",
            "MOTIVA",
            "MOTIVE",
            "MOTTAI",
            "MOTTAS",
            "MOTTAT",
            "MOTTEE",
            "MOTTER",
            "MOTTES",
            "MOTTEZ",
            "MOUAIS",
            "MOUCHA",
            "MOUCHE",
            "MOUDRA",
            "MOUDRE",
            "MOUFLA",
            "MOUFLE",
            "MOUFTA",
            "MOUFTE",
            "MOUISE",
            "MOUJIK",
            "MOULAI",
            "MOULAS",
            "MOULAT",
            "MOULEE",
            "MOULER",
            "MOULES",
            "MOULEZ",
            "MOULIN",
            "MOULUE",
            "MOULUS",
            "MOULUT",
            "MOUNAS",
            "MOUREZ",
            "MOURIR",
            "MOURON",
            "MOURRA",
            "MOURRE",
            "MOURUS",
            "MOURUT",
            "MOUSME",
            "MOUSSA",
            "MOUSSE",
            "MOUSSU",
            "MOUTON",
            "MOUVAI",
            "MOUVAS",
            "MOUVAT",
            "MOUVEE",
            "MOUVER",
            "MOUVES",
            "MOUVEZ",
            "MOUVRA",
            "MOYEES",
            "MOYENS",
            "MOYEUX",
            "MUAMES",
            "MUANCE",
            "MUASSE",
            "MUATES",
            "MUCHAI",
            "MUCHAS",
            "MUCHAT",
            "MUCHEE",
            "MUCHER",
            "MUCHES",
            "MUCHEZ",
            "MUCINE",
            "MUCITE",
            "MUCORS",
            "MUCRON",
            "MUDRAS",
            "MUERAI",
            "MUERAS",
            "MUEREZ",
            "MUESLI",
            "MUETTE",
            "MUFFIN",
            "MUFLES",
            "MUFTIS",
            "MUGIES",
            "MUGIRA",
            "MUGUET",
            "MUIONS",
            "MULARD",
            "MULCHS",
            "MULETA",
            "MULETS",
            "MULONS",
            "MULOTA",
            "MULOTE",
            "MULOTS",
            "MUNIES",
            "MUNIRA",
            "MUPHTI",
            "MURAGE",
            "MURAIS",
            "MURAIT",
            "MURALE",
            "MURANT",
            "MURAUX",
            "MUREES",
            "MURENE",
            "MURENT",
            "MURERA",
            "MURETS",
            "MURGEA",
            "MURGEE",
            "MURGER",
            "MURGES",
            "MURGEZ",
            "MURIER",
            "MURIES",
            "MURIEZ",
            "MURINE",
            "MURINS",
            "MURIRA",
            "MURMEL",
            "MURONS",
            "MUSAIS",
            "MUSAIT",
            "MUSANT",
            "MUSARD",
            "MUSCAT",
            "MUSCLA",
            "MUSCLE",
            "MUSEAL",
            "MUSEAU",
            "MUSEES",
            "MUSELA",
            "MUSELE",
            "MUSENT",
            "MUSERA",
            "MUSEUM",
            "MUSEUR",
            "MUSIEZ",
            "MUSLIS",
            "MUSOIR",
            "MUSONS",
            "MUSQUA",
            "MUSQUE",
            "MUSSAI",
            "MUSSAS",
            "MUSSAT",
            "MUSSEE",
            "MUSSER",
            "MUSSES",
            "MUSSEZ",
            "MUSSIF",
            "MUTAGE",
            "MUTAIS",
            "MUTAIT",
            "MUTANT",
            "MUTEES",
            "MUTENT",
            "MUTERA",
            "MUTIEZ",
            "MUTILA",
            "MUTILE",
            "MUTINA",
            "MUTINE",
            "MUTINS",
            "MUTITE",
            "MUTONS",
            "MUTUEL",
            "MUTULE",
            "MYASES",
            "MYCETE",
            "MYCOSE",
            "MYGALE",
            "MYIASE",
            "MYOMES",
            "MYOPES",
            "MYOPIE",
            "MYOSIS",
            "MYRRHE",
            "MYRTES",
            "MYSTES",
            "MYTHES",
            "MYTHOS",
            "MYXINE",
            "MYXOME",
        ];
        return ListeMotsProposables;
    }());
    exports.default = ListeMotsProposables;
});
//# sourceMappingURL=listeMotsProposables.6.M.js.map