import React,{useState} from 'react'
import "./about.css";
import pic from "../images/mypic.png";
import cap from "../images/cap.png";

const About = () => {

  
const [skillbox,setSkillbox]=useState(false);

const changeSkillbox=()=>{
if (window.scrollY >= 800) {
 setSkillbox(true);
} else {
 setSkillbox(false);
}
};
window.addEventListener('scroll',changeSkillbox);



  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="top">
          <img className="pic" src={pic} alt=""></img>
          <div className="title">
            <h1>
              <span>About me</span>
            </h1>
            <p>
              Hai, I am Alfred jimmy, Second-year Electronics and Communication
              engineering student at Model Engineering College, Kochi. My
              interests are more leaned to coding and electronics. I love making
              websites, Apps, Gadgets with electronics and many more.  I Have done a few
              projects in Flutter and React Js. <br>
              </br>
              <br />
              <h2>Exploring Engineering...</h2>
            </p>
          </div>
          <img className="cap" src={cap} alt=""></img>
        </div>
        <div className="bottom">
          <h1>Skills</h1>
          <div className="skills">
          <div className="container">
            

            <div className={skillbox ? 'skill-box active' : "skill-box"}>
                <span className="title">Javascript</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className={skillbox ? 'skill-box active' : "skill-box"}>
                <span className="title">C++</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
            <div className={skillbox ? 'skill-box active' : "skill-box"}>
                <span className="title">C</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">50%</span>
                    </span>
                </div>
            </div>
            <div className={skillbox ? 'skill-box active' : "skill-box"}>
                <span className="title">Flutter</span>
                <div className="skill-bar">
                    <span className="skill-per nodejs">
                        <span className="tooltip">85%</span>
                    </span>
                </div>
            </div>
            <div className={skillbox ? 'skill-box active' : "skill-box"}>
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
        </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
