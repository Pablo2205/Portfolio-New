import React from 'react'
import './Certifications.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { certifications } from '../../data'
import { useLanguage } from '../../i18n'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const Certifications = () => {
  const { t } = useLanguage();
  return (
    <section id='certifications'>
      <div className="section__wrapper">
        <div className="section__header center">
          <h2 className="primary__title">{t.certifications.sectionTitle}</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={certifications.length > 4}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            560:  { slidesPerView: 2 },
            900:  { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="cert__swiper"
        >
          {certifications.map((cert, index) => (
            <SwiperSlide key={index}>
              <article className="cert__card">
                <div className="cert__logo">
                  <img src={cert.logo} alt={cert.issuer} />
                </div>
                <h3 className="cert__title">{cert.title}</h3>
                <p className="cert__issuer">{cert.issuer}</p>
                <div className="cert__bottom">
                  <span className="cert__year">{cert.year}</span>
                  {cert.link && (
                    <a
                      className="cert__link"
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.certifications.viewCredential}: ${cert.title}`}
                    >
                      {t.certifications.viewCredential} <FaArrowUpRightFromSquare />
                    </a>
                  )}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Certifications