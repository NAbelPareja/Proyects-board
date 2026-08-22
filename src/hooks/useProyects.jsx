import { useContext } from "react"
import { ProyectsContext } from "../context/ProyectsContext"

export const useProyects = () => {
  return useContext(ProyectsContext)
}
