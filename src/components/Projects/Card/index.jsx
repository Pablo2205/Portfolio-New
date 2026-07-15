import React, { useState } from 'react'
import "./Card.css"
import { AiOutlineShareAlt } from 'react-icons/ai'
import { useLanguage } from '../../../i18n'

const Card = (props) => {
    const { t, lang } = useLanguage();
    const [openStackExpandBar, setOpenStackExpandBar] = useState(false);

    const description =
      lang === 'es' && props.data.description_es
        ? props.data.description_es
        : props.data.description;

    return (
      <div className="card">
        <div className="picture">
          <img src={props.image} alt={props.title} />
        </div>

        <div className="card__details">
          <div className="card__details__top">
            <h2 className="title">{props.title}</h2>
          </div>
          <div className="card__details__middle">
            <p className="description">
              {description}
            </p>
          </div>
          <div className="card__details__bottom">
            <div className="stack__container">
              <div className="stack__left">Stack</div>
              <div className="stack__right">
                <div className="stack__box__container">
                  {props.stack.map((list, index) => {
                    if (index < 4) {
                      return (
                        <div className="stack__box" key={index}>
                          <div className="stack__icon__container">
                            <img
                              src={list.svgIcon}
                              alt={list.name}
                              className="stack__icon"
                              style={{ fill: list.iconColor }}
                            />
                            <span className="stack__name">{list.name}</span>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>

                {props.stack.length > 4 && (
                  <div className="stack__view__more">
                    <div
                      className="more__btn"
                      onClick={() => setOpenStackExpandBar(!openStackExpandBar)}
                    ></div>
                    <div
                      className={`stack__expand__box ${
                        openStackExpandBar ? "open__stack__expand__box" : ""
                      }`}
                    >
                      <h3 className="title">{t.projects.moreStack}</h3>
                      <div className="stack__box__container">
                        {props.stack.map((list, index) => {
                          if (index >= 4) {
                            return (
                              <div className="stack__box" key={index}>
                                <div className="stack__icon__container">
                                  <img
                                    src={list.svgIcon}
                                    alt={list.name}
                                    className="stack__icon"
                                    style={{ fill: list.iconColor }}
                                  />
                                  <span className="stack__name">{list.name}</span>
                                </div>
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="button__container">
              <a
                href={props.DemoLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn__primary"
              >
                {t.projects.demo}
              </a>
              <div className="btn__share">
                <AiOutlineShareAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Card;
