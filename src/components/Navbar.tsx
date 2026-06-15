import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-dark-border bg-dark/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <span className="gold-text text-xl font-bold tracking-tight">
            AI Tools Box Pro
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm text-gray-300 transition-colors hover:text-gold"
          >
            Home
          </Link>
          <Link
            href="/premium-tools"
            className="text-sm text-gray-300 transition-colors hover:text-gold"
          >
            Premium Tools
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-gray-300 transition-colors hover:text-gold"
          >
            Pricing
          </Link>
        </div>
        <Link
          href="/pricing"
          className="gold-shimmer rounded-full px-5 py-2 text-sm font-semibold text-dark transition-transform hover:scale-105"
        >
          Upgrade Pro
        </Link>
      </div>
    </nav>
  );
}
