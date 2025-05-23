import React from "react";
import Container from "../container/Container";
import Benner_6 from "../Benner_6/Benner_6";

const Benner_5 = () => {
  return (
    <>
      <section className="bg-blue-800 pb-[200px]">
        <Container>
          <div className="text-center mb-[80px] ">
            <h2 className="text-[45px] font-robot-h1 font-bold text-white  ">
              WHAT IS EXPRESS.JS?
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="div_1">
              <p className="text-[18px] font-for-p font-normal leading-8 text-white w-[690px] mb-4">
                <span className="text-[20px] font-for-p font-semibold text-white leading-6">
                  Express.js
                </span>{" "}
                is a fast, flexible and minimalist web framework for Node.js.
                It's effectively a tool that simplifies building web
                applications and APIs using JavaScript on the server side.
                Express is an open-source that is developed and maintained by
                the Node.js foundation
              </p>
              <li className="text-[20px] font-for-p font-semibold text-white leading-6 mb-4">
                Why it is
              </li>
              <p className="text-[18px] font-for-p font-normal leading-8 text-white w-[690px]">
                Express is a user-friendly framework that simplifies the
                development process of Node applications. It uses JavaScript as
                a programming language and provides an efficient way to build
                web applications and APIs.
              </p>
            </div>
            <div className="div_2 ">
              <img
                className=" w-[630px] h-[310px] rounded-full"
                src="Express.png"
                alt="Express"
              />
            </div>
          </div>
        </Container>
      </section>
      <Benner_6/>
    </>
  );
};

export default Benner_5;
