import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Marque from "./Marque";

const Home = () => {
  return (
    <>
      <div className="bg-test"> </div>
      <Navbar />
      <main>
        <div className="absolute  w-lg top-40  object-contain z-10 left-14">
          <img src="src/img/Brand name.png" alt="brand name" />
          <h4 className="text-[15px] font-bold text-brand">
            MADE FOR THE CONFIDENT GEN-Z
          </h4>
          <a
            href="#contact"
            className="bg-brand text-white font-bold px-4 py-2 mt-1 absolute  rounded-[200px] hover:bg-gray-900 transition"
          >
            OUR GALLERY
          </a>
        </div>

        <img
          src="src/img/HERO-MODEL.png"
          className="h-screen absolute bottom-0 top-4 right-72 w-48 object-contain"
          alt=""
        />
      </main>
      <Marque />
    </>
  );
};

export default Home;
