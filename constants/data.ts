import { MiloBrusehoved, type miloFilter, type navItems } from "@/utils/type";

const products = [
  {
    img: "/images/products/1.jpg",
    path: "/products/milo-brusehoved",
    name: "MILO Brusehoved",
    price: 799,
    offer: 649,
  },
  {
    img: "/images/products/2.jpg",
    path: "/products/milo-filter",
    name: "MILO Filter",
    price: 199,
    offer: 0,
  },
  {
    img: "/images/products/4.jpg",
    price: 100,
    offer: 0,
    name: "Gavekort",
    path: "/products/gavekort",
  },
];

const filterReduces = [
  {
    title: "Kalk",
    img: "/images/pages/videnskaben/reduces/1.png",
    description:
      "MILO-filteret indeholder FOF-salt (sodium hexametaphosphate) som binder sig til metaller og mineraler i vandet. Dette hjælper med at forhindre dannelse af kalkaflejringer ved at opretholde opløsningen af calcium- og magnesiumioner i vandet, hvilket forhindrer dem i at krystallisere og danne hårde aflejringer.",
    ref: '"SHMP (sodium hexametaphosphate) hæmmer opbygning af kalkaflejringer."',
    path: "https://www.sciencedirect.com/science/article/abs/pii/S0011916412006121",
  },
  {
    title: "PFAS",
    img: "/images/pages/videnskaben/reduces/2.png",
    description:
      "Det aktive kul i MILO-filteret anvender sin porøse struktur til at adsorbere PFAS (per- og polyfluoralkylstoffer) fra vand, hvilket fanger det på filterets overflade. Dette er en effektiv metode til at reducere koncentrationen af PFAS, da disse stoffer har en tendens til at binde sig til kullets kulstofstrukturer.",
    ref: '"Aktiveret kul er blevet vist effektivt til at fjerne PFAS"',
    path: "https://www.epa.gov/sites/default/files/2019-10/documents/pfas_drinking_water_treatment_technology_options_fact_sheet_04182019.pdf",
  },
  {
    title: "Pesticider",
    img: "/images/pages/videnskaben/reduces/3.png",
    description:
      "Det aktive kul i MILO-filteret reducerer effektivt pesticider fra vand ved at binde de organiske molekyler fra pesticiderne til sin porøse overflade gennem en proces kaldet adsorption. Dette sker fordi det aktive kul har en høj affinitet for organiske forbindelser, hvilket gør det i stand til selektivt at reducere disse skadelige stoffer fra vandet.",
    ref: '"Aktiveret kul er en velegnet metode til at fjerne pesticider fra drikkevandet."',
    path: "https://orbit.dtu.dk/en/projects/removal-of-the-pesticides-bam-and-atrazine-from-drinking-water-by",
  },
  {
    title: "Tungmetaller",
    img: "/images/pages/videnskaben/reduces/4.png",
    description:
      "MILO-filteret effektiviserer reduktionen af tungmetaller i vand ved at adsorbere det på overfladen. Denne funktion skyldes det aktive kul i filteret, som besidder en porøs struktur. Adsorptionsprocessen muliggør en markant reduktion af tungmetaller.",
    ref: '"Aktivt kul er en effektiv metode til reducere tungmetaller, men dets effektivitet varierer afhængigt af koncentrationen af tungmetaller."',
    path: "https://www.sciencedirect.com/science/article/pii/S1876610214007504",
  },
  {
    title: "Klor",
    img: "/images/pages/videnskaben/reduces/5.png",
    description:
      "Det aktive kul i MILO-filteret er særligt effektivt til at reducere klor fra vand, da det binder klor-molekylerne til sin porøse struktur gennem en proces kaldet adsorption, hvilket reducerer både klorindholdet og de tilhørende lugt- og smagsgener.",
    ref: '"Aktiveret kul kan fjerne og nedbryde resterende desinfektionsmidler (klor og kloramin) gennem en katalytisk reduktionsreaktion."',
    path: "https://www.watertreatmentguide.com/activated_carbon_filtration.htm",
  },
];

