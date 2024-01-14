import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footerfulldiv">
        <div className="footerlogodiv">
          <h1><span>space</span>lance</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eaque! Tempora illo asperiores perspiciatis exercitationem.</p>
        </div>

        <div className="footerforclients">
          <h3>For Clients</h3>
          <a href=""><li>Find Freelancers</li></a>
          <a href=""><li>Post Projects</li></a>
          <a href=""><li>Refund Policy</li></a>
          <a href=""><li>Privacy Policy</li></a>
        </div>

        <div className="footerforfreelancers">
        <h3>For Freelancers</h3>
          <a href=""><li>Find Work</li></a>
          <a href=""><li>Create Account</li></a>
        </div>

        <div className="footercontact">
        <h3>Contact</h3>
          <li><i class="fa-regular fa-compass"></i> Kenya</li>
          <li><i class="fa-regular fa-envelope"></i> dropworks10@gmail.com</li>
        </div>
      </div>

      <div className="footerrights">
        <p>2024 DROPWORKS. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
