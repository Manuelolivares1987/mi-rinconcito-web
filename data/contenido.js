/* ============================================================
   ARCHIVO DE CONTENIDO - JARDÍN INFANTIL MI RINCONCITO
   ============================================================

   Este archivo contiene todo el contenido que puedes editar
   fácilmente sin necesidad de modificar el código de la página.

   INSTRUCCIONES:
   1. Abre este archivo con el Bloc de Notas o VS Code
   2. Modifica los textos entre comillas ""
   3. Guarda el archivo (Ctrl + S)
   4. Refresca la página web en el navegador (F5)

   IMPORTANTE:
   - No borres las comas , ni los corchetes [] ni las llaves {}
   - Los textos van entre comillas "texto aquí"
   - Si algo deja de funcionar, revisa que no falte una coma

   ============================================================ */

const CONTENIDO = {

    /* --------------------------------------------------------
       INFORMACIÓN GENERAL DEL JARDÍN
       -------------------------------------------------------- */
    informacion: {
        nombre: "Jardín Infantil Mi Rinconcito",
        slogan: "Educando con Amor",
        añosExperiencia: 24,
        añoFundacion: 2001,

        // Contacto
        direccion: "Manuel Bulnes 3603, La Serena",
        region: "Región de Coquimbo",
        telefonoCelular: "+56 9 6820 4684",
        telefonoFijo: "+56 51 229 3108",
        whatsapp: "56968204684",  // Sin + ni espacios
        email: "",  // Agregar si tienen correo

        // Redes sociales
        instagram: "https://www.instagram.com/jardininfantilmirinconcito/",
        facebook: "",  // Agregar enlace de Facebook si tienen
        youtube: "",   // Agregar enlace del canal de YouTube si tienen

        // Horarios
        periodoFuncionamiento: "Marzo - Enero",
        jornadas: "Media jornada y jornada especial",
        edades: "2 a 5 años 11 meses",
        capacidad: "20 niños por jornada"
    },

    /* --------------------------------------------------------
       GALERÍA DE FOTOS POR CATEGORÍA
       --------------------------------------------------------
       Cada categoría tiene:
       - nombre: Nombre visible de la categoría
       - descripcion: Texto breve que aparece en la tarjeta
       - carpeta: Carpeta dentro de "img/galeria/" donde están las fotos
       - prefijo: Nombre base de las fotos (ej: "salon" para salon_1.jpg, salon_2.jpg...)
       - cantidad: Número total de fotos en esa categoría
       - extension: Extensión de las fotos (jpg, png, webp)
       - portada: Número de la foto que se usa como portada de la categoría

       Para agregar una categoría nueva:
       1. Crea la carpeta dentro de "web/img/galeria/"
       2. Nombra las fotos como: prefijo_1.jpg, prefijo_2.jpg, etc.
       3. Agrega la entrada aquí abajo
       -------------------------------------------------------- */
    galeria: [
        {
            nombre: "Salón",
            descripcion: "Nuestra sala multiuso con las áreas de trabajo",
            carpeta: "img/galeria/salon",
            prefijo: "salon",
            cantidad: 10,
            extension: "jpeg",
            portada: 1
        },
        {
            nombre: "Patio de Juegos",
            descripcion: "Espacio al aire libre para jugar y explorar",
            carpeta: "img/galeria/patio_juegos",
            prefijo: "patio_juegos",
            cantidad: 5,
            extension: "jpeg",
            portada: 1
        },
        {
            nombre: "Actividades",
            descripcion: "Momentos especiales y actividades con los niños",
            carpeta: "img/galeria/actividades",
            prefijo: "actividad",
            cantidad: 4,
            extension: "jpeg",
            portada: 1
        }
        // Agrega más categorías siguiendo el mismo formato
    ],

    /* --------------------------------------------------------
       VIDEOS DE YOUTUBE
       --------------------------------------------------------
       Para agregar videos:
       1. Ve a YouTube y busca el video
       2. Clic en "Compartir" > "Insertar"
       3. Copia solo el código después de "embed/"
          Por ejemplo: dQw4w9WgXcQ

       Ejemplo:
       {
           codigoYoutube: "dQw4w9WgXcQ",
           titulo: "Título del video",
           descripcion: "Descripción del video"
       },
       -------------------------------------------------------- */
    videos: [
        // Descomenta y edita cuando tengas videos:
        /*
        {
            codigoYoutube: "CODIGO_DEL_VIDEO",
            titulo: "Un día en Mi Rinconcito",
            descripcion: "Conoce cómo es un día típico en nuestro jardín"
        },
        {
            codigoYoutube: "CODIGO_DEL_VIDEO",
            titulo: "Nuestra Metodología High Scope",
            descripcion: "Te explicamos cómo trabajamos con los niños"
        }
        */
    ],

    /* --------------------------------------------------------
       ACTIVIDADES Y NOTICIAS
       --------------------------------------------------------
       Para agregar actividades o noticias:

       Ejemplo:
       {
           fecha: "15 de Marzo 2026",
           titulo: "Inicio del Año Escolar",
           descripcion: "Comenzamos un nuevo año lleno de aventuras...",
           imagen: "img/actividades/inicio-clases.jpg"  // Opcional
       },
       -------------------------------------------------------- */
    actividades: [
        {
            fecha: "Lunes 02 de Marzo 2026",
            titulo: "Inicio de Clases",
            descripcion: "¡El lunes 02 de Marzo comenzamos las clases! Cupos limitados.",
            imagen: ""
        }
        // Agrega más actividades siguiendo el mismo formato
    ],

    /* --------------------------------------------------------
       TESTIMONIOS DE PADRES
       --------------------------------------------------------
       Para agregar testimonios:

       Ejemplo:
       {
           nombre: "María González",
           relacion: "Mamá de Sofía",
           texto: "El texto del testimonio aquí...",
           foto: "img/testimonios/maria.jpg"  // Opcional
       },
       -------------------------------------------------------- */
    testimonios: [
        {
            nombre: "Fernanda Salas",
            relacion: "Mamá de alumnos",
            texto: "Nuestros tres hijos han pasado por el jardín Mi Rinconcito y siempre hemos tenido una excelente experiencia. Es un jardín muy familiar, cercano y preocupado por entregar valores, cariño y un ambiente seguro para los niños. Lo recomendamos totalmente.",
            foto: ""
        },
        {
            nombre: "Paula Collado",
            relacion: "Mamá de alumno",
            texto: "Quiero manifestar y agradecer al jardín por el cariño, la dedicación y el profesionalismo con el que cuidan y educan a nuestro hijo. Desde el primer día supe que había sido la mejor decisión en matricularlo en Mi Rinconcito y hemos visto a lo largo de un año un ambiente lleno de amor, respeto y aprendizaje, donde los niños se sienten seguros, felices y motivados por descubrir y aprender cosas nuevas todos los días. Las tías demuestran un compromiso admirable, fomentando valores, autonomía y desarrollo integral en cada etapa. Como familia estamos felices.",
            foto: ""
        },
        {
            nombre: "Manuel Olivares",
            relacion: "Papá de alumno",
            texto: "Como papá de un niño con síndrome de Down, estoy enormemente agradecido con este jardín. Desde que mi hijo ingresó, sus avances han sido increíbles: ha ganado autonomía, confianza y nuevas habilidades. ¡Incluso dejó el pañal! Algo que parecía un gran desafío se logró gracias al trabajo cariñoso y comprometido del equipo. Se nota que aquí cada niño es valorado y estimulado según sus capacidades. Lo recomiendo con total confianza.",
            foto: ""
        },
        {
            nombre: "Ana María Boyd",
            relacion: "Mamá de alumno",
            texto: "Elegir el jardín de nuestro hijo no fue fácil, pero Mi Rinconcito nos conquistó desde el primer día. El equipo transmite una calidez y dedicación que se nota en cada detalle. Nuestro hijo llega feliz, ha desarrollado su lenguaje, su creatividad y sus habilidades sociales de una forma que nos sorprende cada semana. Es un lugar donde los niños aprenden jugando, se sienten seguros y crecen rodeados de cariño. Lo recomendamos de corazón a cualquier familia.",
            foto: ""
        }
        // Agrega más testimonios siguiendo el mismo formato
    ],

    /* --------------------------------------------------------
       EQUIPO / PERSONAL
       --------------------------------------------------------
       Para agregar miembros del equipo:

       Ejemplo:
       {
           nombre: "Nombre Completo",
           cargo: "Educadora de Párvulos",
           descripcion: "Breve descripción o especialidad",
           foto: "img/equipo/nombre.jpg"
       },
       -------------------------------------------------------- */
    equipo: [
        {
            nombre: "Giovanna Solís Rojas",
            cargo: "Directora y Fundadora",
            descripcion: "Educadora de Párvulos con más de 24 años de experiencia",
            foto: "img/directora.jpg"
        }
        // Agrega más miembros del equipo
    ],

    /* --------------------------------------------------------
       SERVICIOS ADICIONALES
       -------------------------------------------------------- */
    servicios: [
        {
            titulo: "Media Jornada",
            descripcion: "Jornada de mañana o tarde",
            icono: "clock"
        },
        {
            titulo: "Jornada Especial",
            descripcion: "Horario extendido según necesidades",
            icono: "calendar"
        },
        {
            titulo: "Metodología High Scope",
            descripcion: "Aprendizaje activo y planificado",
            icono: "book"
        },
        {
            titulo: "Grupos Reducidos",
            descripcion: "Máximo 20 niños por jornada",
            icono: "users"
        }
    ]

};

/* ============================================================
   NO MODIFICAR DEBAJO DE ESTA LÍNEA
   ============================================================ */
// Exportar para uso en la página
if (typeof window !== 'undefined') {
    window.CONTENIDO = CONTENIDO;
}
