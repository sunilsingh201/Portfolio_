import React from 'react'
import Aos from 'aos';
import web_dev from "../Images/web-dev.png"
import ui_design from "../Images/ui-design.png"
import web_host from "../Images/web-host.png"
import seo from "../Images/seo.png"
import photoshop from "../Images/photoshop.png"
import web_design from "../Images/web-design.png"
import 'aos/dist/aos.css'
Aos.init();
function Services() {
  return (
    <section className="service" id="services">
        <div className="main-head init-top">
            <h1>services</h1>
        </div>
        <div className="service-content">
            <div className="service-1" id="ser-1" data-aos="fade-down">
                <img className="service-img" src={web_dev} alt="web dev"/>
                <p>Web development</p>
                <span className="ser-exp">
                    In 2021, all businesses are going online to reach the maximum consumer all over the world.
                    If you have not taken your business online. I am just a click away.
                </span>
            </div> 
            <div className="service-1" id="ser-2" data-aos="fade-down">
                <img className="service-img" src={ui_design} alt="ui design"/>
                <p>ui/ux design</p>
                <span className="ser-exp">Researching the strategy and eliminating the flaws that inhibit the business
                    expansion and growth digitally.
                    I Provide a simple and effective interface experience to your consumer.

                </span>
            </div>
            <div className="service-1" id="ser-3" data-aos="fade-down">
                <img className="service-img" src={web_host} alt="web_host"/>
                <p>Web hosting</p>
                <span className="ser-exp">If you are wondering how to take your services online. You came to the right place
                </span>
            </div>
        </div>
        <div className="service-content1">
            <div className="service-1" id="ser-4" data-aos="fade-down">
                <img className="service-img" src={seo} alt="seo"/>
                <p>Seo/Google ads</p>
                <span className="ser-exp">There are 7 bllion people on this planet and 59.5% population uses internet world
                    wide.
                    Helps You to help and provides your services or product to others and make their life easy and
                    better.
                </span>
            </div>
            <div className="service-1" id="ser-5" data-aos="fade-down">
                <img className="service-img" src={photoshop} alt="photoshop"/>
                <p>Photoshop</p>
                <span className="ser-exp">Visual Design Matter. The consumer makes a first impression in 7 seconds.
                </span>
            </div>
            <div className="service-1" id="ser-6" data-aos="fade-down">
                <img className="service-img" src={web_design} alt="web_design"/>
                <p>Logo design</p>
                <span className="ser-exp">I just dont design logos. I help built brands.
                </span>
            </div>
        </div>
    </section>
  )
}

export default Services