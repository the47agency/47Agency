import Image from "next/image";

import {
  CheckIcon,
  GaugeIcon,
  LayersIcon,
  MoonIcon,
  MousePointerClickIcon,
  PaletteIcon,
  RocketIcon,
  SparklesIcon,
  StarIcon,
  ZapIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroMockup } from "@/components/demo/hero-mockup";
import { AnimatedGradientText } from "@/components/velora/animated-gradient-text";
import { AuroraBackground } from "@/components/velora/aurora-background";
import { AvatarCircles } from "@/components/velora/avatar-circles";
import { BentoCard, BentoGrid } from "@/components/velora/bento-grid";
import { BlurFade } from "@/components/velora/blur-fade";
import { BorderBeam } from "@/components/velora/border-beam";
import { Dock, DockIcon } from "@/components/velora/dock";
import { GridPattern } from "@/components/velora/grid-pattern";
import { Marquee } from "@/components/velora/marquee";
import { Meteors } from "@/components/velora/meteors";
import { NumberTicker } from "@/components/velora/number-ticker";
import { OrbitingCircles } from "@/components/velora/orbiting-circles";
import { Particles } from "@/components/velora/particles";
import { RetroGrid } from "@/components/velora/retro-grid";
import { ScrollProgress } from "@/components/velora/scroll-progress";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { SpotlightCard } from "@/components/velora/spotlight-card";
import { TextReveal } from "@/components/velora/text-reveal";
import { TiltCard } from "@/components/velora/tilt-card";
import { Typewriter } from "@/components/velora/typewriter";

const logos = [
  "Meta",
  "Google Ads",
  "TikTok Ads",
  "Instagram",
  "WhatsApp",
  "LinkedIn",
  "Google",
  "YouTube",
];

const stats = [
  { value: 47, suffix: "+", prefix: "", label: "Creative directions" },
  {
    value: 150,
    suffix: "K+",
    prefix: "$",
    label: "Sales influenced through paid ads",
  },
  { value: 4, suffix: "", prefix: "", label: "Working languages" },
  { value: 3, suffix: "+", prefix: "", label: "Core markets" },
];

const testimonials = [
  {
    quote:
      "The campaign direction gave the brand a much clearer voice and a stronger path from idea to launch",
    name: "N**** A****",
    role: "Growth Campaign",
  },
  {
    quote:
      "The creative system made every campaign touchpoint feel connected and recognizably ours",
    name: "R** Studio",
    role: "Brand Development",
  },
  {
    quote:
      "We finally had strategy creative and paid media working from the same direction",
    name: "M*** Group",
    role: "Paid Media",
  },
  {
    quote:
      "The team turned a rough brief into a clear campaign concept that was easy to execute",
    name: "A**** Co",
    role: "Campaign Creative",
  },
  {
    quote:
      "The work felt focused from positioning through content and launch without unnecessary complexity",
    name: "S*** Brand",
    role: "Creative Strategy",
  },
  {
    quote:
      "A practical approach with strong ideas and a clear understanding of what the campaign needed",
    name: "K**** Labs",
    role: "Campaign Strategy",
  },
];

const faqs = [
  {
    q: "What does 47 Agency do",
    a: "47 Agency brings strategy branding creative campaigns paid advertising and digital growth together under one direction",
  },
  {
    q: "What services do you offer",
    a: "Our core work includes brand strategy visual identity creative production content paid advertising campaign management and digital experiences",
  },
  {
    q: "Which markets do you work with",
    a: "We work across Turkey MENA and selected international markets with a focus on ambitious brands and growing businesses",
  },
  {
    q: "Can you manage paid advertising campaigns",
    a: "Yes we plan launch manage and optimize paid campaigns across Meta Google Ads TikTok Ads and other relevant channels",
  },
  {
    q: "How do we start a project",
    a: "Share your goals current situation and what you want to achieve and we will define the right direction for the project",
  },
];

const freeFeatures = [
  "Strategy and creative direction",
  "Branding and visual identity",
  "Content and campaign creative",
  "Paid advertising",
  "Digital growth support",
];

