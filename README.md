# 🚀 DevBoard

**DevBoard** es una aplicación web moderna de gestión de proyectos y tareas diseñada específicamente para desarrolladores. Permite organizar flujos de trabajo, realizar un seguimiento de tareas pendientes y mantener un control total sobre tus proyectos locales con soporte nativo para temas claro/oscuro y herramientas de exportación de datos.

---

## ✨ Características Principales

*   **📂 Gestión de Proyectos y Tareas:** Crea, edita y elimina proyectos junto con sus tareas asociadas sin perder la consistencia de los datos.
*   **🔒 Arquitectura Robusta (React Context + Reducers):** Flujo de datos predecible y optimizado mediante el uso de estados globales inmutables.
*   **🌓 Modo Oscuro Nativo:** Interfaz adaptativa e intuitiva construida con Tailwind CSS que respeta las preferencias del usuario.
*   **💾 Exportación e Importación de Datos:** Descarga copias de seguridad completas de tus proyectos y tareas en formatos estructurados como JSON y CSV/Excel.
*   **⚡ Rendimiento Óptimo:** Construido sobre **Vite** para garantizar tiempos de compilación e inicio instantáneos en desarrollo y producción.

---

## 🛠️ Tecnologías Utilizadas

*   **Frontend Core:** React 18 (Hooks, Context API, `useReducer`)
*   **Estilos y UI:** Tailwind CSS (Componentes responsivos y clases Dark Mode)
*   **Iconos:** React Icons (`fi` Feather Icons)
*   **Herramientas de Construcción:** Vite

---

## 📦 Estructura del Proyecto (Ejes Clave)

El proyecto sigue una estructura limpia basada en componentes reutilizables y separación de conceptos:

```text
src/
├── components/        # Componentes visuales reutilizables (DataSection, DataActionRow, etc.)
├── hooks/             # Custom Hooks para modular lógica de estado (useProyects, useMovimiento)
├── context/           # Proveedores globales de estado (ProyectsProvider)
├── reducers/          # Reducers puros para control inmutable de datos (MovimientoReducer, TareasReducer)
└── utils/             # Funciones utilitarias puras (Exportadores JSON/CSV)
```

---

## 💡 Buenas Prácticas Implementadas

*   **Aislamiento de Reducers:** Cada entidad (Proyectos y Tareas) maneja su propio estado atómico, coordinados de manera limpia por el Context Provider central para evitar efectos secundarios o "tareas huérfanas".
*   **Componentes Controlados:** Formularios y campos de edición en línea (*Inline Editing*) sincronizados en tiempo real con el ciclo de vida de React.
*   **Prop Drilling Reducido:** Consumo directo de datos mediante Custom Hooks especializados que interactúan con el Contexto global.

