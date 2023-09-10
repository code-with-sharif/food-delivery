import React from "react";
import "../Styles/About.css";
import abuotimg from "../images/about-img.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function About() {
  return (
    <div className="aboutf1" id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 abuotimg">
            <img src={abuotimg} alt="About" />npm 
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 titipp">
            <div className="title">
              <h1>We Are Feane</h1>
            </div>
            
            <div className="body my-5">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid nesciunt quasi voluptatem a, quaerat explicabo
                consectetur aspernatur reprehenderit ducimus sequi, mollitia id
                dolore. Consequuntur, quidem? Atque eos autem quia laborum?
              </p>
              <div className="text-center mt-5"> {/* Add this container for center alignment */}
                <Button variant="warning" size="lg" className="lastbtn">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
