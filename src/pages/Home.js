import React, { useEffect } from "react";
import "./index.css";
import NavbarLaw from "./Navbar";
import background from "../Images/contactbg.png";
import { useState } from "react";
import RoundAni from "./RoundAni";
import Footer from "./Footer";
import { BsDot } from "react-icons/bs";
import vision from "../Images/vision.jpg";
import "bootstrap/dist/css/bootstrap.css";
import { GoLaw } from "react-icons/go";
import { GiTennisCourt } from "react-icons/gi";
import { VscLaw } from "react-icons/vsc";
import { GiTripleGate } from "react-icons/gi";
import { BsArrowUpShort, BsCardText, BsPeopleFill } from "react-icons/bs";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import { FaHands } from "react-icons/fa";
import About from "../Images/about.jpg";
import ConatctForm from "./ConatctForm";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const maxValue1 = 79;
  const maxValue2 = 256;
  const maxValue3 = 324;

  const incrementCounters = () => {
    if (counter1 < maxValue1) {
      setCounter1((prevCounter) => prevCounter + 1);
    }
    if (counter2 < maxValue2) {
      setCounter2((prevCounter) => prevCounter + 1);
    }
    if (counter3 < maxValue3) {
      setCounter3((prevCounter) => prevCounter + 1);
    }
  };

  setTimeout(incrementCounters, 20);

  //---------------------------------------------------------------------------------------------

  let [pos, changepos] = useState("none");

  //-------------------------------------------------------------------------------------------

  let [TitleOfModal, settitle] = useState("Title");
  let [ModalPara, setpara] = useState(
    " Lawyers for Lawyers promotes and preserves the independence of the legal profession worldwide and defends the professional rights oflawyers to provide legal services safely and independently, withoutfear of reprisal. We safeguard the lawyersrole in protecting therule of law and human rights and ensuring effective justice for all"
  );
  let ModalData = (data) => {
    setShow(true);
    settitle("Title of Card");
  };

  let maincon = (
    <div>
      <div id="#">
        <NavbarLaw />
        <section className="title-main">
          <ul className="wrapper">
            <a href="/Lawyer/law">
              <button className="icon facebook">
                <span className="tooltip">
                  <GoLaw />
                </span>
                <span>Laws</span>
              </button>
            </a>
            <a href="/Lawyer/Blog">
              <button className="icon twitter">
                <span className="tooltip">
                  <BsCardText />
                </span>
                <span>Blogs</span>
              </button>
            </a>

            <button className="icon instagram">
              <span className="tooltip" id="t1" style={{ height: "43px" }}>
                <GoLaw
                  style={{
                    fontSize: "17px",
                    marginLeft: "4.2px",
                    marginTop: "-13px",
                  }}
                />
                <br />
                <FaHands style={{ marginTop: "-65px" }} />
              </span>
              <span>Legal Assistance</span>
            </button>
          </ul>
          <br />
          <br />
        </section>
      </div>
      <div className="marquue" style={{ position: "sticky" }}>
        <div className="marquee">
          <div className="track">
            <div className="content">
              &nbsp;<span>Legis Law</span> <span>Legis Law</span>{" "}
              <span>Legis Law</span> <span>Legis Law</span>{" "}
              <span>Legis Law</span>
              <span>Legis Law</span> <span>Legis Law</span>{" "}
              <span>Legis Law</span> <span>Legis Law</span>{" "}
              <span>Legis Law</span>
            </div>
          </div>
        </div>
      </div>
      <BiSolidQuoteLeft className="quote-icon" />
      <div>
        <div className="quote-text">
          <span style={{ fontSize: "30px", fontWeight: "bold" }}>
            <span style={{ marginRight: "10px" }}>
              {" "}
              Promote
              <span className="underline"></span>
            </span>
            and protect the independence of lawyers
          </span>
          <p className="quote">
            <br />
            <span className="spacer"></span>
            Lawyers for Lawyers promotes and preserves the independence of the
            legal profession worldwide and defends the professional rights of
            lawyers to provide legal services safely and independently, without
            fear of reprisal. We safeguard the lawyers’ role in protecting the
            rule of law and human rights and ensuring effective justice for all
            by acting wherever lawyers are under threat. In doing so, we refer
            to internationally recognized human rights laws and standards,
            including the UN Basic Principles on the Role of Lawyers.
            <br />
            <br />
            <span className="mission">
              <strong>mission</strong>
            </span>
          </p>
        </div>
        <BiSolidQuoteRight className="quote-icon1" />
      </div>

      {/* <RoundAni /> */}
      <br />
      <br />

      <section className="container-fluid card-blog-outer">
        <div className="row">
          <div className="col-md-8 vision-p">
            <h2>
              Vision<span className="underline"></span>
            </h2>
            <p>
              We strive for a world where lawyers can practice law freely and
              independently to effectively fulfil their role in upholding the
              rule of law and the protection of human rights. Lawyers should be
              able to do their job without improper interference or fear of
              reprisal. Always and everywhere. Also, when that does not suit the
              government, the bar association, or the establishment.
            </p>
          </div>
          <div className="col-md-4 More_img">
            {/* <RoundAni className="Ri" /> */}
            <div className="vision-img-outer">
              <img className="vision-img" src={vision} />
            </div>
          </div>
        </div>{" "}
      </section>

      <hr className="hr" />
      <br />
      <br />

      <div>
        <img className="background" src={background} />
        <div className="Counters" id="element">
          <div className="counter-title">
            <h2>
              Our
              <br />
              Acheivement
            </h2>
          </div>
          <div className="counter">
            <div className="count-value">{counter1}+</div>
            <div className="count-row">
              {/* <div className="count-d1">
                {" "}
                <BsPeopleFill className="c-icon" />
              </div> */}
              <div className="count-d2">
                <h4>People Visited</h4>
              </div>
            </div>
          </div>
          <div className="counter">
            <div className="count-value">{counter2}+</div>
            <div className="count-row">
              {/* <div className="count-d1">
                {" "}
                <VscLaw className="c-icon" />
              </div> */}
              <div className="count-d2">
                {" "}
                <h4>Number of Laws Refered</h4>
              </div>
            </div>
          </div>
          <div className="counter">
            <div className="count-value">{counter3}+</div>
            <div className="count-row">
              {/* <div className="count-d1">
                {" "}
                <GiTripleGate className="c-icon" />
              </div> */}
              <div className="count-d2">
                <h4>Legal Assistance Provided</h4>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3 className="contact-bf">
          Our Works <br />
        </h3>
        <br />
        <section className="works-container">
          <div className="work">
            <img
              className="workimg"
              src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhd3xlbnwwfHwwfHx8MA%3D%3D&w=600"
            />
            <h4 className="work-title">
              Crime Cases
              <br />
              <span onClick={() => ModalData()}>More Info</span>
            </h4>
          </div>
          <div className="work">
            <img
              className="workimg"
              src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhd3xlbnwwfHwwfHx8MA%3D%3D&w=600"
            />
            <h4 className="work-title">
              {" "}
              Accident Cases
              <br />
              <span onClick={() => ModalData()}>More Info</span>
            </h4>
          </div>
          <div className="work">
            <img
              className="workimg"
              src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhd3xlbnwwfHwwfHx8MA%3D%3D&w=600"
            />
            <h4 className="work-title">
              Civil Cases
              <br />
              <span onClick={() => ModalData()}>More Info</span>
            </h4>
          </div>
          <div className="work">
            <img
              className="workimg"
              src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhd3xlbnwwfHwwfHx8MA%3D%3D&w=600"
            />
            <h4 className="work-title">
              Family Cases
              <br />
              <span onClick={() => ModalData()}>More Info</span>
            </h4>
          </div>
          <div className="work">
            <img
              className="workimg"
              src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhd3xlbnwwfHwwfHx8MA%3D%3D&w=600"
            />

            <h4 className="work-title">
              Marriage Cases
              <br />
              <span onClick={() => ModalData()}>More Info</span>
            </h4>
          </div>
          <div className="work">
            <img
              className="workimg"
              src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhd3xlbnwwfHwwfHx8MA%3D%3D&w=600"
            />
            <h4 className="work-title">
              Federal Cases
              <br />
              <span onClick={() => ModalData()}>More Info</span>
            </h4>
          </div>
        </section>
        <br id="about" />
        <h3 className="contact-bf">
          About <span style={{ fontWeight: "400" }}>Us</span>
        </h3>
        <br />

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="about-img-outer">
                <img className="about-img" src={About} />
              </div>
            </div>
            <div className="col-md-8">
              <p className="about-para">
                <br />
                An About Us page is a section on a website that provides
                information about a company, organization, or individual. It's
                an opportunity to tell your brand's story, share your vision,
                history, values, and achievements, and introduce team members.
                <br />
                <button id="bt1">About</button>
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <br />
        <br id="contact" />
        <br />
        <h3 className="contact-bf">
          Want to Resolve <br /> A Case
        </h3>
        <br />

        <ConatctForm />
      </div>
      <Footer />

      {/* ----------------------------------------------modal data */}
      <Modal show={show} onHide={handleClose} style={{ width: "100%" }}>
        <Modal.Header closeButton>
          <Modal.Title>{TitleOfModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ModalPara}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

  return maincon;
}
