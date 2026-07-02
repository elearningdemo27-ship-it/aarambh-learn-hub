import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Compass, Sparkles, ArrowRight, GraduationCap, LayoutTemplate, MessagesSquare, TrendingUp, BrainCircuit, Target } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import heroManAsset from "@/assets/hero-man.png.asset.json";
import heroWomanAsset from "@/assets/hero-woman.png.asset.json";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aarambh Resource Management Solutions" },
      {
        name: "description",
        content:
          "Practitioner-led L&D consulting practice. Learn about our story, founders and approach to building capability through purposeful learning.",
      },
      { property: "og:title", content: "About Aarambh" },
      {
        property: "og:description",
        content: "Practitioner-led learning, designed for real workplace impact.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const diffs = [
  { icon: GraduationCap, title: "Practitioner-led Experience", body: "We understand real workplace challenges and bring practical insight into every learning solution." },
  { icon: LayoutTemplate, title: "Instructional Design Depth", body: "We structure content for clarity, retention, and meaningful application." },
  { icon: MessagesSquare, title: "Facilitation Strength", body: "We create engagement, reflection, and conversations that lead to behavioural shift." },
  { icon: TrendingUp, title: "BFSI & Sales Understanding", body: "We build domain-relevant learning that connects with business and customer realities." },
  { icon: BrainCircuit, title: "AI-ready Mindset", body: "We help clients modernise learning while preserving quality, context, and learner relevance." },
];

const founders = [
  {
    name: "Capt. Shikha Saxena",
    role: "Founder | L&D Consultant | TEDx Speaker | Business Coach",
    strengths: [
      "Leadership Development",
      "Behavioural Training",
      "Sales Capability",
      "Learning Strategy",
      "Experiential Facilitation",
      "Assessment Centres",
    ],
    initials: "SS",
  },
  {
    name: "Anil Saxena",
    role: "Facilitator | Sales Consultant | Corporate Trainer",
    strengths: [
      "Sales Training",
      "Dealer Management",
      "Frontline Capability",
      "Business Development",
      "Leadership Development",
      "Experiential Learning",
    ],
    initials: "AS",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="hero-bg">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <span className="eyebrow">About Aarambh</span>
            <h1 className="display-h1 mt-5">
              Learning experiences shaped around <em className="text-primary not-italic">people, performance, and purpose</em>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Aarambh Resource Management Solutions is a Learning &amp; Development consulting
              practice that helps organisations build capability through purposeful learning
              design, digital learning, facilitated interventions and experiential programs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Who we are</span>
            <h2 className="display-h2 mt-3">
              Practitioner-led learning. Designed for real workplace impact.
            </h2>
          </div>
          <div className="lg:col-span-7 text-muted-foreground leading-relaxed space-y-4 text-lg">
            <p>
              We're an experienced team of L&amp;D practitioners, facilitators, instructional
              designers and digital learning specialists. Our work sits at the intersection of
              business strategy, learning science and emerging technology.
            </p>
            <p>
              For three decades we've partnered with organisations to translate complex
              capability needs into learning experiences that change behaviour, lift
              performance and outlast the program itself.
            </p>
          </div>
        </div>
      </section>

      <section className="sand-bg relative overflow-hidden">
        {/* decorative brush strokes */}
        <div aria-hidden className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="absolute top-10 right-12 grid grid-cols-6 gap-1.5 opacity-40">
          {Array.from({ length: 36 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-primary/50" />
          ))}
        </div>
        <div aria-hidden className="absolute bottom-10 left-12 grid grid-cols-6 gap-1.5 opacity-40">
          {Array.from({ length: 36 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-primary/50" />
          ))}
        </div>

        <div className="container-px mx-auto max-w-7xl section relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow justify-center">Who we are</span>
            <h2 className="display-h2 mt-4">
              What Makes Us <span className="text-primary">Different</span>
            </h2>
            <div className="mx-auto mt-3 h-[3px] w-20 bg-primary rounded-full" />
            <p className="mt-5 text-muted-foreground text-lg">
              Practitioner-led learning. Designed for real workplace impact.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {diffs.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-card rounded-2xl border border-border p-7 text-center shadow-soft hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* purple corner accent */}
                <div aria-hidden className="absolute top-0 right-0 h-10 w-10 bg-primary [clip-path:polygon(100%_0,0_0,100%_100%)]" />
                {/* bottom underline that grows on hover */}
                <div aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-10 bg-primary rounded-full transition-all duration-300 group-hover:w-24" />

                <div className="mx-auto h-20 w-20 rounded-full bg-primary-soft grid place-items-center ring-8 ring-primary/5 group-hover:ring-primary/10 transition">
                  <Icon className="h-9 w-9 text-primary" />
                </div>
                <div className="mt-5 font-display font-semibold text-lg leading-snug">{title}</div>
                <div className="mx-auto mt-3 h-px w-10 bg-border" />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>

          {/* focus banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 mx-auto max-w-3xl rounded-2xl bg-card border border-primary/15 shadow-soft px-6 py-5 flex items-center gap-4"
          >
            <div className="h-12 w-12 rounded-full bg-primary-soft grid place-items-center shrink-0">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm md:text-base">
              <span className="font-semibold">Our focus is simple:</span>{" "}
              <span className="text-primary font-semibold">Better Learning. Stronger Performance. Real Impact.</span>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="eyebrow">Founders</span>
            <h2 className="display-h2 mt-3">The people behind Aarambh</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {founders.map((f) => (
              <div key={f.name} className="card-elegant p-8">
                <div className="flex items-center gap-5">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground grid place-items-center font-display text-2xl shadow-elegant">
                    {f.initials}
                  </div>
                  <div>
                    <div className="text-xl font-display">{f.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{f.role}</div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold">
                    Core strengths
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {f.strengths.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary-soft text-primary border border-primary/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sand-bg">
        <div className="container-px mx-auto max-w-7xl section">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Three decades of capability building", body: "From classrooms to digital to AI-enabled — we've designed for every shift." },
              { icon: Compass, title: "Strategy + craft", body: "Programs grounded in business outcomes and instructional design rigour." },
              { icon: Sparkles, title: "Honest, modern, partner-style", body: "We work as an extension of your L&D team, not a vendor." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="card-elegant p-7">
                <Icon className="h-7 w-7 text-primary" />
                <div className="mt-4 font-display text-xl">{title}</div>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px mx-auto max-w-6xl">
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-elegant">
            <div>
              <h3 className="display-h2">Let's talk about what you're building.</h3>
              <p className="mt-3 text-primary-foreground/85 max-w-xl">
                Tell us about your capability priorities and we'll suggest where to start.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