const proFeatures = [
  "Campaign strategy",
  "Performance marketing",
  "Creative production",
  "Landing pages and digital experiences",
  "Growth systems",
];

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />

      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-28">
        <AuroraBackground intensity="subtle" />

        <GridPattern
          width={48}
          height={48}
          className="fill-transparent stroke-border/60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        />

        <div className="relative mx-auto max-w-6xl px-4 text-center lg:px-8">
          <BlurFade delay={0} direction="down">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-sm backdrop-blur">
              <span className="font-medium">
                47 — Creative and Digital Marketing Agency
              </span>
            </span>
          </BlurFade>

          <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-balance lg:text-7xl">
            <TextReveal text="We build brands that" />{" "}
            <AnimatedGradientText>
              <Typewriter
                words={[
                  "feel bold",
                  "stand out",
                  "move forward",
                  "get noticed",
                ]}
              />
            </AnimatedGradientText>
          </h1>

          <BlurFade delay={0.35}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              Strategy creative campaigns and digital execution working
              together to help ambitious brands get noticed grow with purpose
              and move faster
            </p>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ShimmerButton>
                <RocketIcon className="size-4" />
                Start a project
              </ShimmerButton>

              <Button variant="ghost" size="lg" asChild>
                <a href="#features">Explore our work</a>
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.6}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <AvatarCircles
                people={[
                  "Strategy",
                  "Design",
                  "Media",
                  "Growth",
                  "Creative",
                  "47",
                ]}
                extra={47}
              />

              <div className="flex flex-col items-center gap-0.5 sm:items-start">
                <span className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="size-4 fill-current" />
                  ))}
                </span>

                <span className="text-sm text-muted-foreground">
                  Strategy creative and execution working as one
                </span>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.75} offset={32}>
            <HeroMockup className="mt-20" />
          </BlurFade>

          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <BlurFade key={stat.label} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-4xl font-semibold tracking-tight">
                    <NumberTicker
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </span>

                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

        {/* Platform marquee */}
      <section className="border-y border-border/40 py-12">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <Marquee pauseOnHover className="[--duration:30s]">
            {[
              {
                name: "LinkedIn",
                logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
              },
              {
                name: "Google Ads",
                logo: "https://cdn.simpleicons.org/googleads/ffffff",
              },
              {
                name: "WhatsApp Business",
                logo: "https://cdn.simpleicons.org/whatsapp/ffffff",
              },
              {
                name: "Instagram",
                logo: "https://cdn.simpleicons.org/instagram/ffffff",
              },
              {
                name: "TikTok Ads",
                logo: "https://cdn.simpleicons.org/tiktok/ffffff",
              },
              {
                name: "Meta",
                logo: "https://cdn.simpleicons.org/meta/ffffff",
              },
              {
                name: "Telegram Ads",
                logo: "https://cdn.simpleicons.org/telegram/ffffff",
              },
              {
                name: "Google Analytics",
                logo: "https://cdn.simpleicons.org/googleanalytics/ffffff",
              },
            ].map((platform) => (
              <div
                key={platform.name}
                className="mx-8 flex h-10 w-24 items-center justify-center opacity-50 transition-opacity duration-300 hover:opacity-100"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="max-h-8 max-w-[90px] object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

{/* What we bring together */}
 <section
  id="features"
  className="relative isolate min-h-[100svh] w-full overflow-hidden bg-black"
>
  {/* =========================
      FULL-BLEED WORLD MAP
      ========================= */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Map */}
    <div
      className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-[0.72]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524666041070-9c876903c9c5?auto=format&fit=crop&w=2400&q=90')",
        filter: "brightness(0.42) saturate(1.35) hue-rotate(145deg)",
      }}
    />

    {/* Dark blue atmospheric layer */}
    <div className="absolute inset-0 bg-[#00121c]/55 mix-blend-multiply" />

    {/* Neon blue atmosphere */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,183,255,0.13)_0%,rgba(0,80,130,0.08)_35%,transparent_70%)]" />

    {/* Top fade — blends into previous section */}
    <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-black via-black/80 to-transparent" />

    {/* Bottom fade — blends into next section */}
    <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black via-black/80 to-transparent" />

    {/* Side fades */}
    <div className="absolute inset-y-0 left-0 w-[14%] bg-gradient-to-r from-black/75 to-transparent" />
    <div className="absolute inset-y-0 right-0 w-[14%] bg-gradient-to-l from-black/75 to-transparent" />

    {/* Subtle moving scan light */}
    <div className="world-scan absolute inset-y-[18%] left-1/2 w-[2px] -translate-x-1/2 bg-cyan-300/70 blur-[3px]" />
  </div>

  {/* =========================
      CONTENT
      ========================= */}
  <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] items-center justify-center px-6 py-24 lg:px-12">

    {/* Headline */}
    <div className="absolute left-1/2 top-[8%] z-30 -translate-x-1/2 text-center">
      <h2 className="whitespace-nowrap text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
        Where{" "}
        <span className="text-[#287cff]">47</span>{" "}
        turns your ads
      </h2>
    </div>

    {/* =========================
        NETWORK / CONNECTION LINES
        ========================= */}
    <svg
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      {/* Meta → Rocket */}
      <path
        d="M 180 405 C 390 405, 520 455, 770 500"
        className="network-line"
      />

      {/* Google → Rocket */}
      <path
        d="M 1420 405 C 1210 405, 1080 455, 830 500"
        className="network-line"
      />

      {/* LinkedIn → Rocket */}
      <path
        d="M 800 190 C 800 285, 800 370, 800 465"
        className="network-line"
      />

      {/* TikTok → Rocket */}
      <path
        d="M 330 690 C 490 625, 610 555, 770 510"
        className="network-line"
      />

      {/* Snapchat → Rocket */}
      <path
        d="M 1270 690 C 1110 625, 990 555, 830 510"
        className="network-line"
      />

      {/* Animated light travelling through lines */}
      <path
        d="M 180 405 C 390 405, 520 455, 770 500"
        className="network-light network-light-meta"
      />

      <path
        d="M 1420 405 C 1210 405, 1080 455, 830 500"
        className="network-light network-light-google"
      />

      <path
        d="M 800 190 C 800 285, 800 370, 800 465"
        className="network-light network-light-linkedin"
      />

      <path
        d="M 330 690 C 490 625, 610 555, 770 510"
        className="network-light network-light-tiktok"
      />

      <path
        d="M 1270 690 C 1110 625, 990 555, 830 510"
        className="network-light network-light-snapchat"
      />
    </svg>

    {/* =========================
        CENTER ROCKET
        ========================= */}
    <div className="rocket-position absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
      <div className="rocket-glow absolute inset-[-28px] rounded-full bg-cyan-400/15 blur-2xl" />

      <div className="relative flex h-24 w-24 items-center justify-center">

        {/* Rocket body */}
        <div className="relative h-[62px] w-[34px] rotate-0 rounded-[50%_50%_42%_42%] border border-cyan-100/80 bg-gradient-to-b from-white via-slate-100 to-slate-300 shadow-[0_0_28px_rgba(0,200,255,0.75)]">

          {/* Window */}
          <div className="absolute left-1/2 top-[18px] h-[14px] w-[14px] -translate-x-1/2 rounded-full border border-cyan-300 bg-[#03131e] shadow-[0_0_10px_rgba(0,200,255,0.8)]" />

          {/* Left fin */}
          <div className="absolute -bottom-[2px] -left-[13px] h-[19px] w-[14px] -skew-x-[25deg] border-b border-cyan-400 bg-slate-300" />

          {/* Right fin */}
          <div className="absolute -bottom-[2px] -right-[13px] h-[19px] w-[14px] skew-x-[25deg] border-b border-cyan-400 bg-slate-300" />
        </div>

        {/* Engine flame */}
        <div className="rocket-flame absolute bottom-[-24px] left-1/2 h-8 w-3 -translate-x-1/2 rounded-full bg-gradient-to-b from-white via-cyan-300 to-blue-600 blur-[2px]" />
      </div>
    </div>

    {/* =========================
        PLATFORM ICONS
        ========================= */}

    {/* META */}
    <div className="platform platform-meta absolute left-[9%] top-[42%] z-30">
      <div className="platform-icon">
        <img
          src="https://cdn.simpleicons.org/meta/1877F2"
          alt="Meta"
          className="h-7 w-7 object-contain"
        />
      </div>

      <span>Meta Ads</span>
    </div>

    {/* GOOGLE ADS */}
    <div className="platform platform-google absolute right-[9%] top-[42%] z-30">
      <div className="platform-icon">
        <img
          src="https://cdn.simpleicons.org/googleads/4285F4"
          alt="Google Ads"
          className="h-7 w-7 object-contain"
        />
      </div>

      <span>Google Ads</span>
    </div>

    {/* LINKEDIN */}
   <div className="platform platform-linkedin absolute left-1/2 top-[18%] z-30 -translate-x-1/2">
  <div className="platform-icon">
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#0A66C2"
        d="M6.5 8.5H3.5V20H6.5V8.5ZM5 3.5C4.034 3.5 3.25 4.284 3.25 5.25C3.25 6.216 4.034 7 5 7C5.966 7 6.75 6.216 6.75 5.25C6.75 4.284 5.966 3.5 5 3.5ZM9 8.5H11.9V10.07C12.7 8.99 13.85 8.25 15.55 8.25C18.85 8.25 20.75 10.4 20.75 14.05V20H17.75V14.5C17.75 12.65 17.05 11.55 15.55 11.55C14.05 11.55 13.25 12.65 13.25 14.5V20H9V8.5Z"
      />
    </svg>
  </div>

  <span>LinkedIn Ads</span>
