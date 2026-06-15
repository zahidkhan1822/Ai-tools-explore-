import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="gold-text text-lg font-bold">
                AI Tools Box Pro
              </span>
            </Link>
            <p className="mt-3 text-sm text-dark-muted">
              The ultimate collection of AI-powered tools for professionals,
              creators, and businesses.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gold">
              Free Tools
            </h3>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li>
                <Link href="#" className="transition-colors hover:text-gold">
                  ChatGPT Alternative
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gold">
                  AI Image Generator
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gold">
                  QR Code Generator
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gold">
                  PDF Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gold">
              Premium Tools
            </h3>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li>
                <Link
                  href="/premium-tools"
                  className="transition-colors hover:text-gold"
                >
                  AI Video Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/premium-tools"
                  className="transition-colors hover:text-gold"
                >
                  AI Website Builder
                </Link>
              </li>
              <li>
                <Link
                  href="/premium-tools"
                  className="transition-colors hover:text-gold"
                >
                  AI Code Generator Pro
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="transition-colors hover:text-gold"
                >
                  View All Premium →
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gold">Company</h3>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li>
                <Link href="#" className="transition-colors hover:text-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gold">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gold">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-dark-border pt-8 md:flex-row">
          <p className="text-sm text-dark-muted">
            &copy; 2025 AI Tools Box Pro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-dark-muted transition-colors hover:text-gold"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-sm text-dark-muted transition-colors hover:text-gold"
            >
              GitHub
            </Link>
            <Link
              href="#"
              className="text-sm text-dark-muted transition-colors hover:text-gold"
            >
              Discord
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
