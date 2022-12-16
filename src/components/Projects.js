import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "./Projects.css";
import homescreen from "../img/homescreen.png";
import opp from "../img/opp.png";

function Projects() {
  return (
    <div className="Projects">
      <div className="Projects-h1">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 9, type: "spring" }}
        >
          <h1>Some of the Projects I've Worked On</h1>
        </motion.div>
      </div>
      <div className="content">
        <div class="card1">
          <img
            className="img1"
            src={homescreen}
            alt="card1"
            style={{ height: "70vh", width: "100%" }}
          />
          <div class="container">
            <h4>
              <b>Musixx Ecommerce Store</b>
            </h4>
            <p className="cardfont">Tools: React Native, Firebase </p>
          </div>
        </div>

        <div class="card2">
          <img
            className="img1"
            src={opp}
            alt="card2"
            style={{ width: "100%" }}
          />
          <div class="container2">
            <h4>
              <b>Opportunist Web App</b>
            </h4>
            <p className="cardfont">Tools: React, NodeJS, MongoDB, ExpressJS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