const navItems: navItems = [
  {
    title: "Produkter",
    path: "/products",
    sub: [
      { title: "MILO Brusehoved", path: "/products/milo-brusehoved" },
      { title: "MILO Filter", path: "/products/milo-filter" },
      { title: "Gavekort", path: "/products/gavekort" },
    ],
    subWithImg: [
      {
        title: "MILO Brusehoved",
        path: "/products/milo-brusehoved",
        img: "/images/navbar/menu_showerhead.jpg",
        description: "Udviklet sammen med specialister inden for vandkvalitet.",
      },
      {
        title: "MILO Filter",
        path: "/products/milo-filter",
        img: "/images/navbar/menu_filter.jpg",
        description: "Reducerer kalk, tungmetaller, PFAS og pesticider.",
      },
    ],
  },
  {
    title: "Information",
    path: "/pages/videnskaben",
    sub: [
      { title: "Om os", path: "/pages/om-os" },
      { title: "Videnskaben", path: "/pages/videnskaben" },
      { title: "Vandkvalitet", path: "/pages/vandkvalitet" },
      { title: "Installation", path: "/pages/installation" },
      { title: "Blog", path: "/pages/blogs" },
    ],
    subWithImg: [
      {
        title: "Videnskaben",
        path: "/pages/videnskaben",
        img: "/images/navbar/menu_videnskaben.jpg",
        description:
          "Videnskaben bag MILO-filteret, som effektivt filtrerer dit vand.",
      },
      {
        title: "Vandkvalitet",
        path: "/pages/vandkvalitet",
        img: "/images/navbar/menu_denmark.jpg",
        description:
          "Se vandkvaliteten i din kommune med vores interaktive kort.",
      },
    ],
  },
  {
    title: "Socialt ansvar",
    path: "/pages/socialt-ansvar",
  },
  {
    title: "Vandrapport",
    path: "/pages/vandrapport",
  },
  {
    title: "Support",
    path: "/pages/kontakt",
    sub: [
      { title: "Kontakt os", path: "/pages/kontakt" },
      { title: "Returnering", path: "/pages/returportal" },
      { title: "Collabs", path: "/pages/collab" },
    ],
    subWithImg: [
      {
        title: "Kundeservice",
        path: "/pages/kontakt",
        img: "/images/navbar/keyboard.jpg",
        description:
          "Vores kundeservice er klar til at svare på alle dine spørgsmål.",
      },
      {
        title: "Mit abonnement",
        path: "/pages/collab",
        img: "/images/navbar/account_menu.jpg",
        description: "Få overblik over, dit filter abonnement.",
      },
    ],
  },
];

const footerItems1 = [
  {
    title: "Kontakt os",
    path: "/pages/kontakt",
  },

  {
    title: "Ofte stillede spørgsmål",
    path: "/pages/kontakt",
  },
  {
    title: "Handelsbetingelser",
    path: "/pages/handelsbetingelser",
  },
  {
    title: "Privatlivspolitik",
    path: "/policies/privacy-policy",
  },
  {
    title: "Returnering",
    path: "/pages/returportal",
  },
];
const footerItems2 = [
  {
    title: "MILO Brusehoved",
    path: "/products/milo-brusehoved",
  },

  {
    title: "MILO Filter",
    path: "/products/milo-filter",
  },
  {
    title: "Tjek vandet i din kommune",
    path: "/pages/vandkvalitet",
  },
  {
    title: "Om os",
    path: "/pages/om-os",
  },
  {
    title: "Collab",
    path: "/pages/collab",
  },
];

const heroProducts = [
  {
    img: "/images/products/1.jpg",
    price: 799,
    offer: 649,
    name: "MILO Brusehoved",
    path: "products/milo-brusehoved",
  },
  {
    img: "/images/products/2.jpg",
    price: 199,
    offer: 0,
    name: "MILO Filter",
    path: "/products/milo-filter",
  },
  {
    img: "/images/products/4.jpg",
    price: 100,
    offer: 0,
    name: "Gavekort",
    path: "/products/gavekort",
  },
];

const InfoBoxHome = [
  {
    img: "/images/icons/arrow-left-box.svg",
    content: "Prøv risikofrit i 30 dage",
  },
  {
    img: "/images/icons/star.svg",
    content: "4,7 stjerner på Trustpilot",
  },
  {
    img: "/images/icons/global.svg",
    content: "Dansk virksomhed",
  },
  {
    img: "/images/icons/box.svg",
    content: "Fri fragt over 350,-",
  },
];

