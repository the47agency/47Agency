import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/motion/blur-fade";
import {
  BarChart3,
  Globe2,
  Megaphone,
  Palette,
  PenTool,
  Share2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — 47 Agency",
  description:
    "Six core services by 47 Agency — social media, content, paid campaigns, branding, web development and strategy",
};

const services = [
  {
    number: "01",
    title: "Social Media Management",
    description:
      "We manage your social presence from strategy and planning to publishing, community and day-to-day growth",
    meta: "Strategy / Management / Growth",
    icon: Share2,
  },
  {
    number: "02",
    title: "Content Creation",
    description:
      "Creative content designed to make your brand visible, consistent and relevant across the platforms that matter",
    meta: "Content / Creative / Multi-Platform",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Lead Generation & Paid Campaigns",
    description:
      "Performance-focused campaigns built to turn attention into qualified leads, conversations and measurable results",
    meta: "Paid Media / Lead Generation / Performance",
    icon: Megaphone,
  },
  {
    number: "04",
    title: "Branding & Graphic Design",
    description:
      "Visual systems, identities and creative design that give your brand a clear, recognizable and premium presence",
    meta: "Brand Identity / Graphic Design / Art Direction",
    icon: Palette,
  },
  {
    number: "05",
    title: "Web Development",
    description:
      "Modern digital experiences designed around your brand, your audience and the way your business needs to grow",
    meta: "Web Design / Development / Digital",
    icon: Globe2,
  },
  {
    number: "06",
    title: "Strategy & Growth",
    description:
      "Clear strategic direction connecting your brand, marketing and growth efforts into one focused system",
    meta: "Strategy / Growth / Marketing",
    icon: BarChart3,
  },
];

export default function ServicesPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow="Services"
        title={
          <>
            Built to make
            <span className="text-primary"> brands move</span>
          </>
        }
        description="Six core capabilities built around one goal: creating stronger brands, better communication and measurable growth"
      />

      <section className="pb-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.number}
                    className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-border/70 bg-card/30 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card/50 hover:shadow-2xl"
                  >
                    {/* Background grid */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />

                    {/* Subtle glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Top row */}
                    <div className="relative flex items-start justify-between">
                      <div className="flex size-11 items-center justify-center rounded-xl border border-border/70 bg-background/40 transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/10">
                        <Icon className="size-5 text-muted-foreground transition-colors duration-500 group-hover:text-primary" />
                      </div>

                      <span className="text-[10px] font-medium tracking-[0.25em] text-muted-foreground/50">
                        {service.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative mt-10">
                      <h2 className="max-w-[280px] text-2xl font-semibold tracking-tight">
                        {service.title}
                      </h2>

                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {service.description}
                      </p>

                      <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60">
                        {service.meta}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-primary/50 transition-transform duration-500 group-hover:scale-x-100" />
                  </article>
                );
              })}
            </div>
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
