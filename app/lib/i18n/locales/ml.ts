import type { Dictionary } from "../types";

const ml: Dictionary = {
  common: {
    brand: "റെൻഡെവൂ",
    languageLabel: "ഭാഷ",
    themeToLight: "ലൈറ്റ് മോഡിലേക്ക് മാറ്റുക",
    themeToDark: "ഡാർക്ക് മോഡിലേക്ക് മാറ്റുക",
  },
  question: {
    eyebrow: "ഒരു ശാന്തമായ ചോദ്യം",
    title: "നിങ്ങൾ കാണാൻ ആഗ്രഹിക്കുന്നുവോ?",
    subtitle:
      "സമ്മർദ്ദമില്ല, സാധാരണ വർത്തമാനം ആവശ്യമില്ല — നിങ്ങൾ തയ്യാറാകുമ്പോൾ ഒരു ലളിതമായ 'അതെ' മാത്രം മതി.",
    yes: "അതെ",
    no: "അല്ല",
    noAria: "അല്ല (ഇത് അലഞ്ഞുതിരിയാൻ ഇഷ്ടപ്പെടുന്നു)",
    dodgeMessages: [
      "ഇത് വീണ്ടും വഴുതി മാറി…",
      "ഇത്ര അടുത്ത്, എന്നിട്ടും ഇത്ര അകലെ.",
      "ഇതിന് ക്യാമറയെ പേടിയാണ്.",
      "മറ്റേ ബട്ടൺ പരീക്ഷിക്കുക — അത് കൂടുതൽ ദയയുള്ളതാണ്.",
      "ഇത് തിരഞ്ഞെടുക്കപ്പെടാൻ ആഗ്രഹിക്കുന്നേയില്ല.",
      "ഒരു കൊച്ചു കളി കളിക്കുകയാണോ?",
    ],
    acceptedTitle: "വളരെ നന്ന്.",
    acceptedSubtitle: "ശരിയായ സമയവും സ്ഥലവും കണ്ടെത്താം…",
    hint: "അതെ എന്ന ബട്ടൺ അവിടെയുണ്ട്",
  },
  details: {
    stepLabel: "രണ്ടാം ഘട്ടം",
    title: "രംഗം ഒരുക്കാം",
    dateLabel: "തീയതി",
    timeLabel: "സമയം",
    locationLabel: "സ്ഥലം",
    locationPlaceholder: "ശാന്തമായ ഒരു കഫേ, നദീതീരത്തെ നടത്തം…",
    messageLabel: "ഒരു ചെറിയ കുറിപ്പ് (ഓപ്ഷണൽ)",
    messagePlaceholder: "കൂട്ടിച്ചേർക്കാൻ എന്തെങ്കിലും ഉണ്ടെങ്കിൽ…",
    preferencesLegend: "എന്താണ് ഇഷ്ടം?",
    preferenceOptions: {
      coffee: "കാപ്പി",
      walk: "ഒരു നടത്തം",
      dinner: "അത്താഴം",
      outdoors: "പുറത്ത് എന്തെങ്കിലും",
      surprise: "നിങ്ങൾ തീരുമാനിക്കൂ",
    },
    vibeLegend: "ഇഷ്ടപ്പെട്ട മൂഡ്",
    vibeOptions: {
      casual: "ലളിതം",
      romantic: "പ്രണയാർദ്രം",
      adventurous: "സാഹസികം",
    },
    errors: {
      date: "ഒരു തീയതി തിരഞ്ഞെടുക്കുക.",
      dateFuture: "ഇന്നോ വരാനിരിക്കുന്ന തീയതിയോ തിരഞ്ഞെടുക്കുക.",
      time: "ഒരു സമയം തിരഞ്ഞെടുക്കുക.",
      location: "എവിടെ വരണമെന്ന് അവരോട് പറയുക.",
      locationShort: "ദയവായി കൂടുതൽ വിവരം നൽകുക.",
      vibe: "ഒരു മൂഡ് തിരഞ്ഞെടുക്കുക.",
      preferences: "കുറഞ്ഞത് ഒന്ന് തിരഞ്ഞെടുക്കുക.",
    },
    submitIdle: "ക്ഷണം അയയ്ക്കുക",
    submitLoading: "നിങ്ങളുടെ ക്ഷണം അയയ്ക്കുന്നു…",
    genericError:
      "ക്ഷണം അയയ്ക്കുന്നതിൽ എന്തോ പിഴവ് സംഭവിച്ചു. വീണ്ടും ശ്രമിക്കുക.",
  },
  confirmation: {
    title: "അത് വഴിയിലാണ്",
    subtitle: "നിങ്ങളുടെ ക്ഷണം അയച്ചു കഴിഞ്ഞു. നിങ്ങൾ പങ്കുവെച്ചത് ഇതാണ്:",
    dateLabel: "തീയതി",
    timeLabel: "സമയം",
    locationLabel: "സ്ഥലം",
    vibeLabel: "മൂഡ്",
    preferencesLabel: "ഇഷ്ടങ്ങൾ",
    resendLink: "മറ്റൊരു ക്ഷണം അയയ്ക്കുക",
  },
};

export default ml;
