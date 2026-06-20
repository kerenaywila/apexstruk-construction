import React, { useState, useEffect } from "react";
import { PROJECTS } from "../data";
import { MapPin, FileText, X, CheckSquare, Award, Layers } from "lucide-react";

interface ProjectsViewProps {
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
}

export default function ProjectsView({
  selectedProjectId,
  setSelectedProjectId,
}: ProjectsViewProps) {
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [filterState, setFilterState] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (selectedProjectId) {
      const container = document.getElementById("project-detail-panel");
      if (container) {
        container.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [selectedProjectId]);

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Infrastructure",
    "Industrial",
  ];
  const states = ["All", "Lagos", "Abuja", "Port Harcourt"];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchCategory =
      filterCategory === "All" || project.category === filterCategory;
    const matchState = filterState === "All" || project.state === filterState;
    const matchSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchState && matchSearch;
  });

  const activeProject =
    PROJECTS.find((p) => p.id === selectedProjectId) || null;

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-gray-200 pb-8 mb-10 space-y-4">
          <span className="text-[#FF0000] font-display text-xs font-bold tracking-widest uppercase block">
            VERIFIABLE ENGINEERING RECORD
          </span>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-[#0b1f3a] tracking-tight">
            Our Finished Engineering Portfolio
          </h1>
          <p className="text-xs md:text-sm text-gray-500 max-w-3xl leading-relaxed">
            Apexstruk executes key structural portfolios in urban and industrial
            zones across Nigeria. Use our search and filter parameters below to
            audit our geotechnical solutions, contract scopes, and finished
            standards.
          </p>
        </div>

        {activeProject && (
          <div
            id="project-detail-panel"
            className="mb-14 bg-slate-900 text-white rounded border border-slate-800 shadow-lg overflow-hidden animate-fade-in"
          >
            <div className="bg-[#0b1f3a] p-4 px-6 border-b border-slate-800 flex justify-between items-center">
              <span className="text-xs font-bold text-[#FF0000] uppercase tracking-widest font-display flex items-center">
                <FileText className="h-4 w-4 mr-1.5" /> Technical Specifications
                File
              </span>
              <button
                onClick={() => setSelectedProjectId(null)}
                className="text-slate-400 hover:text-white text-xs font-bold uppercase flex items-center space-x-1 border border-slate-800 hover:border-slate-700 px-3 py-1.5 rounded transition-all duration-150"
              >
                <span>Back to List</span>
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[300px]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover absolute inset-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-[#FF0000] text-white px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded">
                    {activeProject.category}
                  </span>
                  <h2 className="text-xl font-bold text-white font-display mt-2.5 leading-tight">
                    {activeProject.title}
                  </h2>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 md:p-8 space-y-6">
                <div>
                  <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider block mb-1">
                    PROJECT SUMMARY
                  </span>
                  <p className="text-xs md:text-sm text-slate-200 leading-relaxed text-justify">
                    {activeProject.description}
                  </p>
                </div>

                <div className="grid grid-[#121212] md:grid-cols-2 gap-6">
                  <div>
                    <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider block mb-3">
                      CONTRACT SCOPE OF WORKS (Delivered)
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {activeProject.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckSquare className="h-3.5 w-3.5 text-[#FF0000] mr-2 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider block">
                      ARCHITECTURAL & GEOTECHNICAL METRICS
                    </span>
                    <div className="bg-slate-950 border border-slate-800 rounded overflow-hidden divide-y divide-slate-900">
                      {Object.entries(activeProject.technicalSpecs).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="p-3 grid grid-cols-5 text-[11px] items-center gap-2"
                          >
                            <span className="col-span-2 text-slate-400 font-semibold">
                              {key}
                            </span>
                            <span className="col-span-3 text-slate-200 text-right">
                              {value}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-[#FF0000]" />
                    <span>
                      Project Audited & Completed under COREN certification.
                    </span>
                  </div>
                  <div className="bg-slate-950/40 p-2 border border-slate-800 flex items-center justify-between gap-4 font-mono text-[10px] w-full sm:w-auto">
                    <span>LOCATION: {activeProject.location}</span>
                    <span className="text-[#FF0000]">
                      STATE: {activeProject.state}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-slate-50 border border-slate-200/95 rounded-sm p-5 mb-10 flex flex-col md:flex-row gap-5 justify-between items-center shadow-sm">
          <div className="w-full md:w-auto space-y-1.5">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-display block">
              Filter by Construction Category
            </span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded transition-all duration-150 font-medium ${
                    filterCategory === cat
                      ? "bg-[#0b1f3a] text-white"
                      : "bg-white hover:bg-slate-100 text-gray-700 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:w-auto space-y-1.5">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-display block">
              Filter by Nigerian State Hub
            </span>
            <div className="flex flex-wrap gap-1.5">
              {states.map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterState(st)}
                  className={`text-xs px-3.5 py-1.5 rounded transition-all duration-150 font-medium ${
                    filterState === st
                      ? "bg-[#0b1f3a] text-white"
                      : "bg-white hover:bg-slate-100 text-gray-700 border border-slate-200"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:w-64 space-y-1.5">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-display block">
              Search Technical Specs
            </span>
            <input
              type="text"
              placeholder="e.g., piling, highway, concrete..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-300 text-xs p-2 rounded focus:outline-none focus:border-[#FF0000] font-sans"
            />
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded border overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-md ${
                  selectedProjectId === project.id
                    ? "border-[#FF0000] ring-2 ring-orange-100"
                    : "border-slate-200 hover:border-[#0b1f3a]"
                }`}
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-[#0b1f3a] text-white px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-sm">
                      {project.category}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/75 px-3 py-1 rounded text-[11px] text-white flex items-center font-display font-medium">
                      <MapPin className="h-3.5 w-3.5 text-[#FF0000] mr-1" />
                      <span>{project.state}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3.5">
                    <span className="text-[11px] font-semibold text-slate-500 block">
                      STATED LOCATION: {project.location}
                    </span>
                    <h3 className="font-display font-bold text-xl text-[#0b1f3a] tracking-tight group-hover:text-[#FF0000] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-3 text-justify leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-3 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
                  <span className="text-[10px] text-gray-500 font-mono">
                    Year Delivered: {project.completionYear}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedProjectId(project.id);
                      const top = document.getElementById(
                        "project-detail-panel",
                      );
                      if (top) {
                        top.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.scrollTo({ top: 300, behavior: "smooth" });
                      }
                    }}
                    className="text-[#0b1f3a] hover:text-[#FF0000] text-xs font-bold uppercase flex items-center transition-colors font-display"
                  >
                    <span>View Technical Specifications</span>
                    <Layers className="h-3.5 w-3.5 ml-1.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 text-center py-16 rounded border border-dashed border-slate-300">
            <span className="text-sm text-gray-500 block">
              No finished contracts found matching the active filters or search
              terms.
            </span>
            <button
              onClick={() => {
                setFilterCategory("All");
                setFilterState("All");
                setSearchQuery("");
              }}
              className="text-[#FF0000] text-xs font-bold uppercase tracking-wider mt-4 hover:underline"
            >
              Reset Search Parameters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
