import React from "react";
import '../Styles/Car0uselse11.css'
import img11 from "../images/px-1612351-village-travel-dark.jpg"; 
import img from "./images2/img.jpg"
import img2 from './images2/img2.webp'
import img3 from './images2/img3.jpg'
import img5 from './images2/img5.jpg'
import img6 from './images2/img6.webp'

function Car0uselse11() {
  return (
    <>
      <div 
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000" // Set the interval (3 seconds in this example)
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img6} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Car0uselse11;
