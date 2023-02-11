import React, { useRef } from "react";
import { AiFillPhone } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BiCurrentLocation } from "react-icons/bi";
import "./contacts.css";
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contacts() {
  const form = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ssxlnhe",
        "template_f13h0ca",
        form.current,
        "DgRaHpcp_RxR6HOgx"
      )
      .then(
        (result) => {
          
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="full-contact" id="contacts">
      <h1  style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>CONNECT WITH ME</h1>
      <div style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }} className="contact" >
        <div className="left">
          <div className="number">
            {" "}
            <AiFillPhone size={"40px"} /> +91 8921645661
          </div>
          <div className="email">
            <SiGmail size={"40px"} />
            alfredjimmyaj007@gmail.com
          </div>
          <div className="location" ref={ref}>
            <BiCurrentLocation size={"40px"} />
            KOCHI,KERALA
          </div>
        </div>
        <div className="right">
          <div class="vl"></div>
          <form ref={form} className='form'>
          <div className="name">
            What Should I Call You?
            <input className="input1" name="to_name"></input>
          </div>
          <div className="send-email">
            Your email plzz!<input className="input1" name="from_name"></input>
          </div>
          <div className="message">
            Let's Talk{" "}
            <textarea
              className="input2"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="submit"  onClick={sendEmail}>
            Submit
          </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Contacts;
