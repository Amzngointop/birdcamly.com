"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ({ items, title = "Frequently Asked Questions" }: { items: FAQItem[]; title?: string }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
        {title}
      </h2>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="rounded-xl border overflow-hidden"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--card-bg)" }}
        >
          <button
            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold"
            style={{ color: "var(--text-primary)" }}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <span>{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 flex-shrink-0 transition-transform ${openIdx === idx ? "rotate-180" : ""}`}
              style={{ color: "var(--accent)" }}
            />
          </button>
          {openIdx === idx && (
            <div className="px-5 pb-4 text-sm" style={{ color: "var(--text-secondary)" }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
