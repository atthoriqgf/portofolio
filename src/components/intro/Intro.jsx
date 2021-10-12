import "./intro.scss";
import { KeyboardArrowDown } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 2000,
      backSpeed: 30,
      typeSpeed: 50,
      loop: false,
      strings: [" Bandung State of Polytechnic"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/potrait.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello there! My name is</h2>
          <h1>Atthoriq Gerhana Firdaus</h1>
          <h3>
            I'm a freshgraduate from
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portofolio">
          <KeyboardArrowDown className="icon" />
        </a>
      </div>
    </div>
  );
}
