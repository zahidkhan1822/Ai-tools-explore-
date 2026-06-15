import { featuredFreeTools } from "@/data/tools";
import ToolCard from "./ToolCard";

export default function FeaturedTools() {
  return (
    <section id="featured-tools" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block rounded-full bg-gold/10 px-4 py-1 text-xs font-medium text-gold">
            ⚡ FEATURED FREE TOOLS
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Powerful Tools,{" "}
            <span className="gold-text">Completely Free</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-dark-muted">
            Start with our curated collection of premium-quality tools — no
            signup or payment required.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {featuredFreeTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
