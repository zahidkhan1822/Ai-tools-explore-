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

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link href={tool.href} className="group block">
      <div className="card-hover gold-glow-hover gradient-border relative overflow-hidden rounded-2xl bg-dark-card p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dark-surface text-2xl">
            {tool.icon}
          </div>
          <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-medium text-gold">
            {tool.category}
          </span>
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
        <div className="flex items-center justify-center rounded-xl bg-gold/10 py-2.5 text-sm font-semibold text-gold transition-all group-hover:bg-gold group-hover:text-dark">
          Use Now →
        </div>
      </div>
    </Link>
  );
}
