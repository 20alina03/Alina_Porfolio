import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    title: "Tech Systems Design",
    kind: "Figma Prototype · 2025",
    blurb:
      "An interactive product surface designed end-to-end in Figma — flows, components, and a clickable prototype.",
    tags: ["Figma", "Prototype", "Design System"],
    accent: "var(--lavender)",
    figma:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8oVr5bDikecG98Ae9iF3zs%2Ftech-systems-design%3Fnode-id%3D1093-221%26p%3Df%26t%3Dpf12TzQR2PSmfhWO-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D1093%253A221",
    live: "https://www.figma.com/proto/8oVr5bDikecG98Ae9iF3zs/tech-systems-design?node-id=1093-221&starting-point-node-id=1093%3A221",
    cta: "Open in Figma",
  },
  {
    title: "Atlas — Travel Social Platform",
    kind: "Product Design · UX",
    blurb:
      "A social space for travelers. Designed flows for journaling, discovery, and location-based community.",
    tags: ["UX", "Mobile", "Social"],
    accent: "var(--peach)",
    live: "https://atlas-where-you-share-your-journies.netlify.app/",
    cta: "View live product",
  },
  {
    title: "ParkMate",
    kind: "Maps & Discovery · UI",
    blurb:
      "Find parks nearby, filtered by what you actually want — designed for calm, one-handed exploration.",
    tags: ["Maps", "UI", "React"],
    accent: "var(--mint)",
    live: "https://parkmate-find-parks-near-you.netlify.app/",
    cta: "View live product",
  },
  {
    title: "MedHome — AI Health Assistant",
    kind: "Research · Conversational UI",
    blurb:
      "A research-led conversational interface for symptom triage, designed to feel calm rather than clinical.",
    tags: ["Research", "Chat UI", "Health"],
    accent: "var(--butter)",
    live: "https://docs.google.com/document/d/1kb20IRW2wt74UDwo1_M9milPrUAVcLdmahLL1Vt3wzg/edit?usp=sharing",
    cta: "Read research",
  },
  {
    title: "METRO POS",
    kind: "Enterprise UI",
    blurb:
      "Retail point-of-sale interface for fast cashier workflows — designed for speed, scanned in milliseconds.",
    tags: ["Desktop", "Enterprise", "UI"],
    accent: "var(--rose)",
    live: "https://www.linkedin.com/posts/aleena-rafiq-4480a4278_projectshowcase-pos-java-activity-7317998996860428290-wmB-",
    cta: "View showcase",
  },
  {
    title: "Masala Tarka",
    kind: "AI Culinary Platform",
    blurb:
      "AI-powered recipe generation and restaurant discovery — turning ingredients and budgets into dinner plans.",
    tags: ["AI", "Web", "Lifestyle"],
    accent: "var(--lavender)",
    live: "#contact",
    cta: "Request case study",
  },
];

const SKILLS = [
  "Figma", "Prototyping", "Design Systems", "User Research",
  "Wireframing", "Interaction Design", "Usability Testing",
  "Information Architecture", "Visual Design", "Accessibility",
];

const PROCESS = [
  { n: "01", t: "Discover", d: "Stakeholder interviews, user research, and competitive teardown to frame the real problem." },
  { n: "02", t: "Define", d: "Personas, journey maps, and an information architecture that prioritizes the few things that matter." },
  { n: "03", t: "Design", d: "From low-fidelity flows to high-fidelity Figma systems — designed in components, not in screens." },
  { n: "04", t: "Deliver", d: "Prototype, test, iterate. Hand off with developer-ready specs and a living design system." },
];

