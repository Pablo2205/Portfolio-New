import React from 'react'
import "./Footer.css"
import { Link } from 'react-scroll'
import { menu ,socialHandles} from '../../data'
import { useLanguage } from '../../i18n'

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer id='footer'>
      <div className="section__wrapper">
        <ul className="nav__link__container">
           {
            menu.map((list,index)=>(
              <Link
                activeClass='active'
                className='tab__item name'
                to={list.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={index}
              >
                {t.menu[list.id]}
              </Link>
            ))
           }
        </ul>

        <div className="social__handles__container">
          {
            socialHandles.map((list,index)=>(
              <a href={list.link} className='icon__container social__handles' target='_blank' key={index}>
                {list.icon}
              </a>
            ))
          }
        </div>

        <div className="copyright__container">
          <p className="text__muted">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
