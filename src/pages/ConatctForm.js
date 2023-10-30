import React from "react";
import "./index.css";
import { BsFillMapFill, BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import contact from "../Images/contact.jpg";

export default function ConatctForm() {
  return (
    <>
      <div className="container-fluid form">
        <div className="row">
          <img className="contact-img" src={contact} />
          <h3 className="contact-title">
            Contact US
            <br />
            <span>Feel free to drop us a line below!</span>
          </h3>
        </div>
        <div className="row" style={{ marginTop: "-50px" }}>
          <div className="col-md-4">
            <input className="input" type="text" placeholder="Name" required />
          </div>
          <div className="col-md-4">
            <input
              className="input"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="col-md-4">
            <input
              className="input"
              type="number"
              placeholder="Phone"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <textarea className="txt" rows={6} placeholder="Message" required />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button className="contact-btn">Submit</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
