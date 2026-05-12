"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { faq } from "@/data/faq";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/services";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative border-t border-white/[0.06] py-24 md:py-32"
    >
      <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <SectionHeading
          id="faq-heading"
          eyebrow="Common questions"
          title={
            <>
              Questions our customers
              <br className="hidden sm:inline" /> ask before they call.
            </>
          }
          lede="If you don&rsquo;t see your question, just call. We&rsquo;d rather talk to you about your saw than read another form."
        />

        <Reveal>
          <Accordion.Root
            type="single"
            collapsible
            className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-ink-900/40"
          >
            {faq.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="group"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.02] data-[state=open]:bg-white/[0.03]">
                    <span className="font-display text-base font-semibold text-white md:text-lg">
                      {item.q}
                    </span>
                    <ChevronDown
                      aria-hidden
                      className="h-5 w-5 shrink-0 text-spark-400 transition-transform duration-300 group-data-[state=open]:rotate-180"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden px-6 text-ink-300 data-[state=closed]:animate-acc-up data-[state=open]:animate-acc-down">
                  <p className="pb-5 text-sm leading-relaxed md:text-base">
                    {item.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>

      <style jsx global>{`
        @keyframes acc-down {
          from { height: 0; }
          to { height: var(--radix-accordion-content-height); }
        }
        @keyframes acc-up {
          from { height: var(--radix-accordion-content-height); }
          to { height: 0; }
        }
        .animate-acc-down { animation: acc-down 280ms cubic-bezier(0.22, 1, 0.36, 1); }
        .animate-acc-up { animation: acc-up 220ms cubic-bezier(0.22, 1, 0.36, 1); }
        @media (prefers-reduced-motion: reduce) {
          .animate-acc-down,
          .animate-acc-up {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
