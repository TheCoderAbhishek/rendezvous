"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaHeart, FaCalendarCheck } from "react-icons/fa6";
import Link from "next/link";
import { useJourney } from "../lib/journey-context";
import { useLanguage } from "../lib/i18n/language-context";

const CONFETTI = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.3) % 100}%`,
  delay: (i % 7) * 0.12,
  size: 8 + (i % 4) * 4,
  drift: i % 2 === 0 ? 40 : -40,
}));

function formatDate(iso: string, localeTag: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString(localeTag, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function formatTime(value: string, localeTag: string) {
  const [h, m] = value.split(":").map(Number);
  const date = new Date();
  date.setHours(h, m);
  return date.toLocaleTimeString(localeTag, { hour: "numeric", minute: "2-digit" });
}

export default function ConfirmationScreen() {
  const router = useRouter();
  const { details, reset } = useJourney();
  const { t, localeTag } = useLanguage();

  useEffect(() => {
    if (!details) {
      router.replace("/");
    }
  }, [details, router]);

  if (!details) return null;

  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      {CONFETTI.map((c, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute top-0"
          style={{ left: c.left, color: "var(--rose)" }}
          initial={{ y: -20, opacity: 0, x: 0 }}
          animate={{ y: "70vh", opacity: [0, 1, 1, 0], x: c.drift }}
          transition={{ duration: 2.6, delay: c.delay, ease: "easeIn" }}
        >
          <FaHeart size={c.size} aria-hidden="true" />
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 16 }}
        className="glass w-full max-w-lg rounded-3xl px-8 py-12"
      >
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "var(--blush)" }}
        >
          <FaCalendarCheck className="text-2xl" style={{ color: "var(--rose-deep)" }} />
        </motion.div>

        <h1 className="mb-3 font-display text-3xl italic text-gradient sm:text-4xl">
          {t.confirmation.title}
        </h1>
        <p className="mb-8 text-sm" style={{ color: "var(--ink-soft)" }}>
          {t.confirmation.subtitle}
        </p>

        <dl className="mb-10 grid grid-cols-1 gap-3 text-left text-sm sm:grid-cols-2">
          <Detail label={t.confirmation.dateLabel} value={formatDate(details.date, localeTag)} />
          <Detail label={t.confirmation.timeLabel} value={formatTime(details.time, localeTag)} />
          <Detail label={t.confirmation.locationLabel} value={details.location} className="sm:col-span-2" />
          <Detail label={t.confirmation.vibeLabel} value={t.details.vibeOptions[details.vibe]} />
          <Detail
            label={t.confirmation.preferencesLabel}
            value={details.preferences.map((id) => t.details.preferenceOptions[id]).join(", ")}
          />
        </dl>

        <Link
          href="/"
          onClick={reset}
          className="btn-ghost inline-flex rounded-full px-6 py-3 text-sm font-medium"
        >
          {t.confirmation.resendLink}
        </Link>
      </motion.div>
    </main>
  );
}

function Detail({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`rounded-xl px-4 py-3 ${className}`} style={{ background: "color-mix(in srgb, var(--surface) 60%, transparent)" }}>
      <dt className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
        {label}
      </dt>
      <dd className="mt-1" style={{ color: "var(--ink)" }}>
        {value}
      </dd>
    </div>
  );
}
