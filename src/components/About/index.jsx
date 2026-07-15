import React, { useEffect, useRef } from 'react'
import "./About.css"
import profile2 from '../../images/profile-2.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../../i18n'


const About = () => {
  const { t } = useLanguage();
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const el = container.current;
    gsap.fromTo(".about__container",
      { scale: 0.7 },
      {
        scale: 1,
        scrollTrigger: { trigger: el, scrub: true }
      }
    )
  }, [])

  return (
    <section id='about' ref={container}>
      <div className="section__wrapper about__container">

        {/* ── ID Card ── */}
        <div className="me__container">
          <div className="id__card">
            <div className="id__card__lanyard" />

            {/* Header */}
            <div className="id__card__header">
              <span className="id__card__brand">pcoria.dev</span>
              <div className="id__card__logo">P</div>
            </div>

            {/* Photo */}
            <div className="id__card__photo">
              <img src={profile2} alt="Pablo Coria" />
            </div>

            {/* Info strip */}
            <div className="id__card__info">
              <div className="id__card__info__row">
                <div className="id__card__fields">
                  <div className="id__card__field">
                    <span className="id__card__field__label">{t.about.card.role}</span>
                    <span className="id__card__field__value id__card__field__value--role">
                      {t.about.card.roleValue}
                    </span>
                  </div>
                  <div className="id__card__field">
                    <span className="id__card__field__label">{t.about.card.name}</span>
                    <span className="id__card__field__value">Pablo Coria</span>
                  </div>
                  <div className="id__card__field">
                    <span className="id__card__field__label">{t.about.card.sector}</span>
                    <span className="id__card__field__value" style={{ fontSize: '11px' }}>
                      SysAdmin · Cloud · IoT · Dev
                    </span>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </div>


        {/* ── Text ── */}
        <div className="section__header">
          <h2 className="primary__title">{t.about.sectionTitle}</h2>
          <h1 className="title">
            {t.about.titlePre} <span className="color__primary">{t.about.titleName}</span>
          </h1>
          <p className="text__muted description">
            {t.about.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
