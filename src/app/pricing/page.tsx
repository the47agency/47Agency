import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/motion/blur-fade";
import { BorderBeam } from "@/components/motion/border-beam";
import { ShimmerButton } from "@/components/motion/shimmer-button";

export const metadata: Metadata = {
  title: "Contact — 47 Agency",
  description:
    "Start a conversation with 47 Agency and tell us what you are building",
};

const projectTypes = [
  "New project",
  "Branding",
  "Design",
  "Campaign",
  "Social media",
  "Website",
  "Other",
];

export default function ContactPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build{" "}
            <span className="text-primary">something worth seeing</span>
          </>
        }
        description="Tell us what you are building, what you need, and where you want to go"
      />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
              {/* Contact information */}
              <div className="relative overflow-hidden rounded-2xl border bg-card p-8 lg:p-10">
                <BorderBeam size={100} duration={10} />

                <div className="relative z-10 flex h-full flex-col">
                  <div>
                    <p className="text-sm font-medium text-primary">
                      Start a project
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                      Have something in mind?
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
                      Whether you are launching something new or looking to
                      transform what already exists, tell us about it and
                      we&apos;ll take it from there
                    </p>
                  </div>

                  <div className="mt-12 space-y-5">
                    <a
                      href="mailto:info@47agency.site"
                      className="group flex items-center gap-4 rounded-xl border bg-background/40 p-4 transition-colors hover:bg-muted/40"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border bg-muted/30">
                        <Mail className="size-4" />
                      </span>

                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">
                          Email
                        </p>

                        <p className="mt-1 truncate text-sm font-medium">
                          info@47agency.site
                        </p>
                      </div>

                      <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>

                    <div className="flex items-center gap-4 rounded-xl border bg-background/40 p-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border bg-muted/30">
                        <MapPin className="size-4" />
                      </span>

                      <div>
                        <p className="text-xs text-muted-foreground">
                          Based in
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          Istanbul, Türkiye
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto hidden pt-12 lg:block">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      47 Agency
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Creative ideas need a place to start
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="rounded-2xl border bg-card p-8 lg:p-10">
                <form
                  action="mailto:info@47agency.site"
                  method="post"
                  encType="text/plain"
                  className="space-y-7"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="Name"
                        type="text"
                        placeholder="Your name"
                        required
                        className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="Email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium"
                    >
                      Company or brand
                    </label>

                    <input
                      id="company"
                      name="Company"
                      type="text"
                      placeholder="Your company or brand"
                      className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="project"
                      className="text-sm font-medium"
                    >
                      What are you looking for?
                    </label>

                    <select
                      id="project"
                      name="Project type"
                      defaultValue=""
                      required
                      className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>

                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="budget"
                      className="text-sm font-medium"
                    >
                      Estimated budget
                    </label>

                    <select
                      id="budget"
                      name="Budget"
                      defaultValue=""
                      className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
                    >
                      <option value="" disabled>
                        Select a range
                      </option>

                      <option value="Under $500">
                        Under $500
                      </option>

                      <option value="$500 - $1,000">
                        $500 — $1,000
                      </option>

                      <option value="$1,000 - $2,500">
                        $1,000 — $2,500
                      </option>

                      <option value="$2,500+">
                        $2,500+
                      </option>

                      <option value="Not sure yet">
                        Not sure yet
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium"
                    >
                      Tell us about it
                    </label>

                    <textarea
                      id="message"
                      name="Message"
                      placeholder="Tell us about your project, goals, timeline, or anything else we should know"
                      required
                      rows={6}
                      className="w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm leading-6 outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>

                  <div className="pt-1">
                    <ShimmerButton
                      type="submit"
                      className="w-full"
                    >
                      Start the conversation
                      <ArrowUpRight className="size-4" />
                    </ShimmerButton>
                  </div>

                  <p className="text-center text-xs text-muted-foreground">
                    We&apos;ll review your message and get back to you
                  </p>
                </form>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="relative overflow-hidden rounded-2xl border bg-card px-6 py-12 text-center sm:px-10">
              <BorderBeam size={80} duration={9} />

              <div className="relative z-10">
                <p className="text-sm font-medium text-primary">
                  Not sure where to start?
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  That&apos;s what we&apos;re here for
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
                  You do not need to have everything figured out before
                  reaching out
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