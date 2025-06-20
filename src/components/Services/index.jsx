/*import React, { useEffect, useRef } from 'react'
import "./Services.css"
import { FaServer } from 'react-icons/fa'
import { BsCodeSquare } from 'react-icons/bs'
//import { TfiWrite } from 'react-icons/tfi'
import { SiSecurityscorecard } from "react-icons/si";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Services = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{
    const el= container.current
    gsap.fromTo('.service__head',{
      opacity:0,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:el,
      }
    }
  )

  gsap.fromTo(".service",{
    y:-50,
    opacity:0,
  },
  {
    y:0,
    opacity:1,
    duration:1,
    scrollTrigger:{
      trigger:el,
      start:"-100% bottom",
      end:"bottom 20%",
      scrub:true
    }
  }
  )
  },[])
  return (
    <section id='services' ref={container}>
       <div className="section__wrapper services__wrapper">
          <div className="section__header center">
            <h2 className="primary__title">Services</h2>
            <p className="text__muted description">
            Transformo tus ideas, y en consecuencia tus deseos, 
            en un proyecto web distintivo que te inspira y cautiva a tus clientes.

            </p>
          </div>

          <div className="services__group">
            <article className="service">
              <div className="service__top">
                <div className="icon__container">
                  <FaServer className="icon"/>
                </div>
                <h3 className="title">Infraestructure</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                ¿Necesitas optimizar y proteger tu infraestructura tecnológica? 
                Te ofrezco un servicio integral que incluye la administración completa tus activos garantizando su seguridad y máximo rendimiento, 
                junto con la gestión eficiente de servidores físicos y virtuales. Brindo servicios de monitoreo y seguridad de tus datos incluido el respaldo inmiutable de los mismos.
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {}


            <article className="service" style={{"--color-primary":"var(--color-success)"}}>
              <div className="service__top">
                <div className="icon__container">
                  <BsCodeSquare className="icon"/>
                </div>
                <h3 className="title">Development</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                ¿Estás buscando un experto en desarrollo de software backend? 
                Te ofrezco un servicio completo que incluye la creación de arquitecturas robustas y escalables, 
                optimizando su gestión y asegurando su máximo rendimiento y seguridad. Desarrollo APIs eficientes y seguras, 
                integrando sistemas complejos para mejorar la funcionalidad de tus aplicaciones. 
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {}


            <article className="service" style={{"--color-primary":"blueviolet"}}>
              <div className="service__top">
                <div className="icon__container">
                  <SiSecurityscorecard className="icon"/>
                </div>
                <h3 className="title">Cybersecurity</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                ¿Estás buscando un experto en seguridad informática? Ofrezco servicios completos de seguridad, que incluyen análisis de vulnerabilidades, pruebas de penetración y auditorías exhaustivas. Implemento hacking para identificar riesgos y desarrollo soluciones para fortalecer la seguridad, garantizando la protección e integridad de tu información.
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {}
          </div>
       </div>
    </section>
  )
}

export default Services*/

import React, { useEffect, useRef } from 'react'
import "./Services.css"
import { FaServer } from 'react-icons/fa'
import { BsCodeSquare } from 'react-icons/bs'
import { SiSecurityscorecard } from "react-icons/si";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Services = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=> {
    const el= container.current
    gsap.fromTo('.service__head', {
      opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: el,
      }
    }
  )

  gsap.fromTo(".service", {
    y: -50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "-100% bottom",
      end: "bottom 20%",
      scrub: true
    }
  }
  )
  }, [])

  return (
    <section id='services' ref={container}>
       <div className="section__wrapper services__wrapper">
          <div className="section__header center">
            <h2 className="primary__title">Services</h2>
            <p className="text__muted description">
            Transformo los desafíos tecnológicos en soluciones automatizadas y eficientes. Ofrezco servicios enfocados en prácticas DevOps, que incluyen gestión de infraestructura, automatización de despliegues, integración y entrega continua (CI/CD), desarrollo de software y fortalecimiento de la seguridad en entornos IT.            </p>
          </div>

          <div className="services__group">
            <article className="service infraestructura">
              <div className="service__top">
                <div className="icon__container">
                  <FaServer className="icon"/>
                </div>
                <h3 className="title">Infraestructure</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                Ofrezco un servicio integral de gestión y automatización de infraestructura, orientado a maximizar el rendimiento, la disponibilidad y la seguridad de tus sistemas.
Implemento prácticas de infraestructura como código (IaC) para administrar servidores físicos, virtuales y entornos en la nube de forma eficiente y repetible. También incorporo soluciones de monitoreo continuo, backups inmutables y medidas de protección que aseguran la integridad de tus datos y la estabilidad de tus operaciones.
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>

            <article className="service desarrollo">
              <div className="service__top">
                <div className="icon__container">
                  <BsCodeSquare className="icon"/>
                </div>
                <h3 className="title">Development</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                Ofrezco servicios de desarrollo backend con enfoque DevOps, combinando la creación de arquitecturas robustas y escalables con prácticas de integración y entrega continua (CI/CD).
Desarrollo APIs eficientes y seguras, facilitando la integración de sistemas complejos y mejorando la funcionalidad de tus aplicaciones. Todo el proceso está alineado con buenas prácticas de automatización, pruebas, control de versiones y despliegue, asegurando un desarrollo ágil, confiable y preparado para producción.
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>

            <article className="service ciberseguridad">
              <div className="service__top">
                <div className="icon__container">
                  <SiSecurityscorecard className="icon"/>
                </div>
                <h3 className="title">Dev Sec Ops</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                 Integro la seguridad desde las primeras etapas del desarrollo, aplicando prácticas DevSecOps para identificar y mitigar riesgos antes de llegar a producción.
Ofrezco servicios que incluyen análisis de vulnerabilidades, pruebas automatizadas, escaneo de código (SAST/DAST) y auditorías de seguridad adaptadas a entornos CI/CD.
Implemento controles de acceso, gestión de secretos y medidas de hardening, asegurando que tus aplicaciones y sistemas cumplan con estándares de seguridad sin comprometer la agilidad del desarrollo.               
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
          </div>
       </div>
    </section>
  )
}

export default Services
