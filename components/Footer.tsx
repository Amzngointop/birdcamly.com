import Link from "next/link";
import { Bird } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  const categories = site.nav.bestFeeders;

  return (
    <footer className="border-t mt-16" style={{ backgroundColor: "#1C2315", borderColor: "#2a3320" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-3" style={{ color: "#C8D5C0", fontFamily: "var(--font-playfair)" }}>
              <Bird className="w-5 h-5" style={{ color: "#3A6B35" }} />
              BirdCamly
            </Link>
            <p className="text-sm" style={{ color: "#6B7160" }}>
              Independent smart bird feeder camera reviews for backyard birding enthusiasts.
            </p>
          </div>

          {/* Best Feeders */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#C8D5C0" }}>Bird Gear Reviews</h3>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item.slug}>
                  <Link href={`/best/${item.slug}`} className="text-sm hover:underline" style={{ color: "#6B7160" }}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#C8D5C0" }}>Site</h3>
            <ul className="space-y-2">
              <li><Link href="/guides" className="text-sm hover:underline" style={{ color: "#6B7160" }}>Guides</Link></li>
              <li><Link href="/glossary" className="text-sm hover:underline" style={{ color: "#6B7160" }}>Glossary</Link></li>
              <li><Link href="/contact" className="text-sm hover:underline" style={{ color: "#6B7160" }}>Contact</Link></li>
              <li><Link href="/affiliate-disclosure" className="text-sm hover:underline" style={{ color: "#6B7160" }}>Affiliate Disclosure</Link></li>
              <li><Link href="/privacy-policy" className="text-sm hover:underline" style={{ color: "#6B7160" }}>Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:underline" style={{ color: "#6B7160" }}>Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ borderColor: "#2a3320" }}>
          <p className="text-xs" style={{ color: "#6B7160" }}>
            <strong style={{ color: "#8a9580" }}>Affiliate Disclosure:</strong> BirdCamly is a participant in the Amazon Services LLC Associates Program. We earn commissions on qualifying purchases at no extra cost to you.
          </p>
          <p className="text-xs whitespace-nowrap" style={{ color: "#6B7160" }}>{site.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
