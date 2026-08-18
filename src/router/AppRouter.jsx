import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Configuracion } from "../pages/Configuracion";
import { Dashboard } from "../pages/Dashboard";
import { Proyectos } from "../pages/Proyectos";
import { Tareas } from "../pages/Tareas";
import { Navigate } from "react-router-dom";
import { Sidebar } from "../components/layout/Sidebar";

export const AppRouter = () => {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/configuracion"
            element={<Configuracion></Configuracion>}
          ></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/proyectos" element={<Proyectos></Proyectos>}></Route>
          <Route path="/tareas" element={<Tareas></Tareas>}></Route>
          <Route path="/*" element={<Navigate to="/home" />}></Route>
        </Routes>
      </div>
    </>
  );
};
