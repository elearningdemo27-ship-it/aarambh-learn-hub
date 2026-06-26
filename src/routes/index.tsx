import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Banknote,
  ShoppingBag,
  Factory,
  HeartPulse,
  Cpu,
  Compass,
  BookOpen,
  Sparkles,
  Mic2,
  Mountain,
  Brain,
  CheckCircle2,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import partnersAsset from "@/assets/partners-grid.png.asset.json";
import heroManAsset from "@/assets/hero-man.png.asset.json";
import heroWomanAsset from "@/assets/hero-woman.png.asset.json";
import serviceStrategy from "@/assets/service-strategy.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceFacilitation from "@/assets/service-facilitation.jpg";
import serviceOffsite from "@/assets/service-offsite.jpg";
import serviceKeynote from "@/assets/service-keynote.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarambh — Learning That Builds Capability, Not Just Completion" },
      {
        name: "description",
        content:
          "L&D consulting that goes beyond content. Instructional design, digital learning, facilitation, experiential programs and AI-enabled workflows that improve workplace performance.",
      },
      { property: "og:title", content: "Aarambh — Learning That Builds Capability" },
      {
        property: "og:description",
        content:
          "We help organisations build capability through purposeful learning design and AI-enabled workflows.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const industries = [
  { icon: Banknote, label: "BFSI" },
  { icon: ShoppingBag, label: "Retail & FMCG" },
  { icon: Factory, label: "Manufacturing" },
  { icon: HeartPulse, label: "Healthcare & Pharma" },
  { icon: Cpu, label: "Technology" },
  { icon: Building2, label: "Professional Services" },
];

const differentiators = [
  {
    title: "Practitioner-led",
    body: "We bring decades of real workplace experience to the design table.",
  },
  {
    title: "Instructional design depth",
    body: "Structured learning for clarity, retention and behavioural change.",
  },
  {
    title: "Facilitation strength",
    body: "Workshops that create engagement, reflection and ownership.",
  },
  {
    title: "BFSI & sales fluency",
    body: "Domain-relevant learning built for frontline performance.",
  },
  {
    title: "AI-ready mindset",
    body: "Modernise learning workflows without compromising quality.",
  },
];

const services = [
  {
    icon: Compass,
    title: "Learning Strategy & Consulting",
    desc: "TNA, capability mapping, learning journeys and impact planning.",
  },
  {
    icon: BookOpen,
    title: "Instructional Design & Content",
    desc: "ILT, eLearning, blended programs, SCORM, microlearning and more.",
  },
  {
    icon: Sparkles,
    title: "AI-Enabled Learning",
    desc: "AI job aids, prompt libraries, AI literacy and skill practice.",
  },
  {
    icon: Brain,
    title: "Training Delivery & Facilitation",
    desc: "BFSI, soft skills, leadership, sales, TTT and managerial programs.",
  },
  {
    icon: Mountain,
    title: "Offsites & Experiential",
    desc: "Leadership retreats, team alignment, outbound and simulations.",
  },
  {
    icon: Mic2,
    title: "Keynotes & Motivational",
    desc: "Leadership, resilience, ownership and performance mindset talks.",
  },
] as const;

const impact = [
  { value: "30+", label: "Years of L&D experience" },
  { value: "8+", label: "Years in digital learning" },
  { value: "300+", label: "Workshops delivered" },
  { value: "13L+", label: "Learner man-hours impacted" },
  { value: "250+", label: "eLearning hours created" },
  { value: "Multi", label: "Industries served in India" },
];

const testimonials = [
  {
    quote:
      "Aarambh translated dense compliance content into a learning experience our teams actually engaged with. The shift in completion was matched by a shift in conversation.",
    name: "L&D Head",
    org: "Leading Private Bank",
  },
  {
    quote:
      "Their facilitators bring rare maturity. The offsite moved from being an event to becoming a real reset for the leadership team.",
    name: "Head of HR",
    org: "Global Manufacturing Major",
  },
  {
    quote:
      "Practitioners who understand the front line. Our sales managers walked out with tools they were using the very next week.",
    name: "Sales Capability Lead",
    org: "BFSI",
  },
];

const heroSlides = [heroManAsset.url, heroWomanAsset.url];

const heroHighlights = [
  "Practitioner-led learning design",
  "Deep BFSI, sales & leadership expertise",
  "Digital, AI-enabled & experiential delivery",
  "Measurable workplace impact",
];

