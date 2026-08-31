import type { Metadata } from "next";
import {
  ArrowUpRightIcon,
  BrainIcon,
  Layers3Icon,
  SparklesIcon,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/motion/blur-fade";

export const metadata: Metadata = {
  title: "About — 47 Agency",
  description:
    "Discover 47 Agency, our way of thinking, and how we build brands, creative systems, and digital growth",
};

const aboutSections = [
  {
    number: "01",
    label: "Who We Are",
    title: "Built at the intersection of strategy and creativity",
    description:
      "47 Agency is a creative and digital agency built for brands that want more than ordinary marketing",
    body: "We bring strategy, branding, content, design, digital marketing, and performance together under one system so every part of a brand moves in the same direction",
    icon: SparklesIcon,
  },
  {
    number: "02",
    label: "How We Think",
    title: "Ideas are only valuable when they move the brand forward",
    description:
      "We do not create for the sake of creating",
    body: "Every visual, campaign, message, and digital experience starts with a purpose. We look at the bigger picture, understand the audience, identify the opportunity, and then build creative work around it",
    icon: BrainIcon,
  },
  {
    number: "03",
    label: "How We Work",
    title: "One system from the first idea to the final result",
    description:
      "Strategy, creative, execution, and performance work together",
    body: "We build flexible solutions around the actual needs of each brand, combining creative direction with digital execution and performance thinking to create work that looks strong and delivers a reason to exist",
    icon: Layers3Icon,
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow=""
        title={
          <>
            More than an agency
            <span className="text-primary"> built for brands</span>
          </>
        }
        description="47 Agency brings strategy, creativity, technology, and performance together to build brands that are made to stand out, connect, and grow"
      />

      <section className="pb-28">
        <div className="mx-auto max-w-3xl space-y-6 px-4 lg:px-8">
          {aboutSections.map((section, index) => {
            const Icon = section.icon;

            return (
              <BlurFade
                key={section.number}
                delay={Math.min(index * 0.1, 0.2)}
              >
                <article className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:bg-card/80 lg:p-10">
                  <div className="absolute right-6 top-6 text-5xl font-semibold tracking-tighter text-muted-foreground/10 transition-colors duration-300 group-hover:text-primary/10">
                    {section.number}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </span>

                      <span className="text-sm font-medium text-primary">
                        {section.label}
                      </span>
                    </div>

                    <ArrowUpRightIcon className="size-5 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>

                  <h2 className="mt-8 max-w-2xl text-2xl font-semibold tracking-tight text-balance lg:text-3xl">
                    {section.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                    {section.description}
                  </p>

                  <div className="mt-6 border-t pt-6">
                    <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                      {section.body}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/50">
                    <span className="size-1.5 rounded-full bg-primary" />
                    47 Agency
                  </div>
                </article>
              </BlurFade>
            );
          })}
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="relative overflow-hidden rounded-3xl border bg-card p-8 text-center lg:p-14">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.14),transparent_55%)]" />

              <div className="relative">
                <p className="text-sm font-medium text-primary">
                  The 47 Approach
                </p>

                <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                  Strategy gives the idea direction
                  <span className="text-primary"> creativity gives it impact</span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
                  We believe strong brands are not built from isolated pieces
                  but from a connected system where identity, content,
                  communication, and performance reinforce each other
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}