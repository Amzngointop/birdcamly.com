import Link from "next/link";
import { Camera, Shield, Zap, Eye, MapPin, ArrowRight, CheckCircle, Bird, Droplets } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { EditorChoiceBadge, BadgeChip } from "@/components/EditorChoiceBadge";
import { GuideCard } from "@/components/GuideCard";
import { articles } from "@/data/articles";
import { guides } from "@/data/guides";
import { getFeaturedProducts } from "@/data/products";

const editorChoice = {
  name: "Smart Bird Feeder with Camera Solar Powered, 2K HD Video, AI Bird Species Identification, Red",
  bestFor: "Best Overall Smart Bird Feeder Camera",
  description:
    "A solar-powered 2K HD smart bird feeder camera with real-time AI species identification, weatherproof construction, and motion-triggered alerts — a strong choice for backyard birders who want hands-free monitoring all year.",
  affiliateLink: "https://www.amazon.com/dp/B0DSDFV4Z2?tag=YOURTAG-20",
  imageUrl: "https://m.media-amazon.com/images/I/81HFXazgvLL._AC_SL1500_.jpg",
};

const categoryIcons: Record<string, React.ReactNode> = {
  "best-smart-bird-feeder-cameras": <Camera className="w-6 h-6" />,
  "best-bird-watching-binoculars": <Eye className="w-6 h-6" />,
  "best-squirrel-proof-bird-feeders": <Shield className="w-6 h-6" />,
  "best-hummingbird-feeder-cameras": <Zap className="w-6 h-6" />,
  "best-bird-baths": <Droplets className="w-6 h-6" />,
};

const categoryTaglines: Record<string, string> = {
  "best-smart-bird-feeder-cameras": "AI identification, best apps, top picks",
  "best-bird-watching-binoculars": "Compact, high-powered, and waterproof options",
  "best-squirrel-proof-bird-feeders": "Keep squirrels out and birds fed",
  "best-hummingbird-feeder-cameras": "Capture every wing beat in stunning detail",
  "best-bird-baths": "Attract more species with the right water feature",
};

const glossaryTerms = [
  { term: "AI Bird ID", def: "Machine learning that identifies bird species from camera images in real time." },
  { term: "EVR", def: "Event Video Recording — clips triggered only when motion is detected." },
  { term: "IP65 Rating", def: "Dust-tight and water-resistant under direct spray — suitable for year-round outdoor use." },
  { term: "Solar Panel Capacity", def: "Measured in mAh/watts; determines how quickly a solar camera recharges its battery." },
  { term: "Species Database", def: "The catalog of bird species an AI can identify — ranges from 200 to 10,000+ species." },
];

export const metadata = {
  alternates: {
    canonical: "https://birdcamly.com",
  },
};

