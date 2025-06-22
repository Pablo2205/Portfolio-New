import React, { useEffect, useRef } from 'react'
import "./About.css"
import profile2 from '../../images/profile-2.jpg'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


const About = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(()=>{
    const el = container.current;
    gsap.fromTo(".about__container",{
      scale:0.7
    },
    {
      scale:1,
      scrollTrigger:{
        trigger:el,
        scrub:true,
      }
    }
  )
  },[])
  return (
    <section id='about' ref={container}>
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={profile2} alt="" />
          </div>
        </div>
        <div className="section__header">
          <h2 className="primary__title">About Me</h2>
          <h1 className="title">Mi nombre es <span className="color__primary">Pablo Coria</span></h1>
          <p className="text__muted description">
          Soy estudiante de Sistemas, con interés en el desarrollo de soluciones tecnológicas eficientes y funcionales. Tengo experiencia trabajando con diversos lenguajes de programación y frameworks, así como en el diseño y administración de bases de datos, sistemas automatizados, productos tecnológicos y servicios de software.
          Me destaco por mis habilidades analíticas y de resolución de problemas, y he participado en proyectos relacionados con la ingeniería IoT y la infraestructura IT, integrando conocimientos técnicos con un enfoque práctico.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
