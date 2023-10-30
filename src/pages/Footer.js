import React from "react";
import "./index.css";
import { useState } from "react";
import background from "../Images/contactbg.png";

import {
  BsArrowUpShort,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
export default function Footer() {
  return (
    <>
      <footer>
        <section className="footer-details">
          <div className="details-pannel">
            <h3>Where to find us</h3>
            <p>
              1200, JB Towers, Hill Park
              <br />
              Hyderabad
              <br />
              533255{" "}
            </p>
          </div>
          <div className="details-pannel">
            <h3>Email Us at</h3>
            <p>
              Legislaw@gmail.com
              <br />
              Ravi@gmail.com
              <br />
              Vamsi345@gmail.com
            </p>
          </div>
          <div className="details-pannel">
            <h3>Call Us At</h3>
            <p>
              {" "}
              {/* <span>Phone :</span> */}
              {"  "}+ 91-9177943677
              <br />
              {/* <span>Mobile :</span> */}
              {"  "}+ 91-9955743356
              <br />
              {/* <span>Lan :</span> */}
              {"  "}1806555 - 330855
            </p>
          </div>
        </section>
        <hr className="hr" />
        <div className="under-footer">
          <section className="profile-icons">
            <BsFacebook className="profile-icon" />
            <hr className="sep" />
            <BsInstagram className="profile-icon" />
            <hr className="sep" />
            <BsTwitter className="profile-icon" />
            <hr className="sep" />
            <BsLinkedin className="profile-icon" />
          </section>
          <section className="copyrightsection">
            CopyRights ©️ 2023 - <b>Legis Law</b>
          </section>
        </div>
      </footer>
    </>
  );
}
