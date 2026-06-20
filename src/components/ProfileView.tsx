import { ShieldCheck, HardHat, Scale, Leaf, FileText } from "lucide-react";

export default function ProfileView() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-bold text-2xl text-[#0b1f3a] tracking-tight flex items-center">
              <FileText className="h-5.5 w-5.5 text-[#FF0000] mr-2" /> Our
              History & Corporate Philosophy
            </h2>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-justify">
              Registered in 2008 as a private limited liabilty group
              (RC-77823491), Apexstruk was founded by Nigerian structural
              engineers who recognized a critical gap: the lack of local
              engineering firms capable of handling highly challenging
              geotechnical realities in deltaic swampy and coastal environments
              with the same standard as international corporations.
            </p>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-justify">
              Over the last 18 years, we have organically expanded our
              operations from a local piling outfit in Lagos to a multi-billion
              Naira EPC company with branches in Abuja and Port Harcourt. We
              believe structural stability is not a luxury, but a fundamental
              human right.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-slate-200 bg-slate-50 p-4 rounded space-y-2">
                <span className="font-bold text-xs text-[#0b1f3a] block uppercase font-display">
                  Our Mission
                </span>
                <p className="text-[11px] text-gray-500 leading-relaxed text-justify">
                  To conceptualize, engineer, and deploy high-integrity
                  buildings and transport infrastructures that serve our clients
                  safely for generations.
                </p>
              </div>
              <div className="border border-slate-200 bg-slate-50 p-4 rounded space-y-2">
                <span className="font-bold text-xs text-[#0b1f3a] block uppercase font-display">
                  Our Vision
                </span>
                <p className="text-[11px] text-gray-500 leading-relaxed text-justify">
                  To become West Africa\'s most trusted indigenous engineering
                  contractor, renowned for zero-incident safety adherence and
                  exceptional technical quality.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0b1f3a] text-white p-8 rounded shadow-md border border-slate-800 space-y-6">
            <h3 className="font-display font-bold text-white text-lg tracking-tight">
              Foundational Core Pillars
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-xs leading-relaxed">
                <ShieldCheck className="h-5 w-5 text-[#FF0000] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-100 block">
                    COREN Code Compliance
                  </span>
                  <p className="text-slate-400">
                    Strict structural safety limits and material certifications
                    on every single project site.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-xs leading-relaxed">
                <HardHat className="h-5 w-5 text-[#FF0000] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-100 block">
                    HSE Site Excellence
                  </span>
                  <p className="text-slate-400">
                    100% safety helmet, steel-toed boots, fall harnesses, and
                    active hazard inspections.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-xs leading-relaxed">
                <Scale className="h-5 w-5 text-[#FF0000] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-100 block">
                    NCDMB Local Development
                  </span>
                  <p className="text-slate-400">
                    Directly supporting Nigerian raw materials (cement,
                    structural rebar) and local technical talent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0b1f3a] to-[#040c17] text-white p-8 rounded border border-slate-800 space-y-4">
          <div className="flex items-center space-x-2">
            <Leaf className="h-5 w-5 text-green-500" />
            <h3 className="font-display font-bold text-white text-base tracking-tight">
              Local Content Act Compliance Strategy
            </h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed text-justify">
            In absolute alignment with the Federal Government\'s Local Content
            Development directives (NCDMB framework), Apexstruk prioritizes
            local suppliers. We procure 100% of our Portland cement from
            Nigerian industrial giants, source structural high-strength steel
            rebars from domestic rolling mills, and guarantee that our site
            workforce is comprised of a minimum 95% skilled and semi-skilled
            Nigerian nationals. This keeps construction investments circulating
            directly back into local communities.
          </p>
        </div>
      </div>
    </div>
  );
}
