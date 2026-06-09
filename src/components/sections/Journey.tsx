"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { journey } from "@/data/journey";
import { cn } from "@/lib/utils";

const typeColors: Record<string, string> = {
  education: "bg-brand-blue",
  certification: "bg-brand-emerald",
  project: "bg-brand-pink",
  milestone: "bg-brand-purple",
};

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 md:py-32 bg-card/30">
      <div className="container-max">
        <SectionHeading
          eyebrow="Journey"
          title='The path that <br/><span class="text-gradient-subtle">brought me here.</span>'
          description="From first lines of code to shipping production apps."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-border via-border to-transparent" />

            {journey.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 mt-1">
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center",
                        typeColors[item.type]
                      )}
                    >
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xs font-mono text-muted-foreground">
                        {item.year}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
                        · {item.type}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-0.5">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {item.place}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}