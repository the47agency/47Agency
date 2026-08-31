"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const paths = [
  { id: "meta", d: "M 180 405 C 390 405, 520 455, 770 500", delay: 0 },
  { id: "google", d: "M 1420 405 C 1210 405, 1080 455, 830 500", delay: 0.65 },
  { id: "linkedin", d: "M 800 190 C 800 285, 800 370, 800 465", delay: 1.3 },
  { id: "tiktok", d: "M 330 690 C 490 625, 610 555, 770 510", delay: 1.95 },
  { id: "snapchat", d: "M 1270 690 C 1110 625, 990 555, 830 510", delay: 2.6 },
];

const platforms = [
  { id: "meta", name: "Meta Ads", logo: "https://cdn.simpleicons.org/meta/1877F2", alt: "Meta", className: "left-[9%] top-[42%] max-[900px]:left-[4%]", delay: 0.1 },
  { id: "google", name: "Google Ads", logo: "https://cdn.simpleicons.org/googleads/4285F4", alt: "Google Ads", className: "right-[9%] top-[42%] max-[900px]:right-[4%]", delay: 0.2 },
  { id: "linkedin", name: "LinkedIn Ads", logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg", alt: "LinkedIn", className: "left-1/2 top-[18%] -translate-x-1/2 max-[640px]:top-[20%]", delay: 0 },
  { id: "tiktok", name: "TikTok Ads", logo: "https://cdn.simpleicons.org/tiktok/FFFFFF", alt: "TikTok", className: "bottom-[12%] left-[17%] max-[900px]:left-[8%] max-[640px]:bottom-[15%]", delay: 0.3 },
  { id: "snapchat", name: "Snapchat Ads", logo: "https://cdn.simpleicons.org/snapchat/FFFC00", alt: "Snapchat", className: "bottom-[12%] right-[17%] max-[900px]:right-[8%] max-[640px]:bottom-[15%]", delay: 0.4 },
];

export function AdNetwork() {
  const sectionRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 55, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 55, damping: 22 });
  const backgroundX = useTransform(smoothX, (value) => value * -0.35);
  const backgroundY = useTransform(smoothY, (value) => value * -0.25);
  const networkX = useTransform(smoothX, (value) => value * 0.45);
  const networkY = useTransform(smoothY, (value) => value * 0.32);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="ad-network relative isolate min-h-[100svh] w-full overflow-hidden bg-black"
      onPointerMove={(event) => {
        const bounds = sectionRef.current?.getBoundingClientRect();
        if (!bounds) return;
        pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 24);
        pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 24);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      <motion.div aria-hidden className="absolute -inset-8 overflow-hidden" style={{ x: backgroundX, y: backgroundY }}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524666041070-9c876903c9c5?auto=format&fit=crop&w=2400&q=90')] bg-cover bg-center bg-no-repeat opacity-[0.72] [filter:brightness(0.42)_saturate(1.35)_hue-rotate(145deg)]" />
        <div className="absolute inset-0 bg-[#00121c]/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,183,255,0.16)_0%,rgba(0,80,130,0.08)_36%,transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-black via-black/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[14%] bg-gradient-to-r from-black/75 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[14%] bg-gradient-to-l from-black/75 to-transparent" />
        <div className="network-scan absolute inset-y-[18%] left-1/2 w-px bg-cyan-300/70 blur-[3px]" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] items-center justify-center px-6 py-24 lg:px-12"
        style={{ x: networkX, y: networkY }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="absolute left-1/2 top-[8%] z-30 -translate-x-1/2 text-center" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}>
          <h2 className="whitespace-nowrap text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            Where <span className="text-[#287cff]">47</span> turns your ads
          </h2>
        </motion.div>

        <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <defs>
            <filter id="network-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <radialGradient id="particle-core"><stop offset="0" stopColor="#ffffff" /><stop offset="0.35" stopColor="#9af3ff" /><stop offset="1" stopColor="#00bfff" stopOpacity="0" /></radialGradient>
          </defs>
          {paths.map((path) => <path key={`line-${path.id}`} id={`path-${path.id}`} d={path.d} className="network-line" />)}
          {paths.map((path) => <path key={`signal-${path.id}`} d={path.d} className="network-signal" style={{ animationDelay: `${-path.delay}s` }} />)}
          {paths.flatMap((path) => [0, 1, 2].map((particle) => (
            <circle key={`${path.id}-${particle}`} r={particle === 0 ? 5 : 3.25} fill="url(#particle-core)" filter="url(#network-glow)" opacity={particle === 0 ? 1 : 0.75}>
              <animateMotion dur={`${4.8 + particle * 0.7}s`} begin={`${path.delay + particle * 1.25}s`} repeatCount="indefinite" path={path.d} />
            </circle>
          )))}
        </svg>

        <motion.div className="rocket-position absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 max-[640px]:top-[51%]" variants={{ hidden: { opacity: 0, scale: 0.72 }, visible: { opacity: 1, scale: 1, transition: { delay: 0.28, duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}>
          <div className="rocket-aura absolute inset-[-58px] rounded-full" />
          <div className="rocket-ring absolute inset-[-38px] rounded-full border border-cyan-300/20" />
          <div className="rocket-float relative flex h-24 w-24 items-center justify-center">
            <div className="relative h-[62px] w-[34px] rounded-[50%_50%_42%_42%] border border-cyan-100/80 bg-gradient-to-b from-white via-slate-100 to-slate-300 shadow-[0_0_28px_rgba(0,200,255,0.75)]">
              <div className="absolute left-1/2 top-[18px] h-[14px] w-[14px] -translate-x-1/2 rounded-full border border-cyan-300 bg-[#03131e] shadow-[0_0_10px_rgba(0,200,255,0.8)]" />
              <div className="absolute -bottom-[2px] -left-[13px] h-[19px] w-[14px] -skew-x-[25deg] border-b border-cyan-400 bg-slate-300" />
              <div className="absolute -bottom-[2px] -right-[13px] h-[19px] w-[14px] skew-x-[25deg] border-b border-cyan-400 bg-slate-300" />
            </div>
            <div className="rocket-exhaust absolute left-1/2 top-[75px] h-16 w-8 -translate-x-1/2">
              <span className="rocket-flame rocket-flame-outer absolute left-1/2 top-0 h-12 w-5 -translate-x-1/2 rounded-[50%_50%_65%_65%] bg-gradient-to-b from-cyan-100 via-cyan-400 to-blue-700 blur-[3px]" />
              <span className="rocket-flame rocket-flame-inner absolute left-1/2 top-0 h-8 w-2 -translate-x-1/2 rounded-full bg-gradient-to-b from-white via-cyan-100 to-cyan-400" />
              <span className="exhaust-particle exhaust-one" /><span className="exhaust-particle exhaust-two" /><span className="exhaust-particle exhaust-three" />
            </div>
          </div>
        </motion.div>

        {platforms.map((platform) => (
          <motion.div key={platform.id} className={`platform platform-${platform.id} absolute z-30 ${platform.className}`} variants={{ hidden: { opacity: 0, scale: 0.75, filter: "blur(8px)" }, visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { delay: 0.35 + platform.delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] } } }}>
            <div className="platform-drift">
              <div className="platform-icon"><img src={platform.logo} alt={platform.alt} className="h-7 w-7 object-contain" /></div>
              <span>{platform.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .platform-drift { display:flex; flex-direction:column; align-items:center; gap:9px; min-width:90px; animation:platformFloat 6s ease-in-out infinite; }
        .platform-google .platform-drift { animation-delay:-1.1s; animation-duration:7.2s; }
        .platform-linkedin .platform-drift { animation-delay:-2.4s; animation-duration:6.6s; }
        .platform-tiktok .platform-drift { animation-delay:-3.3s; animation-duration:7.8s; }
        .platform-snapchat .platform-drift { animation-delay:-4.1s; animation-duration:6.9s; }
        .platform-icon { position:relative; display:flex; align-items:center; justify-content:center; width:62px; height:62px; border-radius:9999px; border:1px solid rgba(85,220,255,.55); background:radial-gradient(circle at 35% 25%,rgba(21,61,83,.94),rgba(2,10,18,.91) 62%); box-shadow:inset 0 0 20px rgba(0,190,255,.08),0 0 0 1px rgba(0,190,255,.08),0 0 25px rgba(0,190,255,.18),0 16px 40px rgba(0,0,0,.45); transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .4s ease; }
        .platform-icon::before,.platform-icon::after { content:""; position:absolute; border-radius:inherit; pointer-events:none; }
        .platform-icon::before { inset:-8px; border:1px solid rgba(90,225,255,.14); animation:iconPulse 3.4s ease-in-out infinite; }
        .platform-icon::after { inset:-16px; border:1px dashed rgba(90,225,255,.13); animation:orbitRing 13s linear infinite; }
        .platform:hover .platform-icon { transform:translateY(-3px) scale(1.09); box-shadow:inset 0 0 22px rgba(0,190,255,.14),0 0 35px rgba(0,200,255,.38),0 20px 45px rgba(0,0,0,.5); }
        .platform span { font-size:12px; font-weight:500; letter-spacing:0; color:rgba(255,255,255,.84); white-space:nowrap; text-shadow:0 2px 16px #000; }
        .network-line { stroke:rgba(0,190,255,.3); stroke-width:1.2; fill:none; filter:drop-shadow(0 0 5px rgba(0,170,255,.24)); }
        .network-line:nth-of-type(odd) { stroke-dasharray:3 7; }
        .network-signal { stroke:rgba(174,247,255,.98); stroke-width:2.8; stroke-linecap:round; stroke-dasharray:2 54 12 150; fill:none; filter:drop-shadow(0 0 4px #9af3ff) drop-shadow(0 0 12px rgba(0,174,255,.9)); animation:signalTravel 4.8s linear infinite; }
        .rocket-aura { background:radial-gradient(circle,rgba(71,217,255,.27) 0%,rgba(0,118,255,.12) 37%,transparent 72%); filter:blur(10px); animation:rocketGlow 2.8s ease-in-out infinite; }
        .rocket-ring { box-shadow:0 0 30px rgba(0,190,255,.18),inset 0 0 22px rgba(0,190,255,.1); animation:rocketRing 3.2s ease-out infinite; }
        .rocket-float { animation:rocketFloat 4.2s ease-in-out infinite; will-change:transform; }
        .rocket-flame { transform-origin:top center; animation:flame .44s ease-in-out infinite alternate; }
        .rocket-flame-inner { animation-delay:-.18s; }
        .exhaust-particle { position:absolute; left:50%; top:24px; width:3px; height:3px; border-radius:50%; background:#a6f4ff; box-shadow:0 0 7px #00c8ff; animation:exhaust 1.5s ease-out infinite; }
        .exhaust-two { animation-delay:-.5s; left:38%; }.exhaust-three { animation-delay:-1s; left:63%; }
        .network-scan { animation:scan 7s ease-in-out infinite; }
        @keyframes signalTravel { to { stroke-dashoffset:-218; } }
        @keyframes platformFloat { 0%,100% { transform:translate3d(0,0,0) rotate(-.5deg); } 50% { transform:translate3d(0,-9px,0) rotate(.7deg); } }
        @keyframes iconPulse { 0%,100% { opacity:.2; transform:scale(.94); } 50% { opacity:.82; transform:scale(1.08); } }
        @keyframes orbitRing { to { transform:rotate(360deg); } }
        @keyframes rocketGlow { 0%,100% { opacity:.48; transform:scale(.88); } 50% { opacity:1; transform:scale(1.16); } }
        @keyframes rocketRing { 0% { opacity:.7; transform:scale(.7); } 80%,100% { opacity:0; transform:scale(1.55); } }
        @keyframes rocketFloat { 0%,100% { transform:translateY(2px) rotate(-1deg); } 50% { transform:translateY(-7px) rotate(1deg); } }
        @keyframes flame { from { opacity:.7; transform:translateX(-50%) scaleY(.72) scaleX(.82); } to { opacity:1; transform:translateX(-50%) scaleY(1.14) scaleX(1.08); } }
        @keyframes exhaust { 0% { opacity:.9; transform:translate(-50%,0) scale(1); } 100% { opacity:0; transform:translate(calc(-50% + 8px),38px) scale(.2); } }
        @keyframes scan { 0%,100% { opacity:.1; transform:translateX(-240px); } 50% { opacity:.7; transform:translateX(240px); } }
        @media (max-width:900px) { .platform-icon { width:52px;height:52px; } .platform span { font-size:10px; } }
        @media (prefers-reduced-motion:reduce) { .ad-network *, .ad-network *::before, .ad-network *::after { animation-duration:.001ms!important; animation-iteration-count:1!important; scroll-behavior:auto!important; } }
      `}</style>
    </section>
  );
}
