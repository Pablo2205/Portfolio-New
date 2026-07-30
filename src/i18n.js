import React, { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    menu: {
      about: "About",
      services: "Services",
      skill: "Skills",
      certifications: "Certifications",
      projects: "Projects",
      contact: "Contact",
    },
    header: {
      greeting: "Hello, I am",
      name: "Pablo",
      title: "Software Engineer",
      description:
        "Software Engineer working across four connected areas: IT infrastructure management and automation, software development at every level, electronic hardware design, and cloud. I build high-level products — e-commerce platforms, websites, business applications — and low-level systems: firmware, embedded software and IoT-oriented devices. I take projects end to end: the infrastructure that supports them, the software that runs them, and the hardware that executes them.",
      downloadCV: "Download CV",
      emailMe: "Email Me",
    },
    facts: {
      experience: "Years Of Experience",
      projects: "Completed Projects",
      clients: "Technologies Employed",
    },
    about: {
      sectionTitle: "About Me",
      titlePre: "My name is",
      titleName: "Pablo Coria",
      description:
        "I am a Software Engineer with a solid foundation in electronics and embedded systems. My work spans four areas that constantly overlap: infrastructure administration, software development, hardware, and cloud. That combination lets me own a project from end to end — design the architecture, write the firmware, set up the infrastructure and leave it running in production. My academic background includes an associate's degree in electronics, a university associate's degree in programming, and I am currently pursuing a degree in Computer Engineering with a specialization in microcontroller software development.",
      card: {
        role: "Role",
        roleValue: "Software Engineer",
        name: "Name",
        sector: "Areas",
        sectorValue: "Infra · Software · Hardware · Cloud",
      },
    },
    services: {
      sectionTitle: "Services",
      intro:
        "I turn technological challenges into solutions that actually run in production. My work is organised around four pillars that combine according to what each project needs: IT infrastructure, software development, hardware, and cloud. Some projects need only one; the interesting ones need all four.",
      items: {
        infra: {
          label: "Pillar 01",
          title: "IT Infrastructure",
          description:
            "Management, automation and standardisation of on-premise and virtualised IT infrastructure. I administer Windows Server, Active Directory, Hyper-V and VMware environments, and automate operational work with PowerShell and Bash. I design workflows, audits and procedures that cut manual effort, bring order to day-to-day operations and remove repetitive errors — including monitoring, immutable backups and the technical documentation that keeps the environment maintainable.",
        },
        software: {
          label: "Pillar 02",
          title: "Software Development",
          description:
            "Full software development, at every level. High level: e-commerce, landing pages, websites and business applications built with React, Node and SQL/NoSQL databases. Low level: firmware in C/C++, embedded software on microcontrollers and complex IoT-oriented systems. I cover the whole cycle — architecture, development, testing, version control and deployment — with a focus on code that stays maintainable after delivery.",
        },
        hardware: {
          label: "Pillar 03",
          title: "Hardware & IoT",
          description:
            "Design and development of custom electronic hardware: schematics, PCB layout, instrumentation and signal conditioning. I build IoT devices, telemetry nodes, and robotics and automation solutions on STM32, ESP32, Arduino and Raspberry Pi platforms. From a working prototype to an integrated product, with its firmware, its communication protocols and its field testing.",
        },
        cloud: {
          label: "Pillar 04",
          title: "Cloud",
          description:
            "Architecture, migration and operation of cloud solutions on AWS, Azure, GCP and IBM Cloud. I deploy applications and services with containers, connect devices and data sources to the cloud, and automate delivery through CI/CD pipelines. Always with cost, availability and security in mind, so the cloud becomes an operational advantage instead of a surprise invoice.",
        },
      },
    },
    skills: {
      sectionTitle: "My Skills",
      levels: {
        Basic: "Basic",
        Intermediate: "Intermediate",
        Advanced: "Advanced",
        Experienced: "Experienced",
      },
      categories: {
        "Frontend Development": "Frontend Development",
        "Backend Development": "Backend Development",
        "Data Bases": "Databases",
        "Infrastructure": "IT Infrastructure",
        "Cloud": "Cloud",
        "Embedded Systems": "Embedded Systems & Hardware",
        "DevOps": "DevOps & Tooling",
      },
    },
    certifications: {
      sectionTitle: "Certifications",
      description:
        "Certifications obtained in courses and certifications performed.",
    },
    projects: {
      sectionTitle: "Projects",
      tabs: {
        All: "All",
        Engineering: "Engineering",
        Infrastructure: "Infrastructure",
        Development: "Development",
      },
      demo: "Live demo",
      repo: "Code",
      moreStack: "More Stack Used",
    },
    contact: {
      sectionTitle: "Contact Me",
      description:
        "Ready to take your infrastructure, software or hardware project to the next level? Whether you need to automate an operation, build an application from scratch, develop a device and its firmware, or move a system to the cloud, I can help you scope it and build it. Tell me what you have in mind and I will get back to you with a concrete approach.",
      sendMessage: "Send a message",
      form: {
        name: "Your full name",
        email: "Your email",
        message: "Your message",
        submit: "Send Message",
      },
    },
    footer: {
      copyright: "Developed by Pablo Coria",
    },
  },

  es: {
    menu: {
      about: "Sobre mí",
      services: "Servicios",
      skill: "Habilidades",
      certifications: "Certificados",
      projects: "Proyectos",
      contact: "Contacto",
    },
    header: {
      greeting: "Hola, soy",
      name: "Pablo",
      title: "Ingeniero de Software",
      description:
        "Ingeniero de Software que trabaja sobre cuatro áreas conectadas: administración y automatización de infraestructura TI, desarrollo de software en todos sus niveles, diseño de hardware electrónico y cloud. Construyo productos de alto nivel —e-commerce, sitios web, aplicaciones de gestión— y sistemas de bajo nivel: firmware, software embebido y dispositivos orientados a IoT. Tomo los proyectos de punta a punta: la infraestructura que los sostiene, el software que los gobierna y el hardware que los ejecuta.",
      downloadCV: "Descargar CV",
      emailMe: "Escribime",
    },
    facts: {
      experience: "Años de experiencia",
      projects: "Proyectos completados",
      clients: "Tecnologías utilizadas",
    },
    about: {
      sectionTitle: "Sobre mí",
      titlePre: "Me llamo",
      titleName: "Pablo Coria",
      description:
        "Soy Ingeniero de Software con una base sólida en electrónica y sistemas embebidos. Mi trabajo se mueve sobre cuatro áreas que se cruzan permanentemente: administración de infraestructura, desarrollo de software, hardware y cloud. Esa combinación me permite tomar un proyecto de punta a punta: pensar la arquitectura, escribir el firmware, montar la infraestructura y dejarlo corriendo en producción. Mi formación incluye una tecnicatura en electrónica, una tecnicatura universitaria en programación y actualmente curso Ingeniería en Informática con especialización en desarrollo de software para microcontroladores.",
      card: {
        role: "Rol",
        roleValue: "Ingeniero de Software",
        name: "Nombre",
        sector: "Áreas",
        sectorValue: "Infra · Software · Hardware · Cloud",
      },
    },
    services: {
      sectionTitle: "Servicios",
      intro:
        "Convierto desafíos tecnológicos en soluciones que funcionan en producción. Mi trabajo se organiza en cuatro pilares que se combinan según lo que cada proyecto necesita: infraestructura TI, desarrollo de software, hardware y cloud. Hay proyectos que necesitan uno solo; los interesantes necesitan los cuatro.",
      items: {
        infra: {
          label: "Pilar 01",
          title: "Infraestructura TI",
          description:
            "Gestión, automatización y estandarización de infraestructura TI on-premise y virtualizada. Administro entornos Windows Server, Active Directory, Hyper-V y VMware, y automatizo la operación con PowerShell y Bash. Diseño flujos de trabajo, auditorías y procedimientos que reducen el trabajo manual, ordenan la operación diaria y eliminan los errores repetitivos: monitoreo, backups inmutables y la documentación técnica necesaria para que el entorno quede mantenible.",
        },
        software: {
          label: "Pilar 02",
          title: "Desarrollo de Software",
          description:
            "Desarrollo de software completo, en todos sus niveles. De alto nivel: e-commerce, landing pages, sitios web y aplicaciones de gestión con React, Node y bases de datos SQL/NoSQL. De bajo nivel: firmware en C/C++, software embebido sobre microcontroladores y sistemas complejos orientados a IoT. Cubro el ciclo entero —arquitectura, desarrollo, testing, control de versiones y deployment— con foco en código que siga siendo mantenible después de la entrega.",
        },
        hardware: {
          label: "Pilar 03",
          title: "Hardware e IoT",
          description:
            "Diseño y desarrollo de hardware electrónico a medida: esquemáticos, diseño de PCB, instrumentación y acondicionamiento de señales. Construyo dispositivos IoT, nodos de telemetría y soluciones de robótica y automatización sobre plataformas STM32, ESP32, Arduino y Raspberry Pi. Del prototipo funcional al producto integrado, con su firmware, sus protocolos de comunicación y su ensayo en campo.",
        },
        cloud: {
          label: "Pilar 04",
          title: "Cloud",
          description:
            "Arquitectura, migración y operación de soluciones en la nube sobre AWS, Azure, GCP e IBM Cloud. Despliego aplicaciones y servicios con contenedores, integro dispositivos y fuentes de datos con la nube, y automatizo las entregas con pipelines CI/CD. Siempre con criterio de costo, disponibilidad y seguridad, para que la nube sea una ventaja operativa y no una factura sorpresa.",
        },
      },
    },
    skills: {
      sectionTitle: "Mis habilidades",
      levels: {
        Basic: "Básico",
        Intermediate: "Intermedio",
        Advanced: "Avanzado",
        Experienced: "Experimentado",
      },
      categories: {
        "Frontend Development": "Desarrollo Frontend",
        "Backend Development": "Desarrollo Backend",
        "Data Bases": "Bases de datos",
        "Infrastructure": "Infraestructura TI",
        "Cloud": "Cloud",
        "Embedded Systems": "Embebidos y Hardware",
        "DevOps": "DevOps y Herramientas",
      },
    },
    certifications: {
      sectionTitle: "Certificados",
      description:
        "Certificados obtenidos en cursos y certificaciones realizados.",
    },
    projects: {
      sectionTitle: "Proyectos",
      tabs: {
        All: "Todos",
        Engineering: "Ingeniería",
        Infrastructure: "Infraestructura",
        Development: "Desarrollo",
      },
      demo: "Ver demo",
      repo: "Código",
      moreStack: "Más tecnologías",
    },
    contact: {
      sectionTitle: "Contacto",
      description:
        "¿Listo para llevar tu proyecto de infraestructura, software o hardware al siguiente nivel? Ya sea que necesites automatizar una operación, desarrollar una aplicación desde cero, construir un dispositivo con su firmware o migrar un sistema a la nube, puedo ayudarte a definirlo y a construirlo. Contame qué tenés en mente y te respondo con una propuesta concreta.",
      sendMessage: "Enviar mensaje",
      form: {
        name: "Tu nombre completo",
        email: "Tu email",
        message: "Tu mensaje",
        submit: "Enviar mensaje",
      },
    },
    footer: {
      copyright: "Desarrollado por Pablo Coria",
    },
  },
}

const LanguageContext = createContext({
  lang: "es",
  setLang: () => {},
  t: translations.es,
})

export const LanguageProvider = ({ children }) => {
  const initial =
    typeof navigator !== "undefined" && navigator.language?.startsWith("es")
      ? "es"
      : "en"
  const [lang, setLang] = useState(initial)
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
