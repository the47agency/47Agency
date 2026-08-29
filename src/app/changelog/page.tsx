import type { Metadata } from "next";

import { ArrowRightIcon, CheckIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";

export const metadata: Metadata = {
  title: "How We Work — 47 Agency",
  description:
    "Discover how 47 Agency turns ideas, strategy and creative work into clear digital solutions for brands.",
};

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  points: string[];
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, your brand, your audience and the challenge you want to solve",
    points: [
      "Understand the business and current position",
      "Identify goals, challenges and opportunities",
      "Understand the target audience",
    ],
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Before creating anything, we define the direction that makes sense for the brand and the objective",
    points: [
      "Build the right creative direction",
      "Define the communication and content approach",
      "Connect creative decisions with business goals",
    ],
  },
  {
    number: "03",
    title: "Create",
    description:
      "This is where strategy becomes real work — from visual identity and design to content and campaigns",
    points: [
      "Branding and visual identity",
      "Graphic and digital design",
      "Content and campaign creative",
    ],
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Once everything is ready, we move from creation to execution and put the work in front of the right audience",
    points: [
      "Prepare and deliver final assets",
      "Launch campaigns and digital activities",
      "Keep execution consistent across channels",
    ],
  },
  {
    number: "05",
    title: "Optimize",
    description:
      "The work does not stop when something goes live — we review what is happening and look for ways to improve",
    points: [
      "Review performance and feedback",
      "Identify what can be improved",
      "Refine the approach when needed",
    ],
  },
];

const principles = [
  "Strategy before execution",
  "Creative work with a clear purpose",
  "One connected approach across disciplines",
  "Decisions based on the actual needs of the brand",
];

export default function HowWeWorkPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow="How We Work"
        title={
          <>
            From <span className="text-primary">idea</span> to execution
          </>
        }
        description="We combine strategy, creative thinking and digital execution to build work that has a clear reason behind it"
      />

      {/* Process */}
      <section className="pb-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <BlurFade
                key={step.number}
                delay={Math.min(i * 0.08, 0.3)}
              >
                <article className="group relative overflow-hidden rounded-2xl border bg-card p-7 transition-colors hover:border-primary/40 md:p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                    <div className="shrink-0">
                      <Badge
                        variant="outline"
                        className="font-mono text-primary"
                      >
                        {step.number}
                      </Badge>
                    </div>

                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        {step.title}
                      </h2>

                      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                        {step.description}
                      </p>

                      <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                        {step.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                              <CheckIcon className="size-3" />
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ArrowRightIcon className="hidden size-5 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-1 group-hover:text-primary md:block" />
                  </div>
                </article>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y bg-card/30 py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <p className="text-sm font-medium text-primary">
                  Our approach
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Work with a reason behind it
                </h2>
              </div>

              <div>
                <p className="text-sm leading-7 text-muted-foreground">
                  We do not believe in creating work just to fill a feed or
                  launch another campaign. Every project starts with a clear
                  objective, then strategy and creative execution work
                  together to reach it
                </p>

                <ul className="mt-8 space-y-4">
                  {principles.map((principle) => (
                    <li
                      key={principle}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <CheckIcon className="size-3" />
                      </span>

                      {principle}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      
      <SiteFooter />
    </main>
  );
}