const accordionHome = [
  {
    question: "Hvor længe tager levering?",
    answer:
      "Levering tager 1-3 hverdage. Hvis du bestiller før kl. 16, vil pakken typisk leveres dagen efter.",
  },
  {
    question: "Hvordan returnerer jeg?",
    answer:
      "Vi tilbyder 30 dages tilfredshedsgaranti. Du kan bruge MILO i 30 dage og hvis du ikke er tilfreds, kan du nemt returnere og få alle pengene tilbage. Du skal blot skrive til os på info@showerlabs.dk.",
  },
  {
    question: "Hvor længe holder et filter?",
    answer:
      "Vi anbefaler, at skifte filter hver tredje måned. Dog afhænger filterets levetid af antal mennesker i husstanden, vandkvalitet og længde på bade. Det er tid til at skifte filter, når filteret er misfarvet og dermed fyldt med urenheder.",
  },
  {
    question: "Hvilke stoffer reduceres fra vandet?",
    answer:
      "Kalk, pesticider, tungmetaller, PFAS, nitrat, og andre skadelige kemikalier, som typisk nedsiver i grundvandet fra industri, byområder og forbrugerprodukter.",
  },
  {
    question: "Hvordan filtrerer den vandet?",
    answer:
      "Filteret består af aktivt kul, som virker ved at tiltrække og fastholde organiske stoffer på overfladen, når vand passerer igennem. Med andre ord, vil urenheder binde sig fast til filteret, når vand flyder igennem. Aktivt kul har nemlig en stor overflade (op til 2.000 m²/g) og millioner af mikroskopiske huller, som giver det en adsorberende kvalitet. Kemikalier og urenheder vil samle sig i de mikroskopiske huller, så kun det rene vand flyder igennem. Med tiden vil disse huller fyldes, hvorfor det kræves, at filteret udskiftes ca. hver tredje måned.",
  },
  {
    question: "Hvordan styrkes mit hår?",
    answer:
      "Kalk, tungmetaller og kemikalier i badevand skader dit hår over tid. Det forringer hårets naturlige styrke og farve, fører til spaltede spidser og bidrager til hårtab. MILO's filtreringssystem reducerer disse skadelige stoffer, hvilket beskytter dit hår og bevarer hårets naturlige oliemængde, for at forbedre dit hårs vitalitet og sundhed.",
  },
  {
    question: "Hvordan forbedres min hud?",
    answer:
      "Ufiltreret vand indeholder kemikalier og tungmetaller, der irriterer huden og kan forårsage rødme, udslæt og tør hud. MILO hjælper med at beskytte din hud mod disse potentielle problemer ved at fjerne forurenende stoffer fra vandet.",
  },
  {
    question: "Hvad hvis jeg ikke skifter filter?",
    answer:
      "Hvis du ikke skifter filter, vil MILO stadig fungere som et normalt brusehoved. For at opnå resultater, anbefaler vi at skifte filter hver tredje måned.",
  },
  {
    question: "Hvordan er vandtrykket?",
    answer:
      "MILO har et behageligt og kraftigt vandtryk. MILO er nemlig designet til, at give dig en behagelig bruseoplevelse, samtidig med at filtrere vandet for at beskytte din hud og dit hår.",
  },
];

const slidesDataHome = [
  {
    id: 1,
    imageSrc: "/images/home/blogs/1.jpg",
    link: "#",
    title:
      "Brusehoved med filter: Den ultimative løsning mod kalk og urenheder",
  },
  {
    id: 2,
    imageSrc: "/images/home/blogs/2.png",
    link: "#",
    title: "Derfor skal du filtrere dit brusevand.",
  },
  {
    id: 3,
    imageSrc: "/images/home/blogs/3.jpg",
    link: "#",
    title: "Guide til at slippe af med tørt hår.",
  },
  {
    id: 4,
    imageSrc: "/images/home/blogs/4.jpg",
    link: "#",
    title: "Ny trend: Kalk-filtreret badevand. Alt, hvad du behøver at vide.",
  },
];

// Milo Brusehoved

