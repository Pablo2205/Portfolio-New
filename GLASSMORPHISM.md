# Efecto de Cristal Transparente (Glassmorphism)

Este portfolio utiliza el efecto de cristal transparente (glassmorphism) en múltiples componentes para crear una interfaz moderna y elegante.

## 🎨 Características del Efecto

El efecto de cristal está implementado con las siguientes propiedades CSS:

```css
background: rgba(10, 10, 10, 0.3);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(var(--card-border-rgb), 0.25);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
```

### Propiedades Clave:

- **`background: rgba(10, 10, 10, 0.3)`**: Fondo semi-transparente oscuro
- **`backdrop-filter: blur(12px)`**: Desenfoque del contenido detrás del elemento
- **`-webkit-backdrop-filter: blur(12px)`**: Compatibilidad con navegadores WebKit
- **`border`**: Borde sutil para definir el contorno
- **`box-shadow`**: Sombra suave para dar profundidad

## 📦 Componentes con Efecto de Cristal

### 1. **Navbar (Barra de Menú)**

```css
background: rgba(10, 10, 10, 0.12);
backdrop-filter: blur(12px);
```

El navbar tiene un efecto de cristal que se mantiene visible mientras navegas.

### 2. **Tarjetas de Proyectos (Project Cards)**

```css
/* Estado normal */
background: rgba(10, 10, 10, 0.3);
backdrop-filter: blur(12px);

/* Estado hover */
background: rgba(10, 10, 10, 0.5);
backdrop-filter: blur(16px);
transform: translateY(-5px);
```

**Efectos adicionales en elementos internos:**
- Stack boxes (tecnologías)
- Botones de compartir
- Panel expandible de tecnologías

### 3. **Tarjetas de Habilidades (Skills Cards)**

```css
/* Estado normal */
background: rgba(10, 10, 10, 0.3);
backdrop-filter: blur(12px);

/* Estado hover */
background: rgba(10, 10, 10, 0.5);
backdrop-filter: blur(16px);
transform: translateY(-8px);
```

**Efectos en skill details:**
- Cada habilidad individual tiene su propio efecto de cristal
- Animación de desplazamiento al hacer hover

### 4. **Tarjetas de Servicios (Services Cards)**

```css
/* Fondo de la tarjeta */
background: rgba(10, 10, 10, 0.5);
backdrop-filter: blur(12px);

/* Contenedor de íconos */
background: rgba(10, 10, 10, 0.5);
backdrop-filter: blur(10px);
box-shadow: 0 4px 20px 0 rgba(37, 99, 235, 0.2);
```

Las tarjetas de servicios mantienen el borde animado con gradiente mientras añaden el efecto de cristal.

### 5. **Formulario de Contacto**

```css
/* Inputs y textarea */
background: rgba(10, 10, 10, 0.3);
backdrop-filter: blur(12px);

/* Focus state */
background: rgba(10, 10, 10, 0.5);
backdrop-filter: blur(16px);
border-color: var(--color-primary);
```

**Opciones de contacto:**
```css
/* Cards de contacto (Email, Messenger, WhatsApp) */
background: rgba(10, 10, 10, 0.3);
backdrop-filter: blur(12px);

/* Hover */
background: rgba(10, 10, 10, 0.5);
backdrop-filter: blur(16px);
transform: translateY(-5px);
```

## 🎭 Variaciones de Intensidad

### Ligero (Light)
```css
background: rgba(10, 10, 10, 0.2);
backdrop-filter: blur(8px);
```
Usado en: Elementos secundarios, detalles de habilidades

### Normal (Normal)
```css
background: rgba(10, 10, 10, 0.3);
backdrop-filter: blur(12px);
```
Usado en: Tarjetas principales, contenedores

### Intenso (Strong)
```css
background: rgba(10, 10, 10, 0.5);
backdrop-filter: blur(16px);
```
Usado en: Estados hover, elementos activos, modales

## 🌈 Efectos de Hover

Todos los componentes con efecto de cristal tienen transiciones suaves:

```css
transition: all 300ms ease;

@media (hover:hover) and (pointer:fine){
    .element:hover {
        background: rgba(10, 10, 10, 0.5);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(var(--card-border-rgb), 0.4);
        box-shadow: 0 12px 40px 0 rgba(37, 99, 235, 0.25);
        transform: translateY(-5px);
    }
}
```

### Efectos de Hover Incluyen:

1. **Incremento de opacidad**: De 0.3 a 0.5
2. **Mayor desenfoque**: De 12px a 16px
3. **Borde más visible**: De 0.25 a 0.4 de opacidad
4. **Sombra brillante**: Con tinte azul
5. **Elevación**: `translateY(-5px)` o `translateY(-8px)`

## 💡 Compatibilidad

El efecto está optimizado para navegadores modernos:

- ✅ Chrome/Edge (79+)
- ✅ Firefox (103+)
- ✅ Safari (15.4+)
- ✅ Opera (66+)

**Nota**: Se incluye el prefijo `-webkit-backdrop-filter` para máxima compatibilidad.

## 🎨 Personalización

Para ajustar la intensidad del efecto de cristal en cualquier componente:

### Cambiar la opacidad del fondo:
```css
/* Más transparente */
background: rgba(10, 10, 10, 0.2);

/* Más opaco */
background: rgba(10, 10, 10, 0.6);
```

### Cambiar la intensidad del blur:
```css
/* Menos desenfoque */
backdrop-filter: blur(8px);

/* Más desenfoque */
backdrop-filter: blur(20px);
```

### Cambiar el color del brillo:
```css
/* Brillo verde */
box-shadow: 0 12px 40px 0 rgba(16, 185, 129, 0.25);

/* Brillo púrpura */
box-shadow: 0 12px 40px 0 rgba(139, 92, 246, 0.25);

/* Brillo rosa */
box-shadow: 0 12px 40px 0 rgba(236, 72, 153, 0.25);
```

## 🚀 Mejores Prácticas

1. **No abusar del blur**: Un blur excesivo puede afectar el rendimiento
2. **Mantener la legibilidad**: Asegurar que el texto sea legible sobre el fondo difuminado
3. **Usar transiciones**: Siempre animar los cambios de estado para una experiencia suave
4. **Considerar el contraste**: El efecto funciona mejor con fondos oscuros y texto claro
5. **Optimizar para móviles**: En dispositivos móviles, considera reducir la intensidad del blur

## 📱 Responsive

El efecto se mantiene en todos los tamaños de pantalla, pero algunos ajustes se realizan automáticamente:

```css
@media (max-width: 768px) {
    /* Los efectos se mantienen pero las sombras pueden reducirse */
    .element {
        box-shadow: 0 4px 20px 0 rgba(31, 38, 135, 0.1);
    }
}
```

## 🎯 Resultado

El efecto de cristal transparente crea una interfaz:

- **Moderna y elegante**: Diseño actual y profesional
- **Cohesiva**: Todos los elementos comparten el mismo lenguaje visual
- **Interactiva**: Los efectos hover proporcionan feedback visual
- **Profundidad**: Las capas de transparencia crean sensación de profundidad
- **Sofisticada**: El desenfoque y las transparencias añaden sofisticación
