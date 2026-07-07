import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Compass,
  BookOpen,
  Sparkles,
  Brain,
  Mountain,
  Mic2,
  ArrowRight,
  Check,
  Search,
  Route as RouteIcon,
  LayoutGrid,
  Users,
  ClipboardCheck,
  BarChart3,
  Presentation,
  MonitorPlay,
  Layers,
  FileText,
  Building2,
  Target,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";


export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — L&D Consulting, Digital Learning, AI Workflows | Aarambh" },
      {
        name: "description",
        content:
          "Six integrated solutions: learning strategy, instructional design, AI-enabled learning, facilitation, experiential offsites and keynotes.",
      },
      { property: "og:title", content: "Solutions — Aarambh" },
      { property: "og:description", content: "Strategy, design, delivery and AI for L&D." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const solutions = [
  {
    id: "strategy",
    icon: Compass,
    title: "Learning Strategy & Consulting",
    headline: "Where Learning Meets Strategy",
    short: "TNA, capability mapping, learning journeys and impact planning.",
    items: [
      "Training needs analysis",
      "Learning journey design",
      "Capability mapping",
      "Content audits",
      "Learning impact planning",
    ],
  },
  {
    id: "id",
    icon: BookOpen,
    title: "Instructional Design & Content Development",
    headline: "Content That Engages. Learning That Sticks.",
    short: "ILT, eLearning, blended programs, SCORM, microlearning and more.",
    items: [
      "ILT, eLearning and blended learning design",
      "Storyboards, facilitator guides, workbooks, assessments",
      "SCORM modules and microlearning",
      "Scenario-based learning",
      "HTML5 conversion, translation and localization",
    ],
  },
  {
    id: "ai",
    icon: Sparkles,
    title: "AI-Enabled Learning Solutions",
    headline: "Where AI Supports Performance and Skill Building",
    short: "AI job aids, prompt libraries, AI literacy and skill practice.",
    items: [
      "AI-assisted job aids and prompt-based workflows",
      "AI-enabled knowledge refreshers",
      "Scenario-based skill practice",
      "Prompt libraries",
      "AI literacy programs",
      "AI-assisted content review",
    ],
  },
  {
    id: "delivery",
    icon: Brain,
    title: "Training Delivery & Facilitation",
    headline: "Learning Delivery That Engages, Enables, and Empowers",
    short: "BFSI, soft skills, leadership, sales and TTT programs.",
    items: [
      "BFSI domain training",
      "Soft skills and behavioural programs",
      "Leadership and managerial training",
      "Sales and service training",
      "Train-the-trainer programs",
    ],
  },
  {
    id: "offsites",
    icon: Mountain,
    title: "Offsites & Experiential Learning",
    headline: "Where Team Experiences Turn into Workplace Impact",
    short: "Leadership retreats, team alignment, outbound and simulations.",
    items: [
      "Leadership retreats",
      "Team alignment workshops",
      "Outbound learning",
      "Sales energisers",
      "Culture-building interventions",
      "Simulations and debrief-led learning",
    ],
  },
  {
    id: "keynotes",
    icon: Mic2,
    title: "Keynotes & Motivational Sessions",
    headline: "Stories That Move People. Insights That Stay.",
    short: "Leadership, resilience, ownership and performance mindset talks.",
    items: [
      "Leadership and resilience",
      "Ownership and accountability",
      "Women leadership",
      "Change and transformation",
      "Performance mindset, team energy and motivation",
    ],
  },
] as const;

function SolutionsPage() {
  return (
    <SiteLayout>
      <section className="hero-bg">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <span className="eyebrow">Our solutions</span>
          <h1 className="display-h1 mt-5 max-w-4xl">
            A complete L&amp;D partner — from <em className="text-primary not-italic">strategy</em> to{" "}
            <em className="text-primary not-italic">delivery</em>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            Six integrated solutions, designed to be picked individually or stitched together
            into a complete capability journey.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map(({ id, icon: Icon, title, short }) => (
            <a
              key={id}
              href={`#${id}`}
              className="card-elegant p-7 group block"
            >
              <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-display">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{short}</p>
              <div className="mt-5 inline-flex items-center text-sm font-medium text-primary">
                Learn more <ArrowRight className="ml-1.5 h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {solutions.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={idx % 2 === 0 ? "sand-bg" : ""}
        >
          <div className="container-px mx-auto max-w-7xl section grid lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-elegant">
                <s.icon className="h-7 w-7" />
              </div>
              <span className="eyebrow mt-6 block">{s.title}</span>
              <h2 className="display-h2 mt-3">{s.headline}</h2>
              <Button asChild className="mt-6">
                <Link to="/contact">
                  Discuss this solution <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <div className="lg:col-span-7">
              <div className="card-elegant p-8">
                <div className="text-sm font-semibold text-primary uppercase tracking-widest">
                  What's included
                </div>
                <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-3 items-start text-sm">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Solution-specific extras */}
          {s.id === "strategy" && <StrategyExtras />}
          {s.id === "id" && <ContentExtras />}
        </section>
      ))}

    </SiteLayout>
  );
}

