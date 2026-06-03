import React, { useState } from "react";

import {
  Sparkles,
  Layers,
  Cpu,
  Smartphone,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  Send,
  Clock,
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Zap,
  Globe,
  Settings,
  ShieldCheck,
  Code,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("web");

  const [proposalService, setProposalService] = useState(
    "Web & AI Development"
  );

  const [proposalScope, setProposalScope] = useState("Standard Portal");

  const [submitted, setSubmitted] = useState(false);

  const [estimatePrice, setEstimatePrice] = useState("$5,000 - $10,000");

  // Custom SVGs for Tech and AI Icons to guarantee premium visual fidelity

  const TechIcons = {
    React: (
      <svg
        className="w-6 h-6 text-cyan-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(0 12 12)" />

        <ellipse
          rx="10"
          ry="4.5"
          cx="12"
          cy="12"
          transform="rotate(60 12 12)"
        />

        <ellipse
          rx="10"
          ry="4.5"
          cx="12"
          cy="12"
          transform="rotate(120 12 12)"
        />

        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),

    AI: (
      <svg
        className="w-6 h-6 text-purple-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />

        <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />

        <path d="M12 8a4 4 0 0 1 4 4" />
      </svg>
    ),

    NextJS: (
      <svg
        className="w-6 h-6 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />

        <path d="M7.5 17.5L16 6.5M12 12.5v5" />
      </svg>
    ),

    Tailwind: (
      <svg
        className="w-6 h-6 text-teal-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 6c-3.182 0-5.303 1.59-6.364 4.773C7.424 7.636 9.545 6.576 12 6.576c4.242 0 6.364 2.121 6.364 6.364 0-3.182-1.06-5.303-4.242-6.364zM5.636 12.364C4.576 15.545 6.697 17.167 12 17.167c4.242 0 6.364-1.061 6.364-4.243-1.06 3.182-3.182 4.242-6.364 4.242-3.182 0-5.303-1.06-6.364-4.773z" />
      </svg>
    ),

    Python: (
      <svg
        className="w-6 h-6 text-blue-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2c2.76 0 5 2.24 5 5v2H10V7c0-1.1.9-2 2-2zm0 20c-2.76 0-5-2.24-5-5v-2h7v2c0 1.1-.9 2-2 2z" />

        <path d="M7 9H5a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h2V9zm10 0h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2V9z" />
      </svg>
    ),

    Node: (
      <svg
        className="w-6 h-6 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" />

        <path d="M12 22V12" />

        <path d="M12 12L3.5 7" />

        <path d="M12 12l8.5-5" />
      </svg>
    ),
  };

  const services = {
    branding: {
      title: "Branding & Creative Studio",

      subtitle: "Creating unforgettable, human-centric visual identities.",

      description:
        "We merge business logic with creative artistry to establish brand footprints that resonate deeply, build trust, and drive absolute preference.",

      icon: <Layers className="w-8 h-8 text-amber-400" />,

      badges: [
        "Brand Strategy",
        "Corporate Identity",
        "Logo & Packaging Design",
        "Retail Space Branding",
        "Marketing Collaterals",
      ],

      techLabel: "Creative Engine & Standards:",

      tech: [
        "Figma Enterprise",
        "Adobe Firefly AI",
        "WebGL Interaction",
        "Cinema 4D Rendering",
        "Typography Optimization",
      ],

      color: "from-amber-600 to-orange-600",
    },

    web: {
      title: "Web & Enterprise Software",

      subtitle: "Supercharged web architectures built for scaling.",

      description:
        "Responsive, custom-coded interfaces engineered alongside robust backend frameworks, automated workflows, and direct cognitive AI services.",

      icon: <Cpu className="w-8 h-8 text-cyan-400" />,

      badges: [
        "E-Commerce Hubs",
        "Interactive Portals",
        "Custom Web Apps",
        "Automated Workflows",
        "Fluid UI/UX Integration",
      ],

      techLabel: "Modern Tech Ecosystem:",

      tech: [
        "React.js",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "Gemini 2.5 AI Models",
        "PostgreSQL",
      ],

      color: "from-cyan-600 to-blue-600",
    },

    mobile: {
      title: "Mobile App Development",

      subtitle: "Stunning native performance right in your hand.",

      description:
        "Modern hybrid and native application frameworks paired with machine learning elements to ensure lightning-fast operations and intuitive user experiences.",

      icon: <Smartphone className="w-8 h-8 text-purple-400" />,

      badges: [
        "iOS Custom Apps",
        "Android Native Apps",
        "Hybrid Frameworks",
        "AI Feature Integration",
        "Biometric Protocols",
      ],

      techLabel: "Mobile Tooling & Frameworks:",

      tech: [
        "Flutter",
        "React Native",
        "SwiftUI",
        "Kotlin Native",
        "TensorFlow Lite",
        "Firebase Suite",
      ],

      color: "from-purple-600 to-pink-600",
    },

    marketing: {
      title: "AI-Driven Digital Marketing",

      subtitle: "Data-driven targeting for exponential customer acquisition.",

      description:
        "Transform your search visibility and programmatic ad layouts with hyper-intelligent bidding algorithms, targeted customer tracking, and semantic search models.",

      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,

      badges: [
        "AI-Assisted SEO",
        "Automatic PPC Bidding",
        "Lead Nurturing Systems",
        "Social Media Strategy",
        "Growth Consulting",
      ],

      techLabel: "Analytical & Intelligence Engines:",

      tech: [
        "Google Analytics 4",
        "Semrush AI",
        "HubSpot Automation",
        "Custom LLM Content Copilots",
        "Meta Ads Manager",
      ],

      color: "from-emerald-600 to-teal-600",
    },
  };

  const handleScopeChange = (service, scope) => {
    setProposalService(service);

    setProposalScope(scope);

    // Simple dynamic mock estimate calculation

    let range = "$5,000 - $10,000";

    if (service === "Web & AI Development") {
      if (scope === "Enterprise Solutions") range = "$25,000 - $50,000+";
      else if (scope === "Mid-Tier Dynamic") range = "$12,000 - $22,000";
    } else if (service === "Branding & Identity") {
      if (scope === "Enterprise Solutions") range = "$15,000 - $30,000";
      else if (scope === "Mid-Tier Dynamic") range = "$7,000 - $14,000";
      else range = "$3,500 - $6,500";
    } else if (service === "Mobile Engineering") {
      if (scope === "Enterprise Solutions") range = "$30,000 - $65,000+";
      else if (scope === "Mid-Tier Dynamic") range = "$15,000 - $28,000";
      else range = "$8,000 - $14,000";
    } else {
      // Marketing

      if (scope === "Enterprise Solutions") range = "$8,000/mo - $15,000/mo";
      else if (scope === "Mid-Tier Dynamic") range = "$4,000/mo - $7,500/mo";
      else range = "$2,000/mo - $3,500/mo";
    }

    setEstimatePrice(range);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      {/* Decorative Glowing Gradients background */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[120px]" />

        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
      </div>

      {/* Header Nav */}

      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-900 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-cyan-500 to-purple-600 p-2 rounded-xl shadow-lg shadow-cyan-500/20">
              <span className="font-extrabold text-xl tracking-tight text-slate-950">
                R
              </span>
            </div>

            <div>
              <span className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400">
                REPUTE
              </span>

              <span className="block text-[9px] text-cyan-400 tracking-widest font-mono font-bold uppercase">
                Digital Business Agency
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              Who We Are
            </a>

            <a
              href="#approach"
              className="hover:text-cyan-400 transition-colors"
            >
              Our Approach
            </a>

            <a
              href="#services"
              className="hover:text-cyan-400 transition-colors"
            >
              Services & Stack
            </a>

            <a
              href="#portfolio"
              className="hover:text-cyan-400 transition-colors"
            >
              Clients
            </a>

            <a
              href="#quote"
              className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-800 transition-all font-mono"
            >
              Get Proposal
            </a>
          </nav>

          <a
            href="#quote"
            className="md:hidden px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold uppercase tracking-wider"
          >
            Build Scope
          </a>
        </div>
      </header>

      {/* Main Container */}

      <main className="relative z-10 px-4 max-w-7xl mx-auto">
        {/* HERO SECTION */}

        <section className="pt-16 pb-20 md:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6 animate-pulse">
            <Sparkles className="w-4 h-4" />

            <span>SUPERCHARGED WITH WEB TECH & ARTIFICIAL INTELLIGENCE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight max-w-5xl">
            Building Brands.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500">
              Creating Experiences.
            </span>{" "}
            Driving Growth.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl leading-relaxed">
            Your strategic enterprise partner for branding, web technologies,
            and intelligent digital transformation. We forge beautiful platforms
            designed to help businesses scale and lead.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
            <a
              href="#services"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              Explore Our Services
              <ChevronRight className="w-5 h-5" />
            </a>

            <a
              href="#quote"
              className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 font-bold hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              Scope Estimator
              <Clock className="w-5 h-5 text-purple-400" />
            </a>
          </div>

          {/* Quick Stats Grid */}

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[
              {
                label: "Years of Trust",
                value: "10+",
                detail: "Empowering businesses since 2012",
              },

              {
                label: "Creative Specialists",
                value: "50+",
                detail: "Designers, Devs & AI Engineers",
              },

              {
                label: "Active Integrations",
                value: "200+",
                detail: "Custom systems implemented",
              },

              {
                label: "Global Footprint",
                value: "Worldwide",
                detail: "Serving local & international leaders",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-900 hover:border-slate-800/80 transition-all text-center group"
              >
                <p className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-1">
                  {stat.label}
                </p>

                <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </p>

                <p className="text-xs text-slate-500 mt-2">{stat.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHO WE ARE */}

        <section
          id="about"
          className="py-20 border-t border-slate-900 scroll-mt-20"
        >
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <p className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2">
                Who We Are
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                We Build More Than Just Beautiful Interfaces. We Scale Brands.
              </h2>

              <p className="mt-6 text-slate-400 leading-relaxed">
                Founded in 2012, Repute is a premier creative digital business
                agency. We believe design without powerful code is just a
                drawing, and technology without clear branding is invisible.
              </p>

              <p className="mt-4 text-slate-400 leading-relaxed">
                By fusing modern web frameworks with AI integrations and
                target-driven brand architecture, we turn complex business goals
                into unified, customer-retaining software systems.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-cyan-500/10 p-1 rounded-lg text-cyan-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Full-Stack Capability
                    </h4>

                    <p className="text-xs text-slate-500 mt-1">
                      From initial UI sketches to complex multi-server deploy
                      setups.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-500/10 p-1 rounded-lg text-purple-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      AI Engine Integration
                    </h4>

                    <p className="text-xs text-slate-500 mt-1">
                      Harness advanced language and computer vision models
                      inside your product.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 relative">
              {/* Abstract Visual Cube to show engineering & design unity */}

              <div className="relative aspect-square w-full max-w-[400px] mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-[50px]" />

                <div className="flex justify-between items-center">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-cyan-400 font-mono text-xs">
                    app.init()
                  </div>

                  <div className="flex gap-1">
                    <span className="w-3 h-3 rounded-full bg-red-500/50" />

                    <span className="w-3 h-3 rounded-full bg-yellow-500/50" />

                    <span className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                </div>

                <div className="my-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                    <span className="text-sm font-mono text-slate-300">
                      Model: Gemini 2.5 Active
                    </span>
                  </div>

                  <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 w-[85%]" />
                  </div>

                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>Performance Peak</span>

                    <span>99.98% uptime</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
                    <Zap className="w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Interactive Blueprint
                    </p>

                    <p className="text-[10px] text-slate-500">
                      Continuous Integration Ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METHODOLOGY MAP (OUR APPROACH) */}

        <section
          id="approach"
          className="py-20 border-t border-slate-900 scroll-mt-20"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2">
              Our Process
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How We Turn Ideas Into Market Leadership
            </h2>

            <p className="mt-4 text-slate-400">
              A seamless integration of core strategic thinking,
              state-of-the-art interface creation, scalable code, and AI
              optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",

                title: "THINK",

                desc: "We analyze competitive landscapes, conduct target-market profiling, and layout the exact architectural roadmap.",

                highlight: "User Persona Mapping",
              },

              {
                step: "02",

                title: "CREATE",

                desc: "Our creative team builds high-fidelity wireframes, interactive UI mockups, and establishes unforgettable brand voice guides.",

                highlight: "Figma Prototyping",
              },

              {
                step: "03",

                title: "BUILD",

                desc: "We hand off assets to our clean-code engineers to deploy blazing fast, responsive front-ends integrated with AI systems.",

                highlight: "Production Deploy",
              },

              {
                step: "04",

                title: "SCALE",

                desc: "We run AI-driven search engine automation, set up targeted programmatic bidding, and configure live user performance analytics.",

                highlight: "ROI Analytics",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative p-8 rounded-2xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 transition-all group overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mr-6 -mt-6 text-9xl font-black text-slate-950 font-mono opacity-40 select-none group-hover:text-slate-900 transition-colors">
                  {step.step}
                </div>

                <div className="relative z-10">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
                    Stage {step.step}
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 border-t border-slate-950 pt-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />

                    <span>{step.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES AND TECH EXPOSE */}

        <section
          id="services"
          className="py-20 border-t border-slate-900 scroll-mt-20"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-purple-400 font-mono text-sm tracking-wider uppercase mb-2">
              Our Capabilities
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Core Services & Tech Stack
            </h2>

            <p className="mt-4 text-slate-400">
              Select one of our functional domains to review our precise
              deliverables and the cutting-edge frameworks we utilize.
            </p>
          </div>

          {/* Interactive Navigation Grid */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8 bg-slate-900 p-2 rounded-2xl">
            {Object.keys(services).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-3.5 px-4 rounded-xl text-sm font-bold tracking-tight transition-all flex items-center justify-center gap-2 ${
                  activeTab === key
                    ? "bg-slate-950 text-white shadow-md border border-slate-800"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-950/30"
                }`}
              >
                {key === "branding" && <Layers className="w-4 h-4" />}

                {key === "web" && <Cpu className="w-4 h-4" />}

                {key === "mobile" && <Smartphone className="w-4 h-4" />}

                {key === "marketing" && <TrendingUp className="w-4 h-4" />}

                {key.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Active Tab Service Display Frame */}

          <div className="p-8 lg:p-12 rounded-3xl bg-slate-900 border border-slate-800 transition-all relative overflow-hidden">
            <div
              className={`absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-tr ${services[activeTab].color} opacity-10 blur-[100px] pointer-events-none`}
            />

            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-4">
                  {services[activeTab].icon}

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {services[activeTab].title}
                    </h3>

                    <p className="text-cyan-400 font-mono text-xs mt-1">
                      {services[activeTab].subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed text-base mb-8">
                  {services[activeTab].description}
                </p>

                <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
                  Engineered Solutions:
                </h4>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {services[activeTab].badges.map((badge, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-slate-300 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />

                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack / Framework Display Panel */}

              <div className="lg:col-span-5 bg-slate-950/85 p-6 sm:p-8 rounded-2xl border border-slate-800">
                <h4 className="text-slate-400 font-mono text-xs tracking-wider uppercase mb-4">
                  {services[activeTab].techLabel}
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  {services[activeTab].tech.map((tool, idx) => {
                    const matchedIcon = TechIcons[tool] || (
                      <Code className="w-5 h-5 text-cyan-400" />
                    );

                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80"
                      >
                        {matchedIcon}

                        <span className="text-xs font-semibold text-slate-200">
                          {tool}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 flex items-center gap-3">
                  <div className="text-cyan-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>

                  <p className="text-[11px] text-slate-400 leading-normal">
                    Fully automated pipeline. Every build goes through static
                    type testing, semantic verification, and optimized
                    performance benchmarks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REPUTE TECHNOLOGY MATRIX */}

        <section className="py-20 border-t border-slate-900 bg-slate-950/50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-6">
              <Cpu className="w-3.5 h-3.5" />
              INTELLIGENT TECH SUITE
            </span>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              Integrating Advanced AI to Build Dynamic Systems
            </h3>

            <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
              We do not just install default designs; we create bespoke
              algorithms, customize Natural Language Processing (NLP) models,
              build autonomous workflows, and style it with sleek UI interfaces.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Cognitive Models",

                  details:
                    "Plugging in LLM APIs to drive custom business workflows, automated document synthesis, and conversational agents.",
                },

                {
                  title: "Real-time Metrics",

                  details:
                    "Tracking client interactions, predicting conversion leaks, and feeding continuous analytics into optimization stacks.",
                },

                {
                  title: "Zero-Latency Performance",

                  details:
                    "Applying code minification, image WebP/AVIF rendering pipelines, and dynamic server-side rendering for lightning fast load speed.",
                },
              ].map((matrixItem, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800"
                >
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />

                    {matrixItem.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {matrixItem.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO / CLIENT TRADEMARKS */}

        <section
          id="portfolio"
          className="py-20 border-t border-slate-900 scroll-mt-20"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2">
              Proven Track Record
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted by Industry Leaders
            </h2>

            <p className="mt-4 text-slate-400">
              From leading educational institutions to global manufacturing
              networks and specialized healthcare hubs, we construct scalable
              brands.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "KPR Mill Limited",
                category: "Apparel & Textiles",
                desc: "Enterprise Digital Footprint",
              },

              {
                name: "Watertec India",
                category: "Plumbing & Retail",
                desc: "Full Stack Portal & Creative Strategy",
              },

              {
                name: "Karpagam Academy",
                category: "Higher Education",
                desc: "Dynamic Enrollment Workflows",
              },

              {
                name: "FASO",
                category: "Premium Retail",
                desc: "E-Commerce Strategy & Visual Identity",
              },

              {
                name: "Ashok Textile Mills",
                category: "Industrial",
                desc: "Corporate Platform Integration",
              },

              {
                name: "Thangam Cancer Center",
                category: "Healthcare",
                desc: "Patient Engagement Applications",
              },

              {
                name: "Vishwankar School",
                category: "Education",
                desc: "Integrated Portal & UI Systems",
              },

              {
                name: "Salzer Electronics",
                category: "Engineering",
                desc: "Strategic Business Branding",
              },
            ].map((client, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 transition-all text-center flex flex-col justify-between h-36"
              >
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                    {client.category}
                  </span>

                  <p className="font-extrabold text-white text-base tracking-tight leading-tight">
                    {client.name}
                  </p>
                </div>

                <p className="text-[11px] text-slate-500 font-medium">
                  {client.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROPOSAL GENERATOR & ESTIMATOR */}

        <section
          id="quote"
          className="py-20 border-t border-slate-900 scroll-mt-20"
        >
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2">
                Interactive Scope Estimator
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Select Your Project Specifications
              </h2>

              <p className="mt-6 text-slate-400 leading-relaxed">
                Build a tailored digital strategy. Specify your desired service
                and project complexity to instantly calculate an estimate range
                of our scope.
              </p>

              <div className="mt-8 space-y-4 p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-4 text-cyan-400">
                  <Award className="w-6 h-6" />

                  <div>
                    <h4 className="font-bold text-white text-sm">
                      Need direct human consultation?
                    </h4>

                    <p className="text-xs text-slate-500 mt-0.5">
                      Let our engineers map your API dependencies live.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-950 pt-4 text-xs text-slate-400">
                  📍 Coimbatore, TN &bull; Serving Clients Globally
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 relative">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mb-6 border border-emerald-500/20">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      Project Scope Recorded!
                    </h3>

                    <p className="text-slate-400 text-sm mt-3 max-w-md mx-auto">
                      Our Lead Architect is reviewing your selected tech
                      blueprint. We will connect with you in under 4 hours with
                      an actionable roadmap.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 px-6 py-2 rounded-xl bg-slate-950 hover:bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800"
                    >
                      Reset Specifications
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-6"
                  >
                    {/* Step 1: Select Area */}

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                        1. Service Vertical
                      </label>

                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Web & AI Development",

                          "Branding & Identity",

                          "Mobile Engineering",

                          "AI Digital Marketing",
                        ].map((servOption) => (
                          <button
                            key={servOption}
                            type="button"
                            onClick={() =>
                              handleScopeChange(servOption, proposalScope)
                            }
                            className={`py-3 px-4 rounded-xl text-left text-xs font-bold transition-all border ${
                              proposalService === servOption
                                ? "bg-cyan-500/10 border-cyan-500/40 text-white shadow"
                                : "bg-slate-950 border-slate-800/80 text-slate-400 hover:text-slate-300"
                            }`}
                          >
                            {servOption}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Select Scope Scale */}

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                        2. Desired Complexity Scale
                      </label>

                      <div className="grid grid-cols-3 gap-3">
                        {[
                          {
                            label: "Core Blueprint",
                            value: "Core Blueprint",
                            desc: "Essential system setup",
                          },

                          {
                            label: "Mid-Tier Dynamic",
                            value: "Mid-Tier Dynamic",
                            desc: "Custom features + analytics",
                          },

                          {
                            label: "Enterprise Solutions",
                            value: "Enterprise Solutions",
                            desc: "Scale, full AI & integrations",
                          },
                        ].map((scopeOption) => (
                          <button
                            key={scopeOption.value}
                            type="button"
                            onClick={() =>
                              handleScopeChange(
                                proposalService,
                                scopeOption.value
                              )
                            }
                            className={`p-3 rounded-xl text-left transition-all border ${
                              proposalScope === scopeOption.value
                                ? "bg-purple-500/10 border-purple-500/40 text-white shadow"
                                : "bg-slate-950 border-slate-800/80 text-slate-400 hover:text-slate-300"
                            }`}
                          >
                            <p className="text-xs font-bold">
                              {scopeOption.label}
                            </p>

                            <p className="text-[9px] text-slate-500 mt-1 leading-tight">
                              {scopeOption.desc}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Pricing Calculator Output */}

                    <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                      <div>
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                          Estimated Investment Scope
                        </p>

                        <p className="text-xs text-slate-400 mt-0.5">
                          Subject to detailed workflow mapping
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                          {estimatePrice}
                        </span>
                      </div>
                    </div>

                    {/* Contact details */}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-2">
                          Corporate Email
                        </label>

                        <input
                          type="email"
                          required
                          placeholder="client@company.com"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-2">
                          Contact Number
                        </label>

                        <input
                          type="text"
                          required
                          placeholder="+91..."
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-500/10 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Acquire Project Proposal Roadmap
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="border-t border-slate-900 bg-slate-950/80 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-tr from-cyan-500 to-purple-600 p-2 rounded-xl">
                <span className="font-extrabold text-base text-slate-950">
                  R
                </span>
              </div>

              <span className="text-xl font-black text-white tracking-widest">
                REPUTE
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              We design and write custom digital blueprints that merge elegant
              visual design with robust scale-ready technology systems.
            </p>

            <div className="flex items-center gap-2 text-[10px] text-cyan-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />

              <span>Agency Operational (2026 Core)</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
              Core Competency
            </h4>

            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Visual Brand Design
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Next.js Web Applications
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Native & Hybrid Apps
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  ML API Integrations
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  AI Search Engine Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
              Enterprise Agency Office
            </h4>

            <div className="space-y-3 text-xs text-slate-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />

                <span>Coimbatore, India</span>
              </p>

              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />

                <span>+91 422 498 0307</span>
              </p>

              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />

                <span>support@irepute.in</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
              Direct Action
            </h4>

            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Get an engineered concept document mapped directly for your brand
              layout.
            </p>

            <a
              href="#quote"
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-white transition-all bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-lg w-full justify-center"
            >
              Create Concept Draft
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-900 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-600 font-mono">
          <p>
            © {new Date().getFullYear()} Repute Digital Business Agency. All
            Rights Reserved.
          </p>

          <p className="mt-2 sm:mt-0">
            Designed in partnership with advanced technology.
          </p>
        </div>
      </footer>
    </div>
  );
}
