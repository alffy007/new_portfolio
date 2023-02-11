import React, {useRef } from "react";
import './projects.css'
import background1 from "../images/nexar.png"
import background2 from "../images/metaflix.png"
import background3 from "../images/hato.jpg"
import background4 from "../images/chatapp.jpg"
import { useInView } from "framer-motion";
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id='projects' className='projects'>
    <div className="content">
      <h1   style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>Projects</h1>
      <div class="l-container">
        
  <div class="b-game-card" style={{
            transform: isInView ? "none" : "rotateY( 180deg ) ",
            opacity: isInView ? 1 : 0,
            transition: "transform 1s"
          }}>
    
    <div class="b-game-card__cover" ref={ref} style={{ 
      backgroundImage: `url(${background1})` 
    }} >
   
    </div>
   
  </div>
  <div class="b-game-card"  style={{
            transform: isInView ? "none" : "rotateY( 180deg ) ",
            opacity: isInView ? 1 : 0,
            transition: "transform 1.5s"
          }}>
    <div class="b-game-card__cover" style={{ 
      backgroundImage: `url(${background2})` 
    }} ></div>
  </div>
  <div class="b-game-card"  style={{
            transform: isInView ? "none" : "rotateY( 180deg ) ",
            opacity: isInView ? 1 : 0,
            transition: "transform 2s"
          }}>
    <div class="b-game-card__cover" style={{ 
      backgroundImage: `url(${background3})` 
    }} ></div>
  </div>
  <div class="b-game-card"  style={{
            transform: isInView ? "none" : "rotateY( 180deg ) ",
            opacity: isInView ? 1 : 0,
            transition: "transform 2.5s"
          }}>
    <div class="b-game-card__cover" style={{ 
      backgroundImage: `url(${background4})` 
    }} ></div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Projects