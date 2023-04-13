import React from 'react'
import Aos from 'aos';
import slide from "../Images/39998-web-development.gif"
import 'aos/dist/aos.css'
Aos.init();

function About() {
  return (
    <div className="content-main" id="about">
        <div className="left-main">
            <div className="init-img">
                <img src={slide} alt="code animation"/>
            </div>

        </div>
        <div className="right-main">
            <div className="right-main-content">
                <p className="init-para" data-aos="fade-down">a few words about me</p>
                <p data-aos="fade-down">
                    Hello, I'm Sunil Singh based in Navi Mumbai ,India. A passionate and an enthusiast
                    Web-developer. I am an under grad computer science student exploring myself to every new and old
                    technology and finding questions related
                    to everthing that aspire me. I have rich experience in creative creating and designing and have the
                    ability
                    to bring those concepts applicable to the real world.
                </p>
                <p className="init-age" data-aos="fade-down"><span>Age : </span>19</p>
                <p className="init-college" data-aos="fade-down"><span>College : </span>S.I.E.S College of Arts, Commerce
                    and Science, Nerul</p>
                <p className="init-email" data-aos="fade-down"><span>Email : </span>suniljersey201@gmail.com</p>
                <p className="init-place" data-aos="fade-down"><span>Place : </span>Navi Mumbai, India</p>
                <div className="cv-btn" data-aos="fade-down">
                    <a href="#">Resume</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About