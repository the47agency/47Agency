import type { Metadata } from "next";
import type React from "react";

import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Work — 47 Agency",
  description:
    "Selected work, campaigns, branding and creative projects by 47 Agency.",
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-4 pt-24 pb-20 lg:px-8">
        <main className="min-w-0">{children}</main>
      </div>
    </>
  );
}