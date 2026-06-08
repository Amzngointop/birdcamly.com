import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | BirdCamly",
  description: "Get in touch with the BirdCamly team — questions, feedback, partnership inquiries, or press requests.",
  alternates: {
    canonical: "https://birdcamly.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-12 border-b" style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
            Contact Us
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>
            Have a question, feedback, or partnership inquiry? We&apos;d love to hear from you. Reach us directly at{" "}
            <a href="mailto:contact@birdcamly.com" style={{ color: "var(--accent)" }} className="font-semibold hover:underline">
              contact@birdcamly.com
            </a>
            {" "}or use the form below.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Jane Smith"
              className="w-full rounded-lg px-4 py-3 text-sm border outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="jane@example.com"
              className="w-full rounded-lg px-4 py-3 text-sm border outline-none focus:ring-2"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us what's on your mind..."
              className="w-full rounded-lg px-4 py-3 text-sm border outline-none focus:ring-2 resize-none"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Send Message
          </button>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            This form is for informational purposes. For a direct response, email us at contact@birdcamly.com.
          </p>
        </form>
      </div>
    </div>
  );
}