function Portfolio() {
  const [active, setActive] = useState("work");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      document.documentElement.style.setProperty("--mx", String(x));
      document.documentElement.style.setProperty("--my", String(y));
      document.querySelectorAll<HTMLElement>(".tilt-3d").forEach((el) => {
        el.style.setProperty("--rx", String(x * 6));
        el.style.setProperty("--ry", String(y * 4));
      });
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const depth = Number(el.dataset.parallax || "20");
        const existing = el.getAttribute("data-rotate") || "0";
        el.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0) rotate(${existing}deg)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      obs.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Pastel ambient blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div data-parallax="40" data-rotate="0" className="pastel-blob drift-a" style={{ background: "var(--peach)", width: 520, height: 520, top: -120, left: -120 }} />
        <div data-parallax="-30" data-rotate="0" className="pastel-blob drift-b" style={{ background: "var(--lavender)", width: 480, height: 480, top: "30%", right: -160 }} />
        <div data-parallax="25" data-rotate="0" className="pastel-blob drift-c" style={{ background: "var(--mint)", width: 420, height: 420, bottom: -140, left: "20%" }} />
        <div data-parallax="-18" data-rotate="0" className="pastel-blob drift-a" style={{ background: "var(--butter)", width: 320, height: 320, top: "55%", left: "10%", animationDelay: "-4s" }} />
        <FloatingUX mounted={mounted} />
        <div className="fixed inset-0 grain opacity-50" />
      </div>

      <Header active={active} />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}

