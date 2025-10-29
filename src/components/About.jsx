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
        <div className="flex items-center justify-center text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <main className="group relative block h-64 sm:h-80 lg:h-96 w-80 sm:w-96">
              <span className="absolute inset-0 border-2 border-dashed border-brand"></span>
              <div className="relative flex h-full transform items-end border-2 border-brand bg-brandpink transition-transform -translate-x-2 -translate-y-2">
                <div className=" p-4 sm:p-6 lg:p-8 text-brand">
                  <h3 className="mt-4 text-xl font-bold sm:text-2xl ">
                    OUR VISION
                  </h3>
                  <p className="mt-4 text-sm font-medium sm:text-base ">
                    To become the go to Africa GEN-Z fashion brand recognised
                    for creativity, precision tailoring, and trend-leading
                    designs.
                  </p>
                </div>
              </div>
            </main>

            {/* Duplicate cards */}
            <main className="group relative block h-64 sm:h-80 lg:h-96 w-80 sm:w-96">
              <span className="absolute inset-0 border-2 border-dashed border-brand"></span>
              <div className="relative flex h-full transform items-end border-2 border-brand  bg-brand transition-transform -translate-x-2 -translate-y-2">
                <div className=" p-4 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-bold sm:text-2xl">
                    OUR MISSION
                  </h3>
                  <p className="mt-4 text-sm font-medium sm:text-base">
                    To design and tailor outfits that blend modern trends with
                    cultural identity- making GEN-Z feel seen, stylish, and
                    authentic
                  </p>
                </div>
              </div>
            </main>

            {/* Card 3 */}
            <main className="group relative block h-64 sm:h-80 lg:h-96 w-80 sm:w-96">
              <span className="absolute inset-0 border-2 border-dashed border-brand"></span>
              <div className="relative flex h-full transform items-end border-2 border-brand bg-brandpink transition-transform -translate-x-2 -translate-y-2">
                <div className=" p-4 sm:p-6 lg:p-8 text-brand">
                  <h3 className="mt-4 text-xl font-bold sm:text-2xl">
                    BRAND PURPOSE
                  </h3>
                  <p className="mt-4 text-sm font-medium sm:text-base ">
                    To empower young women to express confidece, individuality,
                    and modern elegance through stylish custom-made fashion
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
