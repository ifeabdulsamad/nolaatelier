import React from "react";
import "../App.css";

function Marque() {
  const images = [
    "src/img/SLIDER.png",
    "src/img/SLIDER.png",
    "src/img/SLIDER.png",
    "src/img/SLIDER.png",
    "src/img/SLIDER.png",
    "src/img/SLIDER.png",
    "src/img/SLIDER.png",
    "src/img/SLIDER.png",
    "src/img/SLIDER.png",
    "src/img/SLIDER.png",
  ];

  return (
    <div className="w-full overflow-hidden absolute bottom-1.5">
      <div className="gap-6 animate-scroll">
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="h-[50px] w-auto rounded-xl object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default Marque;
