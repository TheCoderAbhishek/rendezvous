"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaHeartCircleCheck } from "react-icons/fa6";
import Logo from "./Logo";
import { useJourney } from "../lib/journey-context";
import { useLanguage } from "../lib/i18n/language-context";

const BURST_HEARTS = Array.from({ length: 10 }, (_, i) => {
  const angle = (i / 10) * Math.PI * 2;
  return {
    dx: Math.cos(angle) * (60 + (i % 3) * 20),
    dy: Math.sin(angle) * (60 + (i % 3) * 20),
    size: 10 + (i % 3) * 4,
    delay: i * 0.02,
  };
});

export default function QuestionScreen() {
  const router = useRouter();
  const { markAccepted } = useJourney();
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [bursting, setBursting] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const dodge = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const bounds = container.getBoundingClientRect();
    const maxX = Math.max(bounds.width - 140, 40);
    const maxY = Math.max(bounds.height - 56, 24);
    const nextX = Math.random() * maxX - maxX / 2;
    const nextY = Math.random() * maxY - maxY / 2;
    setNoPos({ x: nextX, y: nextY });
    setAttempts((a) => a + 1);
    const pool = t.question.dodgeMessages;
    setMessage(pool[Math.floor(Math.random() * pool.length)]);
  }, [t]);

  const handleYes = useCallback(() => {
    setBursting(true);
    markAccepted();
    window.setTimeout(() => setAccepted(true), 420);
    window.setTimeout(() => router.push("/details"), 900);
  }, [markAccepted, router]);

  const yesScale = Math.min(1 + attempts * 0.06, 1.55);

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 sm:py-24">
      <div className="w-full max-w-xl text-center">
        <Logo className="justify-center mb-10" />

        <AnimatePresence mode="wait">
          {!accepted ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 text-sm uppercase tracking-[0.3em]" style={{ color: "var(--ink-soft)" }}>
                {t.question.eyebrow}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl italic leading-tight text-gradient mb-6">
                {t.question.title}
              </h1>
              <p className="mx-auto mb-14 max-w-md text-base leading-7" style={{ color: "var(--ink-soft)" }}>
                {t.question.subtitle}
              </p>

              <div
                ref={containerRef}
                className="relative mx-auto flex h-40 w-full max-w-sm items-center justify-center gap-6 sm:h-28"
              >
                <div className="relative z-10">
                  <motion.button
                    type="button"
                    onClick={handleYes}
                    animate={{ scale: yesScale }}
                    whileHover={{ scale: yesScale * 1.06 }}
                    whileTap={{ scale: yesScale * 0.94 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="btn-primary relative rounded-full px-10 py-4 font-semibold tracking-wide cursor-pointer"
                    style={{
                      boxShadow: `0 12px ${18 + attempts * 4}px -8px var(--ring)`,
                    }}
                  >
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "var(--rose)", opacity: 0.5 }}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span className="relative">{t.question.yes}</span>
                  </motion.button>

                  <AnimatePresence>
                    {bursting &&
                      BURST_HEARTS.map((h, i) => (
                        <motion.span
                          key={i}
                          className="pointer-events-none absolute left-1/2 top-1/2"
                          style={{ color: "var(--rose)" }}
                          initial={{ x: 0, y: 0, opacity: 1, scale: 0.4 }}
                          animate={{ x: h.dx, y: h.dy, opacity: 0, scale: 1.1 }}
                          transition={{ duration: 0.9, delay: h.delay, ease: "easeOut" }}
                        >
                          <FaHeart size={h.size} aria-hidden="true" />
                        </motion.span>
                      ))}
                  </AnimatePresence>
                </div>

                <motion.button
                  type="button"
                  aria-label={t.question.noAria}
                  onPointerEnter={dodge}
                  onClick={(e) => {
                    e.preventDefault();
                    dodge();
                  }}
                  animate={{
                    x: noPos.x,
                    y: noPos.y,
                    rotate: attempts % 2 === 0 ? [0, -10, 8, -4, 0] : [0, 10, -8, 4, 0],
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 20 },
                    y: { type: "spring", stiffness: 300, damping: 20 },
                    rotate: { duration: 0.45, ease: "easeOut" },
                  }}
                  whileHover={{ scale: 0.94 }}
                  className="btn-ghost rounded-full px-10 py-4 font-semibold tracking-wide cursor-pointer"
                >
                  {t.question.no}
                </motion.button>
              </div>

              <div className="mt-6 h-6">
                <AnimatePresence mode="wait">
                  {message && (
                    <motion.p
                      key={message + attempts}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="text-sm italic"
                      style={{ color: "var(--rose)" }}
                    >
                      {message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="accepted"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center gap-5 py-10"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
              >
                <FaHeartCircleCheck className="text-5xl" style={{ color: "var(--rose)" }} />
              </motion.div>
              <h2 className="font-display text-3xl italic text-gradient">
                {t.question.acceptedTitle}
              </h2>
              <p style={{ color: "var(--ink-soft)" }}>{t.question.acceptedSubtitle}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <FloatingHint attempts={attempts} hint={t.question.hint} />
    </main>
  );
}

function FloatingHint({ attempts, hint }: { attempts: number; hint: string }) {
  if (attempts < 3) return null;
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.25em]"
      style={{ color: "var(--gold)" }}
    >
      <FaHeart aria-hidden="true" /> {hint}
    </motion.p>
  );
}
