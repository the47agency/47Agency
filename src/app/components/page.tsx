"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowDownRight, ArrowLeft, ArrowUpRight } from "lucide-react";

type WorkCategory = "campaigns" | "branding" | "design" | "digital";

type WorkItem = {
  number: string;
  category: WorkCategory;
  label: string;
  title: string;
  description: string;
  meta: string;
  image?: string;
  accent?: string;
};

const filters = [
  { id: "all", label: "ALL" },
  { id: "campaigns", label: "AD CAMPAIGNS" },
  { id: "branding", label: "BRANDING" },
  { id: "design", label: "DESIGN" },
  { id: "digital", label: "DIGITAL" },
] as const;

const works: WorkItem[] = [
  // ============================================================
  // AD CAMPAIGNS — 5 SLOTS
  // ============================================================
  {
    number: "01",
    category: "campaigns",
    label: "AD CAMPAIGN",
    title: "Campaign One",
    description:
      "A performance-led campaign built around a clear creative direction and measurable action.",
    meta: "Campaign Strategy / Creative / Performance",
    image: "",
    accent: "blue",
  },
  {
    number: "02",
    category: "campaigns",
    label: "AD CAMPAIGN",
    title: "Campaign Two",
    description:
      "A focused campaign system designed to turn attention into qualified conversations.",
    meta: "Paid Media / Creative Direction",
    image: "",
    accent: "violet",
  },
  {
    number: "03",
    category: "campaigns",
    label: "AD CAMPAIGN",
    title: "Campaign Three",
    description:
      "Creative built for high-impact digital advertising across multiple placements.",
    meta: "Creative / Paid Social",
    image: "",
    accent: "cyan",
  },
  {
    number: "04",
    category: "campaigns",
    label: "AD CAMPAIGN",
    title: "Campaign Four",
    description:
      "A campaign concept connecting strong visual communication with performance.",
    meta: "Campaign / Art Direction",
    image: "",
    accent: "orange",
  },
  {
    number: "05",
    category: "campaigns",
    label: "AD CAMPAIGN",
    title: "Campaign Five",
    description:
      "A complete advertising direction designed to create attention and action.",
    meta: "Strategy / Creative / Media",
    image: "",
    accent: "pink",
  },

  // ============================================================
  // BRANDING — 5 SLOTS
  // ============================================================
  {
    number: "06",
    category: "branding",
    label: "BRANDING",
    title: "Identity One",
    description:
      "A visual identity system built around a distinctive brand language.",
    meta: "Identity / Art Direction",
    image: "",
    accent: "violet",
  },
  {
    number: "07",
    category: "branding",
    label: "BRANDING",
    title: "Identity Two",
    description:
      "A focused brand direction combining typography, color and visual consistency.",
    meta: "Brand Identity / Visual System",
    image: "",
    accent: "blue",
  },
  {
    number: "08",
    category: "branding",
    label: "BRANDING",
    title: "Identity Three",
    description:
      "A flexible identity created to give a growing brand a stronger presence.",
    meta: "Branding / Creative Direction",
    image: "",
    accent: "cyan",
  },
  {
    number: "09",
    category: "branding",
    label: "BRANDING",
    title: "Identity Four",
    description:
      "A complete visual direction designed around clarity and recognition.",
    meta: "Identity / Visual Direction",
    image: "",
    accent: "orange",
  },
  {
    number: "10",
    category: "branding",
    label: "BRANDING",
    title: "Identity Five",
    description:
      "A modern identity exploration translating strategy into a visual system.",
    meta: "Brand Strategy / Identity",
    image: "",
    accent: "pink",
  },

  // ============================================================
  // DESIGN — 5 SLOTS
  // ============================================================
  {
    number: "11",
    category: "design",
    label: "DESIGN",
    title: "Design One",
    description:
      "A graphic design system created for strong communication across digital formats.",
    meta: "Graphic Design / Art Direction",
    image: "",
    accent: "blue",
  },
  {
    number: "12",
    category: "design",
    label: "DESIGN",
    title: "Design Two",
    description:
      "A visual composition built to communicate an idea quickly and clearly.",
    meta: "Graphic Design / Creative",
    image: "",
    accent: "violet",
  },
  {
    number: "13",
    category: "design",
    label: "DESIGN",
    title: "Design Three",
    description:
      "A collection of visual assets developed around a consistent creative language.",
    meta: "Design System / Content",
    image: "",
    accent: "cyan",
  },
  {
    number: "14",
    category: "design",
    label: "DESIGN",
    title: "Design Four",
    description:
      "A campaign-ready visual direction designed for attention and consistency.",
    meta: "Graphic Design / Campaign",
    image: "",
    accent: "orange",
  },
  {
    number: "15",
    category: "design",
    label: "DESIGN",
    title: "Design Five",
    description:
      "A bold visual exploration developed for modern digital communication.",
    meta: "Creative Design / Visuals",
    image: "",
    accent: "pink",
  },

  // ============================================================
  // DIGITAL — 5 SLOTS
  // ============================================================
  {
    number: "16",
    category: "digital",
    label: "DIGITAL",
    title: "Digital One",
    description:
      "A digital experience connecting strategy, interaction and visual design.",
    meta: "Web Design / Digital",
    image: "",
    accent: "cyan",
  },
  {
    number: "17",
    category: "digital",
    label: "DIGITAL",
    title: "Digital Two",
    description:
      "A clean digital direction designed around usability and visual impact.",
    meta: "UI / UX / Digital",
    image: "",
    accent: "blue",
  },
  {
    number: "18",
    category: "digital",
    label: "DIGITAL",
    title: "Digital Three",
    description:
      "A digital concept translating brand language into an interactive experience.",
    meta: "Digital Experience / Design",
    image: "",
    accent: "violet",
  },
  {
    number: "19",
    category: "digital",
    label: "DIGITAL",
    title: "Digital Four",
    description:
      "A modern interface system designed to make complex ideas feel simple.",
    meta: "Web / Interface / Design",
    image: "",
    accent: "orange",
  },
  {
    number: "20",
    category: "digital",
    label: "DIGITAL",
    title: "Digital Five",
    description:
      "A digital direction built for a stronger online presence.",
    meta: "Digital / Creative Direction",
    image: "",
    accent: "pink",
  },
];

