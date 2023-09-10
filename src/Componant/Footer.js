import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Footer.css";
import { Nav } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footbg">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="title1st">
              <h5>Contact Us</h5>
              <br />
              <NavLink className="foot1" to="#">
                Location
              </NavLink>
              <br />
              <NavLink className="foot1" to="#">
                Call+04769376987957
              </NavLink>
              <br />
              <NavLink className="foot1" to="#">
                test454fs@gmail.com
              </NavLink>
              <br />
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 title2">
            <h4>Feane</h4>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo, quae! Atque blanditiis consectetur sint illum facilis,
              quae! Atque blanditiis consectetur sint illum facilis, .
            </p>
            <p className="icon">
              <span>
                <BsFacebook />
              </span>{" "}
              <span>
                <AiFillTwitterCircle />
              </span>{" "}
              <span>
                <AiFillLinkedin />
              </span>{" "}
              <span>
                <AiOutlineInstagram />
              </span>
            </p>
            </div>

            

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="title3rd">
              <h5>Opening Hours </h5>
              <br />
              <p>Everyday </p>
              <p>10:00 AM To 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className="row lastrow" >
              <div className="col">
              <p>&copy; {2023}All rights reserved By Free HTML Template</p> 
            <p>&copy; Distributed By Apna Time</p>
              </div>
            </div>

      </div>
    </div>
  );
}

export default Footer;
