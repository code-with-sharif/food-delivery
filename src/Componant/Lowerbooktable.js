import React from "react";
import img111 from "../images/client1.jpg";
import img222 from "../images/client2.jpg";
import "../Styles/Lowerbooktable.css";

function Lowerbooktable() {
  return (
    <>
      <div className="container">
        <div className="row R111">
          <h1>What Our Customers Say</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 mt-4 mb-5 setmediaq">
            <div className="card">
              <div className="card-body bodytext">
                <p className="card-text1">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title. content.
                </p>
                <h5 className="card-title">Mr. Wajid</h5>
                <h6 className="card-subtitle mb-2">Taunsa Sharif</h6>
              </div>
            </div>
            <div className="imghandle">
              <img
                src={img111}
                className="img-fluid rounded-circle"
                alt="Client 1"
              />
            </div>
          </div>
          <div className="col-lg-6 mt-4 mb-5 setmediaq">
            <div className="card">
              <div className="card-body bodytext">
                <p className="card-text1">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title. content.
                </p>
                <h5 className="card-title">Mr. Ali</h5>
                <h6 className="card-subtitle mb-2">Rawalpindi</h6>
              </div>
            </div>
            <div className="imghandle">
              <img
                src={img222}
                className="img-fluid rounded-circle"
                alt="Client 2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lowerbooktable;
