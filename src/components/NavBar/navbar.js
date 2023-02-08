import React from 'react'
import '../NavBar/navbar.css'
import {Link} from 'react-scroll'
function navbar() {
  return (
 <div className='navbar'>
 <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
 <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
 <Link to="contacts" spy={true} smooth={true} offset={50} duration={500}>Contacts</Link>
 </div>
  )
}

export default navbar