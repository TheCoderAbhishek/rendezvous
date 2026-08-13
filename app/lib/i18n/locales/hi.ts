import type { Dictionary } from "../types";

const hi: Dictionary = {
  common: {
    brand: "रेंडेव्यू",
    languageLabel: "भाषा",
    themeToLight: "लाइट मोड में बदलें",
    themeToDark: "डार्क मोड में बदलें",
  },
  question: {
    eyebrow: "एक शांत सवाल",
    title: "क्या आप मिलना चाहेंगे?",
    subtitle:
      "कोई दबाव नहीं, कोई औपचारिक बातचीत नहीं — बस एक साधारी 'हाँ', जब भी आप तैयार हों।",
    yes: "हाँ",
    no: "नहीं",
    noAria: "नहीं (यह बटन भटकना पसंद करता है)",
    dodgeMessages: [
      "यह फिर फिसल गया…",
      "इतना पास, फिर भी इतना दूर।",
      "यह बटन कैमरे से शर्माता है।",
      "दूसरा बटन आज़माइए — वह ज़्यादा दयालु है।",
      "यह चुना जाना ही नहीं चाहता।",
      "थोड़ा नखरे दिखा रहे हैं, है ना?",
    ],
    acceptedTitle: "बहुत खूब।",
    acceptedSubtitle: "चलिए सही समय और जगह ढूंढते हैं…",
    hint: "हाँ वाला बटन तो वहीं है",
  },
  details: {
    stepLabel: "दूसरा चरण",
    title: "चलिए माहौल तैयार करते हैं",
    dateLabel: "तारीख़",
    timeLabel: "समय",
    locationLabel: "स्थान",
    locationPlaceholder: "कोई शांत कैफ़े, नदी किनारे की सैर…",
    messageLabel: "एक छोटा सा नोट (वैकल्पिक)",
    messagePlaceholder: "कुछ जोड़ना चाहें तो…",
    preferencesLegend: "क्या पसंद आएगा?",
    preferenceOptions: {
      coffee: "कॉफ़ी",
      walk: "एक सैर",
      dinner: "डिनर",
      outdoors: "कुछ खुली हवा में",
      surprise: "आप ही तय करें",
    },
    vibeLegend: "पसंदीदा अंदाज़",
    vibeOptions: {
      casual: "सहज",
      romantic: "रोमांटिक",
      adventurous: "रोमांचक",
    },
    errors: {
      date: "एक तारीख़ चुनें।",
      dateFuture: "आज या आने वाली कोई तारीख़ चुनें।",
      time: "एक समय चुनें।",
      location: "उन्हें बताएं कि कहाँ आना है।",
      locationShort: "कृपया थोड़ा और विवरण दें।",
      vibe: "एक अंदाज़ चुनें।",
      preferences: "कम से कम एक चुनें।",
    },
    submitIdle: "निमंत्रण भेजें",
    submitLoading: "आपका निमंत्रण भेजा जा रहा है…",
    genericError: "निमंत्रण भेजने में कुछ गड़बड़ हुई। कृपया फिर से कोशिश करें।",
  },
  confirmation: {
    title: "यह भेजा जा रहा है",
    subtitle: "आपका निमंत्रण भेज दिया गया है। आपने यह साझा किया:",
    dateLabel: "तारीख़",
    timeLabel: "समय",
    locationLabel: "स्थान",
    vibeLabel: "अंदाज़",
    preferencesLabel: "पसंद",
    resendLink: "एक और निमंत्रण भेजें",
  },
};

export default hi;