function HomePage() {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5500);
    return () => clearInterval(id);
  }, []);

  const scrollTestimonials = (direction: "left" | "right") => {
    const el = testimonialRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("[data-carousel-card]")?.clientWidth ?? 380;
    const gap = 24;
    el.scrollBy({ left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap, behavior: "smooth" });
  };
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary-soft">
        {/* Background carousel */}
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={slide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroSlides[slide]})` }}
            />
          </AnimatePresence>
          {/* Readability gradient over left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 md:via-white/70 to-transparent" />
        </div>

        <div className="relative container-px mx-auto max-w-7xl min-h-[88vh] md:min-h-[640px] flex items-center pt-24 pb-20 md:pt-28 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="eyebrow">Learning & Development Consulting</span>
            <h1 className="display-h1 mt-5 text-foreground">
              Learning That Builds <em className="text-primary not-italic">Capability</em>—Not
              Just Completion
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Instructional design, digital learning, facilitated workshops, experiential
              programs and AI-enabled workflows that build capability and improve workplace
              performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/solutions">
                  Explore Our Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Discuss Your Learning Need</Link>
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="mt-10 flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === slide ? "w-10 bg-primary" : "w-5 bg-primary/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY TEAMS CHOOSE — strip under hero */}
      <section className="border-y border-border bg-background">
        <div className="container-px mx-auto max-w-7xl py-8 md:py-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary shrink-0">
              <Sparkles className="h-4 w-4" /> Why teams choose Aarambh
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 flex-1">
              {heroHighlights.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* INDUSTRIES */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="eyebrow">Industries we serve</span>
              <h2 className="display-h2 mt-3 max-w-2xl">
                Learning designed for the realities of your industry
              </h2>
            </div>
            <p className="md:max-w-sm text-muted-foreground">
              From BFSI to manufacturing, our programs are rooted in domain context — not generic templates.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="card-elegant p-6 flex flex-col items-center text-center"
              >
                <Icon className="h-7 w-7 text-primary" />
                <div className="mt-3 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="sand-bg">
        <div className="container-px mx-auto max-w-7xl section">
          <div className="max-w-3xl">
            <span className="eyebrow">What makes us different</span>
            <h2 className="display-h2 mt-3">
              Practitioner-led learning. Designed for real workplace impact.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card-elegant p-6"
              >
                <div className="text-3xl font-display text-primary/40">0{i + 1}</div>
                <div className="mt-3 font-semibold">{d.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="eyebrow">Our solutions</span>
              <h2 className="display-h2 mt-3 max-w-2xl">
                A full L&amp;D partner across strategy, design and delivery
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/solutions">
                See all solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <Link
                key={title}
                to="/solutions"
                className="card-elegant p-7 group block"
              >
                <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-display">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="mt-5 inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition">
                  Learn more <ArrowRight className="ml-1.5 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="bg-[color-mix(in_oklab,var(--primary)_96%,white)] text-primary-foreground">
        <div className="container-px mx-auto max-w-7xl py-20">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {impact.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl md:text-5xl">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-primary-foreground/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by L&amp;D and business leaders across industries
          </p>
          <div className="mt-10">
            <img
              src={partnersAsset.url}
              alt="Our valued clients and partners including eBay, SBI Life, NSE Academy, IndiaFirst, BIBA, Ericsson, MFIN, Chandigarh University and more"
              className="w-full max-w-5xl mx-auto rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sand-bg">
        <div className="container-px mx-auto max-w-7xl section">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">In their words</span>
              <h2 className="display-h2 mt-3">What partners say about working with us</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollTestimonials("left")}
                className="h-10 w-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollTestimonials("right")}
                className="h-10 w-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div
            ref={testimonialRef}
            className="carousel-track mt-10 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                data-carousel-card
                className="card-elegant p-7 flex-shrink-0 snap-start w-[85vw] md:w-[45vw] lg:w-[32vw]"
              >
                <Quote className="h-7 w-7 text-primary/40" />
                <p className="mt-4 text-foreground/90 leading-relaxed">{t.quote}</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-px mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 shadow-elegant">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
            <div className="relative grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="display-h2">Have a learning need? Let's build it together.</h3>
                <p className="mt-4 text-primary-foreground/85 max-w-2xl">
                  Whether you're designing a new capability journey, modernising existing
                  content, or planning a high-impact offsite — we'd love to hear what you're
                  working on.
                </p>
              </div>
              <div className="md:text-right">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">
                    Discuss Your Learning Need <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
