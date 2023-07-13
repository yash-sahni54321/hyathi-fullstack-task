import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const HomeSlider = () => {
  const slides = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/pokemon-ce075.appspot.com/o/Register.png?alt=media&token=4d36456a-416e-4c24-b32a-f7fc28301335",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/pokemon-ce075.appspot.com/o/Feed.png?alt=media&token=c308c2b7-e9a7-49ac-aef8-855530ef7ab4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  setTimeout(nextSlide, 5000);
  return (
    <div className="bg-gray-100">
      <div className="max-w-[900px] h-[540px] w-auto  m-auto py-16 px-4  group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>

        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
