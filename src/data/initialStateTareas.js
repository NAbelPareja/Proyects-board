import { tasks } from "./tasks"

export const initialStateTareas = () => {

    const datos = localStorage.getItem("listaTareas")

    if(datos){
        return JSON.parse(datos)
    }
    else{
        localStorage.setItem("listaTareas", JSON.stringify(tasks))
        return tasks
    }
}