</div>

    {/* TIKTOK */}
    <div className="platform platform-tiktok absolute bottom-[12%] left-[17%] z-30">
      <div className="platform-icon">
        <img
          src="https://cdn.simpleicons.org/tiktok/FFFFFF"
          alt="TikTok"
          className="h-7 w-7 object-contain"
        />
      </div>

      <span>TikTok Ads</span>
    </div>

    {/* SNAPCHAT */}
    <div className="platform platform-snapchat absolute bottom-[12%] right-[17%] z-30">
      <div className="platform-icon">
        <img
          src="https://cdn.simpleicons.org/snapchat/FFFC00"
          alt="Snapchat"
          className="h-7 w-7 object-contain"
        />
      </div>

      <span>Snapchat Ads</span>
    </div>
  </div>

  {/* =========================
      SECTION-SPECIFIC STYLES
      ========================= */}
  <style>{`
    .platform {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 9px;
      min-width: 90px;
      transform: translateZ(0);
    }

    .platform-icon {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 58px;
      height: 58px;
      border-radius: 9999px;
      border: 1px solid rgba(0, 190, 255, 0.5);
      background: rgba(2, 10, 18, 0.82);
      box-shadow:
        0 0 0 1px rgba(0, 190, 255, 0.08),
        0 0 18px rgba(0, 190, 255, 0.14);
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    }

    .platform-icon::after {
      content: "";
      position: absolute;
      inset: -7px;
      border-radius: inherit;
      border: 1px solid rgba(0, 190, 255, 0.08);
      animation: iconPulse 3s ease-in-out infinite;
    }

    .platform:hover .platform-icon {
      transform: scale(1.08);
      box-shadow:
        0 0 25px rgba(0, 190, 255, 0.3),
        inset 0 0 18px rgba(0, 190, 255, 0.08);
    }

    .platform span {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: -0.01em;
      color: rgba(255, 255, 255, 0.8);
      white-space: nowrap;
      text-shadow: 0 0 12px rgba(0, 0, 0, 0.9);
    }

    .network-line {
      stroke: rgba(0, 185, 255, 0.27);
      stroke-width: 1.15;
      fill: none;
    }

    .network-light {
      stroke: rgba(150, 240, 255, 0.95);
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-dasharray: 1 160;
      fill: none;
      filter:
        drop-shadow(0 0 4px rgba(0, 220, 255, 1))
        drop-shadow(0 0 9px rgba(0, 170, 255, 0.75));
      animation: travelLight 3.8s linear infinite;
    }

    .network-light-google {
      animation-delay: -1.2s;
    }

    .network-light-linkedin {
      animation-delay: -2.1s;
    }

    .network-light-tiktok {
      animation-delay: -0.7s;
    }

    .network-light-snapchat {
      animation-delay: -2.8s;
    }

    .rocket-glow {
      animation: rocketGlow 2.8s ease-in-out infinite;
    }

    .rocket-flame {
      transform-origin: top center;
      animation: flame 0.55s ease-in-out infinite alternate;
    }

    .world-scan {
      animation: scan 6s ease-in-out infinite;
    }

    @keyframes travelLight {
      0% {
        stroke-dashoffset: 0;
      }

      100% {
        stroke-dashoffset: -161;
      }
    }

    @keyframes iconPulse {
      0%,
      100% {
        opacity: 0.25;
        transform: scale(0.96);
      }

      50% {
        opacity: 0.75;
        transform: scale(1.04);
      }
    }

    @keyframes rocketGlow {
      0%,
      100% {
        opacity: 0.45;
        transform: scale(0.9);
      }

      50% {
        opacity: 1;
        transform: scale(1.12);
      }
    }

    @keyframes flame {
      from {
        height: 22px;
        opacity: 0.7;
      }

      to {
        height: 34px;
        opacity: 1;
      }
    }

    @keyframes scan {
      0%,
      100% {
        opacity: 0.15;
        transform: translateX(-180px);
      }

      50% {
        opacity: 0.65;
        transform: translateX(180px);
      }
    }

    @media (max-width: 900px) {
      .platform-icon {
        width: 50px;
        height: 50px;
      }

      .platform span {
        font-size: 10px;
      }

      .platform-meta {
        left: 4%;
      }

      .platform-google {
        right: 4%;
      }

      .platform-tiktok {
        left: 8%;
      }

      .platform-snapchat {
        right: 8%;
      }
    }

    @media (max-width: 640px) {
      .platform-linkedin {
        top: 20%;
      }

      .platform-tiktok,
      .platform-snapchat {
        bottom: 15%;
      }

      .rocket-position {
        top: 51%;
      }
    }
  `}</style>
