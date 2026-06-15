import { trendingBlogs } from "@/data/tools";

export default function TrendingBlogs() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block rounded-full bg-gold/10 px-4 py-1 text-xs font-medium text-gold">
            📝 TRENDING BLOGS
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Latest <span className="gold-text">Insights</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {trendingBlogs.map((blog) => (
            <article
              key={blog.id}
              className="card-hover gold-glow-hover gradient-border group overflow-hidden rounded-2xl bg-dark-card"
            >
              <div className="aspect-video w-full overflow-hidden bg-dark-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3 text-xs text-dark-muted">
                  <span>{blog.date}</span>
                  <span>·</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-white transition-colors group-hover:text-gold">
                  {blog.title}
                </h3>
                <p className="text-sm text-dark-muted">{blog.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
