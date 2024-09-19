import React from 'react'
import logo from "../../../assets/logio.jpg"
import'./style.css'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
    <header>
        <nav className="navbar">
    
            <a href="#" className="logo">
                <img src={logo} alt="logo" />
                <h2>Qemer tech</h2>
            </a>
            <ul className="links">
                <span className="close-btn material-symbols-rounded">close</span>
                <li><Link to="/">Home</Link></li>
            </ul>
            
        </nav>
    </header>

    <div className="blur-bg-overlay"></div>
    <div className="form-popup">
        <span className="close-btn material-symbols-rounded">close</span>
        <div className="form-box login">
            <div className="form-details">
                <h2>Welcome Back</h2>
                <p>Please log in using your personal information to stay connected with us.</p>
            </div>
            <div className="form-content">
                <h2>LOGIN</h2>
            </div>
        </div>
    </div>
        <section className="hero-section">
      <div className="content">
        <h2>Let’s elevate your skills and shape the future together</h2>
        <span><p>
          Unlock the power of full-stack development, captivating graphic design, and strategic digital marketing. Elevate your brand and skills in the fast-paced digital world
        </p></span>
        <Link to="/course">
        <button>Choose Your Path</button>
        </Link>
      </div>
    </section>
    </>
  )
}

export default Home