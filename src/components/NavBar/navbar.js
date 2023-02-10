import React,{useState} from 'react'
import '../NavBar/navbar.css'
import {Link} from 'react-scroll'
function Navbar() {

const [navbar,setNavbar]=useState(false);

 const changeNavbar=()=>{
if (window.scrollY >= 300) {
  setNavbar(true);
} else {
  setNavbar(false);
}
 };
 window.addEventListener('scroll',changeNavbar);

  return (
 <div className={navbar ? 'navbar active' : 'navbar'}>
 <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
 <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
 <Link to="contacts" spy={true} smooth={true} offset={50} duration={500}>Contacts</Link>
 </div>
  )
}

export default Navbar