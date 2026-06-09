"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container-max">
        <SectionHeading
          eyebrow="Experience"
          title='Roles where I made an <br/><span class="text-gradient-subtle">impact.</span>'
          description="Every position taught me something — and I delivered measurable results in each."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.08}>
              <div className="group relative p-6 md:p-8 rounded-2xl glass hover:bg-card transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg md:text-xl font-bold">
                        {exp.role}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/80 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground font-mono">
                      {exp.period}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {exp.location}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {exp.description}
                </p>

                <div className="space-y-2 mb-5">
                  {exp.achievements.map((a, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-foreground mt-0.5">→</span>
                      <span>{a}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}