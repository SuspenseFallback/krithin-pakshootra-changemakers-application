import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main className="home-page">
        <div className="page page-1">
          <div className="left-side">
            <h1 className="header">
              Hello, this is <span>Krithin Jay Pakshootra</span>
            </h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, optio nisi quae dolore suscipit harum dicta beatae
              amet possimus error laboriosam maxime quia corporis dolores.
              Officiis odio ratione sequi aliquam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maiores neque minima nostrum soluta
              saepe tenetur ratione iure laudantium recusandae inventore quis
              dolore perferendis fugit aut omnis adipisci facilis, voluptatem
              quaerat.
            </p>
          </div>
          <div className="right-side"></div>
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
