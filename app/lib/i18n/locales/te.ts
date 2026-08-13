import type { Dictionary } from "../types";

const te: Dictionary = {
  common: {
    brand: "రెండేవూ",
    languageLabel: "భాష",
    themeToLight: "లైట్ మోడ్‌కి మారండి",
    themeToDark: "డార్క్ మోడ్‌కి మారండి",
  },
  question: {
    eyebrow: "ఒక నిశ్శబ్ద ప్రశ్న",
    title: "మీరు కలవాలనుకుంటున్నారా?",
    subtitle:
      "ఎలాంటి ఒత్తిడి లేదు, మామూలు మాటలు అవసరం లేదు — మీరు సిద్ధంగా ఉన్నప్పుడు కేవలం ఒక సాధారణ 'అవును' చాలు.",
    yes: "అవును",
    no: "కాదు",
    noAria: "కాదు (ఇది తిరగడానికి ఇష్టపడుతుంది)",
    dodgeMessages: [
      "ఇది మళ్ళీ జారిపోయింది…",
      "ఇంత దగ్గరగా, అయినా ఇంత దూరంగా.",
      "ఇది కెమెరాకి సిగ్గుపడుతుంది.",
      "మరో బటన్ ప్రయత్నించండి — అది మరింత దయగలది.",
      "ఇది ఎంచుకోబడాలని కోరుకోవడం లేదు.",
      "కొంచెం సతాయిస్తున్నారా?",
    ],
    acceptedTitle: "చాలా బాగుంది.",
    acceptedSubtitle: "సరైన సమయం మరియు స్థలం కనుగొందాం…",
    hint: "అవును బటన్ అక్కడే ఉంది",
  },
  details: {
    stepLabel: "రెండవ దశ",
    title: "దృశ్యాన్ని సిద్ధం చేద్దాం",
    dateLabel: "తేదీ",
    timeLabel: "సమయం",
    locationLabel: "స్థలం",
    locationPlaceholder: "ఒక ప్రశాంతమైన కేఫ్, నదీ తీర నడక…",
    messageLabel: "ఒక చిన్న నోట్ (ఐచ్ఛికం)",
    messagePlaceholder: "మీరు జోడించాలనుకున్నది ఏదైనా…",
    preferencesLegend: "ఏమి బాగుంటుంది?",
    preferenceOptions: {
      coffee: "కాఫీ",
      walk: "ఒక నడక",
      dinner: "డిన్నర్",
      outdoors: "బయట ఏదైనా",
      surprise: "మీరే నిర్ణయించండి",
    },
    vibeLegend: "అభీష్ట వాతావరణం",
    vibeOptions: {
      casual: "సాధారణ",
      romantic: "రొమాంటిక్",
      adventurous: "సాహసోపేతం",
    },
    errors: {
      date: "ఒక తేదీని ఎంచుకోండి.",
      dateFuture: "ఈరోజు లేదా భవిష్యత్ తేదీని ఎంచుకోండి.",
      time: "ఒక సమయాన్ని ఎంచుకోండి.",
      location: "ఎక్కడికి రావాలో వారికి తెలియజేయండి.",
      locationShort: "దయచేసి మరింత వివరాలు ఇవ్వండి.",
      vibe: "ఒక వాతావరణాన్ని ఎంచుకోండి.",
      preferences: "కనీసం ఒకటి ఎంచుకోండి.",
    },
    submitIdle: "ఆహ్వానం పంపండి",
    submitLoading: "మీ ఆహ్వానం పంపబడుతోంది…",
    genericError:
      "మీ ఆహ్వానం పంపడంలో ఏదో తప్పు జరిగింది. దయచేసి మళ్ళీ ప్రయత్నించండి.",
  },
  confirmation: {
    title: "ఇది మార్గంలో ఉంది",
    subtitle: "మీ ఆహ్వానం పంపబడింది. మీరు పంచుకున్నది ఇదే:",
    dateLabel: "తేదీ",
    timeLabel: "సమయం",
    locationLabel: "స్థలం",
    vibeLabel: "వాతావరణం",
    preferencesLabel: "అభీష్టాలు",
    resendLink: "మరో ఆహ్వానం పంపండి",
  },
};

export default te;