/* -------------------- Strategy extras -------------------- */

const strategyHelpBuild = [
  { icon: Search, title: "Training Needs Analysis (TNA)", body: "Identify learning gaps, business priorities, and capability needs." },
  { icon: RouteIcon, title: "Learning Journey Design", body: "Structure learning across roles, levels, and touchpoints." },
  { icon: LayoutGrid, title: "Storyboarding & Content Structuring", body: "Convert raw inputs into clear, logical learning flows." },
  { icon: Users, title: "Adult Learning & Engagement Strategy", body: "Apply principles that make learning relevant and interactive." },
  { icon: ClipboardCheck, title: "Assessment Design", body: "Build checks, practice, and evaluation aligned to outcomes." },
  { icon: BarChart3, title: "Impact Measurement", body: "Connect learning takeaways with application and performance." },
];

const strategyApproach = [
  { n: "1", icon: Search, title: "Discover", text: "Understand the business context and performance need" },
  { n: "2", icon: Users, title: "Define", text: "Define learner profiles, audience needs, and success expectations" },
  { n: "3", icon: RouteIcon, title: "Design", text: "Design the learning journey across roles, levels, and stages" },
  { n: "4", icon: LayoutGrid, title: "Develop", text: "Structure content, engagement methods, and practice opportunities" },
  { n: "5", icon: BarChart3, title: "Deliver Impact", text: "Align assessments, application, and impact measurement" },
];

const strategyPillars = [
  { icon: Building2, title: "Business-Aligned", body: "Keeps learning anchored to organisational goals and performance outcomes." },
  { icon: Users, title: "Learner-Centred", body: "Builds journeys around audience context, motivation, and practical relevance." },
  { icon: Target, title: "Outcome-Focused", body: "Ensures learning is structured for application, recall, and measurable impact." },
];

