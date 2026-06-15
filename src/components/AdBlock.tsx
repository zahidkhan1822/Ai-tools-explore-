export default function AdBlock() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="gradient-border flex flex-col items-center justify-center rounded-2xl bg-dark-card px-6 py-10 text-center">
          <span className="mb-3 text-xs font-medium tracking-widest text-dark-muted uppercase">
            Advertisement
          </span>
          <div className="flex h-24 w-full max-w-3xl items-center justify-center rounded-xl border border-dashed border-dark-border bg-dark-surface">
            <span className="text-sm text-dark-muted">
              Your Ad Here — Reach 500K+ AI enthusiasts
            </span>
          </div>
          <p className="mt-3 text-xs text-dark-muted">
            Contact us for advertising opportunities
          </p>
        </div>
      </div>
    </section>
  );
}
