import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Award,
  ShieldAlert,
  Zap,
  Layers,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { STATISTICS, SERVICES, PROJECTS } from "../data";

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  setSelectedProjectId: (id: string | null) => void;
}

export default function HomeView({
  setActiveTab,
  setSelectedProjectId,
}: HomeViewProps) {
  const featuredProjects = PROJECTS.slice(0, 3);

  const handleProjectDetail = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActiveTab("projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-sans text-gray-800 bg-white">
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden bg-[#0A0F1D]">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_lagos_construction_1781938854594.jpg"
            alt="Lagos High-Rise Construction Site at dawn"
            className="w-full h-full object-cover opacity-55"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-left -mt-20">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
              Delivering Lasting Civil & Structural{" "}
              <span className="text-[#FF0000]">Assets for Nigeria</span>
            </h1>
            <p className="text-lg text-white leading-relaxed max-w-2xl">
              Durable civil and structural solutions across Nigeria with
              precision, safety, and uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4"></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 relative z-20 -mt-12 max-w-7xl mx-auto rounded shadow-md grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {STATISTICS.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 text-center flex flex-col justify-center bg-white first:rounded-l last:rounded-r"
          >
            <span className="font-display font-extrabold text-[#0b1f3a] text-3xl md:text-4xl block mb-1">
              {stat.value}
            </span>
            <span className="text-xs font-bold text-gray-900 tracking-wide block mb-1 uppercase font-display">
              {stat.label}
            </span>
            <span className="text-[11px] text-gray-500 leading-normal">
              {stat.description}
            </span>
          </div>
        ))}
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="border-[8PX] border-[#0b1f3a] rounded overflow-hidden shadow-lg z-10 relative bg-white">
              <img
                src="/src/assets/images/nigerian_engineers_ppe_1781938926608.jpg"
                alt="Nigerian Civil Engineers inspecting blueprints on active site"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 border-l-4 border-b-4 border-[#FF0000] -z-10 rounded-bl-md"></div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#FF0000] font-display text-xs font-bold tracking-widest uppercase block">
              ENGINEERING STABILITY SINCE 2008
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0b1f3a] tracking-tight">
              A Partner of Choice for National Contractors & Blue-Chip
              Developers
            </h2>
            <div className="h-1.5 w-16 bg-[#FF0000] rounded-full"></div>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Apexstruk Engineering & Construction Ltd provides comprehensive
              Engineering, Procurement, and Construction (EPC) services across
              the Federal Republic of Nigeria. Registered in compliance with the
              Federal Ministry of Works and housing planning policies, our
              hallmark lies in strict adherence to geotechnical science,
              structural margin of safety, and flawless execution.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              In a terrain where sub-soil realities demand expert piling, and
              heavy rains require sophisticated catchment hydraulic models, we
              stand out. Every single structural design undergoes multi-peer
              appraisal inside our office before any heavy plant machinery is
              mobilized.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 bg-slate-50 p-3.5 rounded border border-slate-200">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    100% COREN Adherence
                  </h4>
                  <p className="text-xs text-gray-500">
                    Every design signed off by certified Nigerian engineering
                    professionals.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-slate-50 p-3.5 rounded border border-slate-200">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    NOCID Compliance
                  </h4>
                  <p className="text-xs text-gray-500">
                    Committed to developing local capacity, using local labor,
                    steel, and cement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-white">
              Engineering & Construction Services You Can Trust
            </h2>
            <p className="text-xs md:text-sm text-slate-400">
              We provide professional engineering and construction services for
              residential, commercial, and infrastructure projects with a
              commitment to quality, safety, and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-slate-800/85 hover:bg-slate-800 p-8 rounded-sm border border-slate-700/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#FF0000] text-white p-3 rounded-sm transition-colors">
                      <Layers className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold text-white text-lg">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    {service.shortDescription}
                  </p>
                  <ul className="grid grid-cols-1 gap-2 text-xs text-slate-400 pt-2">
                    {service.subCapabilites.slice(0, 3).map((cap, i) => (
                      <li key={i} className="flex items-center">
                        <span className="h-1 w-1 bg-[#FF0000] rounded-full mr-2.5"></span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setActiveTab("services");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-[#FF0000] hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center transition-colors group/btn"
                  >
                    <span>Read Engineering Details</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="space-y-3">
            <span className="text-[#FF0000] text-xs font-bold tracking-widest uppercase">
              PROJECT ENGAGEMENT
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f3a]">
              Currently Accepting Select Engineering Projects
            </h2>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
            Apexstruk Engineering & Construction Ltd operates on a structured
            project intake model, prioritizing technically viable and regionally
            compliant developments across Nigeria’s key infrastructure zones.
          </p>

          <div className="border-l-4 border-[#FF0000] pl-5">
            <p className="text-sm md:text-base text-[#0b1f3a] italic leading-relaxed">
              “Our approach is defined by strict engineering discipline,
              accurate site assessment, and execution aligned with Nigerian
              environmental and soil conditions.”
            </p>
            <span className="text-xs text-gray-500 block mt-2">
              — Engineering Project Statement
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="border border-slate-100 p-5 rounded">
              <h4 className="text-sm font-bold text-[#0b1f3a] mb-2">
                Infrastructure Works
              </h4>
              <p className="text-xs text-gray-500">
                Roads, drainage, bridges, and civil utilities.
              </p>
            </div>

            <div className="border border-slate-100 p-5 rounded">
              <h4 className="text-sm font-bold text-[#0b1f3a] mb-2">
                Structural Projects
              </h4>
              <p className="text-xs text-gray-500">
                Residential and commercial building structures.
              </p>
            </div>

            <div className="border border-slate-100 p-5 rounded">
              <h4 className="text-sm font-bold text-[#0b1f3a] mb-2">
                Engineering Consultation
              </h4>
              <p className="text-xs text-gray-500">
                Design review and technical advisory services.
              </p>
            </div>
          </div>

          <div className="pt-6 text-xs text-gray-400 border-t border-slate-100">
            For project inquiries, please refer to the contact section.
          </div>
        </div>
      </section>
    </div>
  );
}
