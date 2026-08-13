import type { Dictionary } from "../types";

const de: Dictionary = {
  common: {
    brand: "Rendezvous",
    languageLabel: "Sprache",
    themeToLight: "Zum hellen Modus wechseln",
    themeToDark: "Zum dunklen Modus wechseln",
  },
  question: {
    eyebrow: "Eine stille Frage",
    title: "Möchtest du dich treffen?",
    subtitle:
      "Kein Druck, kein Smalltalk nötig — nur ein einfaches Ja, wann immer du bereit bist.",
    yes: "Ja",
    no: "Nein",
    noAria: "Nein (dieser hier wandert gern umher)",
    dodgeMessages: [
      "Ist schon wieder entwischt…",
      "So nah und doch so fern.",
      "Der hier ist kameraschüchtern.",
      "Versuch's mit dem anderen Knopf — der ist netter.",
      "Der will wirklich nicht ausgewählt werden.",
      "Machst du dich rar, oder?",
    ],
    acceptedTitle: "Wunderbar.",
    acceptedSubtitle: "Lass uns die perfekte Zeit und den perfekten Ort finden…",
    hint: "der Ja-Knopf ist genau dort",
  },
  details: {
    stepLabel: "Schritt zwei",
    title: "Lass uns die Szene gestalten",
    dateLabel: "Datum",
    timeLabel: "Uhrzeit",
    locationLabel: "Ort",
    locationPlaceholder: "Ein ruhiges Café, ein Spaziergang am Fluss…",
    messageLabel: "Eine kleine Notiz (optional)",
    messagePlaceholder: "Möchtest du noch etwas hinzufügen…",
    preferencesLegend: "Worauf hast du Lust?",
    preferenceOptions: {
      coffee: "Kaffee",
      walk: "Ein Spaziergang",
      dinner: "Abendessen",
      outdoors: "Etwas im Freien",
      surprise: "Überrasch mich",
    },
    vibeLegend: "Bevorzugte Stimmung",
    vibeOptions: {
      casual: "Locker",
      romantic: "Romantisch",
      adventurous: "Abenteuerlich",
    },
    errors: {
      date: "Wähle ein Datum.",
      dateFuture: "Wähle heute oder ein zukünftiges Datum.",
      time: "Wähle eine Uhrzeit.",
      location: "Sag ihnen, wohin sie kommen sollen.",
      locationShort: "Bitte etwas genauer.",
      vibe: "Wähle eine Stimmung.",
      preferences: "Wähle mindestens eine aus.",
    },
    submitIdle: "Einladung senden",
    submitLoading: "Deine Einladung wird gesendet…",
    genericError:
      "Beim Senden deiner Einladung ist etwas schiefgelaufen. Bitte versuche es erneut.",
  },
  confirmation: {
    title: "Sie ist auf dem Weg",
    subtitle: "Deine Einladung wurde gesendet. Das hast du geteilt:",
    dateLabel: "Datum",
    timeLabel: "Uhrzeit",
    locationLabel: "Ort",
    vibeLabel: "Stimmung",
    preferencesLabel: "Vorlieben",
    resendLink: "Eine weitere Einladung senden",
  },
};

export default de;
