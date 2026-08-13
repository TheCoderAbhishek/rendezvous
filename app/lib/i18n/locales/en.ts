import type { Dictionary } from "../types";

const en: Dictionary = {
  common: {
    brand: "Rendezvous",
    languageLabel: "Language",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
  },
  question: {
    eyebrow: "A quiet question",
    title: "Would you like to meet?",
    subtitle:
      "No pressure, no small talk required — just a simple yes, whenever you're ready.",
    yes: "Yes",
    no: "No",
    noAria: "No (this one likes to wander)",
    dodgeMessages: [
      "It slipped away again…",
      "So close, and yet so far.",
      "That one's camera-shy.",
      "Try the other button — it's kinder.",
      "It really doesn't want to be picked.",
      "Playing hard to get, are we?",
    ],
    acceptedTitle: "Wonderful.",
    acceptedSubtitle: "Let's find the perfect time and place…",
    hint: "the yes button is right there",
  },
  details: {
    stepLabel: "Step two",
    title: "Let's set the scene",
    dateLabel: "Date",
    timeLabel: "Time",
    locationLabel: "Location",
    locationPlaceholder: "A quiet café, the riverside walk…",
    messageLabel: "A little note (optional)",
    messagePlaceholder: "Anything you'd like to add…",
    preferencesLegend: "What sounds good?",
    preferenceOptions: {
      coffee: "Coffee",
      walk: "A walk",
      dinner: "Dinner",
      outdoors: "Something outdoors",
      surprise: "Surprise me",
    },
    vibeLegend: "Preferred vibe",
    vibeOptions: {
      casual: "Casual",
      romantic: "Romantic",
      adventurous: "Adventurous",
    },
    errors: {
      date: "Pick a date.",
      dateFuture: "Choose today or a future date.",
      time: "Pick a time.",
      location: "Let them know where to go.",
      locationShort: "A little more detail, please.",
      vibe: "Choose a vibe.",
      preferences: "Pick at least one.",
    },
    submitIdle: "Send the invite",
    submitLoading: "Sending your invite…",
    genericError:
      "Something went wrong sending your invite. Please try again.",
  },
  confirmation: {
    title: "It's on its way",
    subtitle: "Your invitation has been sent. Here's what you shared:",
    dateLabel: "Date",
    timeLabel: "Time",
    locationLabel: "Location",
    vibeLabel: "Vibe",
    preferencesLabel: "Preferences",
    resendLink: "Send another invitation",
  },
};

export default en;
