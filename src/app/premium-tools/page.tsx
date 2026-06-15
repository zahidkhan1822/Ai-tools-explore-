import type { Metadata } from "next";
import Link from "next/link";
import { premiumTools } from "@/data/tools";
import PremiumToolCard from "@/components/PremiumToolCard";

export const metadata: Metadata = {
  title: "Premium AI Tools — AI Tools Box Pro",
  description:
    "Unlock powerful premium AI tools: Video Generator, Website Builder, Code Generator Pro, and more.",
};

export default function PremiumToolsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-gold/5 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-gold/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold">
            👑 PREMIUM COLLECTION
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Premium <span className="gold-text">AI Tools</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-dark-muted">
            Supercharge your workflow with our exclusive suite of professional
            AI tools. Upgrade to Pro for unlimited access.
          </p>
          <Link
            href="/pricing"
            className="gold-shimmer mt-8 inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-dark transition-transform hover:scale-105"
          >
            Upgrade to Pro — $19/mo
          </Link>
        </div>
      </section>

      {/* All premium tools grid */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {premiumTools.map((tool) => (
              <PremiumToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="gold-glow gradient-border overflow-hidden rounded-3xl bg-dark-card px-8 py-12 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to Unlock <span className="gold-text">All Tools</span>?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-dark-muted">
              Get unlimited access to all premium tools, priority support, and
              early access to new features.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/pricing"
                className="gold-shimmer rounded-full px-8 py-3.5 text-sm font-semibold text-dark transition-transform hover:scale-105"
              >
                View Pricing Plans
              </Link>
              <Link
                href="/"
                className="rounded-full border border-dark-border px-8 py-3.5 text-sm font-semibold text-dark-muted transition-all hover:border-gold hover:text-gold"
              >
                Try Free Tools First
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
