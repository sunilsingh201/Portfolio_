import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
Aos.init();
function Education() {
  return (
    <section className="edu-main-con" id="education">
        <div className="main-head init-top">
            <h1>education</h1>
        </div>
        <div className="year-edu-div">
            <div className="sr-jr-kg4" data-aos="fade-down">
                <div className="date-year">2019-2022</div>
                <div className="ins-name">sies </div>
                <div className="place-name">nerul, navi Mumbai</div>
            </div>
            <div className="sr-jr-kg3" data-aos="fade-down">
                <div className="date-year">2017-2019</div>
                <div className="ins-name">sainath junior college</div>
                <div className="place-name">vashi, navi mumbai</div>
            </div>
            <div className="sr-jr-kg2" data-aos="fade-down">
                <div className="date-year">2011-2017</div>
                <div className="ins-name">sainath english high school</div>
                <div className="place-name">vashi, navi mumbai</div>
            </div>
            <div className="sr-jr-kg1" data-aos="fade-down">
                <div className="date-year">2005-2011</div>
                <div className="ins-name">morning light boarding school</div>
                <div className="place-name">uttrakhand</div>
            </div>
        </div>
    </section>
  )
}

export default Education