import React from 'react'
import Aos from 'aos';
import project_1 from "../Images/project1.svg"
import Logo_iqacwhite from "../Images/Logo_iqacwhite.svg"
import 'aos/dist/aos.css'
Aos.init();
function Projects() {
  return (
    <div className="project-section" id="project">
        <div className="main-head init-top">
            <p className="subscript">latest</p>
            <h1>projects</h1>
        </div>
        <div className="project-img1" data-aos="fade-down">
            <div className="project_1">
                <img src={project_1} alt="project"/>
            </div>
            <h2>1. Tours & Travels</h2>
            <p>Responsive Website</p>
        </div>
        <div className="project-img2" data-aos="fade-down">
            <h2>2. Iqac</h2>
            <p>Logo Design</p>
            <div className="project-2">
                <img src={Logo_iqacwhite} alt="project1"/>
            </div>
        </div>
    </div>
  )
}

export default Projects