import { useEffect, useState } from "react"

export const useConfiguracion = () => {
    const [tema, setTema] = useState(()=>{
        return localStorage.getItem("tema") || "light";
    })

    useEffect(() => {
    localStorage.setItem("tema", tema);
    const root = document.documentElement;

  if (tema === "oscuro") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  }, [tema]);


    const [idioma, setIdioma] = useState(()=>{
        return localStorage.getItem("idioma") || "es"
    })

     useEffect(() => {
    localStorage.setItem("idioma", idioma);
  }, [idioma]);

    return ({tema, setTema, idioma, setIdioma})
}
