import { useProyects } from "../../hooks/useProyects";
import {ActivityItem} from "./ActivityItem";

export const RecentActivity = () => {
  const {listaTareas}=  useProyects()
  console.log("Lista de tarear en actividades receintes: ", listaTareas)

  return (
    <section>
      <div className="mb-3">
        <h2 className="text-xs font-semibold text-slate-800">
          Actividad reciente
        </h2>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-100/50">
        { listaTareas.slice(-5).map((tareas) =>(
          <ActivityItem
            key={tareas.id}
            tareas ={tareas}
          />
        )) }
      </div>
    </section>
  )
}
