import React, { useEffect, useRef } from 'react'
import "./About.css"
import profile2 from '../../images/profile-2.png'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


const About = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(()=>{
    const el = container.current;
    gsap.fromTo(".about__container",{
      scale:0.7
    },
    {
      scale:1,
      scrollTrigger:{
        trigger:el,
        scrub:true,
      }
    }
  )
  },[])
  return (
    <section id='about' ref={container}>
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={profile2} alt="" />
          </div>
        </div>
        <div className="section__header">
          <h2 className="primary__title">About Me</h2>
          <h1 className="title">My name is <span className="color__primary">Pablo Coria</span></h1>
          <p className="text__muted description">
          I am a Systems student, interested in the development of efficient and functional technological solutions. I have experience working with various programming languages and frameworks, as well as in the design and management of databases, automated systems, technological products, and software services. 
          I stand out for my analytical and problem-solving skills, and I have participated in projects related to IoT engineering and IT infrastructure, integrating technical knowledge with a practical approach.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
