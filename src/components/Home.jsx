import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Marque from "./Marque";

const Home = () => {
  return (
    <>
      <div className="relative h-screen bg-[url('public/img/bg.png')] bg-center bg-[length:100%_100%]"></div>

      <Navbar />
      <main className="mx-auto absolute top-0 flex w-full align-middle h-screen  ">
        <div className="md:flex justify-center items-center mx-auto gap-[310px] h-screen ">
          <div className="">
            <img
              src="public/img/Brand name.png"
              alt="brand name"
              className="w-[10rem] md:w-[30rem] align-middle "
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
              src="public/img/HERO-MODEL.png"
              className="w-48 md:w-[12.5rem] object-contain md:mr-4 mt-9"
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
