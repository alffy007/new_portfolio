import React from 'react'
import './Footer.css'
import {AiFillInstagram,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className='footer'>
        <div class="waves">
		<div class="wave" id="wave1"></div>
		<div class="wave" id="wave2"></div>
		<div class="wave" id="wave3"></div>
		<div class="wave" id="wave4"></div>
	</div>
       <span>With Love❤️</span>
<div className="links">
<AiFillInstagram className='link'  size={'32px'}/>

<AiFillGithub className='link'  size={'32px'}/>
<AiFillLinkedin className='link' size={'32px'}/>
</div>
<span className='pan1'><span>Home</span><span>About</span><span>Projects</span></span>
        </div>
  )
}
