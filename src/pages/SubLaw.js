import React from "react";
import "./index.css";
import NavbarLaw from "./Navbar";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function SubLaw() {
  //-----------------Routing Catching parameters
  let navigate = useNavigate();
  let location = useLocation();

  //------------Navigate to home---------
  const MoreInfoComponent = (text) => {
    navigate(`/Lawyer/${text}`, { state: "sub" });
  };

  //----------------Sections holding array---------------
  let [data, setdata] = useState([]);

  //-------------------Dark and Light mode method -------------
  let [mode, setmode] = useState(true);
  let [bgcol, setbgcol] = useState("white");
  let [txtcol, settxtcol] = useState("#262626");
  let [title, settitle] = useState("");
  let [summary, setsummary] = useState("");

  const changeBG = () => {
    if (mode === "false") {
      setbgcol("white");
      settxtcol("#262626");
      setmode("true");
      localStorage.setItem("mode", mode);
    } else {
      setbgcol("#262626");
      settxtcol("white");
      setmode("false");
      localStorage.setItem("mode", mode);
    }
  };

  //-------------------------------------------------------------------------

  //---------------------------------------------------------------------------------

  const SubLawDetails = (ele, index) => {
    // alert(ele);
    // console.log(ele);
    navigate("/Lawyer/LawDetails", {
      state: {
        titlename: title,
        chapterName: data[index].name,
        Section: ele,
        chapters: data,
        summary: summary,
      },
    });
  };

  useEffect(() => {
    if (location?.state?.detailpannel != undefined) {
      settitle(location?.state?.detailpannel.title);
      setdata(location?.state?.detailpannel?.chapters);
      setsummary(location?.state?.detailpannel?.summary);
    } else {
      setdata(location.state[1]);
      settitle(location.state[2]);
      setsummary(location.state[0]);
    }
  }, [location]);

  //---------------------Dom Elements --------------------
  let MainCon = (
    <div style={{ background: bgcol }}>
      <NavbarLaw />{" "}
      <div className="sub-title">
        <p className="path-container">
          <span className="path" onClick={() => MoreInfoComponent("")}>
            Home
          </span>{" "}
          /{" "}
          <span className="path" onClick={() => MoreInfoComponent("law")}>
            Laws
          </span>{" "}
          /
        </p>
        <h1>{title}</h1>
      </div>
      <section
        className="search-container"
        style={{ background: bgcol, justifyContent: "flex-end" }}
      >
        <label className="switch">
          <input type="checkbox" onClick={changeBG} />
          <span className="slider"></span>
        </label>
      </section>
      <div className="summary" style={{ color: txtcol, background: bgcol }}>
        <p>{summary}</p>
      </div>
      <div
        className="SubLawContainer"
        style={{
          color: txtcol,
          background: bgcol,
          minHeight: "400px",
          paddingBottom: "50px",
        }}
      >
        {data.map((e, ind) => {
          return (
            <>
              <h4
                className="chapter-name"
                style={{ color: txtcol, background: bgcol }}
              >
                Chapter {"  "}
                {e.name}
              </h4>
              <ul className="Sections-names">
                {e.sections.map((sec) => {
                  return (
                    <li onClick={() => SubLawDetails(sec, ind)}>{sec.name}</li>
                  );
                })}
              </ul>
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );

  return MainCon;
}
