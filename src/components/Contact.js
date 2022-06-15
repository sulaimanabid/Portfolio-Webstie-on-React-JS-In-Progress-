import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "../components/contact.css";
import gmail from "../img/gmail.png";
import download from "../img/download.gif";
import pdf from "../pdf/cv.pdf";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_h1">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 7, type: "spring" }}
        >
          <p>
            {" "}
            <h2>Contact Me</h2>
          </p>
          <h1>You Can Reach Me Here</h1>

          <br></br>
          <br></br>

          <div className="gmail">
            <img src={gmail} alt="gmail" class="gmail-logo" />
            <p className="email">sulaimanabid3@gmail.com</p>
          </div>
          <br></br>
          <br></br>

          <div className="download-link">
            <a href={pdf} target="_blank">
              <div className="cvbutton">
                <img src={download} alt="download" className="download-logo" />
                <p style={{ textDecoration: "none" }}>Download CV</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
