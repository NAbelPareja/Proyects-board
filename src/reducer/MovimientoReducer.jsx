

export const MovimientoReducer = (state, action) => {

    switch(action.type){
        case "[MOVIMIENTO] agregar movimiento":
            return[...state, action.payload]
        case "[MOVIMIENTO] editar movimiento":
            return state.map( mov => {
                if(action.payload.id == mov.id)
                    return{
                    ...mov,
                    nombre: action.payload.nombre,
                    descripcion: action.payload.descripcion,
                    categoria: action.payload.categoria,
                    prioridad: action.payload.prioridad,
                    fechaLimite: action.payload.fechaLimite,
                    color: action.payload.color,
                    favorito: action.payload.favorito,
                    }
                else{
                    return mov;
                }
            })
        case "[MOVIMEINTO] elimnar movimiento":
            return state.filter(mov => mov.id !== action.payload)
        default:
            return state
    }
}
