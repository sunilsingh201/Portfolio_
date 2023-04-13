import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
Aos.init();
function Contact() {
  return (
    <>
    <div className="reach-container" id="contact" data-aos="fade-down">
        <div className="small-reach init-special">Need a Web Developer ?</div>
        <div className="work-together init-spell">Let's Work together <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
    </div>
    <section className="contact-form">
        <div className="contact-left" data-aos="fade-down">
            <h1>Get in touch</h1>
            <p>As a freelancer, i'm available for new projects and collaborations.</p>
        </div>
        <div className="wrapper-contact-form" data-aos="fade-down">
            <form action="">
                <div className="contact-content">
                    <div className="first-info1">
                        <input type="text" placeholder="Full Name" required/>
                    </div>
                    <div className="first-info2">
                        <input type="email" placeholder="email address" required/>
                    </div>
                    <div className="text-area">
                        <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
                    </div>
                    <div className="send-btn">
                        <button type="submit">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    </>
  )
}

export default Contact