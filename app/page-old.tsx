"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";

type Service = {
  title: string;
  oneLiner: string;
  bullets: string[];
};

type Brand = {
  name: string;
  emphasis: "featured" | "standard";
  description: string;
  tags: string[];
  image?: string;
};

const COMPANY = {
  officialName: "Beauty Solutions (HK) Limited",
  marketingName: "Beauty Solutions",
  domain: "hkbeautysolutions.com",
  website: "www.hkbeautysolutions.com",
  email: "info@hkbeautysolutions.com",
  phoneWhatsapp: "+85263671752",
  wechat: "ovorotnik",
  linkedin: "https://www.linkedin.com/company/104444059/admin/dashboard/",
  sloganPrimary: "Where ideas meet excellence.",
  sloganSecondary: "One Partner — Multiple Pathways.",
  countries: ["USA", "Hong Kong", "China", "Australia", "Russia", "Korea", "Vietnam"],
} as const;

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function Icon({
  name,
  className,
}: {
  name:
    | "spark"
    | "shield"
    | "globe"
    | "package"
    | "wand"
    | "badge"
    | "phone"
    | "mail"
    | "wechat"
    | "link";
  className?: string;
}) {
  const common = "inline-block";
  const c = cn(common, className);
  switch (name) {
    case "spark":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2l1.4 5.1L18.5 8.5l-5.1 1.4L12 15l-1.4-5.1L5.5 8.5l5.1-1.4L12 2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M19 14l.7 2.5 2.3.7-2.3.7L19 20l-.7-2.5-2.3-.7 2.3-.7L19 14Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "globe":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M3 12h18"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 3c3 3 3 15 0 18-3-3-3-15 0-18Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "package":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 8.5 12 3 3 8.5 12 14l9-5.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M3 8.5V18l9 5 9-5V8.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 14v9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "wand":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 20l10-10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M14 10l6-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M15.5 3.5 20.5 8.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M6 6l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "badge":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2l3 6 6 .9-4.5 4.4 1.1 6.3-5.6-3-5.6 3 1.1-6.3L3 8.9 9 8l3-6Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 3h4l1 5-3 2c1.5 3 3.5 5 6.5 6.5l2-3 5 1v4c0 1-1 2-2 2-9.9 0-18-8.1-18-18 0-1 1-2 2-2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "mail":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 6h16v12H4V6Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M4 7l8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "wechat":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M8.5 11c-2.5 0-4.5 1.6-4.5 3.6 0 1 .5 1.9 1.3 2.6L5 20l2.4-1.4c.4.1.7.1 1.1.1 2.5 0 4.5-1.6 4.5-3.6S11 11 8.5 11Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 4c-3 0-5.5 2-5.5 4.5 0 .6.1 1.2.4 1.7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M15.5 7.2h0"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M18.3 7.2h0"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "link":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-ink shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-black shadow-soft"
      : variant === "secondary"
      ? "bg-rose-600 text-white hover:bg-rose-700 shadow-glow"
      : "bg-transparent text-ink hover:bg-black/5";

  const Comp: any = href ? "a" : "button";
  return (
    <Comp href={href} onClick={onClick} className={cn(base, styles, className)}>
      {children}
    </Comp>
  );
}

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      {kicker ? (
        <div className="mb-3">
          <Pill>
            <Icon name="spark" className="h-4 w-4 text-rose-600" />
            <span className="text-ink/80">{kicker}</span>
          </Pill>
        </div>
      ) : null}
      <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-base leading-relaxed text-ink/70">{subtitle}</p> : null}
    </div>
  );
}

