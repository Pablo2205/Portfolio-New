import React, { useState } from 'react'
import "./Contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useLanguage } from '../../i18n'

const CONTACT_EMAIL = 'pablo.cor1@icloud.com'

const Contact = () => {
  const { t } = useLanguage();
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio contact — ${values.name}`
    const body =
      `${values.message}\n\n---\n` +
      `${t.contact.form.name}: ${values.name}\n` +
      `${t.contact.form.email}: ${values.email}`
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
    setSent(true)
  }

  return (
    <section id='contact'>
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className="primary__title">{t.contact.sectionTitle}</h2>
          <p className="text__muted description">
            {t.contact.description}
          </p>
        </div>
        <div className="contact__group">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__icon'/>
              <h3>Email</h3>
              <h5>{CONTACT_EMAIL}</h5>
              <a href={`mailto:${CONTACT_EMAIL}`} target='_blank' rel="noreferrer" className='btn'>{t.contact.sendMessage}</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__icon'/>
              <h3>WhatsApp</h3>
              <h5>+54 1139126543</h5>
              <a href="https://wa.me/5491139126543?text=Hola%20Pablo,%20me%20gustaría%20contactar%20contigo." target='_blank' rel="noreferrer" className='btn'>{t.contact.sendMessage}</a>
            </article>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t.contact.form.name}
              value={values.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t.contact.form.email}
              value={values.email}
              onChange={handleChange}
              required
            />
            <textarea
              name='message'
              rows={7}
              placeholder={t.contact.form.message}
              value={values.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type='submit' className="btn btn__primary">{t.contact.form.submit}</button>
            <p className="contact__form__hint" role="status">
              {sent ? t.contact.form.sent : t.contact.form.hint}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
