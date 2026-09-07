"use client";
import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">

        {/* Logo */}
        <Link
  href="/"
  onClick={(e) => {
    if (window.location.pathname === "/") {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }}
  className="flex items-center"
  aria-label="Go to homepage"
>
  <Image
    src="/logo.png"
    alt="47 Agency"
    width={55}
    height={55}
    priority
    className="h-10 w-10 object-contain"
  />
</Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">

          <Link
            href="/components"
            className="transition-colors hover:text-foreground"
          >
            47 Lab
          </Link>

          <Link
            href="/themes"
            className="transition-colors hover:text-foreground"
          >
            Services
          </Link>

          <Link
            href="/pricing"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>

          <Link
            href="/blog"
            className="transition-colors hover:text-foreground"
          >
            About
          </Link>

          <Link
            href="/changelog"
            className="transition-colors hover:text-foreground"
          >
            Process
          </Link>

        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">

          {/* Language */}
          <button
            type="button"
            className="rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Change language"
          >
            EN
          </button>

          {/* Theme */}
          <ThemeToggle />

        </div>
      </div>
    </header>
  );
}
