import { FaHeart } from "react-icons/fa6";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <FaHeart className="text-rose" aria-hidden="true" />
      <span className="font-display text-lg tracking-[0.18em] uppercase text-ink">
        Rendezvous
      </span>
    </div>
  );
}
