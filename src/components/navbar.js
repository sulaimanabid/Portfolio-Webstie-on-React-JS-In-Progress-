import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "./nav.css";

function Navbar() {
  return (
    <div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 3,
        }}
      >
        <h1 className="nav"> S.A</h1>
      </motion.div>
      <div className="list">
        <ul>
          <li>
            <a className="link" href="./homepage">
              Projects
            </a>
          </li>

          <li>
            <a className="link" href="./skills">
              Languages and Technologies
            </a>
          </li>

          <li>
            <a className="link" href="./">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
