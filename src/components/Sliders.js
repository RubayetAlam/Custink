import React, { useState, useEffect, useRef } from "react";
// import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const featuredProducts = [
  "/Banner/banner02.jpg",
  "/Banner/banner03.jpg",
  "/Banner/banner01.jpg",
  "/Banner/banner04.jpg",
  "/Banner/banner05.jpg",
];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
      <div className="bg-cover bg-no-repeat bg-center py-36" style={{backgroundImage: `url(${featuredProducts[currentIndex]})`}}>
        <div className="container ml-12 px-5">
            <h1 className="text-6xl text-fuchsia-600 mb-4 font-medium capitalize">Design your own cloths...</h1>
            <p className="text-fuchsia-500 font-medium">
            Create matching collections for special events,<br/> staff uniforms and business promotions.
            </p>
            <div className="mt-12">
                <NavLink to="/" className="bg-fuchsia-500 border border-fuchsia-500 text-white px-6 py-3 rounded-md hover:bg-transparent hover:text-fuchsia-500 transition font-medium">Shop Now</NavLink>
            </div>
        </div>
      </div>
    </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          {/* <AiOutlineVerticalRight size={30} />  */} Prev
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          {/* <AiOutlineVerticalLeft size={30} /> */} Next
        </button>
      </div>
    </div>
  );
}
