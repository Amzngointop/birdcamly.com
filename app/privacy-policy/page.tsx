import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BirdCamly",
  description: "BirdCamly privacy policy — how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://birdcamly.com/privacy-policy",
  },
};

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-12 border-b" style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>Privacy Policy</h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Last updated: January 2026</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {[
          {
            h: "Information We Collect",
            p: "BirdCamly collects basic analytics data about page visits (pages viewed, time on site, referring URLs) through anonymized analytics tools. We do not collect personally identifiable information unless you voluntarily contact us via our contact form, in which case we store your name and email address only to respond to your inquiry.",
          },
          {
            h: "Affiliate Links & Third Parties",
            p: "BirdCamly participates in the Amazon Services LLC Associates Program and other affiliate programs. When you click affiliate links on our site, the destination website (e.g., Amazon) may set cookies and collect data according to their own privacy policy. We are not responsible for third-party data practices.",
          },
          {
            h: "Cookies",
            p: "We use essential cookies for site functionality and analytics cookies (anonymized) to understand how visitors use our site. We do not use tracking cookies for advertising purposes. You may disable cookies in your browser settings.",
          },
          {
            h: "Data Retention",
            p: "Contact form submissions are retained for up to 12 months and then deleted. Analytics data is aggregated and anonymized — no individual user data is retained.",
          },
          {
            h: "Your Rights",
            p: "You have the right to request access to, correction of, or deletion of any personal data we hold about you. Contact us at contact@birdcamly.com to make a request.",
          },
          {
            h: "Contact",
            p: "For privacy-related inquiries, contact us at contact@birdcamly.com.",
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
