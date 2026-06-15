import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getArticleBySlug, getAllArticleSlugs, articles } from "@/data/articles";
import { getProductsByArticle } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { CTAButton } from "@/components/CTAButton";
import { BadgeChip } from "@/components/EditorChoiceBadge";
import { GuideCard } from "@/components/GuideCard";

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://birdcamly.com/best/${slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const products = getProductsByArticle(slug);
  const relatedArticles = articles.filter((a) => article.relatedArticles.includes(a.slug));

  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Hero */}
      <section className="py-12 border-b" style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1 text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <BadgeChip label={article.category} color="green" />
            <span className="flex items-center gap-1 text-sm" style={{ color: "var(--text-secondary)" }}>
              <Clock className="w-4 h-4" /> {article.readTime} read
            </span>
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Updated {article.lastUpdated}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
            {article.title}
          </h1>
          <p className="text-base" style={{ color: "var(--text-secondary)" }}>{article.editorSummary}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
        {/* Comparison Table */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
            Quick Comparison
          </h2>
          <ComparisonTable products={products} />
        </section>

        {/* Product Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
            Our Top Picks
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Buying Guide */}
        <section
          className="rounded-2xl p-6 md:p-8 border"
          style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}
        >
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
            Buying Guide
          </h2>
          <p className="mb-6" style={{ color: "var(--text-secondary)" }}>{article.buyingGuide.intro}</p>
          <div className="space-y-6">
            {article.buyingGuide.sections.map((section) => (
              <div key={section.heading}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
                  {section.heading}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>{section.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={article.faqs} />

        {/* Related Articles */}
        {/* {relatedArticles.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
              Related Reviews
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {relatedArticles.map((a) => (
                <GuideCard key={a.slug} slug={a.slug} title={a.title} tag={a.category} readTime={a.readTime} basePath="best" />
              ))}
            </div>
          </section>
        )} */}

        <div className="flex justify-center pt-4">
          <CTAButton href="/" variant="outline">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
