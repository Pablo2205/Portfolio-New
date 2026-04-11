import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiC, SiExpress,SiMongodb} from "react-icons/si";
import { AiFillGithub,AiFillLinkedin,AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";


export const menu = [
    {name:"About"},
    {name:"Services"},
    {name:"Skill"},
    {name:"Projects"},
//    {name:"Testimonial"},
    {name:"Contact"},
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
      image: '/images/projectsImages/portfolio-react.png',
      category:"Development",
      data:{
        description: 
        `Personal web portfolio, designed to showcase my skills and completed projects, with the option to contact me via the contact form and view my social media accounts.
        It was developed with React and Tailwind and published on Vercel Hosting.`,
        demoLink: `https://github.com/Pablo2205/Portfolio-New`,
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
      title: 'Wheater App',
      image: '/images/projectsImages/WheaterApp.png',
      category:"Development",
      data:{
        description: 
        `A web program capable of displaying the current weather in a city, with the ability to view the weather for the next 5 days, i
        including temperature, humidity, wind, and the probability of rain.`,
        demoLink: "https://github.com/Pablo2205/Wheater-App",
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
