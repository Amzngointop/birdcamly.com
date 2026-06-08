import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | BirdCamly",
  description: "BirdCamly terms of use — the rules governing your use of this website.",
  alternates: {
    canonical: "https://birdcamly.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-12 border-b" style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>Terms of Use</h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Last updated: January 2026</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {[
          {
            h: "Acceptance of Terms",
            p: "By accessing BirdCamly (birdcamly.com), you agree to be bound by these Terms of Use. If you do not agree, please do not use this site.",
          },
          {
            h: "Informational Purpose Only",
            p: "The content on BirdCamly is provided for informational purposes only. Product reviews, recommendations, and buying advice are editorial opinions based on independent testing. We make no warranties about the accuracy, completeness, or suitability of any information on this site for any particular purpose.",
          },
          {
            h: "Affiliate Relationships",
            p: "BirdCamly participates in affiliate programs including Amazon Associates. Some links on this site are affiliate links, meaning we may earn a commission if you make a purchase. This does not affect our editorial independence or the price you pay.",
          },
          {
            h: "Intellectual Property",
            p: "All content on BirdCamly — including text, images, and design — is the property of BirdCamly or its content contributors and is protected by applicable copyright laws. You may not reproduce, distribute, or republish our content without written permission.",
          },
          {
            h: "External Links",
            p: "BirdCamly contains links to third-party websites (including Amazon). We are not responsible for the content, privacy practices, or accuracy of any third-party site.",
          },
          {
            h: "Limitation of Liability",
            p: "BirdCamly shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this site or from any product purchased based on our recommendations.",
          },
          {
            h: "Changes to Terms",
            p: "We may update these Terms from time to time. Continued use of the site after changes constitutes acceptance of the updated Terms.",
          },
        ].map((section) => (
          <div key={section.h}>
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>{section.h}</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>{section.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
