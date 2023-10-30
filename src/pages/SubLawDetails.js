import React, { useEffect } from "react";
import NavbarLaw from "./Navbar";
import Footer from "./Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function SubLawDetails() {
  let [mode, setmode] = useState(true);
  let [bgcol, setbgcol] = useState("white");
  let [txtcol, settxtcol] = useState("#262626");
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
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    console.log(location.state);
  }, [location]);
  const MoreInfoComponent = (text) => {
    navigate(`/Lawyer/${text}`, { state: "sub" });
  };
  const tochapter = (text) => {
    navigate(`/Lawyer/${text}`, {
      state: {
        detailpannel: {
          title: location.state.titlename,
          chapters: location.state.chapters,
          summary: location.state.summary,
        },
      },
    });
  };
  return (
    <>
      <NavbarLaw />
      <div className="sub-title">
        <p className="path-container">
          <span className="path" onClick={() => MoreInfoComponent("")}>
            Home
          </span>{" "}
          /{" "}
          <span className="path" onClick={() => MoreInfoComponent("law")}>
            Laws
          </span>{" "}
          /{" "}
          <span className="path" onClick={() => tochapter("LawSection")}>
            Chapters
          </span>{" "}
          /
        </p>
        <h1>{location.state.titlename}</h1>
      </div>
      <section
        className="search-container"
        style={{
          background: bgcol,
          justifyContent: "flex-end",
          marginTop: "-10px",
        }}
      >
        <label className="switch">
          <input type="checkbox" onClick={changeBG} />
          <span className="slider"></span>
        </label>
      </section>
      <div
        className="SubLawDetails"
        style={{
          minHeight: "500px",
          background: bgcol,
          color: txtcol,
          paddingBottom: "50px",
        }}
      >
        <h3>{location.state.Section.name}:</h3>

        <ul style={{ color: txtcol }}>
          {location.state.Section.details.map((con) => {
            return (
              <>
                {typeof con == "string" ? (
                  <>
                    <li>{con}</li>
                    <br />
                  </>
                ) : (
                  <>
                    <li>
                      {con.name}

                      <ul id="innerlist" style={{ color: txtcol }}>
                        {con.details.map((d) => {
                          return (
                            <>
                              {typeof d == "string" ? (
                                <li>{d}</li>
                              ) : (
                                <>
                                  <li>
                                    {d.name}
                                    <br />
                                    <ul
                                      id="innerlist"
                                      style={{ color: txtcol }}
                                    >
                                      {d.details.map((dn) => {
                                        return <li>{dn}</li>;
                                      })}
                                    </ul>
                                  </li>
                                </>
                              )}
                            </>
                          );
                        })}
                      </ul>
                      <br />
                    </li>
                  </>
                )}
              </>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}
