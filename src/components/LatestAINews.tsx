import { latestNews } from "@/data/tools";

export default function LatestAINews() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block rounded-full bg-gold/10 px-4 py-1 text-xs font-medium text-gold">
            📰 LATEST AI NEWS
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Stay <span className="gold-text">Updated</span>
          </h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {latestNews.map((news) => (
            <div
              key={news.id}
              className="card-hover gradient-border flex items-center gap-4 rounded-xl bg-dark-card p-4 transition-colors hover:bg-dark-surface"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-lg">
                📰
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white">
                  {news.title}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-xs text-dark-muted">
                  <span>{news.source}</span>
                  <span>·</span>
                  <span>{news.date}</span>
                </div>
              </div>
              <svg
                className="h-4 w-4 shrink-0 text-dark-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
