"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { projects } from "@/data/projects";

export default function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container-max">
        <SectionHeading
          eyebrow="Selected Work"
          title='Products I&apos;ve <br/><span class="text-gradient-subtle">shipped to production.</span>'
          description="Each project solved a real problem. Each one was measured by impact."
        />

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.1}>
              <TiltCard>
                <article className="group relative rounded-3xl overflow-hidden glass hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Visual Side with Image */}
                    <div
                      className={`relative h-72 md:h-auto md:min-h-[420px] overflow-hidden bg-gradient-to-br ${project.color}`}
                    >
                      {/* Image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      {/* Project info overlay */}
                      <div className="absolute top-6 left-6 right-6">
                        <div className="text-white/70 text-xs font-mono uppercase tracking-widest mb-2">
                          {project.year} · {project.role}
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-white leading-tight">
                          {project.title.split(" ").slice(0, 2).join(" ")}
                        </div>
                      </div>

                      {/* Metrics floating at bottom */}
                      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2">
                        {project.metrics.map((m, i) => (
                          <div
                            key={i}
                            className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20"
                          >
                            <div className="text-white text-lg font-bold leading-tight">
                              {m.value}
                            </div>
                            <div className="text-white/80 text-[10px] uppercase tracking-wider">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-10 flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 font-medium">
                        {project.subtitle}
                      </p>

                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                          Key Features
                        </div>
                        <ul className="space-y-1.5">
                          {project.features.slice(0, 3).map((f, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-foreground mt-0.5">→</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-border">
                        {project.tech.map((t, i) => (
                          <span key={t} className="flex items-center gap-1.5">
                            <span className="text-xs font-mono text-muted-foreground">
                              {t}
                            </span>
                            {i < project.tech.length - 1 && (
                              <span className="text-border">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}