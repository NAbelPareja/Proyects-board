import { useState } from "react";

import {Sidebar} from "../components/layout/Sidebar";
import {Topbar} from "../components/layout/Topbar";

import {WelcomeHeader} from "../components/dashboard/WelcomeHeader";
import {StatsGrid} from "../components/dashboard/StatsGrid";
import {RecentProjects} from "../components/dashboard/RecentProjects";
import {RecentActivity} from "../components/dashboard/RecentActivity";

export const Dashboard = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 dark:text-white">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="md:ml-52">
        <Topbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-7">
          <WelcomeHeader />

          <StatsGrid />

          <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(280px,1fr)]">
            <RecentProjects />

            <RecentActivity />
          </div>
        </main>
      </div>
    </div>
  )
}
