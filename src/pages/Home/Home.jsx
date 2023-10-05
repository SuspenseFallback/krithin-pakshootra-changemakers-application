import React, { useLayoutEffect, useRef } from "react";
import "./Home.css";
import gsap from "gsap";
import flashcardApp from "../../assets/flashcard-app.png";
import businessGame from "../../assets/business-board.png";
import greenstand from "../../assets/greenstand.png";
import javascript from "../../assets/free-code-camp-js-certification.png";
import html from "../../assets/free-code-camp-responsive-web-design.png";

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
          duration: 2,
          scrollTrigger: {
            trigger: element.querySelector(".page-1"),
            start: "top 50%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const element = home.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element.querySelectorAll(".page-2 .reason-1 > *"),
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          stagger: 0.4,
          scrollTrigger: {
            trigger: element.querySelector(".page-2"),
            start: "top 40%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const element = home.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element.querySelector(".page-3 .header"),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element.querySelector(".page-3"),
            start: "top 80%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        element.querySelectorAll(".page-3 .cards .card"),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element.querySelector(".page-3"),
            start: "top 40%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main className="home-page" ref={home}>
        <div className="page page-1">
          <p className="header">
            <span>This is why</span> I should be lead/member of the Learning &
            Digital committee
          </p>
        </div>
        <div className="page page-2">
          <div className="reason-1">
            <p className="header">Reason #1</p>
            <div className="text">
              <p className="title">My experience</p>
              <p className="desc">
                I am very familiar with computing and multiple programming
                languages, such as{" "}
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React / Next.js</li>
                  <li>React Native</li>
                  <li>Vue / Nuxt.js</li>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>C#</li>
                  <li>Java</li>
                  <li>Dart</li>
                  <li>Flutter</li>
                </ul>
                and am well-versed in external tools as well:
                <ul>
                  <li>Firebase</li>
                  <li>MongoDB</li>
                  <li>Blender</li>
                  <li>Fusion 360</li>
                  <li>Unity</li>
                  <li>Unreal Engine</li>
                  <li>Git and Github</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="page page-3">
          <p className="header">Some of my projects</p>
          <div className="cards">
            <div className="card">
              <img src={flashcardApp} alt="Flashcard app" />
              <p className="title">Flashcards</p>
              <p className="desc">
                An app I made which you can use to make and study flashcards for
                a variety of subjects. It has a search function, flashcards,
                dictation, learning and more! It is still in progress, but a
                working prototype can be found.
              </p>
              <button className="button">See more</button>
            </div>
            <div className="card">
              <img src={businessGame} alt="Business Tic-Tac-Toe" />
              <p className="title">Business Tic-Tac-Toe</p>
              <p className="desc">
                What if you took tic-tac-toe (or noughts and crosses), but added
                business to it? This was one of our class projects for business.
                Every time you click a square, you have to answer a question to
                fill it in. Tic-Tac-Toe with a twist!
              </p>
              <button className="button">See more</button>
            </div>
            <div className="card">
              <img src={greenstand} alt="Greenstand" />
              <p className="title">Greenstand</p>
              <p className="desc">
                I didn't make this, but I volunteered for it! Here, I worked on
                the admin panel and responsive wallet UI for the company. More
                about Greenstand here:{" "}
                <a href="https://greenstand.org/" target="_blank">
                  Greenstand
                </a>
              </p>
              <button className="button">See more</button>
            </div>
          </div>
        </div>
        <div className="page page-4">
          <p className="header">My certification for programming</p>
          <div className="certs">
            <div className="card">
              <a href={javascript} target="_blank">
                <img
                  src={javascript}
                  alt="Javascript algorithms and data structures"
                />
              </a>
              <p className="title">Javascript algorithms and data structures</p>
              <a
                href={javascript}
                download="krithin-pakshootra-freecodecamp-javascript-certification"
                className="download"
              >
                Download
              </a>
            </div>
            <div className="card">
              <a href={html} target="_blank">
                <img src={html} alt="Responsive web design" />
              </a>
              <p className="title">Responsive web design</p>
              <a
                href={html}
                download="krithin-pakshootra-freecodecamp-responsive-web-design-certification"
                className="download"
              >
                Download
              </a>
            </div>
          </div>
        </div>
        <div className="page page-5">
          <p className="header">Reason #2</p>
        </div>
      </main>
    </>
  );
};

export default Home;
