import * as XLSX from "xlsx";
export const descargarCsv = (listaP, listaT, nombre) => {
    const libro = XLSX.utils.book_new();

  const hojaProyectos = XLSX.utils.json_to_sheet(listaP);
  const hojaTareas = XLSX.utils.json_to_sheet(listaT);

  XLSX.utils.book_append_sheet(
    libro,
    hojaProyectos,
    "Proyectos"
  );

  XLSX.utils.book_append_sheet(
    libro,
    hojaTareas,
    "Tareas"
  );

  XLSX.writeFile(libro, nombre);
}
