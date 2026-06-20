import React, { useState } from "react";
import { SERVICES } from "../data";
import {
  Layers,
  CheckCircle,
  Award,
  Activity,
  BookOpen,
  HardHat,
} from "lucide-react";

export default function ServicesView() {
  const [activeServiceId, setActiveServiceId] = useState<string>(
    "building-construction",
  );

  const activeService =
    SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-gray-200 pb-8 mb-10 space-y-4">
          <span className="text-[#FF0000] font-display text-xs font-bold tracking-widest uppercase block">
            OUR TECHNICAL CAPABILITIES
          </span>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-[#0b1f3a] tracking-tight">
            Engineering & Infrastructure Disciplines
          </h1>
          <p className="text-xs md:text-sm text-gray-500 max-w-3xl leading-relaxed">
            Apexstruk operates highly specialized technical engineering
            departments. Each team operates under unified COREN standards and
            HSE oversight to execute works starting from soil mechanics modeling
            up to architectural detailing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block px-2">
              Select Department Division
            </span>
            <div className="space-y-2">
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-4.5 rounded transition-all duration-200 border flex items-start space-x-3.5 group relative ${
                    activeServiceId === service.id
                      ? "bg-[#0b1f3a] text-white border-[#0b1f3a] shadow-sm"
                      : "bg-slate-50 hover:bg-slate-100 text-[#0b1f3a] border-slate-200/90"
                  }`}
                >
                  {activeServiceId === service.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF0000] rounded-l"></div>
                  )}

                  <div
                    className={`p-2 rounded-sm mt-0.5 ${
                      activeServiceId === service.id
                        ? "bg-[#FF0000] text-white"
                        : "bg-[#0b1f3a]/10 text-[#0b1f3a]"
                    }`}
                  >
                    <Layers className="h-4.5 w-4.5" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm font-bold font-display leading-tight group-hover:text-[#FF0000] transition-colors">
                      {service.title}
                    </h4>
                    <p
                      className={`text-[11px] line-clamp-1 ${activeServiceId === service.id ? "text-slate-300" : "text-gray-500"}`}
                    >
                      {service.shortDescription}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 bg-slate-50 border border-slate-200 p-6 md:p-10 rounded animate-fade-in space-y-8">
            <div className="border-b border-gray-200 pb-6 space-y-3">
              <div className="flex items-center space-x-3 text-[#FF0000] text-xs font-bold tracking-wider font-display uppercase">
                <HardHat className="h-4.5 w-4.5" />
                <span>Apexstruk technical brief</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl text-[#0b1f3a] tracking-tight">
                {activeService.title}
              </h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase font-display flex items-center">
                <BookOpen className="h-4 w-4 mr-2 text-[#0b1f3a]" /> Operational
                Scope & Methodologies
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-left text-justify">
                {activeService.fullDescription}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase font-display flex items-center">
                <Activity className="h-4 w-4 mr-2 text-[#0b1f3a]" /> Specific
                Capabilities & Contract Delivery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeService.subCapabilites.map((cap, i) => (
                  <div
                    key={i}
                    className="bg-white p-3.5 border border-slate-200/80 rounded flex items-start space-x-3 shadow-sm hover:border-[#FF0000] transition-colors"
                  >
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-[11px] md:text-xs text-gray-700 leading-relaxed font-medium">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
