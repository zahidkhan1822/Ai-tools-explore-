import Link from "next/link";
import { premiumTools } from "@/data/tools";
import PremiumToolCard from "./PremiumToolCard";

export default function PremiumToolsPreview() {
  const preview = premiumTools.slice(0, 5);

  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[150px]" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block rounded-full bg-gold/10 px-4 py-1 text-xs font-medium text-gold">
            👑 PREMIUM TOOLS
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Unlock <span className="gold-text">Pro-Level</span> Power
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-dark-muted">
            Take your workflow to the next level with our exclusive premium AI
            tools.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {preview.map((tool) => (
            <PremiumToolCard key={tool.id} tool={tool} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/premium-tools"
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-8 py-3 text-sm font-semibold text-gold transition-all hover:border-gold hover:bg-gold/10"
          >
            View All Premium Tools →
          </Link>
        </div>
      </div>
    </section>
  );
}
