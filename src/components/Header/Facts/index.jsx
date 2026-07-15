import React, { useEffect, useRef, useState } from 'react'
import "./Facts.css"
import Odometer from 'react-odometerjs'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../../../i18n';

const Facts = () => {
    const { t } = useLanguage();
    const [experience,setExperience] = useState(0);
    const [projects,setProjects] = useState(0)
    const [clients,setClients] = useState(0)
    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setExperience(5)
            setProjects(10);
            setClients(25);
        },3000)
        return () =>{
            clearTimeout(timeoutId)
        }
    },[])

    const container = useRef(null)
    gsap.registerPlugin(useGSAP)
    useGSAP(()=>{
      const timeline = gsap.timeline();
      timeline
      .from(".fact__item",{
        delay:1.5,
        x:-100,
        stagger:.5,
        opacity:0,
      })
    },{scope:container})
  return (
    <div className='fact__container' ref={container}>
      <div className="fact__item">
        <div className="count__container">
          <Odometer
           value={experience}
          />
          <span className="indicator">+</span>
        </div>
        <p className="name">{t.facts.experience}</p>
      </div>

      <div className="fact__item">
        <div className="count__container">
          <Odometer
           value={projects}
          />
          <span className="indicator">+</span>
        </div>
        <p className="name">{t.facts.projects}</p>
      </div>

      <div className="fact__item">
        <div className="count__container">
          <Odometer
           value={clients}
          />
          <span className="indicator">+</span>
        </div>
        <p className="name">{t.facts.clients}</p>
      </div>
    </div>
  )
}

export default Facts
