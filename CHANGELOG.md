# Historial de Cambios - Sanitas Empresarial

Este documento detalla todos los cambios realizados en el proyecto desde su creación.

---

## [2026-02-18] - Mejoras de Estilo

### Añadido

- **Estilo de copyright mejorado**: Se añadió peso de fuente en negrita (font-weight: 700) al texto de copyright para mejor legibilidad

**Archivos modificados:**

- `src/styles/Form.css`

---

## [2026-02-17] - Mejoras Tipográficas

### Añadido

- **Fuentes Proxima Nova**: Se agregaron archivos de fuente Proxima Nova para mejorar la tipografía del proyecto
  - Proxima Nova Extrabold
  - Proxima Nova Regular

**Archivos añadidos:**

- `src/assets/fonts/Proxima_Nova_Extrabold.otf`
- `src/assets/fonts/Proxima_Nova_Regular.otf`

---

## [2026-02-17] - Fuente Figtree y Manejo de Errores

### Añadido

- **Fuente Figtree**: Se agregó la fuente Figtree (variable e itálica) para mejorar la tipografía
- **Manejo de errores mejorado**: Se mejoró el componente Input2 con mejor manejo de errores

### Modificado

- Componente Input2 con validaciones mejoradas
- Estilos globales actualizados para incluir Figtree
- Footer con estilos actualizados
- Formulario con mejoras en la lógica
- Estilos de botones y formularios actualizados

**Archivos modificados:**

- `src/assets/fonts/Figtree-Italic-VariableFont_wght.ttf`
- `src/assets/fonts/Figtree-VariableFont_wght.ttf`
- `src/atoms/Input2.jsx`
- `src/index.css`
- `src/molecules/Footer/Footer.css`
- `src/molecules/Footer/index.jsx`
- `src/molecules/Form.jsx`
- `src/styles/Button2.css`
- `src/styles/Form.css`

---

## [2025-07-14] - Mejoras de Responsividad

### Mejorado

- **Componente Input2**: Mejoras en la funcionalidad y estilos
- **Responsividad**: Actualización de estilos para mejor adaptación a diferentes tamaños de pantalla
- **Header**: Mejoras en estilos y estructura

**Archivos modificados:**

- `src/atoms/Input2.jsx`
- `src/index.css`
- `src/molecules/AttentionSchedule.jsx/index.jsx`
- `src/molecules/Form.jsx`
- `src/molecules/Header/Header.css`
- `src/molecules/Header/index.jsx`
- `src/styles/Input2.css`
- `src/styles/SanitasEmpresarial.css`

---

## [2025-07-10] - Correcciones de Footer y Responsive

### Corregido

- **Footer**: Solución de hallazgos en el footer
- **Responsive**: Mejoras en la adaptación responsive del formulario
- **Input2**: Ajustes en el componente de entrada
- **InfoIcon**: Correcciones de estilo

**Archivos modificados:**

- `src/atoms/Input2.jsx`
- `src/molecules/Header/Header.css`
- `src/styles/InfoIcon.css`
- `src/styles/Input2.css`
- `src/styles/SanitasEmpresarial.css`

---

## [2025-07-09] - Mensaje Dinámico Fuera de Horario

### Añadido

- **Mensaje dinámico**: Implementación de mensaje dinámico cuando el servicio está fuera de horario de atención
- **Lógica de horarios**: Validación de horarios de atención en el contexto

**Archivos modificados:**

- `src/context/index.jsx`
- `src/index.css`
- `src/molecules/AttentionSchedule.jsx/AttentionSchedule.css`
- `src/molecules/AttentionSchedule.jsx/index.jsx`
- `src/molecules/Form.jsx`

---

## [2025-07-08] - Corrección de Colores de Modal

### Corregido

- **Colores de modal**: Diferenciación de colores de fondo entre el modal inicial y otros modales

**Archivos modificados:**

- `src/context/index.jsx`
- `src/molecules/Form.jsx`
- `src/molecules/ImageModal/ImageModal.css`
- `src/molecules/ImageModal/index.jsx`

