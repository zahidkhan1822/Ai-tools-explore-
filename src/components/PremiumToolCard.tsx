import Link from "next/link";
import { type Tool, formatUsageCount } from "@/data/tools";

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  return (
    <span className="flex items-center gap-0.5 text-xs">
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={i} className="star-gold">★</span>
      ))}
      {hasHalf && <span className="star-gold">★</span>}
      <span className="ml-1 text-dark-muted">{rating}</span>
    </span>
  );
}

export default function PremiumToolCard({ tool }: { tool: Tool }) {
  return (
    <Link href={tool.href} className="group block">
      <div className="card-hover gold-glow-hover gradient-border relative overflow-hidden rounded-2xl bg-dark-card p-6">
        {/* Premium badge */}
        <div className="pulse-glow absolute right-3 top-3 flex items-center gap-1 rounded-full bg-gold/20 px-2.5 py-1 text-xs font-bold text-gold">
          <svg
            className="h-3 w-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          PRO
        </div>
        {/* Lock icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-dark/0 opacity-0 transition-all group-hover:bg-dark/40 group-hover:opacity-100">
          <div className="rounded-full bg-gold/20 p-3 backdrop-blur-sm">
            <svg
              className="h-6 w-6 text-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dark-surface text-2xl">
            {tool.icon}
          </div>
        </div>
        <h3 className="mb-2 text-base font-semibold text-white group-hover:text-gold transition-colors">
          {tool.name}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-dark-muted">
          {tool.description}
        </p>
        <div className="mb-4 flex items-center justify-between">
          <StarRating rating={tool.rating} />
          <span className="text-xs text-dark-muted">
            {formatUsageCount(tool.usageCount)} uses
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-xl border border-gold/30 py-2.5 text-sm font-semibold text-gold transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-dark">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          Upgrade to Unlock
        </div>
      </div>
    </Link>
  );
}
