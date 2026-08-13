"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaHeartCircleCheck } from "react-icons/fa6";
import Logo from "./Logo";
import { useJourney } from "../lib/journey-context";

const DODGE_MESSAGES = [
  "It slipped away again…",
  "So close, and yet so far.",
  "That one's camera-shy.",
  "Try the other button — it's kinder.",
  "It really doesn't want to be picked.",
  "Playing hard to get, are we?",
];

export default function QuestionScreen() {
  const router = useRouter();
  const { markAccepted } = useJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
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
    setMessage(DODGE_MESSAGES[Math.floor(Math.random() * DODGE_MESSAGES.length)]);
  }, []);

  const handleYes = useCallback(() => {
    setAccepted(true);
    markAccepted();
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
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-ink-soft" style={{ color: "var(--ink-soft)" }}>
                A quiet question
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl italic leading-tight text-gradient mb-6">
                Would you like to meet?
              </h1>
              <p className="mx-auto mb-14 max-w-md text-base leading-7" style={{ color: "var(--ink-soft)" }}>
                No pressure, no small talk required — just a simple yes,
                whenever you&apos;re ready.
              </p>

              <div
                ref={containerRef}
                className="relative mx-auto flex h-40 w-full max-w-sm items-center justify-center gap-6 sm:h-28"
              >
                <motion.button
                  type="button"
                  onClick={handleYes}
                  animate={{ scale: yesScale }}
                  whileHover={{ scale: yesScale * 1.05 }}
                  whileTap={{ scale: yesScale * 0.96 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="btn-primary z-10 rounded-full px-10 py-4 font-semibold tracking-wide cursor-pointer"
                >
                  Yes
                </motion.button>

                <motion.button
                  type="button"
                  aria-label="No (this one likes to wander)"
                  onPointerEnter={dodge}
                  onClick={(e) => {
                    e.preventDefault();
                    dodge();
                  }}
                  animate={{ x: noPos.x, y: noPos.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="btn-ghost rounded-full px-10 py-4 font-semibold tracking-wide cursor-pointer"
                >
                  No
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
                Wonderful.
              </h2>
              <p style={{ color: "var(--ink-soft)" }}>
                Let&apos;s find the perfect time and place…
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <FloatingHint attempts={attempts} />
    </main>
  );
}

function FloatingHint({ attempts }: { attempts: number }) {
  if (attempts < 3) return null;
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.25em]"
      style={{ color: "var(--gold)" }}
    >
      <FaHeart aria-hidden="true" /> the yes button is right there
    </motion.p>
  );
}