export default function HomePage() {
  const latestGuides = guides.slice(0, 3);
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* ── HERO ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <BadgeChip label="Updated 2026" color="green" />
            <h1
              className="mt-4 font-bold leading-tight"
              style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
            >
              Find the Best Smart Bird Feeder Camera for Your Backyard
            </h1>
            <p className="mt-5 text-lg" style={{ color: "var(--text-secondary)" }}>
              Independent, research-based reviews to help backyard birders find the perfect AI-powered feeder camera, binoculars, squirrel-proof feeders, and bird baths.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="#top-picks">Browse Top Picks</CTAButton>
              <CTAButton href="/guides" variant="outline">Read Our Guides</CTAButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {["35+ Products Reviewed", "5 Expert Categories", "Updated 2026", "100% Independent"].map((stat) => (
                <div key={stat} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" style={{ color: "var(--accent)" }} />
                  <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EDITOR'S CHOICE ── */}
      <section className="py-12" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <EditorChoiceBadge label="Editor's Choice 2026" />
              <h2 className="mt-4 text-3xl font-bold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
                {editorChoice.name}
              </h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
                {editorChoice.bestFor}
              </p>
              <p className="mt-4 text-base" style={{ color: "var(--text-secondary)" }}>
                {editorChoice.description}
              </p>
              <div className="mt-6">
                <CTAButton href={editorChoice.affiliateLink} external>
                  View on Amazon <ArrowRight className="w-4 h-4" />
                </CTAButton>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
              <img
                src={editorChoice.imageUrl}
                alt={editorChoice.name}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "contain",
                  backgroundColor: "#f9f9f9",
                  padding: "16px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── POPULAR CATEGORIES ── */}
      <section className="py-14" id="top-picks" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/best/${article.slug}`}
                className="rounded-xl border p-5 flex flex-col gap-3 transition-all hover:shadow-md group"
                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--bg-alt)", color: "var(--accent)" }}>
                  {categoryIcons[article.slug] ?? <Camera className="w-6 h-6" />}
                </div>
                <div>
                  <p className="font-semibold text-sm leading-snug" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>{article.category}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>{categoryTaglines[article.slug]}</p>
                </div>
                <span className="text-xs font-semibold flex items-center gap-1 mt-auto" style={{ color: "var(--accent)" }}>
                  View Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-14" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
            Featured Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-xl border overflow-hidden flex flex-col"
                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "contain",
                    backgroundColor: "#f9f9f9",
                    padding: "12px",
                  }}
                />
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--accent)" }}>
                    {product.bestFor}
                  </span>
                  <p className="text-sm font-semibold mb-3 flex-1" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
                    {product.name}
                  </p>
                  <CTAButton href={product.affiliateLink} external className="w-full justify-center text-xs">
                    View on Amazon
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TYPE OF BIRDER ── */}
      <section className="py-12" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
            What Type of Birder Are You?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Camera className="w-7 h-7" />,
                title: "Just Getting Started",
                body: "New to smart bird feeders? Find our top-rated cameras with the best AI, easiest apps, and most reliable all-around performance.",
                link: "/best/best-smart-bird-feeder-cameras",
                cta: "See Top Smart Picks",
              },
              {
                icon: <Shield className="w-7 h-7" />,
                title: "Fighting Squirrels",
                body: "Tired of squirrels stealing seed and monopolizing your feeders? These squirrel-proof designs use weight-activated and mesh mechanisms to keep seed where it belongs.",
                link: "/best/best-squirrel-proof-bird-feeders",
                cta: "See Squirrel-Proof Feeders",
              },
              {
                icon: <Bird className="w-7 h-7" />,
                title: "Watching Hummingbirds",
                body: "Those tiny, fast jewels deserve a dedicated camera. Find feeders designed specifically for hummingbird behavior and nectar feeders.",
                link: "/best/best-hummingbird-feeder-cameras",
                cta: "See Hummingbird Cams",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border p-6 flex flex-col gap-4"
                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--bg-alt)", color: "var(--accent)" }}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>{card.title}</h3>
                <p className="text-sm flex-1" style={{ color: "var(--text-secondary)" }}>{card.body}</p>
                <CTAButton href={card.link} variant="outline" className="self-start">{card.cta} <ArrowRight className="w-4 h-4" /></CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEEDER BIRD IDENTIFICATION PREVIEW ── */}
      <section className="py-14" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
            Feeder Bird Identification
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--text-secondary)" }}>
            ID tips and guides for the birds that frequent feeders and backyards.
          </p>
          <div
            className="rounded-2xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.13)" }}
          >
            {/* Left dark panel */}
            <div
              className="flex flex-col justify-between p-10 md:w-2/5"
              style={{ backgroundColor: "#1C2315" }}
            >
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "#c8a84b" }}
                >
                  BIRDING 101
                </p>
                <h3
                  className="text-2xl font-bold mb-4 leading-snug"
                  style={{ color: "#f0ede8", fontFamily: "var(--font-playfair)" }}
                >
                  Get to Know These 20 Common Birds
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#a8b5a0" }}>
                  Want to put names to species you regularly see? Start with this beginner&apos;s guide.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="/guides/common-backyard-birds"
                  className="inline-block font-semibold text-sm px-6 py-2 rounded-full"
                  style={{ backgroundColor: "#c8a84b", color: "#1C2315" }}
                >
                  Read On →
                </a>
              </div>
            </div>
            {/* Right image panel */}
            <div className="md:w-3/5 order-first md:order-last" style={{ minHeight: "280px" }}>
              <img
                src="/birds/house-finch.jpg"
                alt="House Finch"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WILL A CAMERA SCARE BIRDS ── */}
      <section className="py-12" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--bg-alt)", color: "var(--accent)" }}>
              <Bird className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
              Will a Camera Scare Birds Away?
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              It&apos;s the most common question we hear from new smart feeder owners — and the answer is more reassuring than most people expect. Birds are remarkably adaptable, and after a brief adjustment period of 1–5 days, the vast majority of backyard species resume normal feeding behavior and treat the camera as part of the permanent landscape.
            </p>
            <p style={{ color: "var(--text-secondary)" }}>
              Bold species like chickadees and titmice commonly show little to no camera aversion. Even more cautious species — Blue Jays, Hairy Woodpeckers, Brown Thrashers — typically return to normal behavior within 7–10 days. The key variable is simple: as long as your feeder offers high-quality food, the food motivation eventually overcomes any residual wariness.
            </p>
            <p style={{ color: "var(--text-secondary)" }}>
              Placement strategy matters too. Installing the camera before you fill the feeder for the first time means birds encounter both simultaneously — associating the camera with the food reward rather than experiencing it as a sudden environmental change to an established routine.
            </p>
            <CTAButton href="/guides/will-camera-scare-birds-away" variant="outline">
              Read Full Guide <ArrowRight className="w-4 h-4" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── FROM OUR GUIDES ── */}
      <section className="py-14" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
              From Our Guides
            </h2>
            <Link href="/guides" className="text-sm font-semibold flex items-center gap-1" style={{ color: "var(--accent)" }}>
              All Guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestGuides.map((guide) => (
              <GuideCard
                key={guide.slug}
                slug={guide.slug}
                title={guide.title}
                tag={guide.tag}
                readTime={guide.readTime}
                intro={guide.intro}
                basePath="guides"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE TEST ── */}
      <section className="py-12" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
            How We Review
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: <MapPin className="w-6 h-6" />,
                title: "Research-Based Analysis",
                body: "We analyze real user reviews, manufacturer specs, and independent lab data to evaluate each product across the criteria that matter most to backyard birders.",
              },
              {
                step: "02",
                icon: <Zap className="w-6 h-6" />,
                title: "AI Accuracy Evaluation",
                body: "AI accuracy is evaluated based on published species database sizes and user-reported identification rates across diverse backyard conditions.",
              },
              {
                step: "03",
                icon: <Shield className="w-6 h-6" />,
                title: "Durability Verification",
                body: "Weather resistance claims are verified against published IP ratings and user feedback across multiple seasons and geographic regions.",
              },
            ].map((card) => (
              <div
                key={card.step}
                className="rounded-xl border p-6"
                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>{card.step}</span>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--bg-alt)", color: "var(--accent)" }}>
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>{card.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOSSARY TEASER ── */}
      <section className="py-12" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
              New to Smart Bird Feeders? Learn the Lingo
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              From AI Bird ID to IP ratings, the smart feeder world has its own vocabulary. Here are a few key terms to get you started.
            </p>
            <div className="space-y-3 mb-6">
              {glossaryTerms.map((item) => (
                <div
                  key={item.term}
                  className="rounded-lg border px-4 py-3 flex gap-3"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}
                >
                  <span className="font-bold text-sm whitespace-nowrap" style={{ color: "var(--accent)" }}>{item.term}</span>
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.def}</span>
                </div>
              ))}
            </div>
            <CTAButton href="/glossary" variant="outline">
              View Full Glossary <ArrowRight className="w-4 h-4" />
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