function StrategyExtras() {
  return (
    <div className="container-px mx-auto max-w-7xl pb-24 -mt-8 md:-mt-16">
      {/* What We Help You Build */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="display-h2">What We Help You Build</h3>
        <div className="mx-auto mt-3 h-[3px] w-16 bg-primary rounded-full" />
      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {strategyHelpBuild.map(({ icon: Icon, title, body }) => (
          <div key={title} className="card-elegant p-6 flex gap-4">
            <div className="h-12 w-12 shrink-0 rounded-full border-2 border-primary/30 grid place-items-center text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-semibold">{title}</div>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Our Approach — journey map */}
      <ApproachJourney />


      {/* Three pillars */}
      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {strategyPillars.map(({ icon: Icon, title, body }) => (
          <div key={title} className="card-elegant p-6 text-center">
            <div className="mx-auto h-14 w-14 rounded-full bg-primary-soft grid place-items-center">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div className="mt-4 font-display font-semibold">{title}</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      {/* CTA banner */}
      <div className="mt-14 rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-elegant">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-primary-foreground/15 grid place-items-center shrink-0">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <div className="font-display text-xl">Need a learning strategy that turns content into capability?</div>
            <p className="mt-1.5 text-sm text-primary-foreground/85">
              Let's design learning journeys that are structured, engaging, and aligned to business outcomes.
            </p>
          </div>
        </div>
        <Button asChild size="lg" variant="secondary" className="shrink-0">
          <Link to="/contact">
            Talk to Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

/* -------------------- Approach journey map -------------------- */

function ApproachJourney() {
  return (
    <div className="mt-24 relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary-soft/60 via-background to-primary-soft/40 p-6 md:p-12">
      {/* decorative dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-primary, #5b2c81) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative text-center max-w-3xl mx-auto">
        <span className="eyebrow">The journey</span>
        <h3 className="display-h2 mt-3">Our Approach</h3>
        <div className="mx-auto mt-3 h-[3px] w-16 bg-primary rounded-full" />
        <p className="mt-4 text-muted-foreground">
          A structured five-stage journey that turns business needs into meaningful learning architecture.
        </p>
      </div>

      {/* Desktop: winding path */}
      <div className="relative mt-16 hidden lg:block">
        <svg
          className="absolute inset-x-0 top-10 mx-auto"
          width="100%"
          height="220"
          viewBox="0 0 1200 220"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.path
            d="M 60 110 C 200 20, 320 200, 480 110 S 760 20, 900 110 S 1120 200, 1200 110"
            stroke="var(--color-primary, #5b2c81)"
            strokeWidth="2.5"
            strokeDasharray="8 8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </svg>

        <div className="relative grid grid-cols-5 gap-4">
          {strategyApproach.map((step, i) => {
            const Icon = step.icon;
            const up = i % 2 === 0;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className={`flex flex-col items-center ${up ? "" : "mt-32"}`}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl" />
                  <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground grid place-items-center shadow-elegant ring-4 ring-background">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-background border-2 border-primary text-primary grid place-items-center font-display font-bold text-sm shadow-soft">
                    {step.n}
                  </div>
                </div>
                <div className="mt-5 text-center max-w-[200px]">
                  <div className="font-display font-semibold text-primary">{step.title}</div>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground/75">{step.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile / tablet: vertical timeline */}
      <div className="relative mt-12 lg:hidden">
        <div className="absolute left-8 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/10" />
        <div className="space-y-6">
          {strategyApproach.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex gap-5 items-start"
              >
                <div className="relative z-10 shrink-0">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground grid place-items-center shadow-elegant ring-4 ring-background">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="absolute -top-1 -right-1 h-7 w-7 rounded-full bg-background border-2 border-primary text-primary grid place-items-center font-display font-bold text-xs">
                    {step.n}
                  </div>
                </div>
                <div className="card-elegant p-5 flex-1">
                  <div className="font-display font-semibold text-primary">{step.title}</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{step.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


/* -------------------- Content extras -------------------- */

const contentDeliver = [
  { icon: FileText, text: "ILT decks, facilitator guides, participant workbooks" },
  { icon: MonitorPlay, text: "eLearning modules (SCORM compliant, Storyline-based)" },
  { icon: Layers, text: "Blended learning journeys (digital + classroom integration)" },
];

const contentFormats = [
  {
    icon: Presentation,
    title: "ILT Content Solutions",
    body: "Structured classroom learning content for engaging facilitator-led sessions.",
    items: ["Decks & session flow", "Facilitator guides", "Participant workbooks"],
  },
  {
    icon: MonitorPlay,
    title: "Digital Learning Solutions",
    body: "Interactive, self-paced learning designed for clarity, engagement, and recall.",
    items: ["SCORM-compliant modules", "Storyline-based design", "Interactive eLearning"],
  },
  {
    icon: Layers,
    title: "Blended Learning Journeys",
    body: "Integrated learning experiences that connect digital and classroom formats.",
    items: ["Digital + classroom integration", "Reinforcement journeys", "Multi-format learning flow"],
  },
];

function ContentExtras() {
  return (
    <div className="container-px mx-auto max-w-7xl pb-24 -mt-8 md:-mt-16">
      {/* What We Deliver */}
      <div className="card-elegant p-6 md:p-8">
        <div className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
          <span className="inline-block h-px w-8 bg-border align-middle mr-3" />
          What we deliver
          <span className="inline-block h-px w-8 bg-border align-middle ml-3" />
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6 md:divide-x md:divide-border">
          {contentDeliver.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-4 md:px-6 first:md:pl-0 last:md:pr-0">
              <div className="h-11 w-11 shrink-0 rounded-full bg-primary-soft grid place-items-center text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore by Format */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h3 className="display-h2">Explore by Format</h3>
        <div className="mx-auto mt-3 h-[3px] w-16 bg-primary rounded-full" />
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {contentFormats.map(({ icon: Icon, title, body, items }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group card-elegant p-7"
          >
            <div className="h-14 w-14 rounded-full bg-primary-soft grid place-items-center text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <div className="mt-5 font-display text-lg text-primary font-semibold">{title}</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
            <ul className="mt-5 space-y-2">
              {items.map((it) => (
                <li key={it} className="flex gap-2 items-start text-sm">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/85">{it}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-5 inline-flex items-center text-sm font-medium text-primary">
              View Details <ArrowRight className="ml-1.5 h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom hint */}
      <div className="mt-10 rounded-2xl bg-primary-soft/60 border border-primary/15 p-5 flex items-center justify-center gap-3 text-sm text-foreground/80">
        <Compass className="h-5 w-5 text-primary" />
        Select a format to explore detailed solutions in ILT, Digital Learning, or Blended Learning.
      </div>
    </div>
  );
}

