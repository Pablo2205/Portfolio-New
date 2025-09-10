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
            I transform technological challenges into scalable and efficient software solutions. 
            I offer services focused on full-stack development, infrastructure integration, IoT and cloud solutions, and process automation. 
            My work combines robust software architectures, embedded systems, and cloud deployments to deliver secure, maintainable, and high-performance solutions aligned with business needs.
                       </p>
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
                I provide comprehensive infrastructure management and automation services, focused on maximizing the performance, availability, and security of your systems. 
                I implement Infrastructure as Code (IaC) practices to manage physical, virtual, and cloud servers efficiently and repeatably. 
                I also integrate continuous monitoring solutions, immutable backups, and protective measures, ensuring data integrity, operational stability, and smooth support for software deployments.
                </p>
              </div>
              <div className="service__bottom">
              </div>
            </article>

            <article className="service desarrollo">
              <div className="service__top">
                <div className="icon__container">
                  <BsCodeSquare className="icon"/>
                </div>
                <h3 className="title">Software</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                I offer backend and embedded systems development services with a focus on robust, scalable, and secure architectures. 
                I develop applications for web, desktop, and IoT environments, following best practices in automation, testing, version control, and deployment. 
                The process ensures agile, reliable, and production-ready software that integrates seamlessly with existing infrastructure.
                </p>
              </div>
              <div className="service__bottom">
              </div>
            </article>

            <article className="service ciberseguridad">
              <div className="service__top">
                <div className="icon__container">
                  <SiSecurityscorecard className="icon"/>
                </div>
                <h3 className="title">Cloud & IoT</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                 I design and implement connected systems and cloud solutions that bridge hardware and software, enabling real-time data collection, processing, and actionable insights. 
                 My services include IoT device development, embedded programming, cloud integration (AWS, Azure), containerization, and scalable application deployment. 
                 I focus on delivering secure, maintainable, and optimized solutions leveraging modern cloud and edge computing technologies.
                </p>
              </div>
              <div className="service__bottom">
              </div>
            </article>
          </div>
       </div>
    </section>
  )
}

export default Services
