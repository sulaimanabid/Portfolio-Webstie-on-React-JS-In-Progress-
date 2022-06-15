import React from "react";
import "./homepage.css";
import profile from "../img/profile.png";
import Footer from "./footer";
import Skills from "./skills";
import Navbar from "./navbar";
import Projects from "./Projects";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="start">
        <div className="i">
          <div className="i-left">
            <div className="i-left-wrapper">
              <h2 className="i-intro"> Hello, My Name Is</h2>
              <h1 className="i-name">
                {" "}
                <span className="h1">Sulaiman Abid</span>
              </h1>
              <br></br>
              <br></br>

              <br></br>

              <div className="i-title">
                <div className="i-title-wrapper">
                  <div className="i-title-item">MERN Stack Developer</div>
                  <div className="i-title-item">React Native Developer</div>
                  <div className="i-title-item">SEO Expert</div>
                </div>
              </div>
              <br></br>

              <div className="i-description">
                I design and develop Mobile Applications using React Native, Web
                Apps using MERN STACK and if need optimization as well i will
                also be your SEO Expert!
              </div>

              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>

          <div className="i-right">
            <div className="i-clippath"></div>
            <img className="i-img" src={profile} alt=""></img>
          </div>
        </div>
        <Skills />
        <Projects />
        <br></br> <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Contact />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    </>
  );
};
export default Homepage;
