import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Marque from "./Marque";

const Home = () => {
  return (
    <>
      <div className="bg-test"> </div>
      <Navbar />
      <main className="mx-auto absolute top-20 md:top-6 flex w-full align-middle h-screen  ">
        <div className="md:flex md:my-auto align-baseline   mx-auto gap-[310px] ">
          <div className=" my-auto">
            <img
              src="src/img/Brand name.png"
              alt="brand name"
              className="w-[10rem] md:w-[30rem]"
            />
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
          <div>
            <img
              src="src/img/HERO-MODEL.png"
              className="w-48 md:w-[14.5rem] object-contain md:mr-40  my-24"
              alt=""
            />
          </div>
        </div>
      </main>
      <Marque />
    </>
  );
};

export default Home;
