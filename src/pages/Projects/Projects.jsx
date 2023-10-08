import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

import flashcardApp from "../../assets/flashcard-app.png";
import businessGame from "../../assets/business-board.png";
import greenstand from "../../assets/greenstand.png";

import "./Projects.css";
import PdfViewerComponent from "../../components/PDF";

const Projects = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const element = ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element.querySelector(".projects-page .page-1 .header"),
        {
          y: -30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const element = ref.current;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 909px)", () => {
        const photos = gsap.utils.toArray(".box > div:not(:first-child)");
        const details = gsap.utils.toArray(
          ".projects-page .page-2  .left .reason"
        );

        gsap.set(photos, {
          yPercent: 101,
        });

        ScrollTrigger.create({
          trigger: element.querySelector(".projects-page .page-2 "),
          pin: element.querySelector(".projects-page .page-2  .right"),
          start: "top top",
          end: "bottom bottom",
        });

        details.forEach((detail, index) => {
          const headline = detail.querySelector("h1");
          ScrollTrigger.create({
            trigger: headline,
            start: "top 5%",
            end: "bottom -30%",
            animation: gsap.to(photos[index], { yPercent: 0 }),
            scrub: true,
          });
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const element = ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element.querySelector(".projects-page .page-2  .reason-1 .text"),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector(".projects-page .page-2  .reason-1"),
            start: "top 40%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        element.querySelector(".projects-page .page-2  .reason-2 .text"),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector(".projects-page .page-2  .reason-2"),
            start: "top 40%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        element.querySelector(".projects-page .page-2  .reason-3 .text"),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector(".projects-page .page-2  .reason-3"),
            start: "top 40%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        element.querySelector(".projects-page .page-2  .reason-4 .text"),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector(".projects-page .page-2  .reason-4"),
            start: "top 40%",
            end: "start -40%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main className="projects-page" ref={ref}>
        <div className="page page-1">
          <p className="header">My projects</p>
          <span className="icon pi pi-angle-down"></span>
        </div>
        <div className="page page-2">
          <div className="left">
            <div className="reason reason-1">
              <div className="text">
                <h1 className="header">
                  Flashcards <span className="icon pi pi-external-link"></span>
                </h1>
                <p className="desc">
                  An app I made which you can use to make and study flashcards
                  for a variety of subjects. It has a search function,
                  flashcards, dictation, learning and more! It is still in
                  progress, but the working prototype is online.
                </p>
              </div>
            </div>
            <div className="reason reason-2">
              <div className="text">
                <h1 className="header">
                  Business Tic-Tac-Toe{" "}
                  <span className="icon pi pi-external-link"></span>
                </h1>
                <p className="desc">
                  What if you took tic-tac-toe (or noughts and crosses), but
                  added business to it? This was one of our class projects for
                  business. Every time you click a square, you have to answer a
                  question to fill it in. Tic-Tac-Toe with a twist!
                </p>
              </div>
            </div>
            <div className="reason reason-3">
              <div className="text">
                <h1 className="header">
                  Greenstand <span className="icon pi pi-external-link"></span>
                </h1>
                <p className="desc">
                  I didn't make this, but I volunteered for it! Here, I worked
                  on the admin panel and responsive wallet UI for the company.
                  More about Greenstand here:{" "}
                  <a
                    href="https://greenstand.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Greenstand
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="box">
              <div className="orange">
                <img src={flashcardApp} alt="Flashcards" className="img" />
              </div>
              <div className="white">
                <img
                  src={businessGame}
                  alt="Business Tic-Tac-Toe"
                  className="img"
                />
              </div>
              <div className="green">
                <img src={greenstand} alt="Greenstand" className="img" />
              </div>
            </div>
          </div>
          <div className="mobile-content">
            <div className="reason reason-1">
              <img src={flashcardApp} alt="Flashcards" className="img" />
              <div className="text">
                <h1 className="header">
                  Flashcards <span className="icon pi pi-external-link"></span>
                </h1>
                <p className="desc">
                  An app I made which you can use to make and study flashcards
                  for a variety of subjects. It has a search function,
                  flashcards, dictation, learning and more! It is still in
                  progress, but the working prototype is online.
                </p>
              </div>
            </div>
            <div className="reason reason-2">
              <img
                src={businessGame}
                alt="Business Tic-Tac-Toe"
                className="img"
              />
              <div className="text">
                <h1 className="header">
                  Business Tic-Tac-Toe{" "}
                  <span className="icon pi pi-external-link"></span>
                </h1>
                <p className="desc">
                  What if you took tic-tac-toe (or noughts and crosses), but
                  added business to it? This was one of our class projects for
                  business. Every time you click a square, you have to answer a
                  question to fill it in. Tic-Tac-Toe with a twist!
                </p>
              </div>
            </div>
            <div className="reason reason-3">
              <img src={greenstand} alt="Greenstand" className="img" />
              <div className="text">
                <h1 className="header">
                  Greenstand <span className="icon pi pi-external-link"></span>
                </h1>
                <p className="desc">
                  I didn't make this, but I volunteered for it! Here, I worked
                  on the admin panel and responsive wallet UI for the company.
                  More about Greenstand here:{" "}
                  <a
                    href="https://greenstand.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Greenstand
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="page page-3">
          <p className="header">My certifications</p>
          <PdfViewerComponent document={"dcis-excellence-certificate.pdf"} />

          <div className="certs"></div>
        </div>
      </main>
    </>
  );
};

export default Projects;
