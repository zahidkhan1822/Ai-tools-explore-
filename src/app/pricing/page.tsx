import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing Plans — AI Tools Box Pro",
  description:
    "Choose the perfect plan for your needs. Free tools or unlimited Pro access.",
};

const freePlanFeatures = [
  "Access to 10 Free Tools",
  "Limited Daily Usage (50 requests)",
  "Standard Processing Speed",
  "Community Support",
  "Basic Export Options",
];

const proPlanFeatures = [
  "All 20+ AI Tools Unlocked",
  "Unlimited Usage — No Restrictions",
  "Priority Processing Speed",
  "All Premium Tools Access",
  "Priority Customer Support",
  "Early Access to New Tools",
  "Advanced Export Options",
  "API Access",
  "No Watermarks",
  "Commercial License",
];

export default function PricingPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/5 blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold">
            💎 PRICING PLANS
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Choose Your <span className="gold-text">Plan</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-dark-muted">
            Start free with powerful tools or unlock everything with Pro. No
            hidden fees.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Free Plan */}
          <div className="gradient-border flex flex-col rounded-3xl bg-dark-card p-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white">Free Plan</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-dark-muted">/month</span>
              </div>
              <p className="mt-2 text-sm text-dark-muted">
                Perfect for getting started with AI tools.
              </p>
            </div>
            <ul className="mb-8 flex-1 space-y-3">
              {freePlanFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 text-dark-muted">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/"
              className="flex items-center justify-center rounded-xl border border-dark-border py-3 text-sm font-semibold text-dark-muted transition-all hover:border-gold hover:text-gold"
            >
              Get Started Free
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="gold-glow gradient-border relative flex flex-col rounded-3xl bg-dark-card p-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="gold-shimmer rounded-full px-4 py-1 text-xs font-bold text-dark">
                MOST POPULAR
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gold">Pro Plan</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="gold-text text-4xl font-bold">$19</span>
                <span className="text-dark-muted">/month</span>
              </div>
              <p className="mt-2 text-sm text-dark-muted">
                Unlimited access to all premium AI tools.
              </p>
            </div>
            <ul className="mb-8 flex-1 space-y-3">
              {proPlanFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 text-gold">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="gold-shimmer flex items-center justify-center rounded-xl py-3 text-sm font-semibold text-dark transition-transform hover:scale-[1.02]"
            >
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ-like guarantee */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="gradient-border rounded-2xl bg-dark-card px-8 py-10">
            <h3 className="text-xl font-bold">
              🛡️ 30-Day Money-Back Guarantee
            </h3>
            <p className="mt-3 text-sm text-dark-muted">
              Try Pro risk-free. If you&apos;re not satisfied within 30 days,
              we&apos;ll give you a full refund — no questions asked.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
