import type { Metadata } from "next";
import { guides } from "@/data/guides";
import { GuideCard } from "@/components/GuideCard";

export const metadata: Metadata = {
  title: "Birding Guides & Tips | BirdCamly",
  description: "Expert guides on smart bird feeder cameras — setup, placement, AI features, solar vs battery, and how to attract backyard birds.",
  alternates: {
    canonical: "https://birdcamly.com/guides",
  },
};

export default function GuidesPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-12 border-b" style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
            Guides & Expert Tips
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>
            In-depth articles on smart bird feeder technology, setup tips, wildlife insights, and buying advice — written by backyard birding enthusiasts.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
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
    </div>
  );
}
