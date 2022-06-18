import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "./skills.css";
import reactgif from "../img/gif.gif";
import jsgif from "../img/js-gif.gif";
import firebase from "../img/firebase.png";

function skills() {
  return (
    <div className="skill">
      <div className="h1-s">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 9, type: "spring" }}
        >
          <h1> Languages and Technologies</h1>
        </motion.div>
      </div>
      <div className="skillrl">
        <div className="left">
          <p>Technologies That I Know and Familiar With:</p>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 6, type: "spring" }}
          >
            <div className="technologies">
              <br></br>
              <p className="p">React JS</p>
              <p className="p">Node JS</p>
              <p className="p">Express JS</p>
              <p className="p">MongoDB</p>
              <p className="p">Firebase</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 10, type: "spring" }}
          >
            <div className="familiar">
              <br></br>
              <p className="p">React Native</p>
              <p className="p">Next JS</p>
              <p className="p">SCSS</p>
              <p className="p">REDUX</p>
              <p className="p">Material UI</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration:14, type: "spring" }}
          >
            <div className="last_row">
              <p className="para">Styled Components</p>
              <p className="p">Github</p>
              <p className="para">Machine Learning</p>
              <p className="p">Java</p>
            </div>
          </motion.div>
        </div>

        <div className="right">
          <img className="reactgif" src={reactgif} alt="loading..." />
          <img className="jsgif" src={jsgif} alt="loading..." />
          <img className="firebase" src={firebase} alt="loading..." />
        </div>
      </div>
    </div>
  );
}

export default skills;
