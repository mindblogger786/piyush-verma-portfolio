"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-card/30">
      <div className="container-max">
        <SectionHeading
          eyebrow="Toolkit"
          title='Technologies I <br/><span class="text-gradient-subtle">work with daily.</span>'
          description="A pragmatic stack for shipping production-ready applications."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => (
            <Reveal key={cat.id} delay={idx * 0.06}>
              <div className="group h-full p-6 rounded-2xl glass hover:bg-card transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{cat.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>
                  <div
                    className="w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: cat.color }}
                  />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors cursor-default"
                    >
                      {skill}
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