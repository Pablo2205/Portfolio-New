import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiC, SiExpress,SiMongodb} from "react-icons/si";
import { AiFillGithub,AiFillLinkedin,AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";


export const menu = [
    {id:"about"},
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
        demoLink: "https://github.com/Pablo2205/SmartSet-Project",
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
        demoLink: "https://github.com/Pablo2205/UAS-THT",
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
        demoLink: "https://github.com/Pablo2205/UPS-Microelectronics",
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
        },
      demoLink: "https://github.com/Pablo2205/TEA-Module",
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
        },
      demoLink: "https://github.com/Pablo2205/POW-Module",
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
        demoLink: "https://github.com/Pablo2205/Waste-Sorting-System",
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
      title: 'Portfolio Web',
      image: '/images/projectsImages/portfolio.png',
      category:"Development",
      data:{
        description: 
        `Personal web portfolio, designed to showcase my skills and completed projects, with the option to contact me via the contact form and view my social media accounts.
        It was developed with React and Tailwind and published on Vercel Hosting.`,
        description_es:
        `Portfolio web personal, diseñado para mostrar mis habilidades y proyectos realizados, con la opción de contactarme mediante formulario y ver mis redes.
        Desarrollado con React y publicado en Vercel Hosting. `,
        demoLink: `https://pcoria.com`,
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
        {
            name:"Hostinger",
            svgIcon: "/images/hostinger.svg",
        },
      ]
    },
    {
      id:8,
      title: 'Ecommerce Website',
      image: '/images/projectsImages/ecommerce.png',
      category:"Development",
      data:{
        description: 
        `Ecommerce website for selling products online. Invite digital products.`,
        description_es:
        `Sitio de e-commerce para la venta de productos online. Invitaciones y productos digitales. `,
        demoLink: "https://veintidos.vercel.app",
      },
      stack:[
        {
          name:"HTML 5",
          svgIcon: "/images/html5.svg",
        },
        {
          name:"CSS 3",
          svgIcon: "/images/css.svg",
        },
        {
          name:"Java Script",
          svgIcon: "/images/javascript.svg",
        }
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
        demoLink: "https://github.com/Pablo2205/Password-Generate",
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
        demoLink: "https://github.com/Pablo2205/NAS-Server-with-Raspberry-Pi",
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
    title: "Infraestructures",
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
              skill: "Amazon Web Services",
              level: "Experienced",
              svgIcon: "/images/aws.svg",
          },
          {
              skill: "Azure Cloud",
              level: "Basic",
              svgIcon: "/images/azure.svg",
          },
          {
              skill: "Google Cloud Platform",
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


export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    logo: "/images/aws.svg",
    link: "",   // URL de Credly/badge — si queda vacío no se muestra el botón
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2024",
    logo: "/images/azure.svg",
    link: "",
  },
  // ...agregá las que quieras con el mismo formato
];