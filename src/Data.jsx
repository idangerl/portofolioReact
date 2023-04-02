import Project1 from "./assets/project1.jpeg";
import Project2 from "./assets/project2.jpg";
import Project3 from "./assets/project3.jpeg";
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
    title: "Proyecto 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 2,
    img: Project2,
    category: "categoria 2",
    title: "Proyecto 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 3,
    img: Project3,
    category: "categoria 3",
    title: "Proyecto 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 4,
    img: Project4,
    category: "categoria 4",
    title: "Proyecto 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 5,
    img: Project5,
    category: "categoria 3",
    title: "Proyecto 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 6,
    img: Project6,
    category: "categoria 1",
    title: "Proyecto 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];

export const cv = [
  {
    id: 1,
    title: "Academlo fundamentos desarrollo web",
    subtitle: "Fundamentos een HTML, CSS y Javascript",
    date: "2022",
    description:
      "Certificacion en Acadamenlo donde adquirí conocimientos en los fundamentos de desarrollo web, incluyendo HTML, CSS y Javascript, lo que me permitió comprender el proceso de creación y diseño de sitios web.",
    category: "education",
  },

  {
    id: 2,
    title: "Academlo Desarrollo Frontend",
    subtitle: "Frontend con React",
    date: "2022",
    description:
      "Certificacion en Acadamenlo sobre React, donde aprendí a desarrollar aplicaciones web utilizando esta tecnología de vanguardia. Durante el curso, adquirí habilidades en la creación de componentes, manejo de estado y uso de librerías para mejorar la experiencia del usuario.",
    category: "education",
  },

  {
    id: 3,
    title: "Academlo Desarrollo Backend",
    subtitle: "Backend con NodeJS",
    date: "2023",
    description:
      "Certificacion en Acadamenlo sobre Node.js con Express, donde aprendí a desarrollar aplicaciones web en el lado del servidor. Durante el curso, adquirí habilidades en la creación de API RESTful, manejo de bases de datos, autenticación y autorización de usuarios, y manejo de errores.",
    category: "education",
  },

  {
    id: 4,
    title: "Open Bootcamp JS",
    subtitle: "Desarrollo con JS",
    date: "2022",
    description:
      "Certificación en JavaScript otorgada por Open Bootcamp, que demuestra mi conocimiento y habilidades en el lenguaje de programación. Durante la certificación, adquirí habilidades en el uso de estructuras de datos y algoritmos, programación orientada a objetos y manipulación del DOM.",
    category: "experience",
  },

  {
    id: 5,
    title: "Open Bootcamp Diseño web",
    subtitle: "HTML y CSS",
    date: "2022",
    description:
      "Certificación en Diseño Web con HTML y CSS otorgada por Open Bootcamp, que demuestra mi conocimiento y habilidades en la creación de sitios web estáticos y dinámicos. Durante la certificación, adquirí habilidades en el uso de etiquetas HTML, estilos CSS, diseño responsivo, accesibilidad, y buenas prácticas de diseño web.",
    category: "experience",
  },

  {
    id: 6,
    title: "Free Code Camp JS",
    subtitle: "programacion con Javascript",
    date: "2023",
    description:
      "Completé con éxito un curso en JavaScript ofrecido por FreeCodeCamp, donde adquirí conocimientos fundamentales en el lenguaje de programación y sus aplicaciones prácticas en el desarrollo web. Durante el curso, me familiaricé con estructuras de datos y algoritmos, programación orientada a objetos, manipulación del DOM, y desarrollo de aplicaciones web utilizando herramientas populares como Node.js y React.",
    category: "experience",
  },
];