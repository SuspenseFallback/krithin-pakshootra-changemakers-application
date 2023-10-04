import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import "./Navbar.css";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const nav = useRef(null);

  useLayoutEffect(() => {
    const element = nav.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { backgroundColor: "transparent" },
        {
          backgroundColor: "#e6e1fb",
          duration: 1,
          scrollTrigger: {
            trigger: document.querySelector(".body-wrapper .page-1"),
            start: "20%",
            end: "bottom 70%",
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="navbar" ref={nav}>
        <p className="logo">Krithin Jay Pakshootra</p>
        <div className="nav-items">
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
          <div className="nav-item hover-underline">
            <NavLink to="/" className="nav-link">
              Why me?
            </NavLink>
          </div>
        </div>
      </div>
      <div className="body-wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
