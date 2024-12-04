import React from "react";
import Container from "../container/Container";

const Benner_2 = () => {
  return (
    <>
      <section className="bg-blue-800">
        <Container>
          <div className="text-center">
            <h2 className="text-[45px] font-robot-h1 font-bold text-white">
              What is the MERN stack?
            </h2>
            <div className="flex justify-between items-center">
              <div className="div_1">
                <img src="/Nav.png" alt="Nav" />
              </div>
              <div className="div_2">
                <p className="text-[18px] font-for-p font-normal leading-8 text-white w-[690px]">
                  A technology stack can be custom (developers can choose the
                  technologies depending on their project requirements) or
                  pre-built (where the technologies have been pre-decided).
                </p>
                <p className="text-[18px] font-for-p font-normal leading-8 text-white w-[690px]">
                  MERN is a pre-built technology stack based on JavaScript
                  technologies. MERN stands for{" "}
                  <span className="text-[22px] font-robot-h1 font-bold">M</span>
                  ongoDB,{" "}
                  <span className="text-[22px] font-robot-h1 font-bold">E</span>
                  xpress,{" "}
                  <span className="text-[22px] font-robot-h1 font-bold">R</span>
                  eact, and
                  <span className="text-[22px] font-robot-h1 font-bold">N</span>
                  ode, after the four key technologies that make up the stack.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Benner_2;
