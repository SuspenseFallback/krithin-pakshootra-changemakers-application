import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { Outlet, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";

const Navbar = () => {
  const navigate = useNavigate();

  const [sidebar, set_sidebar] = useState(false);
  const [is_responsive, set_is_responsive] = useState(window.innerWidth < 1030);

  const nav = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1030) {
        set_sidebar(false);
        set_is_responsive(false);
      } else {
        set_is_responsive(true);
      }
    });
  }, []);

  const goToLink = (link) => {
    set_sidebar(false);
    navigate(link);
  };

  return (
    <>
      <div className="navbar" ref={nav}>
        <p className="logo">Krithin Jay Pakshootra</p>
        <div className={"nav-items " + (is_responsive ? "md" : "")}>
          {is_responsive ? (
            <>
              <div className="nav-item" onClick={() => set_sidebar(!sidebar)}>
                <span className="icon pi pi-bars"></span>
              </div>
            </>
          ) : (
            <>
              <div className="nav-item hover-underline">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </div>
              <div className="nav-item hover-underline">
                <NavLink to="/about" className="nav-link">
                  About me
                </NavLink>
              </div>
              <div className="nav-item hover-underline">
                <NavLink to="/my-projects" className="nav-link">
                  My projects
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className={
          is_responsive ? (sidebar ? "overlay" : "overlay hidden") : ""
        }
        onClick={() => set_sidebar(false)}
      ></div>
      <div className={"sidebar " + (sidebar ? "" : "hidden")}>
        <div className="top">
          <p className="title">Krithin Jay Pakshootra</p>
          <span
            className="icon pi pi-times"
            onClick={() => set_sidebar(false)}
          ></span>
        </div>
        <div className="items">
          <div className="item" onClick={() => goToLink("/")}>
            <p className="text">Home</p>
          </div>
          <div className="item" onClick={() => goToLink("/about")}>
            <p className="text">About me</p>
          </div>
          <div className="item" onClick={() => goToLink("/my-projects")}>
            <p className="text">My projects</p>
          </div>
        </div>
      </div>
      <div className={"body-wrapper "}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
