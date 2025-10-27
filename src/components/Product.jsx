import React from "react";

export const Product = () => {
  return (
    <>
      <section className="py-16 ">
        {/* Gallery heading */}
        <h2 className="text-3xl  font-bold text-center mb-10 text-brand">
          -Gallery-
        </h2>

        {/* Responsive grid */}
        <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-6">
          {[
            "model1.jpg",
            "model2.png",
            "model4.jpg",
            "model5.jpg",
            "model6.jpg",
            "model7.jpg",
            "model8.jpg",
            "model9.jpeg",
            "model10.jpeg",
            "model12.jpg",
            "model13.jpg",
            "model14.jpg",
          ].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 bg-gray-100"
            >
              <img
                src={`/img/model/${img}`}
                alt={`model ${i + 1}`}
                className="w-full h-[420px] object-cover object-center"
              />
            </div>
          ))}
        </main>
      </section>
    </>
  );
};
export default Product;