function Header({ active }: { active: string }) {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 px-4 w-[min(960px,calc(100%-1rem))]">
      <nav className="flex items-center justify-between rounded-full border border-border/60 bg-card/70 px-5 py-2.5 backdrop-blur-xl shadow-[0_8px_30px_rgba(60,40,80,0.06)]">
        <a href="#top" className="font-display text-xl leading-none">
          Alina<span className="text-muted-foreground">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`rounded-full px-3 py-1.5 transition-all ${
                  active === n.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-foreground px-4 py-1.5 text-sm text-background transition-transform hover:scale-[1.03]"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-6xl px-6 [perspective:1200px]">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
            Available for design work · 2026
          </span>
        </div>

        <p className="fade-up mt-10 max-w-md text-base md:text-lg italic text-muted-foreground font-display">
          Designing quiet, considered interfaces —
        </p>

        <h1
          className="tilt-3d fade-up mt-2 font-display leading-[0.92] text-[10vw] md:text-[5rem] lg:text-[6.5rem] whitespace-nowrap"
          data-text="Alina Rafiq"
        >
          <span className="name-shine">Alina Rafiq.</span>
        </h1>

        <div className="mt-12 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <p className="fade-up max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm a UI/UX designer based in Lahore. I help teams turn fuzzy product
            ideas into calm, usable, beautifully crafted interfaces. Currently
            designing at <span className="text-foreground">Novasinc</span>,
            previously at Synavos and MAIMA Soft.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="#work"
              className="rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform hover:scale-[1.03]"
            >
              See selected work →
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm text-foreground transition-colors hover:bg-accent"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Figma", "Prototyping", "Design Systems", "Research", "Wireframes", "Interaction", "Accessibility", "Usability Testing"];
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-card/50 py-5 backdrop-blur-sm">
      <div className="marquee font-display text-3xl md:text-4xl text-foreground/70">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Selected work" title="Things I have shaped." count={`${PROJECTS.length} projects`} />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured }: { project: typeof PROJECTS[number]; featured?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(60,40,80,0.18)] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div
        aria-hidden
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-70 transition-transform duration-700 group-hover:scale-110"
        style={{ background: project.accent, filter: "blur(40px)" }}
      />
      <div className="relative">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span>{project.kind}</span>
          <span className="opacity-60">→</span>
        </div>
        <h3 className="mt-4 font-display text-4xl md:text-5xl leading-tight">{project.title}</h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{project.blurb}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-foreground/80">
              {t}
            </span>
          ))}
        </div>

        {project.figma && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-background/60">
            {open ? (
              <iframe
                title={project.title}
                src={project.figma}
                className="h-[460px] w-full"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => setOpen(true)}
                className="flex h-[220px] w-full items-center justify-center gap-3 bg-gradient-to-br from-[var(--lavender)] to-[var(--peach)] text-foreground transition-all hover:brightness-105"
              >
                <span className="rounded-full bg-foreground px-5 py-2 text-sm text-background">▶ Load Figma prototype</span>
              </button>
            )}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-transform hover:scale-[1.03]"
          >
            {project.cta} <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function SectionHeader({ eyebrow, title, count }: { eyebrow: string; title: string; count?: string }) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-border pb-6">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</p>
        <h2 className="mt-3 font-display text-5xl md:text-6xl leading-[0.95]">{title}</h2>
      </div>
      {count && <span className="hidden md:block text-sm text-muted-foreground">{count}</span>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="About" title="Designer with an engineer's brain." />
        <div className="mt-14 grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I studied <span className="text-foreground">Software Engineering at FAST NUCES</span>,
              which means I design knowing what's expensive to build and what isn't. My favourite
              part of design is the unglamorous middle — IA, edge cases, the empty state nobody
              asked for.
            </p>
            <p>
              I've designed for startups (MAIMA Soft), enterprise teams (Synavos), and I'm currently
              shaping product surfaces at Novasinc. I work primarily in Figma, lean heavily on
              design systems, and care more about clarity than cleverness.
            </p>
            <p>
              Outside of work I sketch interfaces, read about typography, and over-think the
              microcopy on every button I tap.
            </p>
          </div>

          <aside className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Toolbox</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <li key={s} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Experience</p>
              <ExperienceRow role="UI/UX & Product Designer" org="Novasinc" period="Present" />
              <ExperienceRow role="Software Engineer (Design + Dev)" org="Synavos Solutions" period="Jun – Aug 2025" />
              <ExperienceRow role="UI/UX Designer" org="MAIMA Soft" period="Jun – Aug 2024" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({ role, org, period }: { role: string; org: string; period: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
      <div>
        <p className="text-foreground">{role}</p>
        <p className="text-sm text-muted-foreground">{org}</p>
      </div>
      <span className="shrink-0 text-xs uppercase tracking-wider text-muted-foreground">{period}</span>
    </div>
  );
}

function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="How I work" title="A small, honest process." />
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {PROCESS.map((p, i) => (
            <div
              key={p.n}
              className="rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1"
              style={{
                background:
                  i % 2 === 0
                    ? "linear-gradient(160deg, var(--card), color-mix(in oklab, var(--lavender) 40%, var(--card)))"
                    : "linear-gradient(160deg, var(--card), color-mix(in oklab, var(--peach) 40%, var(--card)))",
              }}
            >
              <p className="font-display text-3xl text-foreground/60">{p.n}</p>
              <h3 className="mt-2 text-xl text-foreground">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-border p-10 md:p-16"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--peach) 70%, var(--card)) 0%, color-mix(in oklab, var(--lavender) 70%, var(--card)) 100%)",
          }}
        >
          <p className="text-xs uppercase tracking-[0.24em] text-foreground/70">Let's make something</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            Have a product<br />that deserves <em>care</em>?
          </h2>
          <p className="mt-6 max-w-xl text-lg text-foreground/80">
            I'm taking on a small number of design engagements for 2026. If you're shaping
            something new — or fixing something old — I'd love to hear about it.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:alinarafiq0676@gmail.com"
              className="rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform hover:scale-[1.03]"
            >
              alinarafiq0676@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/aleena-rafiq-4480a4278/"
              target="_blank" rel="noreferrer"
              className="rounded-full border border-foreground/20 bg-background/60 px-6 py-3 text-sm text-foreground backdrop-blur transition-colors hover:bg-background"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/20alina03"
              target="_blank" rel="noreferrer"
              className="rounded-full border border-foreground/20 bg-background/60 px-6 py-3 text-sm text-foreground backdrop-blur transition-colors hover:bg-background"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center">
        <p className="font-display text-2xl">Alina Rafiq</p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} — Designed & built with care in Lahore.
        </p>
      </div>
    </footer>
  );
}

function FloatingUX({ mounted }: { mounted: boolean }) {
  if (!mounted) return null;

  const items: Array<{ top: string; left?: string; right?: string; delay: string; depth: number; rotate: number; el: React.ReactNode }> = [
    {
      top: "12%", left: "6%", delay: "-2s", depth: 22, rotate: -8,
      el: (
        <div className="rounded-xl border border-border bg-card/80 backdrop-blur px-3 py-2 shadow-[0_10px_30px_-12px_rgba(60,40,80,0.18)]">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-300" />
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            <span className="ml-2 text-[10px] tracking-widest text-muted-foreground uppercase">Artboard · 1440</span>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1">
            <div className="h-6 rounded bg-[var(--lavender)]/70" />
            <div className="h-6 rounded bg-[var(--peach)]/70" />
            <div className="h-6 rounded bg-[var(--mint)]/70" />
          </div>
        </div>
      ),
    },
    {
      top: "22%", right: "8%", delay: "-5s", depth: -28, rotate: 6,
      el: (
        <div className="rounded-full border border-border bg-card/80 backdrop-blur px-3 py-1.5 shadow-md flex items-center gap-2">
          <span className="h-3 w-3 rounded-full" style={{ background: "var(--lavender)" }} />
          <span className="h-3 w-3 rounded-full" style={{ background: "var(--peach)" }} />
          <span className="h-3 w-3 rounded-full" style={{ background: "var(--mint)" }} />
          <span className="h-3 w-3 rounded-full" style={{ background: "var(--butter)" }} />
          <span className="h-3 w-3 rounded-full" style={{ background: "var(--rose)" }} />
        </div>
      ),
    },
    {
      top: "62%", left: "4%", delay: "-1s", depth: 18, rotate: -4,
      el: (
        <div className="rounded-lg border border-border bg-card/80 backdrop-blur px-3 py-2 shadow-md font-display">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Aa · Instrument</p>
          <p className="text-3xl leading-none mt-1">Aa</p>
        </div>
      ),
    },
    {
      top: "70%", right: "10%", delay: "-3s", depth: -20, rotate: 5,
      el: (
        <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-md">
          <defs>
            <pattern id="ux-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="80" height="80" rx="10" fill="var(--card)" stroke="var(--border)" />
          <rect width="80" height="80" rx="10" fill="url(#ux-grid)" className="text-foreground" />
          <circle cx="22" cy="40" r="4" fill="var(--lavender)" />
          <circle cx="58" cy="40" r="4" fill="var(--peach)" />
          <line x1="22" y1="40" x2="58" y2="40" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="3 3" />
        </svg>
      ),
    },
    {
      top: "38%", left: "44%", delay: "-7s", depth: 14, rotate: -10,
      el: (
        <svg width="36" height="46" viewBox="0 0 24 30" className="drop-shadow">
          <path d="M2 2 L2 22 L8 18 L11 26 L14 25 L11 17 L20 17 Z" fill="var(--foreground)" stroke="var(--background)" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      top: "8%", left: "52%", delay: "-4s", depth: -12, rotate: 4,
      el: (
        <div className="rounded-md border border-border bg-card/80 backdrop-blur px-2.5 py-1 shadow-sm flex items-center gap-2">
          <span className="h-2 w-2 rounded-sm rotate-45 border border-foreground/70" />
          <span className="text-[10px] tracking-wider text-muted-foreground">12 · 16 · 24 · 32</span>
        </div>
      ),
    },
    {
      top: "48%", right: "32%", delay: "-6s", depth: 24, rotate: -6,
      el: (
        <div className="rounded-2xl border border-border bg-card/80 backdrop-blur p-2 shadow-md w-28">
          <div className="h-10 rounded-lg bg-gradient-to-br from-[var(--peach)] to-[var(--lavender)]" />
          <div className="mt-1.5 space-y-1">
            <div className="h-1.5 w-3/4 rounded bg-foreground/15" />
            <div className="h-1.5 w-1/2 rounded bg-foreground/10" />
          </div>
        </div>
      ),
    },
    {
      top: "82%", left: "40%", delay: "-2.5s", depth: -16, rotate: 8,
      el: (
        <svg width="70" height="36" viewBox="0 0 70 36" className="drop-shadow-sm">
          <path d="M2 30 C 18 30, 18 8, 35 8 S 52 30, 68 6" fill="none" stroke="var(--foreground)" strokeWidth="1.5" />
          <circle cx="2" cy="30" r="3" fill="var(--lavender)" stroke="var(--foreground)" strokeWidth="1" />
          <circle cx="35" cy="8" r="3" fill="var(--peach)" stroke="var(--foreground)" strokeWidth="1" />
          <circle cx="68" cy="6" r="3" fill="var(--mint)" stroke="var(--foreground)" strokeWidth="1" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {items.map((it, i) => (
        <div
          key={i}
          data-parallax={it.depth}
          data-rotate={it.rotate}
          className="absolute hidden sm:block"
          style={{
            top: it.top,
            left: it.left,
            right: it.right,
          }}
        >
          <div
            className="float-slow opacity-80"
            style={{
              animationDelay: it.delay,
              transform: `rotate(${it.rotate}deg)`,
            }}
          >
            {it.el}
          </div>
        </div>
      ))}
    </>
  );
}

