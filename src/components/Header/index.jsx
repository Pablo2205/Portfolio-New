import React, { useRef } from 'react';
import "./Header.css";
import { profile1 } from "../../images";
import Facts from './Facts';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      ".profile__photo__container",
      {
        scale: 0.5,
        duration: 1,
        opacity: 0.5,
      },
      {
        scale: 1,
        duration: 1,
        ease: "sine.in",
        opacity: 1,
      }
    );

    gsap.from(".intro__text", {
      fontSize: 100,
      duration: 1,
      delay: 1,
      ease: "sine.in",
    });

    const timeline = gsap.timeline();
    timeline
      .from(".header__info__top", {
        opacity: 0,
      })
      .from(".header__title", {
        opacity: 0,
        y: -30,
      })
      .from(".header__description", {
        opacity: 0,
      })
      .from(".btn", {
        x: -40,
        opacity: 0,
        stagger: 0.5,
      });
  }, { scope: container });

  return (
    <header id='header' className='blur-effect' ref={container}>
      <div className="stroke__text intro__text">HELLO</div>
      <div className="section__wrapper header__container">
        <div className="column intro__container blur-effect">
          <div className="header__info">
            <div className="header__info__top">
              Hello, I am <span className="color__primary">Pablo</span>
            </div>
            <div className="header__info__middle">
              <h1 className="primary__title header__title">Software Engenieer</h1>
              <p className="text__muted header__description">
              Software Engineer with expertise in application development, infrastructure integration, and IoT/Cloud solutions. 
              I design and implement scalable, secure, and efficient software by combining strong programming skills with knowledge of system architectures and modern deployment practices. 
              My experience includes developing web, desktop, and embedded applications, as well as integrating cloud services and connected devices. 
              I follow agile methodologies and software engineering best practices to deliver reliable, maintainable, and high-quality solutions that align with business needs.
              </p>
            </div>
            <Facts />
            <div className="header__info__bottom">
              <a href="/CV_Pablo Coria 2026.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn">Download CV</button>
              </a>
              <a href="mailto:pablo.cor1@Icloud.com" className="btn">Email Me</a>
            </div>
          </div>
        </div>
        <div className="column profile__wrapper">
          <div className="profile__photo__container">
            <img src={profile1} className='profile__photo' alt="" />
          </div>
          <div className="social-icons">
            <a href="https://github.com/Pablo2205" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/pablo-coria01/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
