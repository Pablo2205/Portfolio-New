import React, { useEffect, useRef } from 'react'
import "./Services.css"
import { FaServer, FaMicrochip, FaCloud } from 'react-icons/fa'
import { BsCodeSquare } from 'react-icons/bs'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../../i18n'

const Services = () => {
  const { t } = useLanguage();
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const el = container.current
    gsap.fromTo('.service__head', { opacity: 0 }, {
      opacity: 1,
      scrollTrigger: { trigger: el }
    })

    gsap.fromTo(".service", { y: -50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "-100% bottom",
        end: "bottom 20%",
        scrub: true
      }
    })
  }, [])

  /* Los 4 pilares — el orden define el numerado (Pilar 01 → 04) */
  const pillars = [
    { key: 'infra',    icon: <FaServer className="icon" />,     className: 'infraestructura' },
    { key: 'software', icon: <BsCodeSquare className="icon" />, className: 'desarrollo' },
    { key: 'hardware', icon: <FaMicrochip className="icon" />,  className: 'hardware' },
    { key: 'cloud',    icon: <FaCloud className="icon" />,      className: 'cloud' },
  ]

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
          {pillars.map((pillar) => {
            const item = t.services.items[pillar.key];
            return (
              <article className={`service ${pillar.className}`} key={pillar.key}>
                <div className="service__top">
                  <div className="icon__container">
                    {pillar.icon}
                  </div>
                  <div className="service__heading">
                    <span className="service__label">{item.label}</span>
                    <h3 className="title">{item.title}</h3>
                  </div>
                </div>
                <div className="service__middle">
                  <p className="text__muted description">
                    {item.description}
                  </p>
                </div>
                <div className="service__bottom"></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
