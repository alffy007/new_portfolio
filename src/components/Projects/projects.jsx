import React from 'react'
import './projects.css'
import background1 from "../images/nexar.png"
import background2 from "../images/metaflix.png"
import background3 from "../images/hato.jpg"
import background4 from "../images/chatapp.jpg"
const projects = () => {
  return (
    <div id='projects' className='projects'>
    <div className="content">
      <div className="title">
        PROJECTS
      </div>
      <div class="l-container">
        
  <div class="b-game-card">
    
    <div class="b-game-card__cover" style={{ 
      backgroundImage: `url(${background1})` 
    }} >
   
    </div>
   
  </div>
  <div class="b-game-card">
    <div class="b-game-card__cover" style={{ 
      backgroundImage: `url(${background2})` 
    }} ></div>
  </div>
  <div class="b-game-card">
    <div class="b-game-card__cover" style={{ 
      backgroundImage: `url(${background3})` 
    }} ></div>
  </div>
  <div class="b-game-card">
    <div class="b-game-card__cover" style={{ 
      backgroundImage: `url(${background4})` 
    }} ></div>
  </div>
</div>
    </div>
    </div>
  )
}

export default projects