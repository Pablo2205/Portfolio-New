import React from 'react'
import "./Contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useLanguage } from '../../i18n'

const Contact = () => {
  const { t } = useLanguage();
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
              <h5>pablo.cor1@icloud.com</h5>
              <a href="mailto:pablo.cor1@icloud.com" target='_blank' className='btn'>{t.contact.sendMessage}</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className='contact__icon'/>
              <h3>Messenger</h3>
              <h5>Pablo Coria</h5>
              <a href="http://m.me/profile?id=profile-id" target='_blank' className='btn'>{t.contact.sendMessage}</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__icon'/>
              <h3>WhatsApp</h3>
              <h5>+54 1139126543</h5>
              <a href="https://wa.me/5491139126543?text=Hola%20Pablo,%20me%20gustaría%20contactar%20contigo." target='_blank' className='btn'>{t.contact.sendMessage}</a>
            </article>
          </div>

          <form>
            <input type="text" name="name" placeholder={t.contact.form.name} required />
            <input type="email" name="email" placeholder={t.contact.form.email} required />
            <textarea name='message' rows={7} placeholder={t.contact.form.message}></textarea>
            <button type='submit' className="btn btn__primary">{t.contact.form.submit}</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
