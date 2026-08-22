import { projects } from "./projects"

export const initialState = () => {
    const datos = localStorage.getItem("listaProyectos")
    if(datos){
        return JSON.parse(datos)
    }else{
        localStorage.setItem("listaProyectos", JSON.stringify(projects))
        return projects
    }
}




