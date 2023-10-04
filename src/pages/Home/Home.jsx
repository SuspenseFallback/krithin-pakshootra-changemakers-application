import React, { useLayoutEffect, useRef } from "react";
import "./Home.css";
import gsap from "gsap";
import scrollSvg from "scroll-svg";

const Home = () => {
  const home = useRef(null);

  useLayoutEffect(() => {
    const element = home.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element.querySelector(".page-1 .header"),
        {
          y: -30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: element.querySelector(".page-1 .header"),
            start: "-20%",
            end: "bottom 50%",
          },
        }
      );

      gsap.fromTo(
        element.querySelector(".page-1 .header"),
        {},
        {
          duration: 1.5,
          scrollTrigger: {
            trigger: element.querySelector(".page-1 .header"),
            start: "-20%",
            end: "bottom 50%",
            pin: true,
            markers: true,
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const element = document.querySelector("#react-icon-path-1");

    const svg = scrollSvg(element);
  }, []);

  return (
    <>
      <main className="home-page" ref={home}>
        <div className="page page-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-11.5 -10.23174 23 20.46348"
            className="react-svg-icon"
          >
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" stroke-width="1" fill="none">
              <ellipse rx="11" ry="4.2" id="#react-icon-path-1" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
          <p className="header">Hello world</p>
        </div>
        <div className="page page-2">
          <p className="header">About me</p>
        </div>
        <div className="page page-3">
          <p className="header">My projects</p>
          <div className="cards"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
