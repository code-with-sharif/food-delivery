import React from "react";
import "../Styles/Carousels22.css";
import Image from "../images/o1.jpg";
import Img02 from "../images/o2.jpg";
import { Button } from "react-bootstrap";
function Carousels22() {
  return (
    <>
      <div className="container g-10">
        <div className="row   ">
          <div className="col-md-6 col-sm-12 col-lg-6 mdqrr">
            <div className="card customecard">
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="img-container">
                    <img
                      src={Image}
                      className="img-fluid rounded-circle "
                      alt="Tasty Food"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 " >
                  <div className="carouselcardbody">
        <h5 className="card-title custometitle">Tasty Thursday</h5>
         <span style={{ display: "inline" }}>
          <h1 style={{ display: "inline" }}>20%</h1> off </span><br/>
       <Button variant="warning" className="lastbtn">
                    Order Now
                  </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card one end */}

           <div className="col-md-6 col-sm-12 col-lg-6 mdqrr">
            <div className="card customecard">
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="img-container">
                    <img
                      src={Img02}
                      className="img-fluid rounded-circle "
                      alt="Tasty Food"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="carouselcardbody">
                    <h5 className="card-title custometitle">
                      Delicious Friday
                    </h5>
                    <span style={{ display: "inline" }}>
       <h1 style={{ display: "inline" }}>15%</h1> of</span>
       <br/>
       <Button variant="warning"  className="lastbtn">
                    Order Now
                  </Button>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Carousels22;
