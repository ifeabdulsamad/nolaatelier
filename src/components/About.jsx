import React from "react";

const About = () => {
  return (
    <>
      {/* <section className="h-screen bg-amber-950">
        <div className="text-3xl font-bold">About</div>
        <main className=" bg-amber-400 ">
          <div className="bg-amber-800 mx-10 w-64">
            <h1 className="font-bold text-2xl">VISION</h1>
            <p className="text-[1.2rem]">
              To become the go to Africa GEN-Z fashion brand recognised for
              creativity, precision tailoring, and trend-leading designs.
            </p>
          </div>
          <div className="bg-amber-800 mx-10 w-64">
            <h1 className="font-bold text-2xl">MISSION</h1>
            <p className="text-[1.2rem]">
              To design and tailor outfits that blend modern trends with
              cultural identity- making GEN-Z feel seen, stylish, and authentic
            </p>
          </div>
          <div className="bg-amber-800 mx-10 w-64">
            <h1 className="font-bold text-2xl">BRAND PURPOSE</h1>
            <p className="text-[1.2rem]">
              PURPOSE To empower young women to express confidece,
              individuality, and modern elegance through stylish custom-made
              fashion
            </p>
          </div>
        </main>
      </section> */}
      <section className="py-16 ">
        {/* Section heading */}
        <h1 className="text-3xl font-bold text-center text-brand w-full mb-10">
          -About Us-
        </h1>

        {/* Centered grid */}
        <div className="flex items-center justify-center text-brand">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a
              href="#"
              className="group relative block h-64 sm:h-80 lg:h-96 w-80 sm:w-96"
            >
              <span className="absolute inset-0 border-2 border-dashed border-brand"></span>

              <div className="relative flex h-full transform items-end border-2 border-brand bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 sm:size-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    OUR VISION
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    OUR VISION
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    To become the go to Africa GEN-Z fashion brand recognised
                    for creativity, precision tailoring, and trend-leading
                    designs.
                  </p>
                </div>
              </div>
            </a>

            {/* Duplicate cards */}
            <a
              href="#"
              className="group relative block h-64 sm:h-80 lg:h-96 w-80 sm:w-96"
            >
              <span className="absolute inset-0 border-2 border-dashed border-brand"></span>
              <div className="relative flex h-full transform items-end border-2 border-brand bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 sm:size-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    OUR MISSION
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    OUR MISSION
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    To design and tailor outfits that blend modern trends with
                    cultural identity- making GEN-Z feel seen, stylish, and
                    authentic
                  </p>
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a
              href="#"
              className="group relative block h-64 sm:h-80 lg:h-96 w-80 sm:w-96"
            >
              <span className="absolute inset-0 border-2 border-dashed border-brand"></span>
              <div className="relative flex h-full transform items-end border-2 border-brand bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 sm:size-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    BRAND PURPOSE
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    BRAND PURPOSE
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    URPOSE To empower young women to express confidece,
                    individuality, and modern elegance through stylish
                    custom-made fashion
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
