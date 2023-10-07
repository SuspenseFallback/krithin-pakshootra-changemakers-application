import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import "./Navbar.css";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import Footer from "../Footer/Footer";

const Navbar = () => {
  const [sidebar, set_sidebar] = useState(false);
  const [is_responsive, set_is_responsive] = useState(window.innerWidth < 1030);

  const nav = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      if (window.innerWidth > 1030) {
        set_sidebar(false);
        set_is_responsive(false);
      } else {
        set_is_responsive(true);
      }
    });
  }, []);

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
                <NavLink to="/" className="nav-link">
                  About me
                </NavLink>
              </div>
              <div className="nav-item hover-underline">
                <NavLink to="/" className="nav-link">
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
      <div className={"sidebar " + (sidebar ? "" : "hidden")}></div>
      <div className={"body-wrapper "}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
