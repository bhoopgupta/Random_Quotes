import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
   
<footer className=" py-5" > 
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">

        <div className="icon">
          <li className="nav-item"><a href="https://github.com/bhoopgupta" target="_blank" className="nav-link px-2 text-body-secondary">
            <FaGithub className='text-primary' /> </a>
          </li>
          <span className="icon-name">GitHub</span>
        </div> 

        <div className="icon">
          <li className="nav-item"><a href="https://www.facebook.com/narayangupta.45" target="_blank" className="nav-link px-2 text-body-secondary">
            <FaFacebook className='text-primary' />  </a>
          </li>
          <span className="icon-name">FaceBook</span>
        </div>

        <div className="icon">
          <li className="nav-item"><a href="https://www.instagram.com/narayangupta.45/"  target="_blank" className="nav-link px-2 text-body-secondary">
          <FaInstagram className='text-primary' /> </a>
        </li>
          <span className="icon-name">Instagram</span>
        </div>
        
        <div className="icon">
          <li className="nav-item"><a href="https://www.linkedin.com/in/bhoop-narayan-gupta-5678a31b6" target="_blank"  className="nav-link px-2 text-body-secondary">
          <FaLinkedin className='text-primary' /> </a>
          </li>
          <span className="icon-name">Linkedin</span>
        </div>
        
        <div className="icon">
          <li className="nav-item"><a href="https://narayangupta.netlify.app" target="_blank" className="nav-link px-2 text-body-secondary">
          <FaRegUserCircle className='text-primary' /> </a>
        </li>
          <span className="icon-name">PortFolio</span>
        </div>

        <div className="icon">
          <li className="nav-item"><a href="mailto:bhoopnarayan5999@gmail.com" target="_blank" className="nav-link px-2 text-body-secondary">
            <BiLogoGmail  className='text-primary'/> </a>
        </li>
          <span className="icon-name">Gmail</span>
        </div>
        
      </ul>
      <p className="text-center text-secondary">© 2025 Developed by 
      <FaHeart  className='footer-icon' />  BN Gupta</p>
    </footer> 
      
  )
}

export default Footer;
