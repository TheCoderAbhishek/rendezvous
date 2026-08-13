"use client";

import { motion } from "framer-motion";

const HEARTS = [
  { left: "6%", size: 18, delay: 0, duration: 16, opacity: 0.35 },
  { left: "16%", size: 12, delay: 3, duration: 13, opacity: 0.25 },
  { left: "27%", size: 22, delay: 6, duration: 19, opacity: 0.3 },
  { left: "38%", size: 14, delay: 1.5, duration: 15, opacity: 0.22 },
  { left: "49%", size: 20, delay: 8, duration: 17, opacity: 0.28 },
  { left: "60%", size: 12, delay: 4, duration: 14, opacity: 0.24 },
  { left: "71%", size: 24, delay: 2, duration: 20, opacity: 0.32 },
  { left: "82%", size: 16, delay: 9, duration: 16, opacity: 0.26 },
  { left: "91%", size: 13, delay: 5, duration: 13, opacity: 0.2 },
  { left: "10%", size: 10, delay: 11, duration: 18, opacity: 0.18 },
  { left: "55%", size: 15, delay: 12, duration: 15, opacity: 0.2 },
  { left: "34%", size: 11, delay: 7, duration: 21, opacity: 0.2 },
];

function HeartGlyph({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ opacity }}
      aria-hidden="true"
    >
      <path d="M12 21s-6.7-4.35-9.3-8.1C.9 10.06 1.4 6.4 4.6 4.9c2.1-1 4.4-.25 5.9 1.55.4.48.8.98 1.5 1.9.7-.92 1.1-1.42 1.5-1.9C15 4.65 17.3 3.9 19.4 4.9c3.2 1.5 3.7 5.16 1.9 8-2.6 3.75-9.3 8.1-9.3 8.1z" />
    </svg>
  );
}

export default function HeartField() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden text-rose"
      aria-hidden="true"
    >
      {HEARTS.map((h, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[-10%]"
          style={{ left: h.left }}
          initial={{ y: 0, rotate: -8 }}
          animate={{ y: "-120vh", rotate: 8 }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <HeartGlyph size={h.size} opacity={h.opacity} />
        </motion.div>
      ))}
      <div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "var(--blush)", opacity: 0.35 }}
      />
      <div
        className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "var(--gold-soft)", opacity: 0.25 }}
      />
    </div>
  );
}
