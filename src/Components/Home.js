import React from 'react'
import profile from "../Images/piroo.png"
function Home() {
  return (
    <section className="init-home">
    <div className="header">
        <div className="profile">
            <div className="profile-left">
                <img src={profile} alt="Profile"/>
            </div>
            <div className="profile-right">
                <p className="username">Sunil Singh</p>
                <p className="bio">@web_developer</p>

            </div>
        </div>
        <div className="header-right">
            <nav>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#education">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

   
    <div className="home-cont" id="home">
        <div className="home-content">
            <div className="greet">
                <h3>hi,</h3>
            </div>
            <div className="name">
                <h3>It's Sunil</h3>
            </div>
            <div className="description">
                <h1>web developer &</h1>
            </div>
            <div className="description" id="desc-div-top">
                <h1>user interface designer</h1>
            </div>
            <div className="interact-container">
                <div className="contact-me">
                    <a href="#contact">contact</a>
                </div>
                <div className="read-about">
                    <a href="#about">Read More About me</a>
                </div>
            </div>
        </div>
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/sunilsingh201/"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/sunilsingh201"><i className="fab fa-github"></i></a>
            <a href="https://dribbble.com/sunilsingh201"><i className="fab fa-dribbble"></i></a>
            <a href="https://www.behance.net/sunilsingh31"><i className="fab fa-behance"></i></a>
        </div>
        <div className="scrooldown">
            <a href="#about">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
    </div>
</section>
  )
}

export default Home