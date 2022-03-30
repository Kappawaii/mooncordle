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
            "NABABS",
            "NABLAS",
            "NABLES",
            "NABOTE",
            "NABOTS",
            "NACRAI",
            "NACRAS",
            "NACRAT",
            "NACREE",
            "NACRER",
            "NACRES",
            "NACREZ",
            "NADIRS",
            "NAEVUS",
            "NAGARI",
            "NAGEAI",
            "NAGEAS",
            "NAGEAT",
            "NAGEES",
            "NAGENT",
            "NAGERA",
            "NAGEUR",
            "NAGIEZ",
            "NAHUAS",
            "NAIADE",
            "NAINES",
            "NAIRAS",
            "NAISSE",
            "NAITRA",
            "NAITRE",
            "NAIVES",
            "NANANS",
            "NANARS",
            "NANDOU",
            "NANITE",
            "NANKIN",
            "NANTIE",
            "NANTIR",
            "NANTIS",
            "NANTIT",
            "NAPALM",
            "NAPEES",
            "NAPELS",
            "NAPHTA",
            "NAPHTE",
            "NAPPAI",
            "NAPPAS",
            "NAPPAT",
            "NAPPEE",
            "NAPPER",
            "NAPPES",
            "NAPPEZ",
            "NAQUIS",
            "NAQUIT",
            "NARCOS",
            "NAREUX",
            "NARGUA",
            "NARGUE",
            "NARINE",
            "NARRAI",
            "NARRAS",
            "NARRAT",
            "NARREE",
            "NARRER",
            "NARRES",
            "NARREZ",
            "NARVAL",
            "NASALE",
            "NASARD",
            "NASAUX",
            "NASEAU",
            "NASHIS",
            "NASSAI",
            "NASSAS",
            "NASSAT",
            "NASSEE",
            "NASSER",
            "NASSES",
            "NASSEZ",
            "NASTIE",
            "NATALE",
            "NATALS",
            "NATELS",
            "NATICE",
            "NATIFS",
            "NATION",
            "NATIVE",
            "NATRON",
            "NATRUM",
            "NATTAI",
            "NATTAS",
            "NATTAT",
            "NATTEE",
            "NATTER",
            "NATTES",
            "NATTEZ",
            "NATURE",
            "NAUSEE",
            "NAVAJA",
            "NAVAJO",
            "NAVALE",
            "NAVALS",
            "NAVELS",
            "NAVETS",
            "NAVIRE",
            "NAVRAI",
            "NAVRAS",
            "NAVRAT",
            "NAVREE",
            "NAVRER",
            "NAVRES",
            "NAVREZ",
            "NAZIES",
            "NAZIRS",
            "NEANTS",
            "NEBKAS",
            "NECROS",
            "NECTAR",
            "NECTON",
            "NEFLES",
            "NEGOCE",
            "NEGRES",
            "NEGROS",
            "NEGUAI",
            "NEGUAS",
            "NEGUAT",
            "NEGUEE",
            "NEGUER",
            "NEGUES",
            "NEGUEZ",
            "NEIGEA",
            "NEIGER",
            "NEIGES",
            "NEIMAN",
            "NEMALE",
            "NENIES",
            "NEOCON",
            "NEPERS",
            "NEPETE",
            "NEREIS",
            "NEROLI",
            "NERVAI",
            "NERVAS",
            "NERVAT",
            "NERVEE",
            "NERVER",
            "NERVES",
            "NERVEZ",
            "NERVIN",
            "NERVIS",
            "NETCAM",
            "NETTES",
            "NEUMES",
            "NEUNEU",
            "NEURAL",
            "NEUTRE",
            "NEUVES",
            "NEVEUX",
            "NEWTON",
            "NIABLE",
            "NIAISA",
            "NIAISE",
            "NIAMES",
            "NIAQUE",
            "NIASSE",
            "NIATES",
            "NIBARD",
            "NICHAI",
            "NICHAS",
            "NICHAT",
            "NICHEE",
            "NICHER",
            "NICHES",
            "NICHET",
            "NICHEZ",
            "NICHON",
            "NICKEL",
            "NICNAC",
            "NICOIS",
            "NICOLS",
            "NIECES",
            "NIELLA",
            "NIELLE",
            "NIERAI",
            "NIERAS",
            "NIEREZ",
            "NIGAUD",
            "NIHILO",
            "NIIONS",
            "NILGAU",
            "NILLES",
            "NIMBAI",
            "NIMBAS",
            "NIMBAT",
            "NIMBEE",
            "NIMBER",
            "NIMBES",
            "NIMBEZ",
            "NIMBUS",
            "NIMOIS",
            "NINJAS",
            "NIOLES",
            "NIOLOS",
            "NIPPAI",
            "NIPPAS",
            "NIPPAT",
            "NIPPEE",
            "NIPPER",
            "NIPPES",
            "NIPPEZ",
            "NIPPON",
            "NIQABS",
            "NIQUAI",
            "NIQUAS",
            "NIQUAT",
            "NIQUEE",
            "NIQUER",
            "NIQUES",
            "NIQUEZ",
            "NITRAI",
            "NITRAS",
            "NITRAT",
            "NITREE",
            "NITRER",
            "NITRES",
            "NITREZ",
            "NIVALE",
            "NIVAUX",
            "NIVEAL",
            "NIVEAU",
            "NIVELA",
            "NIVELE",
            "NIVOSE",
            "NIZERE",
            "NOBLES",
            "NOCAIS",
            "NOCAIT",
            "NOCANT",
            "NOCEBO",
            "NOCENT",
            "NOCERA",
            "NOCEUR",
            "NOCHER",
            "NOCIEZ",
            "NOCIFS",
            "NOCIVE",
            "NOCONS",
            "NODALE",
            "NODAUX",
            "NODULE",
            "NOEMES",
            "NOEUDS",
            "NOIENT",
            "NOIERA",
            "NOIRCI",
            "NOIRES",
            "NOISES",
            "NOLISA",
            "NOLISE",
            "NOMADE",
            "NOMBRA",
            "NOMBRE",
            "NOMINA",
            "NOMINE",
            "NOMMAI",
            "NOMMAS",
            "NOMMAT",
            "NOMMEE",
            "NOMMER",
            "NOMMES",
            "NOMMEZ",
            "NONCAI",
            "NONCAS",
            "NONCAT",
            "NONCER",
            "NONCES",
            "NONCEZ",
            "NONIDI",
            "NONNES",
            "NOPAIS",
            "NOPAIT",
            "NOPALS",
            "NOPANT",
            "NOPEES",
            "NOPENT",
            "NOPERA",
            "NOPIEZ",
            "NOPONS",
            "NORDIR",
            "NORDIS",
            "NORDIT",
            "NORIAS",
            "NORITE",
            "NORMAI",
            "NORMAL",
            "NORMAS",
            "NORMAT",
            "NORMEE",
            "NORMER",
            "NORMES",
            "NORMEZ",
            "NOROIS",
            "NOROIT",
            "NOSTOC",
            "NOTAIS",
            "NOTAIT",
            "NOTANT",
            "NOTEES",
            "NOTENT",
            "NOTERA",
            "NOTICE",
            "NOTIEZ",
            "NOTION",
            "NOTONS",
            "NOTRES",
            "NOTULE",
            "NOUAGE",
            "NOUAIS",
            "NOUAIT",
            "NOUANT",
            "NOUBAS",
            "NOUEES",
            "NOUENT",
            "NOUERA",
            "NOUEUR",
            "NOUEUX",
            "NOUGAT",
            "NOUIEZ",
            "NOULET",
            "NOUNOU",
            "NOUONS",
            "NOURRI",
            "NOUURE",
            "NOUVEL",
            "NOVAIS",
            "NOVAIT",
            "NOVANT",
            "NOVEES",
            "NOVENT",
            "NOVERA",
            "NOVICE",
            "NOVIEZ",
            "NOVONS",
            "NOYADE",
            "NOYAIS",
            "NOYAIT",
            "NOYANT",
            "NOYAUX",
            "NOYEES",
            "NOYERS",
            "NOYIEZ",
            "NOYONS",
            "NUAGES",
            "NUAMES",
            "NUANCA",
            "NUANCE",
            "NUASSE",
            "NUATES",
            "NUBIEN",
            "NUBILE",
            "NUBUCK",
            "NUCALE",
            "NUCAUX",
            "NUCLEA",
            "NUCLEE",
            "NUDITE",
            "NUERAI",
            "NUERAS",
            "NUEREZ",
            "NUGGET",
            "NUIONS",
            "NUIRAI",
            "NUIRAS",
            "NUIREZ",
            "NUISES",
            "NUISEZ",
            "NUISIS",
            "NUISIT",
            "NUITEE",
            "NULLES",
            "NUMBAT",
            "NUMENT",
            "NUMERO",
            "NUMIDE",
            "NUQUES",
            "NURSES",
            "NUTONS",
            "NYLONS",
            "NYMPHE",
            "NYMPHO",
        ];
        return ListeMotsProposables;
    }());
    exports.default = ListeMotsProposables;
});
//# sourceMappingURL=listeMotsProposables.6.N.js.map