import { useState } from "react";

export const useFormularioMovimiento = () => {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    prioridad: "",
    fechaLimite: "",
    color: "",
    favorito: false,
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setForm({
        ...form,
        [e.target.name]: e.target.value

    })
  }

  const handleCheckboxChange = (e) => {
    setForm({
        ...form,
        favorito: e.target.checked
    })
  }

  const handleColorChange  = (colorSeleccionado) => {
    setForm({
        ...form,
        color: colorSeleccionado 
    })
  }
  

  return {form, setForm, handleInputChange, handleCheckboxChange, handleColorChange};
};