---

## [2025-07-07] - Desactivación de Opción por Defecto

### Añadido

- **Opción desactivada**: Se agregó funcionalidad para desactivar la opción por defecto en selectores

**Archivos modificados:**

- `src/atoms/Input2.jsx`
- `src/context/index.jsx`
- `src/molecules/AttentionSchedule.jsx/index.jsx`
- `src/molecules/Form.jsx`

---

## [2025-07-04] - Reubicación de Footer y Nuevos Servicios

### Añadido

- **Nuevos servicios**: Se agregaron nuevos servicios al contexto de la aplicación
- **Footer reubicado**: El footer se movió a la parte superior de la página

**Archivos modificados:**

- `src/context/index.jsx`
- `src/molecules/Form.jsx`
- `src/molecules/ImageModal/ImageModal.css`
- `src/molecules/ImageModal/index.jsx`
- `src/page/SanitasEmpresarial.jsx`

---

## [2025-01-08] - Ajustes de Estilo en Modal

### Modificado

- **Imagen del modal**: Reubicación de la imagen en el modal para mejor visualización

**Archivos modificados:**

- `src/molecules/ImageModal/ImageModal.css`
- `src/molecules/Modal/Modal.css`

---

## [2024-12-26] - Documentación del Proyecto

### Añadido

- **README completo**: Documentación exhaustiva del proyecto incluyendo:
  - Tecnologías utilizadas
  - Arquitectura del proyecto
  - Estructura de navegación
  - Instrucciones para correr el proyecto
- **Imágenes de documentación**: Capturas de pantalla para la documentación
  - Estructura general del proyecto
  - Estructura de la carpeta src
  - Ejemplo de instalación
  - Ejemplo de proyecto corriendo
  - Respuesta de terminal

**Archivos añadidos:**

- `README.md` (actualizado)
- `generalStructure.png`
- `installationExample.png`
- `runningProject.png`
- `srcStructure.png`
- `terminalResponse.png`

---

## [2024-12-17] - Modal Popup y Configuración

### Añadido

- **Modal de imagen**: Implementación de modal para mostrar popups con imágenes
- **Archivo .nvmrc**: Configuración de versión de Node.js (v20.18.0)
- **Lógica de modal**: Métodos en el contexto para manejar el modal

**Archivos añadidos:**

- `.nvmrc`
- `src/molecules/ImageModal/ImageModal.css`
- `src/molecules/ImageModal/index.jsx`

**Archivos modificados:**

- `src/context/index.jsx`
- `src/molecules/Form.jsx`

---

## [2024-12-17] - Separación del Repositorio

### Añadido

- **Proyecto inicial**: Separación del repositorio de Sanitas Empresarial como proyecto independiente
- **Estructura completa**: Implementación de toda la estructura del proyecto
  - Configuración de Vite
  - Configuración de ESLint
  - Configuración de Prettier
  - Componentes atómicos (Atomic Design)
  - Moléculas y páginas
  - Sistema de contexto
  - Estilos CSS
  - Assets e imágenes

**Componentes principales añadidos:**

- `App.jsx` - Componente principal
- `src/context/index.jsx` - Contexto global
- `src/atoms/` - Componentes atómicos (Button, Input2, InfoIcon, etc.)
- `src/molecules/` - Componentes moleculares (Form, Header, Footer, Modal, etc.)
- `src/page/SanitasEmpresarial.jsx` - Página principal
- Configuración de proyecto (package.json, vite.config.js, eslint.config.js)

---

## Resumen de Tecnologías

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.0.1
- **Node.js**: v20.18.0
- **npm**: 10.8.2
- **Arquitectura**: Atomic Design
- **Librerías principales**:
  - axios (peticiones HTTP)
  - react-google-recaptcha (validación)
  - prop-types (validación de props)

---

## Autores

- Juan Vicente Reyes (juanvidev1)
- Nicolas Olmos (nicolas.nos)
