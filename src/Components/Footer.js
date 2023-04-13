import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="footer-content">
            <div className="logo-name">
                <h1>Sunil Singh</h1>
                <p>Web developer</p>
            </div>
            <div className="link-name">
                <a href="#services">services</a>
                <a href="#education
                ">portfolio</a>
                <a href="#contact">contact</a>
            </div>
            <div className="social-link">
                <a href="https://www.linkedin.com/in/sunilsingh201/"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/sunilsingh201"><i className="fab fa-github"></i></a>
                <a href="https://dribbble.com/sunilsingh201"><i className="fab fa-dribbble"></i></a>
                <a href="https://www.behance.net/sunilsingh31"><i className="fab fa-behance"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        <hr>
        </hr>

        <p className="copywrite">Copywrite &copy 2021 sunil singh | All rights reserved </p>
    </footer>
  )
}

export default Footer