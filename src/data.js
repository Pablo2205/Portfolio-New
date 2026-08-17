import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiC, SiExpress,SiMongodb} from "react-icons/si";
import { AiFillGithub,AiFillLinkedin,AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";


export const menu = [
    {id:"about"},
    {id:"experience"},
    {id:"services"},
    {id:"skill"},
    {id:"projects"},
//    {id:"testimonial"},
    {id:"contact"},
]

export const projects = [
    { 
      id:1,
      title: 'SmartSet Project',
      image: '/images/projectsImages/smartset.png',
      category:"Engineering",
      data:{
         description: 
         `Participation in an important project within the IoT engineering field. A technological product was implemented that self-manages the telecommunications of the physical medium for energy consumption from single-phase and three-phase meters.
          It is capable of performing accurate monitoring of the supply network as well as physical variables. It creates a BLE Mesh and Thread network for PAN communications and connects to a broader LAN/WAN network through the use of 5G LTE and NBIoT.
          In its simplest form, SmartSET deploys a local wireless network that allows it to collect information from sensors associated with a distribution transformer substation.
          In this way, all electrical parameters (energy, power, voltage, currents, THD, etc.) are acquired at the transformer output terminals, along with the cooling oil temperature, ambient temperature and humidity, and all electrical parameters at each SET output.
          All this information is collected by an integrated management unit. (UIG), which stores it in a local database, organized by sensor group, and keeps a temporary record of each acquired data.
          To facilitate access to this information, SmartSET has an embedded web page that can be accessed locally with any mobile device via a Wi-Fi connection. This allows maintenance operators to access information on the current status of the SET as well as evaluate the system's historical records.  `,
        description_es:
        `Participación en un proyecto importante dentro del campo de la ingeniería IoT. Se implementó un producto tecnológico que autogestiona las telecomunicaciones del medio físico para el consumo energético de medidores monofásicos y trifásicos.
          Es capaz de realizar un monitoreo preciso de la red de suministro y de variables físicas. Crea una red BLE Mesh y Thread para comunicaciones PAN y se conecta a una red LAN/WAN más amplia mediante 5G LTE y NBIoT.
          En su forma más simple, SmartSET despliega una red inalámbrica local que le permite recolectar información de sensores asociados a una subestación transformadora de distribución.
          Todos los parámetros eléctricos (energía, potencia, tensión, corrientes, THD, etc.) se adquieren en los bornes de salida del transformador, junto con la temperatura del aceite de refrigeración, la temperatura y humedad ambiente, y todos los parámetros eléctricos de cada salida de la SET.
          Toda esta información es recolectada por una unidad integrada de gestión (UIG), que la almacena en una base de datos local organizada por grupo de sensores.
          Para facilitar el acceso, SmartSET cuenta con una página web embebida accesible localmente desde cualquier dispositivo móvil vía Wi-Fi, lo que permite a los operadores de mantenimiento consultar el estado actual de la SET y sus registros históricos. `,
        demoLink: "",
        repoLink: "https://github.com/Pablo2205/SmartSet-Project",
      },
      stack:[
        {
          name:"C++",
          svgIcon: "/images/c++.svg",
          iconColor: "skyblue",
        },
        {
          name:"Raspberry Pi",
          svgIcon: "/images/raspberry.svg",
        },
        {
          name:"Linux",
          svgIcon: "/images/linux.svg",
        },
        {
          name:"MySQl",
          svgIcon: "/images/mysql.svg",
        },
      ]
    },
    {
      id:2,
      title: 'UAS THT',
      image: '/images/projectsImages/THT.jpg',
      category:"Engineering",
      data:{
        description:
        `The Humidity and Temperature Measurement Unit is a module designed to acquire environmental data from the distribution transformer environment. 
        This unit is based on Microelectromechanical Systems (MEMS) technology to acquire and record ambient temperature and humidity. 
        It also features a port for connecting a remote PT100 probe to measure the temperature of the transformer's cooling oil. 
        The MEMs probe transmits information to the unit digitally, allowing it to be freely exchanged for others using the same technology without requiring any adjustments. 
        The PT100 probe uses a 3-wire configuration to automatically compensate for the length of the cable used in the installation, thanks to its internal signal amplification. 
        Finally, this module also features Bluetooth and NFC connectivity to allow for integration into the Smart-SET platform. `,
        description_es:
        `La Unidad de Medición de Humedad y Temperatura es un módulo diseñado para adquirir datos ambientales del entorno del transformador de distribución.
        Esta unidad se basa en tecnología MEMS (sistemas microelectromecánicos) para adquirir y registrar temperatura y humedad ambiente.
        También cuenta con un puerto para conectar una sonda PT100 remota que mide la temperatura del aceite de refrigeración del transformador.
        La sonda MEMS transmite la información de forma digital, lo que permite intercambiarla libremente por otras de la misma tecnología sin ajustes.
        La sonda PT100 usa configuración de 3 hilos para compensar automáticamente la longitud del cable gracias a su amplificación interna de señal.
        Además, este módulo cuenta con conectividad Bluetooth y NFC para integrarse a la plataforma Smart-SET. `,
        demoLink: "",
        repoLink: "https://github.com/Pablo2205/UAS-THT",
      },
      stack:[
        {
          name:"PCB Design",
          svgIcon: "/images/circuit.svg",
        },
        {
          name:"ST MIC",
          svgIcon: "/images/st.svg",

        },
        {
          name:"Python",
          svgIcon: "/images/python.svg",
        },
        {
          name:"Wireless",
          svgIcon: "/images/esp.svg",
        },
      ]
    },
    {
      id:3,
      title: 'UPS Microelectronics',
      image: '/images/projectsImages/UPS.jpg',
      category:"Engineering",
      data:{
        description: 
        `Uninterruptible power supply (UPS) capable of maintaining power to an SBC (e.g., Raspberry Pi) and accessory components during a primary power supply absence. 
        It monitors HOST operation, functioning as a "WatchDOG." This device is responsible for performing a "Hard Reset" of the SBC if it is deemed out of service.
        Within the Smart Set System, it is responsible for ensuring proper power supply and monitoring the TEA and UIG modules. 
        It can be used in other industrial systems as an uninterruptible power supply with DIN rail mounting. `,
        description_es:
        `Fuente de alimentación ininterrumpida (UPS) capaz de mantener energizado un SBC (por ejemplo, Raspberry Pi) y sus componentes accesorios ante la ausencia de la alimentación primaria.
        Monitorea el funcionamiento del HOST actuando como "WatchDOG": realiza un "Hard Reset" del SBC si lo detecta fuera de servicio.
        Dentro del sistema Smart Set, garantiza la correcta alimentación y el monitoreo de los módulos TEA y UIG.
        Puede usarse en otros sistemas industriales como fuente ininterrumpida con montaje en riel DIN. `,
        demoLink: "",
        repoLink: "https://github.com/Pablo2205/UPS-Microelectronics",
      },
      stack:[
        {
          name:"PCB Design",
          svgIcon: "/images/circuit.svg",
        },
        {
          name:"ST MIC",
          svgIcon: "/images/st.svg",

        },
        {
          name:"Python",
          svgIcon: "/images/python.svg", 
        },
        {
          name:"Wireless",
          svgIcon: "/images/esp.svg",
        },
      ]
    },
    {
      id:4,
      title: 'TEA for SmartSet',
      image: '/images/projectsImages/TEA.jpg',
      category:"Engineering",
      data:{
        description: 
        `The Power Transformer Measurement Unit (TEA) is a module designed to acquire electrical data from the distribution transformer.
        This unit uses Microelectromechanical Systems (MEMs) technology to acquire and record ambient temperature and humidity.
        It also features a port for connecting a remote PT100 probe to measure the temperature of the transformer's cooling oil.`,
        description_es:
        `La Unidad de Medición del Transformador de Potencia (TEA) es un módulo diseñado para adquirir datos eléctricos del transformador de distribución.
        Esta unidad usa tecnología MEMS para adquirir y registrar temperatura y humedad ambiente.
        También cuenta con un puerto para conectar una sonda PT100 remota que mide la temperatura del aceite de refrigeración del transformador. `,
        demoLink: "",
        repoLink: "https://github.com/Pablo2205/TEA-Module",
        },
      stack:[
        {
          name:"PCB Design",
          svgIcon: "/images/circuit.svg",
        },
        {
          name:"ST MIC",
          svgIcon: "/images/st.svg",

        },
        {
          name:"Python",
          svgIcon: "/images/python.svg",
        },
        {
          name:"Wireless",
          svgIcon: "/images/esp.svg",
        },
      ]
    },
    {
      id:5,
      title: 'POW for SmartSet',
      image: '/images/projectsImages/POW.jpg',
      category:"Engineering",
      data:{
        description: 
        `POW is part of a remote measurement system composed of sensors and communication systems that can function as a standalone module in other types of systems and installations, serving as a power supply. 
        Its main feature is its very wide operating range (60-440 V AC). 
        Its main function is to provide power to the various components of the Smart Set system: the UIG, TEA, and UAS for Temperature and Humidity. `,
        description_es:
        `POW forma parte de un sistema de medición remota compuesto por sensores y sistemas de comunicación, y puede funcionar como módulo independiente en otros tipos de sistemas e instalaciones como fuente de alimentación.
        Su principal característica es su amplísimo rango de operación (60–440 V CA).
        Su función principal es alimentar los distintos componentes del sistema Smart Set: la UIG, la TEA y la UAS de Temperatura y Humedad. `,
        demoLink: "",
        repoLink: "https://github.com/Pablo2205/POW-Module",
        },
      stack:[
        {
          name:"PCB Design",
          svgIcon: "/images/circuit.svg",
        },
        {
          name:"ST MIC",
          svgIcon: "/images/st.svg",

        },
        {
          name:"Python",
          svgIcon: "/images/python.svg",
        },
        {
          name:"Wireless",
          svgIcon: "/images/esp.svg",
        },
      ]
    },
    {
      id:6,
      title: 'Smart Waste Sorter',
      image: '/images/projectsImages/STM32.png',
      category:"Engineering",
      data:{
        description: `Electronic waste sorting system
        The system is based on a network of sensors that measure the physical properties of the waste and help determine the object being sorted.
        The system is capable of sorting waste into four categories: metals, plastics, paper, and glass.
        The system is capable of sorting waste in real time and autonomously.`,
        description_es:
        `Sistema electrónico de clasificación de residuos.
        El sistema se basa en una red de sensores que miden las propiedades físicas de los residuos y ayudan a determinar el objeto a clasificar.
        Es capaz de clasificar residuos en cuatro categorías: metales, plásticos, papel y vidrio.
        Realiza la clasificación en tiempo real y de forma autónoma. `,
        demoLink: "",
        repoLink: "https://github.com/Pablo2205/Waste-Sorting-System",
      },
      stack:[
        {
          name:"C++",
          svgIcon: "/images/c++.svg",
        },
        {
          name:"Arduino",
          svgIcon: "/images/arduino.svg",
        },
        {
          name:"Espressift",
          svgIcon: "/images/esp.svg",
        },
        {
          name:"Raspberry Pi",
          svgIcon: "/images/raspberry.svg",
        },
      ]    
    },
    {
      id:7,
      featured: true,
      title: 'Milagros Videla — Portfolio',
      image: '/images/projectsImages/milagros-portfolio.png',
      category:"Development",
      data:{
        description:
        `Portfolio website built for Milagros Videla, Community Manager & Content Creator: bio, services and a case-study gallery of her social media and content work, in a burgundy/black/cream palette.
        A client project I built end to end — design, content structure and animated sections.`,
        description_es:
        `Sitio de portfolio hecho para Milagros Videla, Community Manager y Creadora de Contenido: bio, servicios y una galería de casos de su trabajo en redes y contenido, en paleta bordo/negro/crema.
        Un proyecto para clienta que armé de punta a punta: diseño, estructura de contenido y secciones animadas. `,
        demoLink: "https://milagros-videla-portfolio.vercel.app",
        repoLink: "https://github.com/Pablo2205/milagros-videla-portfolio",
      },
      stack:[
        {
          name:"Next.js",
          svgIcon: "/images/nextjs.svg",
        },
        {
          name:"React",
          svgIcon: "/images/react.svg",
        },
        {
          name:"Tailwind CSS",
          svgIcon: "/images/tailwindcss.svg",
        },
        {
          name:"Vercel",
          svgIcon: "/images/vercel.svg",
        },
      ]
    },
    {
      id:8,
      featured: true,
      title: 'veintidós — Invitaciones Digitales',
      image: '/images/projectsImages/veintidos.png',
      category:"Development",
      data:{
        description:
        `E-commerce platform for digital wedding and quinceañera invitations in Argentina. Customers browse live demos, customize their event page — countdown, RSVP, map, music — and share it as a single link, with WhatsApp as the main contact and confirmation channel.
         Built as my own product end to end: storefront, per-style demo pages and order flow.`,
        description_es:
        `Plataforma de e-commerce de invitaciones digitales para bodas y XV años en Argentina. El cliente recorre demos reales, personaliza la página de su evento —cuenta regresiva, confirmación de asistencia, mapa, música— y la comparte como un solo link, con WhatsApp como canal principal de contacto y confirmación.
         Es un producto propio que armé de punta a punta: la tienda, las demos por estilo y el flujo de pedidos.`,
        demoLink: "https://veintidos-invitaciones.vercel.app",
        repoLink: "https://github.com/Pablo2205/Veintidos-Ecomerce",
      },
      stack:[
        {
          name:"React",
          svgIcon: "/images/react.svg",
        },
        {
          name:"Tailwind CSS",
          svgIcon: "/images/tailwindcss.svg",
        },
        {
          name:"Vercel",
          svgIcon: "/images/vercel.svg",
        },
      ]
    },
    {
      id:11,
      featured: true,
      title: 'AjustAR',
      image: '/images/projectsImages/ajustar.png',
      category:"Development",
      data:{
        description:
        `AjustAR — a personal finance product for the Argentine market: a spreadsheet (Google Sheets/Excel) sold as a self-serve digital download, with a full end-to-end checkout.
         Landing built with Next.js, purchase flow through Mercado Pago, automated delivery by e-mail on payment confirmation via webhook, and a light/dark theme system.`,
        description_es:
        `AjustAR — producto de finanzas personales para el mercado argentino: una planilla (Google Sheets/Excel) vendida como descarga digital autogestionada, con compra de punta a punta.
         Landing hecha con Next.js, flujo de pago con Mercado Pago, entrega automática por mail al confirmarse el pago vía webhook, y sistema de tema claro/oscuro.`,
        demoLink: "https://www.miajustar.com",
        repoLink: "",
      },
      stack:[
        {
          name:"Next.js",
          svgIcon: "/images/nextjs.svg",
        },
        {
          name:"React",
          svgIcon: "/images/react.svg",
        },
        {
          name:"Tailwind CSS",
          svgIcon: "/images/tailwindcss.svg",
        },
        {
          name:"Vercel",
          svgIcon: "/images/vercel.svg",
        },
      ]
    },
   {
      id:9,
      title: 'Password Generate',
      image: '/images/projectsImages/PasswordGenerate.png',
      category:"Development",
      data:{
        description: 
        `Web program for generating random secure keys, allowing you to select the complexity by selecting the length and characters used. 
        It also allows users to copy the keys to the clipboard.`,
        description_es:
        `Programa web para generar claves seguras aleatorias, permitiendo seleccionar la complejidad según la longitud y los caracteres utilizados.
        También permite copiar las claves al portapapeles. `,
        demoLink: "",
        repoLink: "https://github.com/Pablo2205/Password-Generate",
      },
      stack:[
        {
          name:"Python",
          svgIcon: "/images/python.svg",
        },
      ]
    }, 
    {
      id:10,
      title: 'NAS to Raspberry Pi',
      image: '/images/projectsImages/NAStoRaspberry.png',
      category:"Infrastructure",
      data:{
        description: 
        `Build a low-cost, low-power network attached storage (NAS) system using a Raspberry Pi, allowing file sharing between multiple devices connected to a local network or even remotely.`,
        description_es:
        `Construcción de un sistema de almacenamiento en red (NAS) de bajo costo y bajo consumo usando una Raspberry Pi, permitiendo compartir archivos entre múltiples dispositivos conectados a la red local o incluso de forma remota. `,
        demoLink: "",
        repoLink: "https://github.com/Pablo2205/NAS-Server-with-Raspberry-Pi",
      },
      stack:[
        {
          name:"Raspberry",
          svgIcon: "/images/raspberry.svg",
        },
        {
          name:"Python",
          svgIcon: "/images/python.svg",
        },
        {
          name:"GitHub",
          svgIcon: "/images/github.svg",
        }
      ]
    },
  ];

// Historial laboral real, tomado del CV (public/CV_Pablo Coria 2026.pdf).
// Orden: más reciente primero.
export const workHistory = [
  {
    role: "System Engineer for Microsoft",
    role_es: "System Engineer for Microsoft",
    company: "TIVIT LATAM",
    location: "Buenos Aires, Argentina",
    period: "Nov 2024 – Present",
    period_es: "Nov 2024 – Presente",
    bullets: [
      "Administer Windows Server and Microsoft SCCM across the full on-premise infrastructure lifecycle.",
      "Manage Hyper-V and Failover Cluster environments for high availability of critical services.",
      "Operate core domain services: ADDS, GPO, DHCP, DNS, NPS, File Server, FTP and RDS.",
      "Administer AWS resources (EC2, S3, VPC, IAM, Security Groups) in hybrid infrastructure scenarios.",
    ],
    bullets_es: [
      "Administro entornos Windows Server y Microsoft SCCM para el ciclo de vida completo de la infraestructura on-premise.",
      "Gestiono clústeres Hyper-V y Failover Cluster, garantizando alta disponibilidad de servicios críticos.",
      "Opero servicios core de dominio: ADDS, GPO, DHCP, DNS, NPS, File Server, FTP y RDS.",
      "Administro recursos AWS (EC2, S3, VPC, IAM, Security Groups) en escenarios de infraestructura híbrida.",
    ],
  },
  {
    role: "System Administrator",
    role_es: "System Administrator",
    company: "GENROD S.A",
    location: "Departamento de Infraestructura y Aplicaciones",
    period: "May 2019 – Nov 2024",
    period_es: "May 2019 – Nov 2024",
    bullets: [
      "Administered Microsoft 365 and Windows Server across a hybrid on-premise/cloud infrastructure.",
      "Managed Linux servers (Ubuntu, CentOS) in production environments.",
      "Ran VMware vSphere/ESXi/vCenter virtualization and Microsoft SQL Server / MongoDB databases.",
      "Implemented backup & recovery for Windows Server and Microsoft 365, and automated operations with Shell scripting and Python.",
    ],
    bullets_es: [
      "Administré Microsoft 365 y Windows Server en infraestructura híbrida on-premise/cloud.",
      "Administré servidores Linux (Ubuntu, CentOS) en ambientes productivos.",
      "Administré virtualización VMware vSphere/ESXi/vCenter y bases de datos Microsoft SQL Server / MongoDB.",
      "Implementé backup & recovery para Windows Server y Microsoft 365, y automaticé procesos con Shell Scripting y Python.",
    ],
  },
  {
    role: "Software Developer (R&D)",
    role_es: "Software Developer (I+D)",
    company: "GENROD S.A",
    location: "Departamento de Investigación & Desarrollo",
    period: "May 2019 – Nov 2024",
    period_es: "May 2019 – Nov 2024",
    bullets: [
      "Programmed embedded systems in C, C++ and Python for industrial IoT devices.",
      "Designed and consumed REST, SOAP and MQTT APIs to integrate IoT devices into Smart Grid solutions.",
      "Designed electronic devices at PCB level and deployed Linux services with Docker.",
      "Managed code versioning with Git, GitLab and GitHub across the team.",
    ],
    bullets_es: [
      "Programé sistemas embebidos en C, C++ y Python para dispositivos IoT industriales.",
      "Diseñé y consumí APIs REST, SOAP y MQTT para integrar dispositivos IoT en soluciones de Smart Grid.",
      "Diseñé dispositivos electrónicos a nivel de PCB y desplegué servicios Linux con Docker.",
      "Gestioné el versionado de código con Git, GitLab y GitHub.",
    ],
  },
];

export const experience = [
  {
      title: "Frontend Development",
      data: [
          {
              skill: "HTML",
              level: "Basic",
              svgIcon: "/images/html5.svg",
          },
          {
              skill: "CSS",
              level: "Basic",
              svgIcon: "/images/css.svg",
          },
          {
              skill: "JavaScript",
              level: "Basic",
              svgIcon: "/images/javascript.svg",
          },
          {
              skill: "React",
              level: "Basic",
              svgIcon: "/images/react.svg",
          },
          {
              skill: "Next.js",
              level: "Intermediate",
              svgIcon: "/images/nextjs.svg",
          },
          {
            skill: "Tailwind CSS",
              level: "Basic",
              svgIcon: "/images/tailwindcss.svg",
          }
      ],
  },
  {
      title: "Backend Development",
      data: [
          {
              skill: "C",
              level: "Experienced",
              svgIcon: "/images/c.svg",
          },
          {
              skill: "C++",
              level: "Experienced",
              svgIcon: "/images/c++.svg",
          },
          {
              skill: "Python",
              level: "Advanced",
              svgIcon: "/images/python.svg",
          },
      ],
  },
    {
    title: "Data Bases",
      data: [
          {
              skill: "MS SQL",
              level: "Experienced",
              svgIcon: "/images/sql-server.svg",
          },
          {
              skill: "MySQL",
              level: "Intermediate",
              svgIcon: "/images/mysql.svg",
          },
          {
              skill: "PostgreSQL",
              level: "Intermediate",
              svgIcon: "/images/postgresql.svg",
          },
          {
            skill: "MongoDB",
              level: "Basic",
              svgIcon: "/images/mongodb.svg",
          },
          {
            skill: "SQLite",
              level: "Basic",
              svgIcon: "/images/sqlite.svg",
          },
      ],
  },    
  {
    title: "Infrastructure",
      data: [
          {
              skill: "Windows Server",
              level: "Advanced",
              svgIcon: "/images/windows.svg",
          },
          {
              skill: "Linux Server",
              level: "Experienced",
              svgIcon: "/images/linux.svg",
          },
          {
              skill: "VMware",
              level: "Experienced",
              svgIcon: "/images/vmware.svg",
          },
          {
              skill: "Veeam Backup",
              level: "Intermediate",
              svgIcon: "/images/Veeam1.svg",
          },
          {
              skill: "Bash Scripting",
              level: "Intermediate",
              svgIcon: "/images/bash.svg",
          },
          {
              skill: "PowerShell Scripting",
              level: "Intermediate",
              svgIcon: "/images/powershell.svg",
          },
      ],
  },
  {
    title: "Cloud",
    data: [
            {
              skill: "AWS",
              level: "Experienced",
              svgIcon: "/images/aws.svg",
          },
          {
              skill: "Azure Cloud",
              level: "Basic",
              svgIcon: "/images/azure.svg",
          },
          {
              skill: "GCP",
              level: "Basic",
              svgIcon: "/images/google.svg",
          },
          {
              skill: "IBM Cloud",
              level: "Basic",
              svgIcon: "/images/IBM.svg",
          },
    ],
  },
  {
    title: "Embedded Systems",
      data: [
          {
              skill: "Arduino",
              level: "Experienced",
              svgIcon: "/images/arduino.svg",
          },
          {
              skill: "Raspberry Pi",
              level: "Intermediate",
              svgIcon: "/images/raspberry.svg",
          },
          {
              skill: "Espressift",
              level: "Experienced",
              svgIcon: "/images/esp.svg",
          },
          {
              skill: "ST Microelectronics",
              level: "Intermediate",
              svgIcon: "/images/st.svg",
          },
      ],
  },
  {
    title: "DevOps",
      data: [
          {
              skill: "Git",
              level: "Intermediate",
              svgIcon: "/images/git.svg",
          },
          {
              skill: "GitHub",
              level: "Intermediate",
              svgIcon: "/images/github.svg",
          },
          {
              skill: "GitLab",
              level: "Intermediate",
              svgIcon: "/images/gitlab.svg",
          },
          {
              skill: "Docker",
              level: "Basic",
              svgIcon: "/images/docker.svg",
          },
          {
              skill: "Jira",
              level: "Advanced",
              svgIcon: "/images/jira.svg",
          },
          {
            skill: "API RestFull",
            level: "Basic",
            svgIcon: "/images/postman.svg",
        },

          {
              skill: "Vercel",
              level: "Basic",
              svgIcon: "/images/vercel.svg",
          },
      ],
  },
  {
    title: "UX/UI Design",
      data: [
          {
              skill: "Figma",
              level: "Intermediate",
              svgIcon: "/images/figma.svg",
          },
          {
              skill: "Adobe Photoshop",
              level: "Basic",
              svgIcon: "/images/adobephotoshop.svg",
          },
          {
              skill: "Adobe Illustrator",
              level: "Basic",
              svgIcon: "/images/adobeillustrator.svg",
          },
          {
              skill: "Canva",
              level: "Advanced",
              svgIcon: "/images/canva.svg",
          },
      ],
  }
];

export const socialHandles = [
/*  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"https://github.com/Pablo2205",
  },
  {
    name:"LinkedIn",
    icon:<AiFillLinkedin/>,
    link:"https://www.linkedin.com/in/pablo-coria01/",
  },*/
];

// Sin testimonios reales todavía — la sección no se muestra mientras
// esto esté vacío (ver Testimonial/index.jsx). Agregar acá cuando
// haya recomendaciones reales, con el mismo formato:
// { avatar, name, role, review, review_es }
export const testimonials = [];