function Marquee({ items }: { items: string[] }) {
  // Duplicate items for seamless marquee
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/60 shadow-soft backdrop-blur">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-[200%] animate-marquee items-center gap-3 py-4">
        {doubled.map((name, idx) => (
          <div
            key={`${name}-${idx}`}
            className="mx-2 inline-flex items-center gap-2 rounded-full border border-black/10 bg-paper px-4 py-2 text-sm font-semibold text-ink/80"
          >
            <span className="h-2 w-2 rounded-full bg-rose-500" />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/80 px-3 py-2 backdrop-blur sm:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-2">
        <a
          href={`https://wa.me/${COMPANY.phoneWhatsapp.replace(/\+/g, "")}`}
          className="flex-1 rounded-full bg-ink px-4 py-2.5 text-center text-sm font-semibold text-paper shadow-soft"
        >
          WhatsApp
        </a>
        <a
          href="#contact"
          className="flex-1 rounded-full bg-rose-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-glow"
        >
          Request
        </a>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: "Services", href: "#services" },
    { label: "Brands", href: "#brands" },
    { label: "Partners", href: "#partners" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/75 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-rose-600 to-sage-500 text-white shadow-soft">
                <Icon name="badge" className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-extrabold tracking-tight">{COMPANY.marketingName}</div>
                <div className="text-xs text-ink/60">{COMPANY.sloganSecondary}</div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm font-semibold text-ink/70 md:flex">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-ink">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <a
                aria-label="Email"
                href={`mailto:${COMPANY.email}`}
                className="rounded-full border border-black/10 bg-white px-3 py-2 text-ink/70 hover:bg-black/5"
              >
                <Icon name="mail" className="h-5 w-5" />
              </a>
              <a
                aria-label="LinkedIn"
                href={COMPANY.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/10 bg-white px-3 py-2 text-ink/70 hover:bg-black/5"
              >
                <Icon name="link" className="h-5 w-5" />
              </a>
              <Button href="#contact" variant="secondary">
                Request a Quote
              </Button>
            </div>

            <button
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-3 py-2 text-ink md:hidden"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <span className="text-sm font-semibold">Menu</span>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile overlay menu */}
      {open ? (
        <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden">
          <div className="absolute inset-x-0 top-0 mx-auto mt-3 w-[calc(100%-1.5rem)] max-w-md rounded-3xl bg-white p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <div className="text-sm font-extrabold">{COMPANY.marketingName}</div>
              <button
                className="rounded-full border border-black/10 px-3 py-2 text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="mt-4 grid gap-2">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-black/10 bg-paper px-4 py-3 text-sm font-semibold text-ink hover:bg-black/5"
                >
                  {n.label}
                </a>
              ))}
            </div>

            <div className="mt-4 grid gap-2">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold"
              >
                <span>Email</span>
                <span className="text-ink/60">{COMPANY.email}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY.phoneWhatsapp.replace(/\+/g, "")}`}
                className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold"
              >
                <span>WhatsApp</span>
                <span className="text-ink/60">{COMPANY.phoneWhatsapp}</span>
              </a>
            </div>

            <div className="mt-4">
              <Button href="#contact" variant="secondary" className="w-full">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function Hero() {
  return (
    <section className="grain relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-50 via-paper to-sage-50" />
      <div className="absolute -z-10 left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-rose-200/50 to-sage-200/40 blur-3xl" />
      <div className="absolute -z-10 bottom-[-240px] right-[-160px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sand-200/70 to-rose-200/30 blur-3xl" />

      <Container>
        <div className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Pill>
                <Icon name="globe" className="h-4 w-4 text-sage-600" />
                Global sourcing & brand execution
              </Pill>
              <Pill>
                <Icon name="shield" className="h-4 w-4 text-rose-600" />
                Production controls & QC mindset
              </Pill>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-ink sm:text-5xl">
              {COMPANY.sloganPrimary}
              <span className="block text-ink/70">{COMPANY.sloganSecondary}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70">
              {COMPANY.officialName} helps brands and retailers with sourcing, branding,
              customization, packaging, and quality oversight—so your idea becomes a market-ready
              product with confidence.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-600" />
                <p className="text-sm text-ink/70">
                  <span className="font-semibold text-ink">End-to-end execution</span> — from
                  product development to packaging to inspection.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sage-500" />
                <p className="text-sm text-ink/70">
                  <span className="font-semibold text-ink">Brand-ready output</span> — private
                  label, customization, and content support.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sand-300" />
                <p className="text-sm text-ink/70">
                  <span className="font-semibold text-ink">Global footprint</span> — serving{" "}
                  {COMPANY.countries.join(", ")}.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#contact" variant="secondary">
                Request a Quote
              </Button>
              <Button href="#services" variant="primary">
                Explore Services
              </Button>
              <Button
                href={`https://wa.me/${COMPANY.phoneWhatsapp.replace(/\+/g, "")}`}
                variant="ghost"
                className="border border-black/10"
              >
                Talk on WhatsApp
              </Button>
            </div>

            <div className="mt-6 text-xs text-ink/60">
              Primary contact: <span className="font-semibold">{COMPANY.email}</span> • WhatsApp:{" "}
              <span className="font-semibold">{COMPANY.phoneWhatsapp}</span> • WeChat:{" "}
              <span className="font-semibold">{COMPANY.wechat}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2.25rem] bg-gradient-to-br from-rose-200/50 via-sand-100/60 to-sage-200/50 blur-2xl" />

            <div className="overflow-hidden rounded-[2.25rem] border border-black/10 bg-white/70 shadow-soft backdrop-blur">
              <div className="relative h-[320px] w-full sm:h-[380px]">
                <Image
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80"
                  alt="Beauty Solutions — sourcing, branding, customization"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>

              <div className="grid gap-3 p-5 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-paper p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Icon name="wand" className="h-5 w-5 text-rose-600" />
                    Develop
                  </div>
                  <p className="mt-2 text-xs text-ink/65">From idea to manufacturable product.</p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-paper p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Icon name="package" className="h-5 w-5 text-sage-600" />
                    Package
                  </div>
                  <p className="mt-2 text-xs text-ink/65">Packaging that fits your brand.</p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-paper p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Icon name="shield" className="h-5 w-5 text-ink" />
                    Control
                  </div>
                  <p className="mt-2 text-xs text-ink/65">Quality inspections & risk reduction.</p>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-7 left-6 hidden animate-floaty rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold text-ink/70 shadow-soft backdrop-blur md:inline-flex">
              Premium sourcing + brand execution
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Partners() {
  const partners = [
    "Bookazine",
    "Louder",
    "Faberlic",
    "Amazon",
    "KHY",
    "Swire",
    "Decathlon HK",
    "Lazada",
    "Sephora",
    "TEMU",
  ];

  return (
    <section id="partners" className="py-12">
      <Container>
        <SectionTitle
          kicker="Trusted collaborations"
          title="Partners we cooperate with"
          subtitle="A running line of partner names (replace with official logos when you have them)."
        />
        <div className="mt-6">
          <Marquee items={partners} />
        </div>
      </Container>
    </section>
  );
}

function About() {
  const aboutText =
    "With extensive experience in sourcing, branding, and customization, we enthusiastically respond to every request and embrace challenges without hesitation. Our business ethics is defined by our slogan and company ethos ' where ideas meet excellence. We believe we can all work together, fight for each other and find a win-win solution with the goal of making each other's life more beautiful. It doesn't matter if you are a supplier, brand owner, retailer, potential business partner or our very own team member, we believe and value the trust and work between us and that all of our individual efforts and value added together can bring success to all of us which leads to more beautiful lives.";

  return (
    <section className="py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionTitle
              kicker="About Beauty Solutions"
              title="Built on trust, speed, and win-win execution"
              subtitle="A partner that treats your request like a shared mission — and delivers a result you can launch."
            />

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/70">
              <p>{aboutText}</p>

              <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-soft backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Icon name="globe" className="h-5 w-5 text-sage-600" />
                  Countries served
                </div>
                <p className="mt-2 text-sm text-ink/70">{COMPANY.countries.join(" • ")}</p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              <Pill>
                <Icon name="spark" className="h-4 w-4 text-rose-600" /> Sourcing
              </Pill>
              <Pill>
                <Icon name="package" className="h-4 w-4 text-sage-600" /> Packaging
              </Pill>
              <Pill>
                <Icon name="shield" className="h-4 w-4 text-ink" /> Inspections
              </Pill>
              <Pill>
                <Icon name="wand" className="h-4 w-4 text-rose-600" /> Customization
              </Pill>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2.25rem] bg-gradient-to-br from-sage-200/40 via-rose-100/40 to-sand-200/50 blur-2xl" />
            <div className="overflow-hidden rounded-[2.25rem] border border-black/10 bg-white/70 shadow-soft backdrop-blur">
              <div className="relative h-[340px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80"
                  alt="About Beauty Solutions"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="grid gap-3 p-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-paper p-4">
                  <div className="text-sm font-semibold text-ink">Official company</div>
                  <div className="mt-1 text-xs text-ink/60">{COMPANY.officialName}</div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-paper p-4">
                  <div className="text-sm font-semibold text-ink">Website</div>
                  <div className="mt-1 text-xs text-ink/60">{COMPANY.website}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  const services: Service[] = useMemo(
    () => [
      {
        title: "Private Brand Development",
        oneLiner: "Build a brand that stands out — from concept to shelf.",
        bullets: ["Brand positioning support", "Private label execution", "Launch-ready packaging + content"],
      },
      {
        title: "Event Activities",
        oneLiner: "Bring products to life with activations and experiences.",
        bullets: ["Event concept support", "Product + brand storytelling", "Execution-ready assets"],
      },
      {
        title: "Product Customization",
        oneLiner: "Customize products for your audience and market.",
        bullets: ["Specs & variations", "Market-fit adjustments", "Brand-consistent finish"],
      },
      {
        title: "Product Development",
        oneLiner: "Turn ideas into manufacturable, market-ready products.",
        bullets: ["Development planning", "Sampling workflow", "Production handoff"],
      },
      {
        title: "AI Content",
        oneLiner: "Fast, consistent content support for campaigns and launches.",
        bullets: ["Product descriptions", "Campaign copy drafts", "Content consistency system"],
      },
      {
        title: "Packaging Development",
        oneLiner: "Packaging that matches your brand and requirements.",
        bullets: ["Packaging concepts", "Material & format guidance", "Brand-aligned design direction"],
      },
      {
        title: "Product Sourcing",
        oneLiner: "Reliable suppliers, better pricing, controlled timelines.",
        bullets: ["Supplier matching", "Procurement coordination", "Risk-aware sourcing"],
      },
      {
        title: "Production Controls & Quality Inspections",
        oneLiner: "Protect your brand with checks that reduce risk.",
        bullets: ["Quality checkpoints", "Inspection-ready workflow", "Issue prevention mindset"],
      },
    ],
    []
  );

  return (
    <section id="services" className="py-14">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            kicker="Services"
            title="Everything you need to go from idea → execution"
            subtitle="Each service card includes an “inside example” slot (image + short description). See real examples from our client projects."
          />
          <Button href="#contact" variant="secondary">
            Start a Project
          </Button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft backdrop-blur transition hover:-translate-y-0.5"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-rose-200/50 to-sage-200/40 blur-2xl transition group-hover:opacity-80" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{s.oneLiner}</p>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-paper shadow-soft">
                    <Icon name="spark" className="h-6 w-6" />
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-rose-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <details className="mt-5 rounded-2xl border border-black/10 bg-paper p-4">
                  <summary className="cursor-pointer select-none text-sm font-semibold text-ink">
                    View “inside example” template
                  </summary>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="relative h-28 overflow-hidden rounded-2xl border border-black/10 bg-white">
                      <Image
                        src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80"
                        alt="Service example"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="text-xs text-ink/70">
                      <p className="font-semibold text-ink">Example structure:</p>
                      <p className="mt-1">
                        <span className="font-semibold">Client goal:</span> Short line.
                      </p>
                      <p className="mt-1">
                        <span className="font-semibold">What we delivered:</span> 2–3 bullet lines.
                      </p>
                      <p className="mt-1">
                        <span className="font-semibold">Outcome:</span> measurable or qualitative result.
                      </p>
                      <p className="mt-2 text-ink/60">
                        CTA: “Request something similar” → Contact form.
                      </p>
                    </div>
                  </div>
                </details>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <Button href="#contact" variant="primary" className="border border-black/10">
                    Request this service
                  </Button>
                  <Button href="#brands" variant="ghost" className="border border-black/10">
                    See related projects
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Brands() {
  const brands: Brand[] = [
    {
      name: "Rebel Tattoos",
      emphasis: "featured",
      description: "Featured project — more visual storytelling and product presentation.",
      tags: ["Brand", "Visual focus", "Launch-ready execution"],
      image: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?w=1200&q=80",
    },
    {
      name: "COOLBOXBEAUTY",
      emphasis: "standard",
      description: "Project showcase — sourcing + packaging + consistency.",
      tags: ["Sourcing", "Packaging", "Brand support"],
    },
    {
      name: "COLORFIT",
      emphasis: "standard",
      description: "Project showcase — customization + production coordination.",
      tags: ["Customization", "Production", "Quality mindset"],
    },
  ];

  return (
    <section id="brands" className="py-14">
      <Container>
        <SectionTitle
          kicker="Brands & Projects"
          title="Proof through real work"
          subtitle="A clean portfolio layout: one featured project (more visual) + two supporting projects."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {brands.map((b) =>
            b.emphasis === "featured" ? (
              <div
                key={b.name}
                className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-soft backdrop-blur md:col-span-2"
              >
                <div className="relative h-64 w-full md:h-80">
                  <Image
                    src={b.image || "https://images.unsplash.com/photo-1611042553484-d61f84d22784?w=1200&q=80"}
                    alt={`${b.name} project`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-ink">
                      Featured
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-600" />
                      {b.name}
                    </div>
                    <h3 className="mt-3 text-2xl font-black tracking-tight text-white">{b.name}</h3>
                    <p className="mt-2 max-w-xl text-sm text-white/85">{b.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {b.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <Button href="#contact" variant="secondary">
                        Request similar
                      </Button>
                      <Button href="#services" variant="ghost" className="border border-white/20 text-white hover:bg-white/10">
                        Explore services
                      </Button>
                    </div>
                  </div>


                </div>
              </div>
            ) : (
              <div
                key={b.name}
                className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight text-ink">{b.name}</h3>
                    <p className="mt-2 text-sm text-ink/70">{b.description}</p>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-rose-600 to-sage-500 text-white shadow-soft">
                    <Icon name="badge" className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {b.tags.map((t) => (
                    <span key={t} className="rounded-full border border-black/10 bg-paper px-3 py-1 text-xs font-semibold text-ink/70">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="relative h-20 overflow-hidden rounded-xl border border-black/10">
                    <Image
                      src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=200&q=80"
                      alt="Product thumbnail"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="relative h-20 overflow-hidden rounded-xl border border-black/10">
                    <Image
                      src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80"
                      alt="Product thumbnail"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="relative h-20 overflow-hidden rounded-xl border border-black/10">
                    <Image
                      src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&q=80"
                      alt="Product thumbnail"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Button href="#contact" variant="primary" className="border border-black/10">
                    Request
                  </Button>
                  <Button href="#services" variant="ghost" className="border border-black/10">
                    Services
                  </Button>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}

function ProductCategories() {
  const categories = [
    "Skincare & cosmetics",
    "Cloth garment",
    "Sport Items",
    "Beauty Devices",
    "Household goods",
    "FMCG categories",
    "Others",
  ];

  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          kicker="Products"
          title="What we can source, develop, and support"
          subtitle="A clear category grid helps visitors instantly map your capabilities to their needs."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div
              key={c}
              className="flex items-center gap-3 rounded-3xl border border-black/10 bg-white/70 p-5 shadow-soft backdrop-blur"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-paper">
                <Icon name="package" className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-ink">{c}</div>
                <div className="text-xs text-ink/60">Tell us your category — we’ll propose a pathway.</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      quote:
        "Their execution felt like having a reliable in-house team — clear communication, fast iteration, and strong attention to brand details.",
      name: "Operations Manager",
      org: "Retail Brand (Hong Kong)",
    },
    {
      quote:
        "We needed packaging + sourcing + quality oversight. They built a workflow that made the process predictable and launch-ready.",
      name: "Founder",
      org: "DTC Brand (USA)",
    },
    {
      quote:
        "Strong partner mindset. They proactively identified risks and helped us maintain consistency across production.",
      name: "Category Buyer",
      org: "FMCG (Vietnam)",
    },
  ];

  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          kicker="Social proof"
          title="Testimonials that build credibility"
          subtitle="Hear what our clients have to say about working with us."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {quotes.map((q) => (
            <div
              key={q.name + q.org}
              className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft backdrop-blur"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-rose-200/60 to-sage-200/40 blur-2xl" />
              <div className="relative">
                <p className="text-sm leading-relaxed text-ink/80">“{q.quote}”</p>
                <div className="mt-4 border-t border-black/10 pt-4">
                  <div className="text-sm font-extrabold text-ink">{q.name}</div>
                  <div className="text-xs text-ink/60">{q.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-black/10 bg-gradient-to-br from-rose-50 via-paper to-sage-50 p-6 shadow-soft">
          <div className="max-w-xl">
            <div className="text-lg font-black tracking-tight text-ink">Ready to build your next product?</div>
            <p className="mt-2 text-sm text-ink/70">
              Send a request and we’ll respond with a clear plan: service pathway, next steps, and what we need from you.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button href="#contact" variant="secondary">
              Request a Quote
            </Button>
            <Button
              href={`https://wa.me/${COMPANY.phoneWhatsapp.replace(/\+/g, "")}`}
              variant="primary"
              className="border border-black/10"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Careers() {
  return (
    <section id="careers" className="py-14">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <SectionTitle
              kicker="Careers & Cooperation"
              title="We welcome driven partners and team members"
              subtitle="If you have the desire and drive to succeed, we’d like to welcome you."
            />
            <div className="mt-5 rounded-3xl border border-black/10 bg-white/70 p-6 text-sm text-ink/70 shadow-soft backdrop-blur">
              <p>
                No matter what qualifications you have — as long as you have the desire and drive to succeed, we would like to welcome you to our team.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button href={`mailto:${COMPANY.email}?subject=Careers%20%26%20Cooperation`} variant="secondary">
                  Send your profile
                </Button>
                <Button href="#contact" variant="ghost" className="border border-black/10">
                  Partner with us
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-sand-50 via-paper to-rose-50 p-6 shadow-soft">
            <div className="text-sm font-extrabold text-ink">Fast collaboration checklist</div>
            <ul className="mt-3 space-y-2 text-sm text-ink/70">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-600" />
                What category are you working on?
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sage-500" />
                What service pathway do you need (development, sourcing, packaging, QC)?
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sand-300" />
                What timeline and target markets?
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-4">
              <div className="text-xs text-ink/60">Direct contacts</div>
              <div className="mt-2 flex flex-col gap-2 text-sm">
                <a className="flex items-center gap-2 font-semibold text-ink hover:underline" href={`mailto:${COMPANY.email}`}>
                  <Icon name="mail" className="h-5 w-5 text-rose-600" />
                  {COMPANY.email}
                </a>
                <a
                  className="flex items-center gap-2 font-semibold text-ink hover:underline"
                  href={`https://wa.me/${COMPANY.phoneWhatsapp.replace(/\+/g, "")}`}
                >
                  <Icon name="phone" className="h-5 w-5 text-ink" />
                  {COMPANY.phoneWhatsapp}
                </a>
                <div className="flex items-center gap-2 font-semibold text-ink">
                  <Icon name="wechat" className="h-5 w-5 text-sage-600" />
                  WeChat: {COMPANY.wechat}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    services: [] as string[],
    message: "",
    // honeypot:
    website: "",
  });

  const serviceOptions = [
    "Private Brand Development",
    "Event Activities",
    "Product Customization",
    "Product Development",
    "AI content",
    "Packaging Development",
    "Product Sourcing",
    "Production Controls & Quality Inspections",
  ];

  function toggleService(s: string) {
    setForm((prev) => {
      const exists = prev.services.includes(s);
      return {
        ...prev,
        services: exists ? prev.services.filter((x) => x !== s) : [...prev.services, s],
      };
    });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // Basic spam block via honeypot
    if (form.website.trim().length > 0) {
      setStatus("sent");
      return;
    }

    // Demo: send to a “mailto” fallback (no backend needed).
    // If you want a real backend, tell me and I’ll add /app/api/contact/route.ts too.
    try {
      const subject = encodeURIComponent(`Website Request — ${form.company || form.name || "New Lead"}`);
      const body = encodeURIComponent(
        [
          `Name: ${form.name}`,
          `Company: ${form.company}`,
          `Email: ${form.email}`,
          `Country: ${form.country}`,
          `Phone/WhatsApp: ${form.phone}`,
          `Services: ${form.services.join(", ") || "—"}`,
          "",
          "Message:",
          form.message,
        ].join("\n")
      );

      window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-14">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <SectionTitle
              kicker="Contact / Request"
              title="Tell us what you want to build"
              subtitle="Keep the form short and simple. We’ll reply with next steps and a clear execution pathway."
            />

            <div className="mt-6 space-y-4 rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft backdrop-blur">
              <div className="text-sm font-extrabold text-ink">Direct contact</div>

              <a className="flex items-center gap-3 text-sm font-semibold text-ink hover:underline" href={`mailto:${COMPANY.email}`}>
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-paper">
                  <Icon name="mail" className="h-5 w-5 text-rose-600" />
                </span>
                {COMPANY.email}
              </a>

              <a
                className="flex items-center gap-3 text-sm font-semibold text-ink hover:underline"
                href={`https://wa.me/${COMPANY.phoneWhatsapp.replace(/\+/g, "")}`}
              >
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-paper">
                  <Icon name="phone" className="h-5 w-5 text-ink" />
                </span>
                {COMPANY.phoneWhatsapp}
              </a>

              <div className="flex items-center gap-3 text-sm font-semibold text-ink">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-paper">
                  <Icon name="wechat" className="h-5 w-5 text-sage-600" />
                </span>
                WeChat: {COMPANY.wechat}
              </div>

              <a
                className="flex items-center gap-3 text-sm font-semibold text-ink hover:underline"
                href={COMPANY.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-paper">
                  <Icon name="link" className="h-5 w-5 text-ink" />
                </span>
                LinkedIn
              </a>

              <div className="rounded-2xl border border-black/10 bg-paper p-4 text-xs text-ink/60">
                Domain exists: <span className="font-semibold">{COMPANY.domain}</span> • Website to create:{" "}
                <span className="font-semibold">{COMPANY.website}</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft backdrop-blur"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-extrabold text-ink">Request form</div>
              <span className="rounded-full border border-black/10 bg-paper px-3 py-1 text-xs font-semibold text-ink/70">
                We reply via email / WhatsApp
              </span>
            </div>

            {/* Honeypot (hidden) */}
            <input
              type="text"
              className="hidden"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              autoComplete="off"
              tabIndex={-1}
            />

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-ink/70">Full name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink/70">Company name</label>
                <input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="Company (optional)"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-ink/70">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-ink/70">Country</label>
                <select
                  required
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-400"
                >
                  <option value="">Select…</option>
                  {COMPANY.countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-ink/70">Phone / WhatsApp (optional)</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="+1234567890"
                />
              </div>
            </div>

            <div className="mt-5">
              <div className="text-xs font-semibold text-ink/70">Interested services (optional)</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {serviceOptions.map((s) => {
                  const active = form.services.includes(s);
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleService(s)}
                      className={cn(
                        "rounded-full border px-3 py-2 text-xs font-semibold transition",
                        active
                          ? "border-rose-300 bg-rose-50 text-rose-700"
                          : "border-black/10 bg-paper text-ink/70 hover:bg-black/5"
                      )}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5">
              <label className="text-xs font-semibold text-ink/70">Project request</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 min-h-[130px] w-full rounded-2xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="Tell us what you want to build, category, target market, timeline, and any packaging or QC needs…"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Button variant="secondary" className="min-w-[180px]" onClick={() => {}}>
                {status === "sending" ? "Sending…" : "Send request"}
              </Button>
              <Button
                href={`https://wa.me/${COMPANY.phoneWhatsapp.replace(/\+/g, "")}`}
                variant="primary"
                className="border border-black/10"
              >
                WhatsApp instead
              </Button>
              {status === "sent" ? (
                <span className="text-xs font-semibold text-sage-600">Sent! We’ll respond shortly.</span>
              ) : null}
              {status === "error" ? (
                <span className="text-xs font-semibold text-rose-700">
                  Something went wrong. Email us directly: {COMPANY.email}
                </span>
              ) : null}
            </div>

            <p className="mt-4 text-xs text-ink/60">
              Tip: For best results, include product category, timeline, target countries, and which services you need.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/60 py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-extrabold text-ink">{COMPANY.marketingName}</div>
            <div className="mt-2 text-xs text-ink/60">{COMPANY.officialName}</div>
            <div className="mt-4 text-sm font-semibold text-ink/80">{COMPANY.sloganPrimary}</div>
            <div className="text-sm font-semibold text-ink/70">{COMPANY.sloganSecondary}</div>
          </div>

          <div className="text-sm">
            <div className="font-extrabold text-ink">Quick links</div>
            <div className="mt-3 grid gap-2 text-ink/70">
              <a className="hover:text-ink" href="#services">Services</a>
              <a className="hover:text-ink" href="#brands">Brands</a>
              <a className="hover:text-ink" href="#partners">Partners</a>
              <a className="hover:text-ink" href="#careers">Careers</a>
              <a className="hover:text-ink" href="#contact">Contact</a>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-extrabold text-ink">Contact</div>
            <div className="mt-3 grid gap-2 text-ink/70">
              <a className="hover:text-ink" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              <a
                className="hover:text-ink"
                href={`https://wa.me/${COMPANY.phoneWhatsapp.replace(/\+/g, "")}`}
              >
                WhatsApp: {COMPANY.phoneWhatsapp}
              </a>
              <div>WeChat: {COMPANY.wechat}</div>
              <a className="hover:text-ink" href={COMPANY.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <div className="mt-2 text-xs text-ink/60">
                {COMPANY.domain} • {COMPANY.website}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-6 text-xs text-ink/60">
          <div>© {new Date().getFullYear()} {COMPANY.officialName}. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a className="hover:text-ink" href="#">Privacy</a>
            <a className="hover:text-ink" href="#">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main">
        <Hero />
        <Partners />
        <About />
        <Services />
        <Brands />
        <ProductCategories />
        <Testimonials />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <MobileBottomBar />
      {/* Add bottom padding so mobile bar doesn't cover content */}
      <div className="h-16 sm:hidden" />
    </div>
  );
}


