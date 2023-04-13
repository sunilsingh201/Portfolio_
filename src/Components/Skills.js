import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
Aos.init();
function Skills() {
  return (
    <section className="ski-con" id="skills">
        <div className="main-head init-top">
            <h1>skills</h1>
        </div>
        <div className="skills-sub-section">
            <div className="skills-talk">
                <p data-aos="fade-down">
                    To start is the hardest thing and to keep the consistency towards it is the real challenge.
                    At the start i was confused whether to start with a particular language or start with data
                    structure.
                    I am not a self-taught developer as throughout my web developer journey there were my teachers and
                    senoirs
                    who always helped me and guided the right path. They asked me to build a website using html and css
                    only.
                    Today i am a full stack developer. A portfolio with a single skill html to all the skills required
                    to be a full stack developer. This skill list will overflow in near future.
                </p>
            </div>
            <div className="skills-first" data-aos="fade-down">
                <h1><span className="icon-type" id="bold">{ }</span> frontend developer</h1>
                <p>HTML</p>
                <div className="container">
                    <div className="skills html"></div>
                </div>
                <p>CSS</p>
                <div className="container">
                    <div className="skills css"></div>
                </div>
                <p>BOOTSTRAP</p>
                <div className="container">
                    <div className="skills bootstrap"></div>
                </div>
                <p>JQUERY</p>
                <div className="container">
                    <div className="skills jquery"></div>
                </div>
                <p>JAVASCRIPT</p>
                <div className="container">
                    <div className="skills js"></div>
                </div>
            </div>
            <div className="skills-mid" data-aos="fade-down">
                <h1><span className="icon-type" id="bold">
                    </span> backend developer</h1>
                <p>PHP</p>
                <div className="container">
                    <div className="skills php"></div>
                </div>
                <p>PYTHON</p>
                <div className="container">
                    <div className="skills py"></div>
                </div>
            </div>
            <div className="skills-last" data-aos="fade-down">
                <h1><i className="fa fa-paint-brush icon-type" aria-hidden="true"></i> designer</h1>
                <p>FIGMA</p>
                <div className="container fig">
                    <div className="skills figma"></div>
                </div>
                <p>PHOTOSHOP</p>
                <div className="container photo">
                    <div className="skills photoshop"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills