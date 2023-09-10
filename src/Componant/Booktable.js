import React from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import  '../Styles/Booktable.css'
import { Link, NavLink } from "react-router-dom";
import Map from "./Map";
function Booktable() {
 
  return (
    <>
      <div className="container" id="booktable">
        <div className="row">
          <div div className="col-sm-12 col-md-6 col-lg-6 bookicol1">
            <h1>Book A Table</h1>

            
            <form>
              <div class="mb-2">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter your name"
                />
              </div>
              <div class="mb-2">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  phone number
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your number"
                />
              </div>
              <label for="exampleFormControlInput1" class="form-label">
                person
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>how many person</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="2">Four</option>
                <option value="3">Five</option>
              </select>
              <br />

              <button type="button" class="btn btn-warning btn-lg bookbtn">
              Book Now
              </button>
             
            </form>
          </div>
         
          <div className="col-md-6 col-lg-6 col-sm-12 mapii">
         <Map/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booktable;
