
export const initialState = () => {
    const datos = localStorage.getItem("listaProyectos")
    return datos ? JSON.parse(datos) : []
}


