import React, { useRef }  from 'react'
import './Footer.css'
import { useInView } from "framer-motion";
import {AiFillInstagram,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='footer' ref={ref}> 
        <div class="waves">
		<div class="wave" id="wave1"></div>
		<div class="wave" id="wave2"></div>
		<div class="wave" id="wave3"></div>
		<div class="wave" id="wave4"></div>
	</div>
       <span>With Love❤️</span>
<div className="links">
<a  href='https://www.instagram.com/alffy__007/'><AiFillInstagram className='link'  size={'32px'}/></a>
<a href='https://github.com/alffy007' ><AiFillGithub className='link'  size={'32px'}/></a>
<a href="https://www.linkedin.com/in/alfred-jimmy-087a61225/"><AiFillLinkedin className='link'  size={'32px'}/></a>
</div>
<div className={isInView ? 'typewriter' : "none"}>
  <p >"From Alfred J"immy"</p>
</div>
        </div>
  )
}
