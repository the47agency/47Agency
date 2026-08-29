import Image from "next/image";
import Link from "next/link";
import { MailIcon } from "lucide-react";

const groups = [
  {
    title: "",
    links: [
      { text: "", href: "/" },
      { text: "", href: "/#" },
      { text: "", href: "/" },
      { text: "", href: "/" },
    ],
  },
];

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-4"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="0.8"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M14 8h3V4.5c-.5-.1-1.8-.2-3.3-.2-3.2 0-5.4 2-5.4 5.6V13H5v4h3.3v7h4.1v-7h3.4l.5-4h-3.9V10c0-1.2.3-2 1.6-2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.3 9.7h3.8V21H3.3V9.7Zm6.2 0h3.6v1.5h.1c.5-.9 1.7-1.9 3.6-1.9 3.9 0 4.6 2.6 4.6 6V21h-3.8v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9.5V9.7Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.2-8.3L2.8 2h6.4l4.4 5.8L18.9 2Zm-1.1 17.8h1.7L8.3 4H6.5l11.3 15.8Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">

        {/* 47 Agency */}
        <div>
          <Link href="/" className="inline-flex flex-col items-start">
            <Image
              src="/logo.png"
              alt="47 Agency"
              width={52}
              height={52}
              className="h-12 w-auto object-contain"
            />

            <span className="mt-3 text-sm font-semibold">
              
            </span>
          </Link>

          <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
            
          </p>

          <p className="mt-4 max-w-xs text-xs leading-5 text-muted-foreground">
            Gökevler Mah, Kristalşehir, Blok 16, Ofis 255, Adnan Kahveci,
            34510 İstanbul
          </p>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
          </a>
        </div>

        {/* Pages */}
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h3 className="text-sm font-semibold">{group.title}</h3>

            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {group.links.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold">Social</h3>

          <div className="mt-4 flex items-center gap-3">

            <a
              href="https://www.instagram.com/the47agency/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61590579609625"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.linkedin.com/company/47agency/posts/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <LinkedinIcon />
            </a>

            <span
              aria-label="X"
              title="X"
              className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground/50"
            >
              <XIcon />
            </span>

          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold">Contact</h3>

          <a
            href="mailto:info@47agency.site"
            className="mt-4 flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <MailIcon className="size-4" />
            <span>info@47agency.site</span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-border/40 px-4 pt-6 text-center text-xs text-muted-foreground lg:px-8">
        <span>All rights reserved to 47 Agency © 2026</span>
      </div>
    </footer>
  );
}