</section>

{/* Creative strategy meets execution */}
<section className="relative py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <BlurFade direction="right">
            <div>
              <span className="text-sm font-medium text-primary">
                Creative strategy meets execution
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                From <span className="text-primary">idea</span> to execution
              </h2>

              <p className="mt-4 text-muted-foreground">
                We turn positioning and campaign thinking into creative work
                people notice and performance systems built to move the right
                audience
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Creative direction built around the brand and business goal",
                  "Campaign concepts shaped for the right audience",
                  "Execution across the channels that matter",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <CheckIcon className="size-3" />
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>

          <BlurFade direction="left" delay={0.15}>
            <div className="relative mx-auto flex aspect-square w-full max-w-xl items-center justify-center">
              <div className="absolute inset-8 rounded-full border border-border/30" />
              <div className="absolute inset-20 rounded-full border border-primary/10" />

              <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-primary/60 bg-background shadow-[0_0_35px_rgba(59,130,246,0.22)]">
                <Image
                  src="/logo.png"
                  alt="47 Agency"
                  fill
                  sizes="80px"
                  className="object-contain p-3"
                />
              </div>

              {[
                {
                  icon: LayersIcon,
                  label: "Strategy",
                  position: "left-1/2 top-0 -translate-x-1/2",
                },
                {
                  icon: PaletteIcon,
                  label: "Branding",
                  position: "right-0 top-1/2 -translate-y-1/2",
                },
                {
                  icon: GaugeIcon,
                  label: "Performance",
                  position: "right-1/2 bottom-0 translate-x-1/2",
                },
                {
                  icon: ZapIcon,
                  label: "Campaigns",
                  position: "left-0 top-1/2 -translate-y-1/2",
                },
                {
                  icon: MousePointerClickIcon,
                  label: "Content",
                  position: "right-8 top-8",
                },
                {
                  icon: RocketIcon,
                  label: "Growth",
                  position: "left-8 bottom-8",
                },
              ].map(({ icon: Icon, label, position }) => (
                <div
                  key={label}
                  className={`absolute ${position} flex size-14 items-center justify-center rounded-full border bg-card/80 text-muted-foreground backdrop-blur`}
                  title={label}
                >
                  <Icon className="size-5" />
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Full Width 47 DNA Motion */}
      <section className="relative min-h-[100svh] w-full overflow-hidden border-y border-border/20 bg-black">
        {/* Deep background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.10)_0%,rgba(0,0,0,0)_42%,rgba(0,0,0,0.65)_100%)]" />

        {/* Full page animated grid */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 dna-grid" />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.15)_55%,rgba(0,0,0,0.75)_100%)]" />
        </div>

        {/* Ambient central glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[100px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.06] blur-[80px]" />

        {/* Main DNA / Energy System */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 1600 900"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              {/* Blue DNA gradient */}
              <linearGradient
                id="fullDnaBlue"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="#2563eb"
                  stopOpacity="0"
                />

                <stop
                  offset="18%"
                  stopColor="#2563eb"
                  stopOpacity="0.25"
                />

                <stop
                  offset="38%"
                  stopColor="#3b82f6"
                  stopOpacity="0.75"
                />

                <stop
                  offset="50%"
                  stopColor="#93c5fd"
                  stopOpacity="1"
                />

                <stop
                  offset="62%"
                  stopColor="#3b82f6"
                  stopOpacity="0.75"
                />

                <stop
                  offset="82%"
                  stopColor="#2563eb"
                  stopOpacity="0.25"
                />

                <stop
                  offset="100%"
                  stopColor="#2563eb"
                  stopOpacity="0"
                />
              </linearGradient>

              {/* Purple DNA gradient */}
              <linearGradient
                id="fullDnaPurple"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="#7c3aed"
                  stopOpacity="0"
                />

                <stop
                  offset="20%"
                  stopColor="#8b5cf6"
                  stopOpacity="0.3"
                />

                <stop
                  offset="42%"
                  stopColor="#a855f7"
                  stopOpacity="0.75"
                />

                <stop
                  offset="50%"
                  stopColor="#d8b4fe"
                  stopOpacity="1"
                />

                <stop
                  offset="58%"
                  stopColor="#a855f7"
                  stopOpacity="0.75"
                />

                <stop
                  offset="80%"
                  stopColor="#8b5cf6"
                  stopOpacity="0.3"
                />

                <stop
                  offset="100%"
                  stopColor="#7c3aed"
                  stopOpacity="0"
                />
              </linearGradient>

              {/* Cyan energy gradient */}
              <linearGradient
                id="fullDnaCyan"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="#22d3ee"
                  stopOpacity="0"
                />

                <stop
                  offset="30%"
                  stopColor="#22d3ee"
                  stopOpacity="0.35"
                />

                <stop
                  offset="50%"
                  stopColor="#67e8f9"
                  stopOpacity="0.95"
                />

                <stop
                  offset="70%"
                  stopColor="#22d3ee"
                  stopOpacity="0.35"
                />

                <stop
                  offset="100%"
                  stopColor="#22d3ee"
                  stopOpacity="0"
                />
              </linearGradient>

              <filter
                id="fullDnaGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur
                  stdDeviation="5"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter
                id="fullStrongGlow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur
                  stdDeviation="12"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* =========================
                PRIMARY DNA STRANDS
               ========================= */}

            <path
              d="M -150 180 C 220 180 350 180 560 335 C 650 400 705 450 800 450 C 895 450 950 400 1040 335 C 1250 180 1380 180 1750 180"
              fill="none"
              stroke="url(#fullDnaBlue)"
              strokeWidth="2.4"
              filter="url(#fullDnaGlow)"
              strokeDasharray="150 1300"
              className="full-dna-flow full-dna-1"
            />

            <path
              d="M -150 720 C 220 720 350 720 560 565 C 650 500 705 450 800 450 C 895 450 950 500 1040 565 C 1250 720 1380 720 1750 720"
              fill="none"
              stroke="url(#fullDnaPurple)"
              strokeWidth="2.2"
              filter="url(#fullDnaGlow)"
              strokeDasharray="135 1320"
              className="full-dna-flow full-dna-2"
            />

            {/* =========================
                SECONDARY DNA STRANDS
               ========================= */}

            <path
              d="M -150 270 C 200 270 355 270 575 375 C 665 418 720 450 800 450 C 880 450 935 418 1025 375 C 1245 270 1400 270 1750 270"
              fill="none"
              stroke="url(#fullDnaPurple)"
              strokeWidth="1.6"
              filter="url(#fullDnaGlow)"
              strokeDasharray="100 1450"
              className="full-dna-flow full-dna-3"
            />

            <path
              d="M -150 630 C 200 630 355 630 575 525 C 665 482 720 450 800 450 C 880 450 935 482 1025 525 C 1245 630 1400 630 1750 630"
              fill="none"
              stroke="url(#fullDnaBlue)"
              strokeWidth="1.6"
              filter="url(#fullDnaGlow)"
              strokeDasharray="95 1450"
              className="full-dna-flow full-dna-4"
            />

            {/* =========================
                FINE ENERGY LINES
               ========================= */}

            <path
              d="M -150 350 C 220 350 380 350 590 410 C 680 436 735 450 800 450 C 865 450 920 436 1010 410 C 1220 350 1380 350 1750 350"
              fill="none"
              stroke="url(#fullDnaCyan)"
              strokeWidth="1"
              filter="url(#fullDnaGlow)"
              strokeDasharray="65 1550"
              className="full-dna-flow full-dna-5"
            />

            <path
              d="M -150 550 C 220 550 380 550 590 490 C 680 464 735 450 800 450 C 865 450 920 464 1010 490 C 1220 550 1380 550 1750 550"
              fill="none"
              stroke="url(#fullDnaPurple)"
              strokeWidth="1"
              filter="url(#fullDnaGlow)"
              strokeDasharray="70 1520"
              className="full-dna-flow full-dna-6"
            />

            <path
              d="M -150 420 C 250 420 420 420 610 438 C 700 446 755 450 800 450 C 845 450 900 446 990 438 C 1180 420 1350 420 1750 420"
              fill="none"
              stroke="rgba(96,165,250,0.28)"
              strokeWidth="0.8"
              strokeDasharray="45 1700"
              className="full-dna-flow full-dna-7"
            />

            <path
              d="M -150 480 C 250 480 420 480 610 462 C 700 454 755 450 800 450 C 845 450 900 454 990 462 C 1180 480 1350 480 1750 480"
              fill="none"
              stroke="rgba(168,85,247,0.28)"
              strokeWidth="0.8"
              strokeDasharray="45 1700"
              className="full-dna-flow full-dna-8"
            />

            {/* =========================
                RADIAL ENERGY RAYS
               ========================= */}

            <g
              className="energy-rays"
              transform="translate(800 450)"
            >
              <line
                x1="-390"
                y1="0"
                x2="-95"
                y2="0"
                stroke="#3b82f6"
                strokeOpacity="0.45"
                strokeWidth="1"
              />

              <line
                x1="95"
                y1="0"
                x2="390"
                y2="0"
                stroke="#3b82f6"
                strokeOpacity="0.45"
                strokeWidth="1"
              />

              <line
                x1="-310"
                y1="-120"
                x2="-75"
                y2="-30"
                stroke="#8b5cf6"
                strokeOpacity="0.45"
                strokeWidth="1"
              />

              <line
                x1="75"
                y1="30"
                x2="310"
                y2="120"
                stroke="#8b5cf6"
                strokeOpacity="0.45"
                strokeWidth="1"
              />

              <line
                x1="-310"
                y1="120"
                x2="-75"
                y2="30"
                stroke="#2563eb"
                strokeOpacity="0.45"
                strokeWidth="1"
              />

              <line
                x1="75"
                y1="-30"
                x2="310"
                y2="-120"
                stroke="#2563eb"
                strokeOpacity="0.45"
                strokeWidth="1"
              />

              <line
                x1="-220"
                y1="-220"
                x2="-55"
                y2="-55"
                stroke="#22d3ee"
                strokeOpacity="0.3"
                strokeWidth="0.8"
              />

              <line
                x1="55"
                y1="55"
                x2="220"
                y2="220"
                stroke="#22d3ee"
                strokeOpacity="0.3"
                strokeWidth="0.8"
              />

              <line
                x1="-220"
                y1="220"
                x2="-55"
                y2="55"
                stroke="#a855f7"
                strokeOpacity="0.3"
                strokeWidth="0.8"
              />

              <line
                x1="55"
                y1="-55"
                x2="220"
                y2="-220"
                stroke="#a855f7"
                strokeOpacity="0.3"
                strokeWidth="0.8"
              />
            </g>

            {/* =========================
                CENTRAL RINGS
               ========================= */}

            <circle
              cx="800"
              cy="450"
              r="190"
              fill="none"
              stroke="rgba(59,130,246,0.08)"
              strokeWidth="1"
              className="central-ring central-ring-1"
            />

            <circle
              cx="800"
              cy="450"
              r="155"
              fill="none"
              stroke="rgba(96,165,250,0.10)"
              strokeWidth="1"
              className="central-ring central-ring-2"
            />

            <circle
              cx="800"
              cy="450"
              r="125"
              fill="none"
              stroke="rgba(139,92,246,0.12)"
              strokeWidth="1"
              className="central-ring central-ring-3"
            />

            <circle
              cx="800"
              cy="450"
              r="105"
              fill="none"
              stroke="rgba(96,165,250,0.14)"
              strokeWidth="1"
              strokeDasharray="5 12"
              className="central-ring central-ring-4"
            />

            {/* Central energy point */}
            <circle
              cx="800"
              cy="450"
              r="12"
              fill="#3b82f6"
              opacity="0.18"
              filter="url(#fullStrongGlow)"
            />

            <circle
              cx="800"
              cy="450"
              r="5"
              fill="#60a5fa"
              filter="url(#fullStrongGlow)"
            />

            <circle
              cx="800"
              cy="450"
              r="2.5"
              fill="#ffffff"
            />
          </svg>

          {/* 47 CENTER LOGO */}
          <div className="relative z-20 flex size-44 items-center justify-center rounded-full border border-blue-400/70 bg-black shadow-[0_0_35px_rgba(59,130,246,0.55),0_0_100px_rgba(59,130,246,0.22)] sm:size-52 lg:size-60">
            {/* Outer animated ring */}
            <div className="absolute -inset-4 rounded-full border border-blue-400/20 animate-[pulse_3s_ease-in-out_infinite]" />

            {/* Second ring */}
            <div className="absolute -inset-8 rounded-full border border-blue-400/10" />

            {/* Purple ring */}
            <div className="absolute inset-4 rounded-full border border-purple-500/20" />

            {/* Inner ring */}
            <div className="absolute inset-8 rounded-full border border-blue-400/15" />

            <Image
              src="/logo.png"
              alt="47 Agency"
              width={150}
              height={150}
              priority
              className="relative z-10 h-auto w-[105px] object-contain sm:w-[125px] lg:w-[145px]"
            />
          </div>
        </div>

        {/* Subtle particles */}
        <div className="pointer-events-none absolute inset-0">
          <span className="dna-particle dna-particle-1" />
          <span className="dna-particle dna-particle-2" />
          <span className="dna-particle dna-particle-3" />
          <span className="dna-particle dna-particle-4" />
          <span className="dna-particle dna-particle-5" />
          <span className="dna-particle dna-particle-6" />
          <span className="dna-particle dna-particle-7" />
          <span className="dna-particle dna-particle-8" />
          <span className="dna-particle dna-particle-9" />
          <span className="dna-particle dna-particle-10" />
        </div>

        {/* Bottom / top blending */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/30 to-transparent" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background via-background/20 to-transparent" />

        <style>{`
          .dna-grid {
            background-image:
              linear-gradient(rgba(96,165,250,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96,165,250,0.045) 1px, transparent 1px);
            background-size: 48px 48px;
            animation: dnaGridMove 18s linear infinite;
          }

          .full-dna-flow {
            animation: fullDnaFlow 5.5s linear infinite;
            will-change: stroke-dashoffset, opacity;
          }

          .full-dna-1 {
            animation-delay: 0s;
          }

          .full-dna-2 {
            animation-delay: -1.1s;
          }

          .full-dna-3 {
            animation-delay: -2s;
          }

          .full-dna-4 {
            animation-delay: -2.8s;
          }

          .full-dna-5 {
            animation-delay: -3.6s;
          }

          .full-dna-6 {
            animation-delay: -4.2s;
          }

          .full-dna-7 {
            animation-delay: -1.8s;
          }

          .full-dna-8 {
            animation-delay: -3.2s;
          }

          .central-ring {
            transform-box: fill-box;
            transform-origin: center;
            will-change: transform, opacity;
          }

          .central-ring-1 {
            animation: centralRingPulse 5s ease-in-out infinite;
          }

          .central-ring-2 {
            animation: centralRingPulse 4s ease-in-out infinite reverse;
          }

          .central-ring-3 {
            animation: centralRingPulse 3.5s ease-in-out infinite;
          }

          .central-ring-4 {
            animation: centralRingRotate 18s linear infinite;
            transform-origin: 800px 450px;
          }

          .energy-rays {
            animation: energyRayPulse 4s ease-in-out infinite;
            transform-origin: 800px 450px;
          }

          .dna-particle {
            position: absolute;
            width: 2px;
            height: 2px;
            border-radius: 9999px;
            background: rgba(96,165,250,0.9);
            box-shadow: 0 0 10px rgba(59,130,246,0.8);
            animation: particleFloat 5s ease-in-out infinite;
          }

          .dna-particle-1 {
            left: 12%;
            top: 30%;
            animation-delay: -1s;
          }

          .dna-particle-2 {
            left: 21%;
            top: 62%;
            animation-delay: -3s;
          }

          .dna-particle-3 {
            left: 29%;
            top: 25%;
            animation-delay: -2s;
          }

          .dna-particle-4 {
            left: 38%;
            top: 72%;
            animation-delay: -4s;
          }

          .dna-particle-5 {
            left: 44%;
            top: 20%;
            animation-delay: -1.5s;
          }

          .dna-particle-6 {
            right: 12%;
            top: 32%;
            animation-delay: -2.5s;
          }

          .dna-particle-7 {
            right: 20%;
            top: 65%;
            animation-delay: -4s;
          }

          .dna-particle-8 {
            right: 29%;
            top: 24%;
            animation-delay: -1.8s;
          }

          .dna-particle-9 {
            right: 38%;
            top: 73%;
            animation-delay: -3.2s;
          }

          .dna-particle-10 {
            right: 44%;
            top: 18%;
            animation-delay: -2.2s;
          }

          @keyframes dnaGridMove {
            0% {
              background-position: 0 0, 0 0;
            }

            100% {
              background-position: 48px 48px, 48px 48px;
            }
          }

          @keyframes fullDnaFlow {
            0% {
              stroke-dashoffset: 1450;
              opacity: 0.1;
            }

            15% {
              opacity: 0.65;
            }

            45% {
              opacity: 1;
            }

            70% {
              opacity: 0.8;
            }

            100% {
              stroke-dashoffset: -1450;
              opacity: 0.08;
            }
          }

          @keyframes centralRingPulse {
            0%,
            100% {
              opacity: 0.3;
              transform: scale(0.94);
            }

            50% {
              opacity: 0.85;
              transform: scale(1.06);
            }
          }

          @keyframes centralRingRotate {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes energyRayPulse {
            0%,
            100% {
              opacity: 0.45;
              transform: scale(0.96);
            }

            50% {
              opacity: 0.85;
              transform: scale(1.04);
            }
          }

          @keyframes particleFloat {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
              opacity: 0.15;
            }

            50% {
              transform: translate3d(0, -12px, 0);
              opacity: 0.9;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .dna-grid,
            .full-dna-flow,
            .central-ring,
            .energy-rays,
            .dna-particle {
              animation: none;
            }
          }

          @media (max-width: 768px) {
            .dna-grid {
              background-size: 36px 36px;
            }
          }
        `}</style>
      </section>

      {/* Services */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <GaugeIcon className="size-6" />,
                title: "Performance",
                body: "Paid campaigns built around clear objectives audience behavior and continuous optimization",
              },
              {
                icon: <MousePointerClickIcon className="size-6" />,
                title: "Creative",
                body: "Brand systems campaign concepts and visual content designed to make the message clear and memorable",
              },
              {
                icon: <MoonIcon className="size-6" />,
                title: "Digital",
                body: "Web experiences content systems and digital support that connect the brand with the people it wants to reach",
              },
            ].map((card, i) => (
              <BlurFade key={card.title} delay={i * 0.12}>
                <SpotlightCard className="h-full p-8">
                  <div className="mb-4 w-fit rounded-xl bg-primary/10 p-3 text-primary">
                    {card.icon}
                  </div>

                  <h3 className="text-lg font-semibold">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {card.body}
                  </p>
                </SpotlightCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              What our work{" "}
              <span className="text-primary">aims to deliver</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Selected client style feedback and campaign takeaways
            </p>
          </BlurFade>

          <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
            {testimonials.map((t, i) => (
              <BlurFade
                key={t.name}
                delay={(i % 3) * 0.1}
                className="break-inside-avoid"
              >
                <TiltCard>
                  <figure className="rounded-2xl border bg-card p-6">
                    <span className="flex gap-0.5 text-amber-400">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <StarIcon
                          key={s}
                          className="size-3.5 fill-current"
                        />
                      ))}
                    </span>

                    <blockquote className="mt-4 text-sm text-card-foreground">
                      “{t.quote}”
                    </blockquote>

                    <figcaption className="mt-4 flex items-center gap-3">
                      <AvatarCircles
                        people={[t.name]}
                        className="[&>span]:size-8 [&>span]:text-[10px]"
                      />

                      <div>
                        <p className="text-sm font-medium">
                          {t.name}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </TiltCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="pricing" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              Projects we've{" "}
              <span className="text-primary">built</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              New projects and case studies are being prepared for release
            </p>
          </BlurFade>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
            <BlurFade>
              <div className="flex h-full flex-col rounded-2xl border bg-card p-8">
                <h3 className="text-lg font-semibold">
                  Upcoming Work
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  New work will be added here when the first project collection
                  is ready
                </p>

                <p className="mt-6 text-5xl font-semibold tracking-tight">
                  01
                </p>

                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {freeFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <CheckIcon className="size-3" />
                      </span>

                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  size="lg"
                  className="mt-8 w-full rounded-full"
                >
                  Coming soon
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={0.12}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-8">
                <BorderBeam size={80} duration={8} />

                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-primary">
                    More from 47
                  </h3>

                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                    Coming soon
                  </span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  More work and selected projects will be revealed soon
                </p>

                <p className="mt-6 text-5xl font-semibold tracking-tight">
                  02
                </p>

                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {proFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <CheckIcon className="size-3" />
                      </span>

                      {f}
                    </li>
                  ))}
                </ul>

                <ShimmerButton className="mt-8 w-full">
                  Coming soon
                </ShimmerButton>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="text-center text-3xl font-semibold tracking-tight lg:text-4xl">
              Frequently asked questions
            </h2>
          </BlurFade>

          <BlurFade delay={0.15}>
            <Accordion type="single" collapsible className="mt-12">
              {faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger className="text-left text-base">
                    {faq.q}
                  </AccordionTrigger>

                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <AuroraBackground intensity="subtle" />
        <Particles quantity={50} />

        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <BlurFade>
            <h2 className="text-4xl font-semibold tracking-tight text-balance lg:text-6xl">
              Let’s make your{" "}
              <span className="text-primary">next move count</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Tell us what you are building what is not working and where you
              want to go and we will shape the right creative and growth
              direction
            </p>

            <div className="mt-10">
              <ShimmerButton className="h-14 px-10 text-base">
                <RocketIcon className="size-5" />
                Start a project
              </ShimmerButton>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="mt-16">
              <p className="mb-4 text-xs text-muted-foreground">
                Strategy branding creative media and digital growth
              </p>

              <Dock>
                <DockIcon label="Strategy">
                  <LayersIcon className="size-5" />
                </DockIcon>

                <DockIcon label="Branding">
                  <PaletteIcon className="size-5" />
                </DockIcon>

                <DockIcon label="Performance">
                  <GaugeIcon className="size-5" />
                </DockIcon>

                <DockIcon label="Campaigns">
                  <ZapIcon className="size-5" />
                </DockIcon>

                <DockIcon label="Digital">
                  <MoonIcon className="size-5" />
                </DockIcon>

                <DockIcon label="Growth">
                  <RocketIcon className="size-5" />
                </DockIcon>
              </Dock>
            </div>
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}