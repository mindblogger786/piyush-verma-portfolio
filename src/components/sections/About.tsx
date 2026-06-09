"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { Code2, Database, Sparkles, Zap } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Full-Stack Range",
    description:
      "From Django REST APIs to React components — I build complete products end-to-end.",
    color: "text-indigo-500",
  },
  {
    icon: Zap,
    title: "Performance-First",
    description:
      "Every project I ship includes measurable optimizations. 85–90% query improvements are my standard.",
    color: "text-amber-500",
  },
  {
    icon: Database,
    title: "Database Expertise",
    description:
      "Strong fundamentals in MySQL and MongoDB. I design schemas that scale and queries that fly.",
    color: "text-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Continuous Growth",
    description:
      "BCA → MCA, multiple certifications, always shipping. Learning is non-negotiable.",
    color: "text-pink-500",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-max">
        <SectionHeading
          eyebrow="About"
          title='Engineering solutions <br/><span class="text-gradient-subtle">that drive impact.</span>'
          description="I'm a developer who treats every project as a product. My approach combines technical depth, business understanding, and a relentless focus on measurable outcomes."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Story Column */}
          <Reveal>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-foreground text-lg font-medium">
                My journey started with curiosity — and turned into a craft.
              </p>
              <p>
                Through my BCA at the University of Lucknow, I fell in love
                with building. I completed intensive Django training where I
                improved application response times by{" "}
                <span className="text-foreground font-semibold">20%</span>{" "}
                through SQL optimization alone.
              </p>
              <p>
                What sets me apart isn&apos;t just code — it&apos;s the
                combination of development expertise with business acumen from
                sales, communication from teaching calculus, and organizational
                precision from administration.
              </p>
              <p>
                Today, I&apos;m pursuing my MCA at Dr. A.P.J. Abdul Kalam
                Technical University while shipping production applications —
                preparing for impact-driven roles at leading tech companies.
              </p>
            </div>
          </Reveal>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <TiltCard>
                  <div className="group relative h-full p-6 rounded-2xl glass hover:bg-card transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className={`w-5 h-5 ${value.color}`} />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}