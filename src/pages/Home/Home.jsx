import React, { useLayoutEffect, useEffect, useRef } from "react";
import "./Home.css";
import gsap from "gsap";
import flashcardApp from "../../assets/flashcard-app.png";
import businessGame from "../../assets/business-board.png";
import greenstand from "../../assets/greenstand.png";
import javascript from "../../assets/free-code-camp-js-certification.png";
import html from "../../assets/free-code-camp-responsive-web-design.png";
import praiseCard from "../../assets/praise-card.jpg";
import excellence from "../../assets/dcis-excellence-certificate.pdf";
import resilience from "../../assets/Integrity-Year8-KrithinPakshootra.pdf";

const Home = () => {
  const home = useRef(null);
  useEffect(() => {
    document.title = "Home | Krithin Jay Pakshootra";
  }, []);

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
          duration: window.innerWidth > 1001 ? 1.5 : 2,
          stagger: 0.4,
          scrollTrigger: {
            trigger: element.querySelector(".page-2"),
            start: window.innerWidth > 1001 ? "top 40%" : "top 60%",
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

  useLayoutEffect(() => {
    const element = home.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element.querySelector(".page-4 .header"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: element.querySelector(".page-4"),
            start: "top 60%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        element.querySelector(".page-4 .certs"),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: element.querySelector(".page-4"),
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
        element.querySelectorAll(".page-5 .reason-2 > *"),
        {
          opacity: 0,
          x: 20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          stagger: 0.4,
          scrollTrigger: {
            trigger: element.querySelector(".page-5"),
            start: "top 60%",
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
        element.querySelectorAll(".page-6 .staggered"),
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          stagger: 0.4,
          scrollTrigger: {
            trigger: element.querySelector(".page-6"),
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
        element.querySelectorAll(".page-7 .reason-3 > *"),
        {
          opacity: 0,
          x: 20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          stagger: 0.4,
          scrollTrigger: {
            trigger: element.querySelector(".page-7"),
            start: "top 60%",
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
        element.querySelector(".page-8 .values .value.excellence"),
        {
          opacity: 0,
          x: -200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector(".page-8"),
            start: "top 50%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        element.querySelector(".page-8 .values .value.creativity"),
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector(".page-8"),
            start: "top 50%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        element.querySelector(".page-8 .values .value.integrity"),
        {
          opacity: 0,
          x: -200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector(".page-8"),
            start: "top 10%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        element.querySelector(".page-8 .values .value.resilience"),
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector(".page-8"),
            start: "top 10%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        element.querySelector(".page-8 .values .value.kindness"),
        {
          opacity: 0,
          x: -200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector(".page-8"),
            start: "top -40%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        element.querySelector(".page-8 .values .value.diversity"),
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector(".page-8"),
            start: "top -40%",
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
        element.querySelector(".page-initiative .header"),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: element.querySelector(".page-initiative"),
            start: "top 60%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        element.querySelectorAll(".page-initiative .content > div"),
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element.querySelector(".page-initiative"),
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
              <p className="title">My knowledge</p>
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
              <a href={flashcardApp} target="_blank" rel="noreferrer">
                <img src={flashcardApp} alt="Flashcard app" />
              </a>
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
              <a href={businessGame} target="_blank" rel="noreferrer">
                <img src={businessGame} alt="Business Tic-Tac-Toe" />
              </a>
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
              <a href={greenstand} target="_blank" rel="noreferrer">
                <img src={greenstand} alt="Greenstand" />
              </a>
              <p className="title">Greenstand</p>
              <p className="desc">
                I didn't make this, but I volunteered for it! Here, I worked on
                the admin panel and responsive wallet UI for the company. More
                about Greenstand here:{" "}
                <a
                  href="https://greenstand.org/"
                  target="_blank"
                  rel="noreferrer"
                >
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
              <a href={javascript} target="_blank" rel="noreferrer">
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
              <a href={html} target="_blank" rel="noreferrer">
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
          <button className="button">View all</button>
        </div>
        <div className="page page-5">
          <div className="reason-2">
            <p className="header">Reason #2</p>
            <div className="text">
              <p className="title">My experience</p>
              <p className="desc">
                I have already been a member of the learning and digital
                committee last year (then called the Digital Culture and
                Learning committee).
                <br />
                As a team, we:
                <ul>
                  <li>Helped set up Microsoft Teams for the school</li>
                  <li>
                    Made tutorial videos to teach students how to use MS Teams
                  </li>
                  <li>
                    Hosted a workshop with live demoes of how to use MS Teams
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="page page-6">
          <div className="praise-card">
            <div className="text staggered">
              <p className="title staggered">Praise Card</p>
              <p className="desc">
                A praise card I received from SLT for helping in the Microsoft
                Teams workshop
              </p>
            </div>
            <img src={praiseCard} alt="Praise Card" className="img staggered" />
          </div>
        </div>
        <div className="page page-initiative">
          <p className="header">
            What would I do as the lead of the Learning and Digital Committee?
          </p>
          <div className="content">
            <div className="left">
              <p className="title">
                Example #1: Social Media for Student Perspective
              </p>
              <p className="desc">
                We could open a social media account separate from the DCIS
                official instagram and create posts from a student's
                perspective. These would be from any student that sends an idea
                to us, and would showcase any cool events or just the day-to-day
                life of a student in Dover Court. It would be beneficial for the
                school and it allows students to voice their opinions and events
                on an account where everyone's safety and wellbeing is taken
                into account.
              </p>
            </div>
            <div className="right">
              <p className="title">Example #2: Hackathon</p>
              <p className="desc">
                A week-long event where every form time, the students get to
                learn Python and do programming tasks. They would be rewarded
                with house points for certain milestones in finishing the
                programming tasks. This would help introduce students to
                programming in a world where tech-based industry is larger than
                ever and might be one of the largest fields in the future.
              </p>
            </div>
          </div>
        </div>
        <div className="page page-7">
          <div className="reason-3">
            <p className="header">Reason #3</p>
            <div className="text">
              <p className="title">My Values</p>
              <p className="desc">
                I am a firm believer in our school values, which are:
                <ul>
                  <li>Excellence</li>
                  <li>Creativity</li>
                  <li>Integrity</li>
                  <li>Resilience</li>
                  <li>Kindness</li>
                  <li>Diversity</li>
                </ul>
                and I aim to demonstrate these values in my day-to-day life.
              </p>
            </div>
          </div>
        </div>
        <div className="page page-8">
          <div className="values">
            <div className="value excellence">
              <p className="title">Excellence</p>

              <p className="desc">
                <i>the quality of being outstanding or extremely good.</i>
                <br />
                <br />A certificate I received from the school:
                <a
                  href={excellence}
                  download="krithin-pakshootra-excellence-certificate"
                  className="download"
                >
                  Download
                </a>
              </p>
            </div>
            <div className="value creativity">
              <p className="title">Creativity</p>
              <p className="desc">
                <i>
                  the use of imagination or original ideas to create something;
                  inventiveness.
                </i>
                <br />
                <br />I use my creative skills to help me design engaging,
                colourful websites that attract user attention. They also help
                to create solutions to logical problems in a unique manner.
              </p>
            </div>
            <div className="value integrity">
              <p className="title">Integrity</p>
              <p className="desc">
                <i>
                  the quality of being honest and having strong moral
                  principles.
                </i>
                <br />
                <br />
                An integral part of my life is maintaining a positive attitude.
                This helps me stay calm in stressful situations and overall have
                a better outlook on life that helps me improve in all areas.
              </p>
            </div>
            <div className="value resilience">
              <p className="title">Resilience</p>
              <p className="desc">
                <i>
                  the capacity to withstand or to recover quickly from
                  difficulties; toughness.
                </i>
                <br />
                <br />
                Another certificate I received from the school:
                <a
                  href={resilience}
                  download="krithin-pakshootra-resilience-certificate"
                  className="download"
                >
                  Download
                </a>
              </p>
            </div>
            <div className="value kindness">
              <p className="title">Kindness</p>
              <p className="desc">
                <i>the quality of being friendly, generous, and considerate.</i>
                <br />
                <br />
                After joining this school, the kindness that some people have
                showed me have inspired me to be a positive, kind person who
                cares about everyone's health and wellbeing.
              </p>
            </div>
            <div className="value diversity">
              <p className="title">Diversity</p>
              <p className="desc">
                <i>
                  the practice or quality of including or involving people from
                  a range of different social and ethnic backgrounds and of
                  different genders, sexual orientations, etc.
                </i>
                <br />
                <br />
                The very reason as to why I joined this school is because I
                wanted to be exposed to a diverse environment where I can meet
                and experience new cultures. I have always been proud of my
                culture, and accepting and curious about other's.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
