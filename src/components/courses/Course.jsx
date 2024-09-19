import React from 'react'
import './course.css'
import design from "../../assets/design.jpg"
import Digital from "../../assets/di.jpg"
import full_stuck from "../../assets/full_stuck.jpg"
import {Link} from "react-router-dom"
function Course() {
  return (
    <>
    <div className='cont'>
    <div className="containerr">
  <div className="card">
    <div className="card__header">
      <img src={full_stuck} alt="card__image" className="card__image" width="600" />
    </div>
    <div className="card__body">
      <span className="tag tag-blue">Web Application Development</span>
      <h4>Full stuck application development course</h4>
      <p>Create powerful web apps, push the boundaries of innovation, and achieve excellence</p>
    </div>
    <div className="card__footer">
      <div className="use register">
         <Link  to="/registration">
        <div className="user__info">
          <h2>Register Now</h2>
        </div>
         </Link>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card__header">
      <img src={design} alt="card__image" className="card__image" width="600" />
    </div>
    <div className="card__body">
      <span className="tag tag-brown">Designing</span>
      <h4>Geraphic Design</h4>
      <p>Unleash your creativity and build stunning designs that stand out!</p>
    </div>
    <div className="card__footer">
      <div className="user register">
        < Link to="/registration">
        <div className="user__info ">
          <h2>Register Now</h2>
        </div>
        </Link>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card__header">
      <img src={Digital} alt="card__image" className="card__image" width="600" />
    </div>
    <div className="card__body">
      <span className="tag tag-red">Digital Marketing</span>
      <h4>make your skill with treinding area</h4>
      <p>Transform your marketing skills and achieve impactful results in the digital world.</p>
    </div>
    <div className="card__footer">
      <div className="user register">
       < Link to="/registration">
        <div className="user__info ">
          <h2>Register Now</h2>
        </div>
        </Link>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Course