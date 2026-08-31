/** Public brand and canonical site settings for 47 Agency. */
export const siteConfig = {
  name: "47 Agency",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://47agency.site").replace(/\/$/, ""),
  tagline: "Creative and Digital Marketing Agency",
  description:
    "47 Agency brings strategy, branding, creative campaigns, paid advertising, and digital growth together under one direction.",
} as const;
