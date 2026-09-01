

export const TareasReducer = (state, action) => {
  switch(action.type){
    case "agregarTarea":
        return [...state, action.payload]
    case "eliminarTarea":
        return state.filter((valor) => valor.id !==action.payload)
    case "eliminarTareasHijas":
        return state.filter((valor) => valor.nombreProyecto !==action.payload)
    default:
        return state
  }
}
