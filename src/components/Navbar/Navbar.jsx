import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
    const nav = useRef(null)

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
