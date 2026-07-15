import React, { useEffect, useRef } from 'react'
import "./Services.css"
import { FaServer } from 'react-icons/fa'
import { BsCodeSquare } from 'react-icons/bs'
import { SiSecurityscorecard } from "react-icons/si";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useLanguage } from '../../i18n'

const Services = () => {
  const { t } = useLanguage();
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
            <h2 className="primary__title">{t.services.sectionTitle}</h2>
            <p className="text__muted description">
              {t.services.intro}
            </p>
          </div>

          <div className="services__group">
            <article className="service infraestructura">
              <div className="service__top">
                <div className="icon__container">
                  <FaServer className="icon"/>
                </div>
                <h3 className="title">{t.services.items.infra.title}</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                  {t.services.items.infra.description}
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
                <h3 className="title">{t.services.items.software.title}</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                  {t.services.items.software.description}
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
                <h3 className="title">{t.services.items.cloud.title}</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                  {t.services.items.cloud.description}
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
