import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-gold/5 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
          <span className="text-xs">⚡</span>
          <span className="text-xs font-medium text-gold">
            Trusted by 500K+ users worldwide
          </span>
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          The Ultimate{" "}
          <span className="gold-text">AI Tools</span>
          <br />
          Collection for Pros
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-dark-muted">
          Access 20+ powerful AI tools — from image generation to code
          assistance. Boost your productivity with cutting-edge technology.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#featured-tools"
            className="gold-shimmer rounded-full px-8 py-3.5 text-sm font-semibold text-dark transition-transform hover:scale-105"
          >
            Explore Free Tools
          </Link>
          <Link
            href="/pricing"
            className="rounded-full border border-gold/30 px-8 py-3.5 text-sm font-semibold text-gold transition-all hover:border-gold hover:bg-gold/10"
          >
            View Pro Plans →
          </Link>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-dark-muted">
          <div className="flex items-center gap-2">
            <span className="text-gold">✓</span> No Credit Card Required
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">✓</span> 10 Free Tools
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">✓</span> Instant Access
          </div>
        </div>
      </div>
    </section>
  );
}
