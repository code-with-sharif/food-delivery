import React from 'react'
import Img from "../images/f1.png";
import { MdLocalGroceryStore } from "react-icons/md";

function Burger() {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-4 customecol ">
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
        </div>
      </div>
    </>
  )
}

export default Burger;
