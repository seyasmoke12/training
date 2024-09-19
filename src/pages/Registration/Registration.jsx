import React from 'react'
import "./regis.css"
import {Link, useNavigate} from "react-router-dom"

function Registration() {
    const navigate = useNavigate()
    function succ() {
        alert(`Congratulations on your successful registration!          
        i'm excited to collaborate and achieve great things together with qemer tech company`)
        navigate("/")
    }
  return (
    <>
    <div className="container">
    <div className="title">Registration</div> <Link to="/"><p>Go back to Home</p></Link>
    <div className="content">
      <form onSubmit={succ} >
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-box">
            <span className="details">Username</span>
            <input type="text" placeholder="Enter your username" required />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="tel" inputMode='tel'autocomplete="tel" aria-label="Phone Number"
      placeholder="Enter your number" required />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder="Enter your password" required />
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3" />
          <span className="gender-title">Genders (Optional)</span>
          <div className="category">
            <label for="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label for="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label for="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  </div>
    </>
  )
}

export default Registration