const miloBrusehoved: MiloBrusehoved = {
  miloBrusehovedLabels: [
    {
      content: "Højt vandtryk & blødt vand",
    },
    {
      content: "Reducerer kalk, pesticider, PFAS & tungmetaller",
    },
    {
      content: " Returret til 31. jan. 2025 ",
    },
    {
      content: "98% tilfredshed",
    },
  ],
  description:
    "MILO reduces harmful substances such as calcium, pesticides, PFAS and heavy metals that can dry out and oust your skin as well as weaken your hair's strength, shine and colour.",
  purchaseOptions: [
    {
      option: "Med filterabonnement",
      price: 799,
      offer: 649,
      contains: {
        description: "MILO Brusehoved + MILO Filter",
        description2: "Nyt filter leveret hver 90. dag for 199 kr.",
        offer: "249",
      },
      hint: "Ingen binding & altid filtreret vand",
      bestValue: true,
      products: [
        {
          id: 1,
          img: "/images/products/1.jpg",
          title: "MILO Brusehoved (med filterabonnement)",
          includes: "Inklusiv MILO Filter: holder 3 mdr.",
          price: 799,
          offer: 649,
        },
        {
          id: 2,
          img: "/images/products/2.jpg",
          title: "MILO Filter - Abonnement",
          includes:
            "Abonnementet starter først 3. måneder efter købet af brusehovedet, og opkræves derefter hver 3. måned.",
          price: 0,
          offer: 0,
        },
      ],
    },
    {
      option: "Engangskøb",
      price: 799,
      offer: 699,
      contains: {
        description: " MILO Brusehoved + MILO Filter",
        description2: "",
        offer: "",
      },
      hint: "",
      bestValue: false,
      products: [
        {
          id: 5,
          img: "/images/products/1.jpg",
          title: "MILO Brusehoved",
          includes: "Inklusiv MILO Filter: holder 3 mdr.",
          price: 799,
          offer: 699,
        },
      ],
    },
  ],

  faqs: [
    {
      question: "Filteret",
      answer:
        "MILO-filteret giver sundere hud og stærkere hår ved at reducere skadelige kemikalier som kalk, pesticider, tungmetaller fra vandet. \n Filteret består af aktivt kul og FOF-salt og skal udskiftes minimum hver 3. måned, afhængigt af vandforbrug.\n Med abonnement sparer du op til 29% og du får automatisk levering. \n Du kan købe et filter på denne side.",
    },
    {
      question: "Hår & hud",
      answer:
        "Kalk, tungmetaller og pesticider er nogle af de største syndere, når det kommer til udtørring og ødelæggelse af hud og hår. Desværre er det danske vand fyldt med disse stoffer, hvilket resulterer i, at mange danskere oplever tørt, knækket og kruset hår. Det hjælper MILO med.",
    },
    {
      question: "Garanti",
      answer:
        "Du behøver ikke at tage vores ord for gode varer. Du kan nemlig prøve brusehovedet risikofrit i 30 dage og mærke effekten på egen krop, hud, og hår. \n GÆLDER KUN FOR ORDRER FRA OG MED D. 1. NOVEMBER 2024: Køb din julegave allerede nu. Vi tilbyder garanti på alle brusehoveder til og med d. 31. januar 2025.",
    },
    {
      question: "Pakken",
      answer:
        "Når du bestiller et brusehoved, får du også ét gratis filter, som holder i 90 dage. Brusehovedet kan holde i mange år, men filteret skal skiftes ud hver tredje måned for maksimal effekt. Det vil vi selvfølgelig påminde dig om, når tiden er inde.",
    },
    {
      question: "Levering",
      answer:
        "Når du har bestilt, kan du forvente at have brusehovedet på dit badeværelse inden for 1-3 dage og nyde dit filtrerede og rene vand. Bestiller du før kl. 16, sender vi din pakke samme dag.",
    },
  ],
};

const productsInformation = [
  {
    title: "Hvorfor filtrere mit vand?",
    description:
      "Dit badevand indeholder kalk, pesticider, tungmetaller, PFAS og andre skadelige kemikalier. Det udtørrer og ælder din hud, og reducerer dit hårs styrke, glans og farve.",
    img: "/images/products/information/1.jpg",
    mat: [
      {
        name: "Kalk",
        img: "/images/products/information/1.png",
      },
      {
        name: "Tungmetaller",
        img: "/images/products/information/2.png",
      },
      {
        name: "Kemikalier",
        img: "/images/products/information/3.png",
      },
    ],
  },
  {
    title: "Hårdt vand fjerner naturlige olier fra dit hår og din hud",
    description:
      "Ufiltreret brusevand kan fjerne de naturlige olier i dit hår og din hud, hvilket kan forårsage skader, tørhed og irritation.",
    img: "/images/products/information/2.jpg",
    mat: [
      {
        name: "Tørt hår",
        img: "/images/products/information/4.png",
      },
      {
        name: "Tør hud",
        img: "/images/products/information/5.png",
      },
    ],
  },
  {
    title: "Filteret reducerer skadelige stoffer i dit vand",
    description:
      "Filteret af aktivt kul og FOF (organisk salt) reducerer skadelige stoffer i dit vand, såsom kalk, tungmetaller og pesticider. Læs mere om videnskaben bag MILO Filteret her.",
    img: "/images/products/information/3.jpg",
    mat: [
      {
        name: "Aktivt kul",
        img: "/images/products/information/6.png",
      },
      {
        name: "FOF-salt",
        img: "/images/products/information/7.png",
      },
    ],
  },
];

