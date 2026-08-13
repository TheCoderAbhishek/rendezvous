import type { Dictionary } from "../types";

const mr: Dictionary = {
  common: {
    brand: "रेंडेव्यू",
    languageLabel: "भाषा",
    themeToLight: "लाइट मोडमध्ये बदला",
    themeToDark: "डार्क मोडमध्ये बदला",
  },
  question: {
    eyebrow: "एक शांत प्रश्न",
    title: "तुम्हाला भेटायला आवडेल का?",
    subtitle:
      "कोणतेही दडपण नाही, औपचारिक गप्पा नाही — फक्त एक साधी 'हो', जेव्हा तुम्ही तयार असाल.",
    yes: "हो",
    no: "नाही",
    noAria: "नाही (हे बटण भटकायला आवडते)",
    dodgeMessages: [
      "हे पुन्हा निसटलं…",
      "इतकं जवळ, तरीही इतकं दूर.",
      "हे बटण कॅमेऱ्यापासून लाजतं.",
      "दुसरं बटण वापरून पाहा — ते जास्त प्रेमळ आहे.",
      "याला निवडलं जायचंच नाहीये.",
      "जरा नखरे करतोय, नाही का?",
    ],
    acceptedTitle: "अगदी छान.",
    acceptedSubtitle: "आता योग्य वेळ आणि जागा शोधूया…",
    hint: "हो चं बटण तर तिथेच आहे",
  },
  details: {
    stepLabel: "पायरी दोन",
    title: "चला वातावरण तयार करूया",
    dateLabel: "तारीख",
    timeLabel: "वेळ",
    locationLabel: "ठिकाण",
    locationPlaceholder: "एक शांत कॅफे, नदीकाठची फेरी…",
    messageLabel: "एक छोटी चिठ्ठी (ऐच्छिक)",
    messagePlaceholder: "काही जोडायचं असेल तर…",
    preferencesLegend: "काय आवडेल?",
    preferenceOptions: {
      coffee: "कॉफी",
      walk: "फेरफटका",
      dinner: "डिनर",
      outdoors: "मोकळ्या हवेत काहीतरी",
      surprise: "तूच ठरव",
    },
    vibeLegend: "आवडता मूड",
    vibeOptions: {
      casual: "साधा",
      romantic: "रोमँटिक",
      adventurous: "रोमांचक",
    },
    errors: {
      date: "एक तारीख निवडा.",
      dateFuture: "आज किंवा पुढील तारीख निवडा.",
      time: "एक वेळ निवडा.",
      location: "त्यांना कुठे यायचं ते सांगा.",
      locationShort: "कृपया आणखी थोडी माहिती द्या.",
      vibe: "एक मूड निवडा.",
      preferences: "किमान एक निवडा.",
    },
    submitIdle: "आमंत्रण पाठवा",
    submitLoading: "तुमचं आमंत्रण पाठवत आहोत…",
    genericError: "आमंत्रण पाठवताना काहीतरी चुकलं. कृपया पुन्हा प्रयत्न करा.",
  },
  confirmation: {
    title: "हे मार्गावर आहे",
    subtitle: "तुमचं आमंत्रण पाठवलं गेलं आहे. तुम्ही हे सांगितलं:",
    dateLabel: "तारीख",
    timeLabel: "वेळ",
    locationLabel: "ठिकाण",
    vibeLabel: "मूड",
    preferencesLabel: "आवड",
    resendLink: "आणखी एक आमंत्रण पाठवा",
  },
};

export default mr;
