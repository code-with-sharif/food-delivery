import React from "react";
import { MdLocalGroceryStore } from "react-icons/md";
import { Container } from "react-bootstrap";
import Img from "../images/f1.png";
import Imgf2 from "../images/f2.png";
import Imgf3 from "../images/f3.png";
import Imgf4 from "../images/f4.png";
import Imgf7 from "../images/f7.png";
import Imgf9 from "../images/f9.png";
import "../Styles/All.css";
import { Button } from "bootstrap";
import Burger from "./Burger";

function All() {
  return (
    <>
      <Container className="mt-4  ">
        <div className="row  g-4">
          <div className="col-sm-12 col-md-6 col-lg-4 lesspad">
            <div className="card h-100">
              <div className="f0">
                <div className="f1">
                  <img src={Img} className="card-img-top" alt="img not found" />
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="crdf">
                <div className="card-left">$20</div>
                <div className="card-right">
                  <MdLocalGroceryStore />
                </div>
              </div>
            </div>
          </div>
          {/* CARD ONE END */}

          <div className="col-sm-12 col-md-6 col-lg-4 lesspad">
            <div className="card h-100">
              <div className="f0">
                <div className="f1">
                  <img src={Imgf2} className="card-img-top" alt="..." />
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="crdf">
                <div className="card-left">$20</div>
                <div className="card-right">
                  <MdLocalGroceryStore />
                </div>
              </div>
            </div>
          </div>
          {/* card 3 start */}

          <div className="col-sm-12 col-md-6 col-lg-4 lesspad">
            <div className="card h-100">
              <div className="f0">
                <div className="f1">
                  <img src={Imgf3} className="card-img-top" alt="..." />
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="crdf">
                <div className="card-left">$20</div>
                <div className="card-right">
                  <MdLocalGroceryStore />
                </div>
              </div>
            </div>
          </div> 
          {/* CARD 3 END */}
          
        
      
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <div className="card h-100 ">
              <div className="f0">
                <div className="f1">
                  <img src={Imgf4} className="card-img-top" alt="..." />
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="crdf">
                <div className="card-left">$20</div>
                <div className="card-right">
                  <MdLocalGroceryStore />
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4  lesspad">
            <div className="card h-100">
              <div className="f0">
                <div className="f1">
                  <img src={Imgf7} className="card-img-top" alt="..." />
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="crdf">
                <div className="card-left">$20</div>
                <div className="card-right">
                  <MdLocalGroceryStore />
                </div>
              </div>
            </div>
          </div>
          {/* card 3 start */}

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="f0">
                <div className="f1">
                  <img src={Imgf9} className="card-img-top" alt="..." />
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="crdf">
                <div className="card-left">$20</div>
                <div className="card-right">
                  <MdLocalGroceryStore />
                </div>
              </div>
            </div>
          </div>
        
        
        </div>
      </Container>


      {/* <Burger/> */}
    </>
  );
}

export default All;
