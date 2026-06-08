import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | BirdCamly",
  description: "BirdCamly affiliate disclosure — how our Amazon Associates participation works and how it affects our editorial policy.",
  alternates: {
    canonical: "https://birdcamly.com/affiliate-disclosure",
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-12 border-b" style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>Affiliate Disclosure</h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Last updated: January 2026</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>Amazon Associates Program</h2>
          <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            BirdCamly (birdcamly.com) is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click an affiliate link on BirdCamly and make a purchase, we may earn a small commission at no additional cost to you.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>Our Editorial Independence</h2>
          <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Our affiliate relationships do not influence our editorial recommendations. Products are selected and ranked based solely on their merit, as determined through independent testing and research. We include affiliate links only after products have been evaluated on their own terms. We regularly recommend products that earn us lower commissions when we believe they are genuinely the best choice for our readers.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>No Extra Cost to You</h2>
          <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Using our affiliate links does not increase the price you pay for any product. Amazon and other affiliate partners pay us a portion of their own margin — your purchase price is the same whether you use our link or navigate to Amazon directly.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>Identifying Affiliate Links</h2>
          <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            All links to Amazon product pages on BirdCamly are affiliate links. They are clearly labeled as &quot;View on Amazon&quot; or similar. Non-Amazon external links (such as manufacturer websites or research sources) are not affiliate links.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>Questions</h2>
          <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            If you have any questions about our affiliate relationships or editorial policy, please contact us at{" "}
            <a href="mailto:contact@birdcamly.com" style={{ color: "var(--accent)" }} className="hover:underline font-semibold">contact@birdcamly.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
