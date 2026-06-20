import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  HardHat,
  Shield,
  ArrowUpRight,
} from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1f3a] text-slate-300 font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <HardHat className="h-6 w-6 text-[#FF0000]" />
              <span className="font-display font-bold text-xl text-white tracking-wide">
                APEXSTRUK
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Apexstruk Engineering & Construction Ltd delivers civil,
              structural, and infrastructure projects across Nigeria with
              precision, safety, and durability at its core.
            </p>

            <div className="flex items-center space-x-2 text-xs bg-slate-900 border border-slate-800 p-2.5 rounded text-slate-400 w-fit">
              <Shield className="h-4 w-4 text-[#FF0000]" />
              RC: 77823491
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact
            </h4>

            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-[#ffffff] mt-0.5" />
                <div>
                  <p className="text-slate-300">apexstruk@gmail.com</p>
                  <p className="text-slate-500">General enquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-[#ffffff] mt-0.5" />
                <div>
                  <p className="text-slate-300">
                    +234 (81) 460-9380, +234 (90) 366-5464
                  </p>
                  <p className="text-slate-500">Mon – Fri, 8AM – 5PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#ffffff] mt-0.5" />
                <div>
                  <p className="text-slate-300">Ikoyi, Lagos</p>
                  <p className="text-slate-500">15 Alfred Rewane Road</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Actions
            </h4>

            <div className="space-y-3 text-xs">
              <button
                onClick={() => setActiveTab("contact")}
                className="flex items-center justify-between w-full bg-slate-900 border border-slate-800 px-4 py-3 rounded hover:border-[#FF0000] transition"
              >
                <span>Request Project Quote</span>
                <ArrowUpRight className="h-4 w-4 text-[#FF0000]" />
              </button>

              <button
                onClick={() => setActiveTab("projects")}
                className="flex items-center justify-between w-full bg-slate-900 border border-slate-800 px-4 py-3 rounded hover:border-[#FF0000] transition"
              >
                <span>View Projects</span>
                <ArrowUpRight className="h-4 w-4 text-[#FF0000]" />
              </button>

              <button
                onClick={() => setActiveTab("profile")}
                className="flex items-center justify-between w-full bg-slate-900 border border-slate-800 px-4 py-3 rounded hover:border-[#FF0000] transition"
              >
                <span>About Company</span>
                <ArrowUpRight className="h-4 w-4 text-[#FF0000]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#071324] py-6 text-xs text-slate-500 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div>
            © {currentYear} Apexstruk Engineering & Construction Ltd. All rights
            reserved.
          </div>

          <div className="text-[11px] text-slate-400">
            Building infrastructure across Nigeria with engineering excellence
          </div>
        </div>
      </div>
    </footer>
  );
}
