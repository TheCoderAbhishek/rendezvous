export const PREFERENCE_IDS = [
  "coffee",
  "walk",
  "dinner",
  "outdoors",
  "surprise",
] as const;

export type PreferenceId = (typeof PREFERENCE_IDS)[number];

export const VIBE_IDS = ["casual", "romantic", "adventurous"] as const;

export type VibeId = (typeof VIBE_IDS)[number];

/**
 * Canonical English labels used for the email that gets sent, so the
 * recipient's inbox always reads in English regardless of which language
 * the sender used on the site.
 */
export const PREFERENCE_LABELS_EN: Record<PreferenceId, string> = {
  coffee: "Coffee",
  walk: "A walk",
  dinner: "Dinner",
  outdoors: "Something outdoors",
  surprise: "Surprise me",
};

export const VIBE_LABELS_EN: Record<VibeId, string> = {
  casual: "Casual",
  romantic: "Romantic",
  adventurous: "Adventurous",
};
