import type { PreferenceId, VibeId } from "../meeting-options";

export interface Dictionary {
  common: {
    brand: string;
    languageLabel: string;
    themeToLight: string;
    themeToDark: string;
  };
  question: {
    eyebrow: string;
    title: string;
    subtitle: string;
    yes: string;
    no: string;
    noAria: string;
    dodgeMessages: string[];
    acceptedTitle: string;
    acceptedSubtitle: string;
    hint: string;
  };
  details: {
    stepLabel: string;
    title: string;
    dateLabel: string;
    timeLabel: string;
    locationLabel: string;
    locationPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    preferencesLegend: string;
    preferenceOptions: Record<PreferenceId, string>;
    vibeLegend: string;
    vibeOptions: Record<VibeId, string>;
    errors: {
      date: string;
      dateFuture: string;
      time: string;
      location: string;
      locationShort: string;
      vibe: string;
      preferences: string;
    };
    submitIdle: string;
    submitLoading: string;
    genericError: string;
  };
  confirmation: {
    title: string;
    subtitle: string;
    dateLabel: string;
    timeLabel: string;
    locationLabel: string;
    vibeLabel: string;
    preferencesLabel: string;
    resendLink: string;
  };
}
