import React,{useEffect, useRef, useState} from 'react'
import "./Projects.css"
import { sumArray } from '../../helper'
import { projects } from '../../data'
import Card from './Card'
import { useLanguage } from '../../i18n'
const tabs = [
  {name:"All"},
  {name:"Engineering"},
  {name:"Infrastructure"},
  {name:"Development"},
]
const Projects = () => {
  const { t } = useLanguage();
  const [displayableProjects,setDisplayableProjects] = useState(projects)
  const [activeIndex,setActiveIndex] = useState(0);
  const [offset,setOffset] = useState(0)
  const [indicatorWidth,setIndicatorWidth] = useState(0);
  const itemsEls = useRef(new Array());

  useEffect(()=>{
    const prevEl = itemsEls.current.filter((_,index)=>index < activeIndex);
    setOffset(
      sumArray(
        prevEl.map(item=>item.offsetWidth)
      )
    )
    setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth)
  },[activeIndex, t])

  const setProjects = (category) =>{
    if(category === "All"){
      return setDisplayableProjects(projects)
    }
    const pro = projects.filter((item)=>item.category.toLowerCase() === category.toLowerCase())
    setDisplayableProjects(pro)
  }

  return (
    <section id='projects'>
       <div className="section__wrapper projects__container">
        <div className="section__header center">
          <h2 className="primary__title">{t.projects.sectionTitle}</h2>
        </div>
        <nav>
          {
            tabs.map((tab, index) =>(
              <button
               ref={el =>itemsEls.current[index] = el}
               onClick={()=>{
                 setActiveIndex(index)
                 setProjects(tab.name)
                }}
               key={index}
              >
                {t.projects.tabs[tab.name]}
              </button>
            ))
          }
          <span
          className="active__indicator"
          style={{
            left:`${offset}px`,
            width:`${indicatorWidth}px`
          }}
          ></span>
        </nav>

        <div className="card__container">
           {
            displayableProjects.map((project,index) =>(
              <Card
               title={project.title}
               image={project.image}
               data={project.data}
               stack={project.stack}
               DemoLink={project.data.demoLink}
               key={index}
              />
            ))
           }
        </div>
       </div>
    </section>
  )
}

export default Projects
