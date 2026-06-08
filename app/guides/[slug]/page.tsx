import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getGuideBySlug, getAllGuideSlugs, guides } from "@/data/guides";
import { articles } from "@/data/articles";
import { FAQ } from "@/components/FAQ";
import { CTAButton } from "@/components/CTAButton";
import { BadgeChip } from "@/components/EditorChoiceBadge";
import { GuideCard } from "@/components/GuideCard";

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: `https://birdcamly.com/guides/${slug}`,
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedGuides = guides.filter((g) => guide.relatedGuides.includes(g.slug)).slice(0, 3);

  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Hero */}
      <section className="py-12 border-b" style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/guides" className="inline-flex items-center gap-1 text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
            <ArrowLeft className="w-4 h-4" /> All Guides
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <BadgeChip label={guide.tag} color="green" />
            <span className="flex items-center gap-1 text-sm" style={{ color: "var(--text-secondary)" }}>
              <Clock className="w-4 h-4" /> {guide.readTime} read
            </span>
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Updated {guide.lastUpdated}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
            {guide.title}
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>{guide.intro}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
        <img
          src={`/guides/${slug}.jpg`}
          alt={guide.title}
          style={{ width: "100%", maxHeight: "420px", objectFit: "cover", borderRadius: "12px", marginBottom: "32px", marginTop: "24px" }}
        />
        {/* Table of Contents */}
        <nav
          className="rounded-xl border p-5"
          style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-secondary)" }}>
            In This Guide
          </p>
          <ol className="space-y-2">
            {guide.tableOfContents.map((item, i) => (
              <li key={item.anchor}>
                <a
                  href={`#${item.anchor}`}
                  className="flex items-center gap-2 text-sm hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: "var(--accent)" }}>
                    {i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Article Sections */}
        {guide.sections.map((section, idx) => (
          <section key={section.anchor} id={section.anchor}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
              {section.heading}
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9 }}>{section.body}</p>

            {/* Product callout after 2nd and 4th section */}
            {guide.productCallouts[Math.floor(idx / 2)] && idx % 2 === 1 && (
              <div
                className="mt-8 rounded-xl border p-5 flex flex-col sm:flex-row items-start gap-4"
                style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}
              >
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--accent)" }}>
                    Related Review
                  </p>
                  <h4 className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
                    {guide.productCallouts[Math.floor(idx / 2)].title}
                  </h4>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {guide.productCallouts[Math.floor(idx / 2)].description}
                  </p>
                </div>
                <CTAButton href={`/best/${guide.productCallouts[Math.floor(idx / 2)].articleSlug}`} variant="outline" className="flex-shrink-0">
                  {guide.productCallouts[Math.floor(idx / 2)].linkLabel} <ArrowRight className="w-4 h-4" />
                </CTAButton>
              </div>
            )}
          </section>
        ))}

        {/* Remaining product callouts */}
        {guide.productCallouts.slice(Math.floor(guide.sections.length / 2)).map((callout) => (
          <div
            key={callout.articleSlug}
            className="rounded-xl border p-5 flex flex-col sm:flex-row items-start gap-4"
            style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}
          >
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--accent)" }}>
                Related Review
              </p>
              <h4 className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
                {callout.title}
              </h4>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{callout.description}</p>
            </div>
            <CTAButton href={`/best/${callout.articleSlug}`} variant="outline" className="flex-shrink-0">
              {callout.linkLabel} <ArrowRight className="w-4 h-4" />
            </CTAButton>
          </div>
        ))}

        {/* FAQ */}
        <FAQ items={guide.faqs} />

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
              Related Guides
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {relatedGuides.map((g) => (
                <GuideCard key={g.slug} slug={g.slug} title={g.title} tag={g.tag} readTime={g.readTime} basePath="guides" />
              ))}
            </div>
          </section>
        )}

        <div className="flex justify-center pt-4">
          <CTAButton href="/guides" variant="outline">
            <ArrowLeft className="w-4 h-4" /> All Guides
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
