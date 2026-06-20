import React, { useState } from "react";
import { Phone, Mail, MapPin, Award, Menu, X, HardHat } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "profile", label: "Company" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="hidden lg:block bg-[#0b1f3a] text-white py-2 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-[#FF0000]" />
              <span>15 Alfred Rewane Rd, Ikoyi, Lagos</span>
            </span>
            <span className="flex items-center space-x-1.5 text-slate-300">
              <Phone className="h-3.5 w-3.5 text-[#FF0000]" />
              <span>+234 (81) 460-9380</span>
            </span>
            <span className="flex items-center space-x-1.5 text-slate-300">
              <Mail className="h-3.5 w-3.5 text-[#FF0000]" />
              <span>apexstruk@gmail.com</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-slate-300 font-medium">
              <Award className="h-3.5 w-3.5 text-[#FF0000]" />
              <span>COREN REG: C-24890</span>
            </span>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavClick("home")}
            >
              <img
                src="/images/logo.png"
                alt="Company Logo"
                className="h-20 w-auto"
              />
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
                    activeTab === item.id
                      ? "border-[#FF0000] text-[#0b1f3a]"
                      : "border-transparent text-gray-600 hover:text-[#0b1f3a]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:block">
              <button
                onClick={() => handleNavClick("contact")}
                className="bg-[#FF0000] hover:bg-[#E60009] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded"
              >
                Request Consultation
              </button>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-600"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 py-4 px-6 absolute top-full left-0 w-full shadow-lg">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left px-3 py-2 text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
