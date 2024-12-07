import React from "react";
import Container from "../container/Container";
import Benner_7 from "../Benner_7/Benner_7";

const Benner_6 = () => {
  return (
    <>
      <section className="bg-blue-800 pb-[200px]">
        <Container>
          <div className="text-center mb-[80px] ">
            <h2 className="text-[45px] font-robot-h1 font-bold text-white  ">
              WHAT IS REACT.JS?
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="div_1 ">
              <img
                className=" w-[630px] h-[310px] rounded-full"
                src="react.js.png"
                alt="react"
              />
            </div>
            <div className="div_2">
              <p className="text-[18px] font-for-p font-normal leading-8 text-white w-[690px] mb-4">
                <span className="text-[20px] font-for-p font-semibold text-white leading-6">
                  React.js is
                </span>{" "}
                an open-source JavaScript library, crafted with precision by
                Facebook, that aims to simplify the intricate process of
                building interactive user interfaces. Imagine a user interface
                built with React as a collection of components, each responsible
                for outputting a small, reusable piece of HTML code
              </p>
              <li className="text-[20px] font-for-p font-semibold text-white leading-6 mb-4">
                Why it is
              </li>
              <p className="text-[18px] font-for-p font-normal leading-8 text-white w-[690px]">
                React.js, or React, is a JavaScript library that's used to build
                user interfaces (UIs) for web applications. It's a popular
                choice for web development because of its many advantages,
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Benner_7 />
    </>
  );
};

export default Benner_6;
