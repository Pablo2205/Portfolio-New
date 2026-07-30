import React from 'react';
import './SkillCard.css';
import { useLanguage } from '../../../i18n';

const SkillCard = ({ data, title }) => {
  const { t } = useLanguage();
  const categoryTitle = t.skills.categories?.[title] || title;

  return (
    <div className='skill__card'>
      <h3>{categoryTitle}</h3>
      <div className="skill__content">
        {data.map((list, index) => (
          <article className='skill__details' key={index}>
            <img
              src={list.svgIcon}
              alt={`${list.skill} icon`}
              className="skill__icon"
            />
            <div className="skill__text">
              <h4 className="skill__name">{list.skill}</h4>
              <small className="skill__level">{t.skills.levels[list.level] || list.level}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
