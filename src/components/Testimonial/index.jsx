import React from 'react'
import "./Testimonial.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { testimonials } from '../../data'
import { useLanguage } from '../../i18n'

const Testimonial = () => {
  const { t, lang } = useLanguage();

  // A propósito: sin testimonios reales todavía la sección no se
  // renderiza. Nunca se muestra contenido inventado.
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id='testimonial'>
       <div className="section__wrapper">
        <div className="section__header">
          <h2 className="primary__title">{t.testimonials.sectionTitle}</h2>
          <p className="text__muted description">
            {t.testimonials.description}
          </p>
        </div>

        <Swiper
         className='testimonial__container'
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{clickable:true}}
         breakpoints={{
          700:{
            slidesPerView:2,
          }
         }}
         >
           {
            testimonials.map(({avatar, name, role, review, review_es}, index)=>(
              <SwiperSlide className='testimonial' key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h3 className="client__name">{name}</h3>
                {role && <small className="client__role">{role}</small>}
                <small className="client__review">
                  {lang === 'es' && review_es ? review_es : review}
                </small>
              </SwiperSlide>
            ))
           }
        </Swiper>
       </div>
    </section>
  )
}

export default Testimonial
