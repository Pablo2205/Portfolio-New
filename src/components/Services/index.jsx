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
            I transform technological challenges into automated and efficient solutions. 
            I offer services focused on DevOps practices, including infrastructure management, deployment automation, continuous integration and delivery (CI/CD), software development, and IT security hardening.           </p>
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
                I offer comprehensive infrastructure management and automation services, focused on maximizing the performance, availability, and security of your systems.
                I implement infrastructure as code (IaC) practices to manage physical, virtual, and cloud servers efficiently and repeatably. 
                I also incorporate continuous monitoring solutions, immutable backups, and protective measures that ensure the integrity of your data and the stability of your operations.
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
                I offer backend development services with a DevOps approach, combining the creation of robust and scalable architectures with continuous integration and continuous delivery (CI/CD) practices.
                I develop efficient and secure APIs, facilitating the integration of complex systems and improving the functionality of your applications. 
                The entire process is aligned with best practices for automation, testing, version control, and deployment, ensuring agile, reliable, and production-ready development.
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
                 I integrate security from the earliest stages of development, applying DevSecOps practices to identify and mitigate risks before going live.
                 I offer services that include vulnerability scanning, automated testing, code scanning (SAST/DAST), and security audits tailored to CI/CD environments.
                 I implement access controls, secrets management, and hardening measures, ensuring that your applications and systems comply with security standards without compromising development agility.              
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