function getCategoryLabel(category: WorkCategory) {
  switch (category) {
    case "campaigns":
      return "AD CAMPAIGNS";
    case "branding":
      return "BRANDING";
    case "design":
      return "DESIGN";
    case "digital":
      return "DIGITAL";
  }
}

function getAccentClass(accent?: string) {
  switch (accent) {
    case "blue":
      return "from-blue-500/20 via-transparent to-transparent";
    case "violet":
      return "from-violet-500/20 via-transparent to-transparent";
    case "cyan":
      return "from-cyan-500/20 via-transparent to-transparent";
    case "orange":
      return "from-orange-500/20 via-transparent to-transparent";
    case "pink":
      return "from-pink-500/20 via-transparent to-transparent";
    default:
      return "from-white/10 via-transparent to-transparent";
  }
}

function EmptyVisual({
  number,
  category,
  accent,
}: {
  number: string;
  category: WorkCategory;
  accent?: string;
}) {
  return (
    <div className="relative min-h-[260px] overflow-hidden bg-neutral-950">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* Accent glow */}
      <div
        className={`absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br ${getAccentClass(
          accent
        )} blur-3xl`}
      />

      <div className="absolute right-[-80px] bottom-[-100px] h-72 w-72 rounded-full bg-white/[0.025] blur-3xl" />

      {/* Center mark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex size-32 items-center justify-center rounded-full border border-white/10">
          <div className="absolute inset-4 rounded-full border border-white/[0.07]" />
          <div className="absolute inset-9 rounded-full border border-white/[0.05]" />

          <span className="text-3xl font-black tracking-[-0.08em] text-white/90">
            47
          </span>
        </div>
      </div>

      {/* Slot information */}
      <div className="absolute left-7 top-7">
        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/35">
          {number} / {getCategoryLabel(category)}
        </span>
      </div>

      <div className="absolute bottom-7 left-7">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
          Image slot
        </span>
      </div>

      <div className="absolute bottom-7 right-7">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/20">
          47 LAB
        </span>
      </div>
    </div>
  );
}

