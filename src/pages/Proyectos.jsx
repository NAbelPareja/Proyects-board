import { useMemo, useState } from "react";

import { Sidebar } from "../components/layout/Sidebar";
import { Topbar } from "../components/layout/Topbar";

import { ProjectsHeader } from "../components/proyects/ProjectsHeader";
import { ProjectFilters } from    "../components/proyects/ProjectFilters";
import { ProjectGrid } from "../components/proyects/ProjectGrid";

import { projects } from "../data/projects";

export const Proyectos = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const term = search.toLowerCase().trim();

    if (!term) {
      return projects;
    }

    return projects.filter((project) => {
      return (
        project.name.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.category.toLowerCase().includes(term)
      );
    });
  }, [search]);

  return (
    <div className=" min-h-screen bg-slate-50 text-slate-800">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="md:ml-52">
        <Topbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />



        <main className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-7">
          <div className="mx-auto max-w-[1180px]">
            <ProjectsHeader />

            <ProjectFilters
              search={search}
              setSearch={setSearch}
            />

            <ProjectGrid
              projects={filteredProjects}
            />
          </div>
        </main>
      </div>
    </div>
  );
};