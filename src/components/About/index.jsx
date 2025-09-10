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
          I am a software development specialist with extensive experience in C, C++, and embedded systems, as well as in IoT and telecommunications projects. 
          My academic background includes an associate's degree in electronics, a university associate's degree in programming, and I am currently pursuing a degree in Computer Engineering with a specialization in microcontroller software development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
