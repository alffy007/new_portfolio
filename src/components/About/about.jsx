import React, { useState,useRef } from "react";
import "./about.css";
import pic from "../images/mypic.png";
import cap from "../images/cap.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const About = () => {
  const [skillbox, setSkillbox] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const changeSkillbox = () => {
    if (window.scrollY >= 800) {
      setSkillbox(true);
    } else {
      setSkillbox(false);
    }
  };
  window.addEventListener("scroll", changeSkillbox);

  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="top" >
          <img
           style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
                      className="pic"
            src={pic}
            alt=""
          ></img>
          <div className="title">
            <h1  style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
              <span>About me</span>
            </h1>
            <p  style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
              Hai, I am Alfred jimmy, Second-year Electronics and Communication
              engineering student at Model Engineering College, Kochi. My
              interests are more leaned to coding and electronics. I love making
              websites, Apps, Gadgets with electronics and many more. I Have
              done a few projects in Flutter and React Js. <br></br>
              <br />
              <h2>Exploring Engineering...</h2>
            </p>
          </div>
          <motion.img  
          transition={{duration:1, type:'spring',bounce:'0.0'}}
          animate={{
    x: isInView ? 0 : 100,
    y: isInView ? 0 : 100,
    scale: isInView ? 1 : 0,
    rotate: isInView ? 20 : 0,
  }} className="cap" src={cap} alt="image"></motion.img>
        </div>
        <div className="bottom">
          <h1  style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>Skills</h1>
          <div className="skills" ref={ref}>
            <div className="container">
              <div className={skillbox ? "skill-box active" : "skill-box"}>
                <span className="title">Javascript</span>
                <div className="skill-bar">
                  <span className="skill-per html">
                    <span className="tooltip">80%</span>
                  </span>
                </div>
              </div>
              <div className={skillbox ? "skill-box active" : "skill-box"}>
                <span className="title">C++</span>
                <div className="skill-bar">
                  <span className="skill-per css">
                    <span className="tooltip">60%</span>
                  </span>
                </div>
              </div>
              <div className={skillbox ? "skill-box active" : "skill-box"}>
                <span className="title">C</span>
                <div className="skill-bar">
                  <span className="skill-per javascript">
                    <span className="tooltip">50%</span>
                  </span>
                </div>
              </div>
              <div className={skillbox ? "skill-box active" : "skill-box"}>
                <span className="title">Flutter</span>
                <div className="skill-bar">
                  <span className="skill-per nodejs">
                    <span className="tooltip">85%</span>
                  </span>
                </div>
              </div>
              <div className={skillbox ? "skill-box active" : "skill-box"}>
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