const productHelps = [
  {
    img: "/images/products/helps/1.png",
    title: "Tørt hår",
  },
  {
    img: "/images/products/helps/2.png",
    title: "Uren hud",
  },
  {
    img: "/images/products/helps/3.png",
    title: "Hårtab",
  },
  {
    img: "/images/products/helps/4.png",
    title: "Rynker",
  },
];

const prodcutSpecifications = [
  {
    title: "Dimensions",
    include: "26x8 cm ",
  },
  {
    title: "Weight",
    include: "400 g ",
  },
  {
    title: "Filter durability ",
    include: "2-3 months ",
  },
  {
    title: "Filter system",
    include: "Activated carbon and FOF salt",
  },
  {
    title: "Satisfaction Guarantee ",
    include: "30 days ",
  },
  {
    title: "Material",
    include: "ABS + aluminium ",
  },
  {
    title: "Installation",
    include: "No need for tools.",
  },
  {
    title: "Found",
    include: "½ inch (standard in DK)",
  },
  {
    title: "Compatibility",
    include: "Fits in all Danish bathrooms ",
  },
  {
    title: "Package Contents",
    include: "1 × MILO and 1 × Filter ",
  },
];

const miloFilter: miloFilter = {
  description:
    "Oplev smukkere hud og hår med MILO. MILO reducerer skadelige kemikalier som pesticider og tungmetaller fra dit vand, hvilket beskytter din hud mod udtørring og irritation, og bevarer din hårs naturlige styrke og glans.",
  purchaseOptions: [
    {
      option: "Filterabonnement",
      price: 249,
      offer: 199,
      img: "",
      saveMoney: true,
      benefits: [
        "You receive a new filter every 90 days for DKK 199 ",
        "You save 20% on the filter & get free shipping ",
        "Never wonder when it's time to switch ",
      ],
      products: [
        {
          id: 3,
          img: "/images/products/1.jpg",
          title: "MILO Filter",
          includes: "Abonnementet opkræves automatisk hver 3. måned.",
          price: 249,
          offer: 199,
          saveMoney: true,
        },
      ],
    },
    {
      option: "Engangskøb",
      price: 249,
      offer: 0,
      img: "",
      saveMoney: false,
      benefits: [],
      products: [
        {
          id: 4,
          img: "/images/products/1.jpg",
          title: "MILO Filter",
          includes: "",
          price: 249,
          offer: 199,
        },
      ],
    },
  ],
  faqs: [
    {
      question: "MILO 101",
      answer:
        "Oplev smukkere hud og hår med MILO. MILO fjerner skadelige kemikalier som pesticider og tungmetaller fra dit vand, hvilket beskytter din hud mod udtørring og irritation, og bevarer din hårs naturlige styrke og glans.",
    },
    {
      question: "Hår & Hud",
      answer:
        "Kalk, tungmetaller, og pesticider er nogle af de største syndere når det kommer til udtørring & ødelæggelse af hud og hår.\n Men desværre, er det danske vand fyldt med det - og derfor oplever mange danskere tørt, knækket og kruset hår. Det hjælper MILO med.",
    },
    {
      question: "Abonnement",
      answer:
        "Slip for besværet med at skulle holde øje med hvornår det er tid til at skifte filteret. Med vores abonnement-løsning, så får du et nyt filter hver gang det er tid til at udskifte (hver 3. mdr).",
    },
  ],
};

export {
  navItems,
  footerItems1,
  footerItems2,
  heroProducts,
  InfoBoxHome,
  accordionHome,
  slidesDataHome,
  miloBrusehoved,
  productsInformation,
  productHelps,
  prodcutSpecifications,
  miloFilter,
  products,
  filterReduces,
};
