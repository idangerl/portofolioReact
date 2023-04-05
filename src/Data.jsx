import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.jpeg";
import Project5 from "./assets/project5.jpg";
import Project6 from "./assets/project6.jpg";

export const links = [
  {
    name: "Inicio",
    path: "home",
  },

  {
    name: "Habilidades",
    path: "skills",
  },
  {
    name: "Portafolio",
    path: "work",
  },
  {
    name: "Educacíon",
    path: "resume",
  },
  {
    name: "Contacto",
    path: "contact",
  },
];

export const skills = [
  {
    id: 1,
    name: "HTML",
    percentage: 90,
    description:
      "lenguaje de marcado utilizado para crear páginas web, compuesto de etiquetas y contenido estructurado.",
  },

  {
    id: 2,
    name: "CSS",
    percentage: 75,
    description:
      "lenguaje utilizado para dar estilo y presentación visual a las páginas web, mediante reglas y selectores.",
  },

  {
    id: 3,
    name: "Java Script",
    percentage: 80,
    description:
      "lenguaje de programación interpretado que se utiliza para crear interactividad en páginas web y aplicaciones.",
  },

  {
    id: 4,
    name: "React",
    percentage: 75,
    description:
      "una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables para aplicaciones web y móviles.",
  },

  {
    id: 5,
    name: "Git",
    percentage: 80,
    description:
      "un sistema de control de versiones utilizado para gestionar y rastrear cambios en el código fuente de un proyecto.",
  },

  {
    id: 6,
    name: "Node JS",
    percentage: 70,
    description:
      "un entorno de ejecución de JavaScript del lado del servidor utilizado para construir aplicaciones escalables y de alta velocidad.",
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: "categoria 1",
    title: "streaming App interface",
    description:
      "Interfaz de streaming desarrollado en React con diseño intuitivo, navegación fluida y diseño responsivo.",
    GIT_URL: "https://github.com/idangerl/streaming-app-with-react",
    PAGE_URL: "https://app-streaming-oscar.netlify.app",
  },
  {
    id: 2,
    img: Project2,
    category: "categoria 2",
    title: "Weather App",
    description:
      "aplicacion de clima desarrollado con react y css nativo, usando consumo de apis de clima y ciudades",
    GIT_URL: "https://github.com/idangerl/weatherApp-react",
    PAGE_URL: "https://weather-app-oscar.netlify.app",
  },
  {
    id: 3,
    img: Project3,
    category: "categoria 3",
    title: "News App",
    description:
      "aplicacion de noticias responsive desarrollado con react y tailwind css, usando consumo de api",
    GIT_URL: "https://github.com/idangerl/newsapp",
    PAGE_URL: "https://news-app-oscar.netlify.app",
  },
  {
    id: 4,
    img: Project4,
    category: "categoria 4",
    title: "Proyecto 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    GIT_URL: "",
    PAGE_URL: "",
  },
  {
    id: 5,
    img: Project5,
    category: "categoria 3",
    title: "Proyecto 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    GIT_URL: "",
    PAGE_URL: "",
  },
  {
    id: 6,
    img: Project6,
    category: "categoria 1",
    title: "Proyecto 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    GIT_URL: "",
    PAGE_URL: "",
  },
];

export const cv = [
  {
    id: 1,
    title: "Desarrollo web Fullstack MERN STACK",
    subtitle: "institucion: ACADEMLO",
    date: "2022",
    description:
      "Certificacion en Acadamenlo donde adquirí conocimientos en los fundamentos de desarrollo web, a crear interfaces con React y desarrolar bases de datos y backend con nodejs",
    category: "education",
  },

  {
    id: 2,
    title: "Herramientas de Edición y Diseño de Adobe",
    subtitle: "certificacion de Adobe inc",
    date: "2021",
    description:
      "Certificación de Adobe en Photoshop, Illustrator, InDesign y Lightroom, avalando habilidades profesionales en edición gráfica y diseño editorial.",
    category: "education",
  },

  {
    id: 3,
    title: "Herramientas de marketing y publicidad",
    subtitle: "institucion: Facultad Nacional de Ingenieria",
    date: "2021",
    description:
      "certificación de la Facultad Nacional de Ingeniería de Oruro avala habilidades y conocimientos en el uso de herramientas de Adobe, demostrando el dominio de técnicas avanzadas en diseño y edición gráfica para la creación de proyectos innovadores.",
    category: "education",
  },

  {
    id: 4,
    title: "Desarrollo con JS",
    subtitle: "institucion: Open Bootcamp",
    date: "2022",
    description:
      "Certificación en JavaScript otorgada por Open Bootcamp, que demuestra mi conocimiento y habilidades en el lenguaje de programación. Durante la certificación, adquirí habilidades en el uso de estructuras de datos y algoritmos, programación orientada a objetos y manipulación del DOM.",
    category: "experience",
  },

  {
    id: 5,
    title: "Diseño web con HTML y CSS",
    subtitle: "institucion: Open Bootcamp",
    date: "2022",
    description:
      "Certificación en Diseño Web con HTML y CSS otorgada por Open Bootcamp, que demuestra mi conocimiento y habilidades en la creación de sitios web estáticos y dinámicos. Durante la certificación, adquirí habilidades en el uso de etiquetas HTML, estilos CSS, diseño responsivo, accesibilidad, y buenas prácticas de diseño web.",
    category: "experience",
  },

  {
    id: 6,
    title: "programacion con Javascript",
    subtitle: "institucion: Free code camp",
    date: "2023",
    description:
      "Completé con éxito un curso en JavaScript ofrecido por FreeCodeCamp, donde adquirí conocimientos fundamentales en el lenguaje de programación y sus aplicaciones prácticas en el desarrollo web. Durante el curso, me familiaricé con estructuras de datos y algoritmos, programación orientada a objetos, manipulación del DOM, y desarrollo de aplicaciones web utilizando herramientas populares como Node.js y React.",
    category: "experience",
  },
];