function WorkVisual({ work }: { work: WorkItem }) {
  if (work.image) {
    return (
      <div
        className="relative min-h-[260px] overflow-hidden bg-neutral-950 bg-cover bg-center"
        style={{
          backgroundImage: `url("${work.image}")`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

        <div className="absolute left-7 top-7">
          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
            {work.number} / {getCategoryLabel(work.category)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <EmptyVisual
      number={work.number}
      category={work.category}
      accent={work.accent}
    />
  );
}

function WorkCard({ work }: { work: WorkItem }) {
  return (
    <Link href="#" className="group block">
      <article className="overflow-hidden rounded-2xl border border-border/70 bg-card/30 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-2xl">
        <WorkVisual work={work} />

        <div className="grid gap-6 p-6 sm:grid-cols-[70px_1fr_auto] sm:p-8">
          <div className="text-xs font-medium text-muted-foreground">
            {work.number}
          </div>

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              {work.label}
            </div>

            <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {work.title}
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              {work.description}
            </p>

            <p className="mt-5 text-xs text-muted-foreground/70">
              {work.meta}
            </p>
          </div>

          <div className="flex items-start justify-end">
            <div className="flex size-10 items-center justify-center rounded-full border border-border/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-foreground/40">
              <ArrowUpRight className="size-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function ComponentsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleWorks =
    activeFilter === "all"
      ? works
      : works.filter((work) => work.category === activeFilter);

  return (
    <>
      <style jsx>{`
        .lab-page-enter {
          animation: labPageFadeIn 0.55s ease-out both;
        }

        @keyframes labPageFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lab-page-enter {
            animation: none;
          }
        }
      `}</style>

      <main className="lab-page-enter min-h-screen">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-[220px_1fr]">
          {/* ======================================================
              SIDEBAR
          ====================================================== */}
          <aside className="hidden border-r border-border/60 lg:block">
            <div className="sticky top-0 flex h-screen flex-col px-7 py-10">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  47 Agency
                </p>

                <h2 className="mt-3 text-lg font-semibold tracking-tight">
                  LAB
                </h2>
              </div>

              <nav className="mt-12 space-y-1 text-sm">
                <a
                  href="#selected"
                  className="group flex items-center justify-between rounded-lg px-3 py-2 text-foreground transition-colors hover:bg-muted"
                >
                  Selected
                  <ArrowDownRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>

                <a
                  href="#campaigns"
                  className="group flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  Campaigns
                  <ArrowDownRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>

                <a
                  href="#branding"
                  className="group flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  Branding
                  <ArrowDownRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>

                <a
                  href="#design"
                  className="group flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  Design
                  <ArrowDownRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>

                <a
                  href="#digital"
                  className="group flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  Digital
                  <ArrowDownRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
              </nav>

              <div className="mt-auto">
                <div className="mb-5 h-px bg-border/60" />

                <p className="text-xs leading-5 text-muted-foreground">
                  Selected campaigns, identities, designs and digital work
                  developed by 47.
                </p>

                <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">
                  47 / 2026
                </p>
              </div>
            </div>
          </aside>

          {/* ======================================================
              MAIN
          ====================================================== */}
          <div className="px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            {/* Back to Home */}
            <div className="mb-8 flex justify-end">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                47 / HOME
              </Link>
            </div>

            {/* ====================================================
                HERO
            ==================================================== */}
            <section id="selected" className="max-w-5xl">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-foreground" />
                47 / LAB
              </div>

              <h1 className="mt-7 max-w-5xl text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                Ideas
                <br />
                <span className="text-muted-foreground">in motion.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                A collection of campaigns, identities, designs and digital
                work built by 47 beyond the brief.
              </p>
            </section>

            {/* ====================================================
                FILTERS
            ==================================================== */}
            <section className="mt-20 flex flex-wrap items-center gap-2 border-b border-border/60 pb-5">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                      isActive
                        ? "border-foreground bg-foreground text-background"
                        : "border-border/60 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </section>

            {/* ====================================================
                ALL / SELECTED WORK
            ==================================================== */}
            <section className="mt-10">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Selected work
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                    {activeFilter === "all"
                      ? "The Lab"
                      : filters.find((filter) => filter.id === activeFilter)
                          ?.label}
                  </h2>
                </div>

                <span className="text-xs text-muted-foreground">
                  {visibleWorks.length.toString().padStart(2, "0")} works
                </span>
              </div>

              <div className="space-y-14">
                {visibleWorks.map((work) => (
                  <div
                    key={work.number}
                    id={
                      work.number === "01"
                        ? "campaigns"
                        : work.number === "06"
                        ? "branding"
                        : work.number === "11"
                        ? "design"
                        : work.number === "16"
                        ? "digital"
                        : undefined
                    }
                  >
                    <WorkCard work={work} />
                  </div>
                ))}
              </div>
            </section>

            {/* ====================================================
                LAB STATEMENT
            ==================================================== */}
            <section className="mt-32 overflow-hidden rounded-2xl border border-border/70 bg-card/30">
              <div className="grid lg:grid-cols-[1fr_0.8fr]">
                <div className="p-8 sm:p-12">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    47 / LAB
                  </p>

                  <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                    Not just work.
                    <br />
                    <span className="text-muted-foreground">
                      A place to explore.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">
                    The LAB is where 47 collects the campaigns, identities,
                    designs and digital directions that shape how we think,
                    build and communicate.
                  </p>
                </div>

                <div className="relative min-h-[320px] border-t border-border/60 lg:border-l lg:border-t-0">
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex size-48 items-center justify-center rounded-full border border-border/70">
                      <div className="absolute inset-5 rounded-full border border-border/50" />
                      <div className="absolute inset-10 rounded-full border border-border/40" />

                      <span className="text-5xl font-black tracking-[-0.08em]">
                        47
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ====================================================
                CONTACT CTA
            ==================================================== */}
            <section className="mt-32 border-t border-border/60 py-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Have something worth building?
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    Let&apos;s make it move.
                  </h2>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-xs font-medium transition-colors hover:bg-foreground hover:text-background"
                >
                  Start a project
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </section>

            {/* ====================================================
                FOOTER
            ==================================================== */}
            <footer className="flex flex-col gap-3 border-t border-border/60 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <span>© 2026 47 Agency. All rights reserved.</span>

              <span>47 / LAB</span>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}