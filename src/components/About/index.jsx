import React, { useEffect, useRef } from 'react'
import "./About.css"
import profile2 from '../../images/profile-2.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const About = () => {
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
                    <span className="id__card__field__label">Role</span>
                    <span className="id__card__field__value id__card__field__value--role">
                      Software Engineer
                    </span>
                  </div>
                  <div className="id__card__field">
                    <span className="id__card__field__label">Name</span>
                    <span className="id__card__field__value">Pablo Coria</span>
                  </div>
                  <div className="id__card__field">
                    <span className="id__card__field__label">Sector</span>
                    <span className="id__card__field__value" style={{ fontSize: '11px' }}>
                      SysAdmin · Cloud · IoT · Dev
                    </span>
                  </div>
                </div>

                {/* QR */}
                <div className="id__card__qr">
                  {QR_PATTERN.map((on, i) => (
                    <div
                      key={i}
                      className="id__card__qr__dot"
                      style={{ opacity: on ? 0.85 : 0.08 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Text ── */}
        <div className="section__header">
          <h2 className="primary__title">About Me</h2>
          <h1 className="title">
            My name is <span className="color__primary">Pablo Coria</span>
          </h1>
          <p className="text__muted description">
            I am a software development specialist with extensive experience in C, C++,
            and embedded systems, as well as in IoT and telecommunications projects.
            My academic background includes an associate's degree in electronics,
            a university associate's degree in programming, and I am currently pursuing
            a degree in Computer Engineering with a specialization in microcontroller
            software development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About