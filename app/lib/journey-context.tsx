"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { PreferenceId, VibeId } from "./meeting-options";

export interface MeetingDetails {
  date: string;
  time: string;
  location: string;
  message: string;
  vibe: VibeId;
  preferences: PreferenceId[];
}

interface JourneyState {
  hasAccepted: boolean;
  markAccepted: () => void;
  details: MeetingDetails | null;
  markSubmitted: (details: MeetingDetails) => void;
  reset: () => void;
}

const JourneyContext = createContext<JourneyState | null>(null);

export function JourneyProvider({ children }: { children: React.ReactNode }) {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [details, setDetails] = useState<MeetingDetails | null>(null);

  const markAccepted = useCallback(() => setHasAccepted(true), []);
  const markSubmitted = useCallback((d: MeetingDetails) => setDetails(d), []);
  const reset = useCallback(() => {
    setHasAccepted(false);
    setDetails(null);
  }, []);

  const value = useMemo(
    () => ({ hasAccepted, markAccepted, details, markSubmitted, reset }),
    [hasAccepted, markAccepted, details, markSubmitted, reset]
  );

  return <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>;
}

export function useJourney() {
  const ctx = useContext(JourneyContext);
  if (!ctx) {
    throw new Error("useJourney must be used within a JourneyProvider");
  }
  return ctx;
}
