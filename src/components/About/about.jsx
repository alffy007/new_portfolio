import React from "react";
import "./about.css";
import pic from "../images/mypic.png";
import cap from "../images/cap.png";

const about = () => {
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
              engineering student at Model Engineering College, Kochi. I did My
              schooling at St. Ann's Higher Secondary School, Kochi. My
              interests are more leaned to coding and electronics. I love making
              websites, Apps, Gadgets with electronics and many more. Now I am
              currently studying Python for machine learning. I Have done a few
              projects in Flutter and React Js. Thank you
            </p>
          </div>
          <img className="cap" src={cap} alt=""></img>
        </div>
        <div className="bottom">
          <h1>Skills</h1>
          <div class="skills">
            <div class="skills-bar">
              <div class="bar">
                <div class="info">
                  <span>HTML</span>
                </div>
                <div class="progress-line">
                  <span class="html"></span>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>CSS</span>
                  </div>
                  <div class="progress-line">
                    <span class="css"></span>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>BOOTSTRAP</span>
                    </div>
                    <div class="progress-line">
                      <span class="bootstrap"></span>
                    </div>
                    <div class="bar">
                      <div class="info">
                        <span>JAVASCRIPT</span>
                      </div>
                      <div class="progress-line">
                        <span class="javascript"></span>
                      </div>
                      <div class="bar">
                        <div class="info">
                          <span>C PROGRAMMING</span>
                        </div>
                        <div class="progress-line">
                          <span class="c"></span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
