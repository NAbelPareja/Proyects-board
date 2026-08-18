import { useState } from "react";
import {Sidebar} from "../components/layout/Sidebar";
import {Topbar} from "../components/layout/Topbar";
import { SettingsPage } from "../components/configuracion/Settingspage";


export const Configuracion = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50">
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
          <div className="md:ml-52">
            <Topbar
              onMenuClick={() => setSidebarOpen(true)}
            />
            <main className="">
              <SettingsPage/>
            </main>
          </div>
        </div>
  )
}
