import React from 'react'
import "./Experience.css"
import { workHistory } from '../../data'
import { useLanguage } from '../../i18n'

const Experience = () => {
  const { t, lang } = useLanguage();

  return (
    <section id='experience'>
      <div className="section__wrapper">
        <div className="section__header center">
          <h2 className="primary__title">{t.experience.sectionTitle}</h2>
        </div>

        <div className="timeline">
          {workHistory.map((job, index) => (
            <article className={`timeline__item ${index === 0 ? 'is-current' : ''}`} key={index}>
              <div className="timeline__rail">
                <span className="timeline__dot" />
              </div>
              <div className="timeline__content">
                <div className="timeline__top">
                  <h3 className="timeline__role">
                    {lang === 'es' ? job.role_es : job.role}
                  </h3>
                  <span className="timeline__period">
                    {lang === 'es' ? job.period_es : job.period}
                    {index === 0 && <span className="timeline__badge">{t.experience.current}</span>}
                  </span>
                </div>
                <div className="timeline__company">{job.company} — {job.location}</div>
                <ul className="timeline__bullets">
                  {(lang === 'es' ? job.bullets_es : job.bullets).map((bullet, bi) => (
                    <li key={bi}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
