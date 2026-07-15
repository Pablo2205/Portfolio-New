import React, { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    menu: {
      about: "About",
      services: "Services",
      skill: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    header: {
      greeting: "Hello, I am",
      name: "Pablo",
      title: "Software Engineer",
      description:
        "Software Engineer with expertise in application development, infrastructure integration, and IoT/Cloud solutions. I design and implement scalable, secure, and efficient software by combining strong programming skills with knowledge of system architectures and modern deployment practices. My experience includes developing web, desktop, and embedded applications, as well as integrating cloud services and connected devices.",
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
        "I am a software development specialist with extensive experience in C, C++, and embedded systems, as well as in IoT and telecommunications projects. My academic background includes an associate's degree in electronics, a university associate's degree in programming, and I am currently pursuing a degree in Computer Engineering with a specialization in microcontroller software development.",
      card: {
        role: "Role",
        roleValue: "Software Engineer",
        name: "Name",
        sector: "Sector",
      },
    },
    services: {
      sectionTitle: "Services",
      intro:
        "I transform technological challenges into scalable and efficient software solutions. I offer services focused on full-stack development, infrastructure integration, IoT and cloud solutions, and process automation.",
      items: {
        infra: {
          title: "Infrastructure",
          description:
            "Comprehensive infrastructure management and automation services, focused on maximizing the performance, availability, and security of your systems. I implement Infrastructure as Code (IaC) practices to manage physical, virtual, and cloud servers efficiently, with continuous monitoring, immutable backups, and protective measures.",
        },
        software: {
          title: "Software",
          description:
            "Backend and embedded systems development with a focus on robust, scalable, and secure architectures. I develop applications for web, desktop, and IoT environments, following best practices in automation, testing, version control, and deployment.",
        },
        cloud: {
          title: "Cloud & IoT",
          description:
            "Connected systems and cloud solutions that bridge hardware and software, enabling real-time data collection and actionable insights. IoT device development, embedded programming, cloud integration (AWS, Azure), containerization, and scalable application deployment.",
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
    },
    projects: {
      sectionTitle: "Projects",
      tabs: {
        All: "All",
        Engineering: "Engineering",
        Infrastructure: "Infrastructure",
        Development: "Development",
      },
      demo: "Demo",
      moreStack: "More Stack Used",
    },
    contact: {
      sectionTitle: "Contact Me",
      description:
        "Ready to take your software, IoT, or infrastructure projects to the next level? Whether you need to develop a new application, optimize your current systems, or get expert guidance on connected and scalable solutions, I'm here to help.",
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
      projects: "Proyectos",
      contact: "Contacto",
    },
    header: {
      greeting: "Hola, soy",
      name: "Pablo",
      title: "Ingeniero de Software",
      description:
        "Ingeniero de software con experiencia en desarrollo de aplicaciones, integración de infraestructura y soluciones IoT/Cloud. Diseño e implemento software escalable, seguro y eficiente, combinando sólidas habilidades de programación con conocimiento de arquitecturas de sistemas y prácticas modernas de deployment. Mi experiencia incluye aplicaciones web, de escritorio y embebidas, además de integración de servicios cloud y dispositivos conectados.",
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
        "Soy especialista en desarrollo de software con amplia experiencia en C, C++ y sistemas embebidos, así como en proyectos de IoT y telecomunicaciones. Mi formación académica incluye una tecnicatura en electrónica, una tecnicatura universitaria en programación, y actualmente curso la carrera de Ingeniería en Computación con especialización en desarrollo de software para microcontroladores.",
      card: {
        role: "Rol",
        roleValue: "Ingeniero de Software",
        name: "Nombre",
        sector: "Sector",
      },
    },
    services: {
      sectionTitle: "Servicios",
      intro:
        "Transformo desafíos tecnológicos en soluciones de software escalables y eficientes. Ofrezco servicios enfocados en desarrollo full-stack, integración de infraestructura, soluciones IoT y cloud, y automatización de procesos.",
      items: {
        infra: {
          title: "Infraestructura",
          description:
            "Gestión integral y automatización de infraestructura, enfocada en maximizar el rendimiento, la disponibilidad y la seguridad de tus sistemas. Implemento prácticas de Infraestructura como Código (IaC) para administrar servidores físicos, virtuales y cloud de forma eficiente, con monitoreo continuo, backups inmutables y medidas de protección.",
        },
        software: {
          title: "Software",
          description:
            "Desarrollo backend y de sistemas embebidos con foco en arquitecturas robustas, escalables y seguras. Desarrollo aplicaciones para entornos web, escritorio e IoT, siguiendo buenas prácticas de automatización, testing, control de versiones y deployment.",
        },
        cloud: {
          title: "Cloud & IoT",
          description:
            "Sistemas conectados y soluciones cloud que unen hardware y software, permitiendo recolección de datos en tiempo real e insights accionables. Desarrollo de dispositivos IoT, programación embebida, integración cloud (AWS, Azure), contenedores y despliegue de aplicaciones escalables.",
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
    },
    projects: {
      sectionTitle: "Proyectos",
      tabs: {
        All: "Todos",
        Engineering: "Ingeniería",
        Infrastructure: "Infraestructura",
        Development: "Desarrollo",
      },
      demo: "Demo",
      moreStack: "Más tecnologías",
    },
    contact: {
      sectionTitle: "Contacto",
      description:
        "¿Listo para llevar tus proyectos de software, IoT o infraestructura al siguiente nivel? Ya sea que necesites desarrollar una nueva aplicación, optimizar tus sistemas actuales o recibir asesoramiento experto en soluciones conectadas y escalables, estoy para ayudarte.",
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
