"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaCalendarDay,
  FaClock,
  FaLocationDot,
  FaFeatherPointed,
  FaPaperPlane,
} from "react-icons/fa6";
import { useJourney } from "../lib/journey-context";
import { sendMeetingRequest } from "../lib/emailjs";

const PREFERENCE_OPTIONS = [
  "Coffee",
  "A walk",
  "Dinner",
  "Something outdoors",
  "Surprise me",
];

const VIBE_OPTIONS = [
  { value: "casual", label: "Casual" },
  { value: "romantic", label: "Romantic" },
  { value: "adventurous", label: "Adventurous" },
];

function todayISO() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 10);
}

export default function DetailsForm() {
  const router = useRouter();
  const { hasAccepted, markSubmitted } = useJourney();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [vibe, setVibe] = useState("");
  const [preferences, setPreferences] = useState<string[]>([]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const minDate = useMemo(() => todayISO(), []);

  useEffect(() => {
    if (!hasAccepted) {
      router.replace("/");
    }
  }, [hasAccepted, router]);

  function togglePreference(option: string) {
    setPreferences((prev) =>
      prev.includes(option)
        ? prev.filter((p) => p !== option)
        : [...prev, option]
    );
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!date) next.date = "Pick a date.";
    else if (date < minDate) next.date = "Choose today or a future date.";
    if (!time) next.time = "Pick a time.";
    if (!location.trim()) next.location = "Let them know where to go.";
    else if (location.trim().length < 3) next.location = "A little more detail, please.";
    if (!vibe) next.vibe = "Choose a vibe.";
    if (preferences.length === 0) next.preferences = "Pick at least one.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    const details = { date, time, location: location.trim(), message: message.trim(), vibe, preferences };

    setStatus("loading");
    try {
      await sendMeetingRequest(details);
      markSubmitted(details);
      router.push("/confirmation");
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error
          ? err.message
          : "Something went wrong sending your invite. Please try again."
      );
    }
  }

  return (
    <main className="flex flex-1 flex-col items-center px-6 py-14 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass w-full max-w-lg rounded-3xl px-6 py-8 sm:px-10 sm:py-10"
      >
        <p className="mb-2 text-center text-sm uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>
          Step two
        </p>
        <h1 className="mb-8 text-center font-display text-3xl italic text-gradient sm:text-4xl">
          Let&apos;s set the scene
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Date" htmlFor="date" icon={<FaCalendarDay />} error={errors.date}>
              <input
                id="date"
                type="date"
                className="field w-full rounded-xl px-4 py-3 text-sm"
                value={date}
                min={minDate}
                onChange={(e) => setDate(e.target.value)}
              />
            </Field>

            <Field label="Time" htmlFor="time" icon={<FaClock />} error={errors.time}>
              <input
                id="time"
                type="time"
                className="field w-full rounded-xl px-4 py-3 text-sm"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Field>
          </div>

          <Field label="Location" htmlFor="location" icon={<FaLocationDot />} error={errors.location}>
            <input
              id="location"
              type="text"
              placeholder="A quiet café, the riverside walk…"
              className="field w-full rounded-xl px-4 py-3 text-sm"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Field>

          <Field label="A little note (optional)" htmlFor="message" icon={<FaFeatherPointed />}>
            <textarea
              id="message"
              rows={3}
              placeholder="Anything you'd like to add…"
              className="field w-full resize-none rounded-xl px-4 py-3 text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Field>

          <fieldset>
            <legend className="mb-2 text-sm font-medium" style={{ color: "var(--ink-soft)" }}>
              What sounds good?
            </legend>
            <div className="flex flex-wrap gap-2">
              {PREFERENCE_OPTIONS.map((option) => {
                const active = preferences.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={active}
                    onClick={() => togglePreference(option)}
                    className="rounded-full border px-4 py-2 text-sm transition-colors cursor-pointer"
                    style={{
                      borderColor: active ? "var(--rose)" : "color-mix(in srgb, var(--ink) 15%, transparent)",
                      background: active ? "var(--rose)" : "transparent",
                      color: active ? "#fff8f6" : "var(--ink-soft)",
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {errors.preferences && <ErrorText text={errors.preferences} />}
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-sm font-medium" style={{ color: "var(--ink-soft)" }}>
              Preferred vibe
            </legend>
            <div className="flex flex-wrap gap-2">
              {VIBE_OPTIONS.map((option) => {
                const active = vibe === option.value;
                return (
                  <label
                    key={option.value}
                    className="cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors"
                    style={{
                      borderColor: active ? "var(--gold)" : "color-mix(in srgb, var(--ink) 15%, transparent)",
                      background: active ? "var(--gold-soft)" : "transparent",
                      color: active ? "var(--rose-deep)" : "var(--ink-soft)",
                    }}
                  >
                    <input
                      type="radio"
                      name="vibe"
                      value={option.value}
                      checked={active}
                      onChange={() => setVibe(option.value)}
                      className="sr-only"
                    />
                    {option.label}
                  </label>
                );
              })}
            </div>
            {errors.vibe && <ErrorText text={errors.vibe} />}
          </fieldset>

          {serverError && (
            <p className="rounded-xl px-4 py-3 text-sm" style={{ background: "var(--blush)", color: "var(--rose-deep)" }}>
              {serverError}
            </p>
          )}

          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
            whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
            className="btn-primary mt-2 flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold tracking-wide cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? (
              "Sending your invite…"
            ) : (
              <>
                <FaPaperPlane aria-hidden="true" /> Send the invite
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}

function Field({
  label,
  htmlFor,
  icon,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-center gap-2 text-sm font-medium"
        style={{ color: "var(--ink-soft)" }}
      >
        <span style={{ color: "var(--rose)" }}>{icon}</span>
        {label}
      </label>
      {children}
      {error && <ErrorText text={error} />}
    </div>
  );
}

function ErrorText({ text }: { text: string }) {
  return (
    <p className="mt-1.5 text-xs" style={{ color: "var(--rose-deep)" }}>
      {text}
    </p>
  );
}
