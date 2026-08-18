import { useMemo, useState } from "react";

import { Sidebar } from "../components/layout/Sidebar";
import { Topbar } from "../components/layout/Topbar";

import { TasksHeader } from "../components/tareas/TasksHeader";
import { TaskFilters } from "../components/tareas/TaskFilters";
import { TaskTable } from "../components/tareas/TaskTable";

import { tasks } from "../data/tasks";

export const Tareas = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredTasks = useMemo(() => {
    const term = search.toLowerCase().trim();

    if (!term) {
      return tasks;
    }

    return tasks.filter((task) => {
      return (
        task.title.toLowerCase().includes(term) ||
        task.project.toLowerCase().includes(term) ||
        task.status.toLowerCase().includes(term) ||
        task.priority.toLowerCase().includes(term)
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
            <TasksHeader />

            <TaskFilters
              search={search}
              setSearch={setSearch}
            />

            <TaskTable
              tasks={filteredTasks}
            />
          </div>
        </main>
      </div>
    </div>
  );
};