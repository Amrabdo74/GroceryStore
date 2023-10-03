import React from "react";
import linkedin from "../assets/images/linkedin1.png";
import github from "../assets/images/github (1).png";
import myweb from "../assets/images/web-programming.png";
import './cssFiles/Footer.css'
const Footer = () => {
  return (
    <>
    <div className="border-top mt-5" >
    <div className="Footer-container d-flex align-items-center justify-content-between   pt-3 pb-3 container ">
        <div style={{ color: "rgb(107 114 128/1" }}>
          <h1 className=" " style={{ fontSize: "20px" }}>
            All right reserved - Developed by Amr Abdo
          </h1>
        </div>
        <div className="">
          <a href="https://www.linkedin.com/in/amr-abdo74/" target="/blank">
            <img
              className=" cursor-pointer me-3"
              style={{ width: "35px" }}
              src={linkedin}
              alt="linkedin"
            />
          </a>

          <a href="https://github.com/Amrabdo74" target="/blank">
            <img
              className=" cursor-pointer me-3  "
              style={{ width: "35px" }}
              src={github}
              alt="github"
            />
          </a>

          <a href="https://amrabdo74.github.io/portfolio/" target="/blank">
            <img
              className="cursor-pointer me-3"
              style={{ width: "35px" }}
              src={myweb}
              alt="myweb"
            />
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
