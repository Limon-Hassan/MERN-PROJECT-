import React from "react";
import Container from "../container/Container";
import Benner_3 from "../Benner_3/Benner_3";

const Benner_2 = () => {
  return (
    <>
      <section className="bg-blue-800 pb-[200px]">
        <Container>
          <div className="text-center mb-[80px] pt-[120px]">
            <h2 className="text-[45px] font-robot-h1 font-bold text-white uppercase">
              What is the MERN stack?
            </h2>
          </div>
          <div className="flex justify-between items-center mb-[200px]">
            <div className="div_1">
              <img className="rounded-full" src="/Nav.png" alt="Nav" />
            </div>
            <div className="div_2">
              <p className="text-[18px] font-for-p font-normal leading-8 text-white w-[690px]">
                A technology stack can be custom (developers can choose the
                technologies depending on their project requirements) or
                pre-built (where the technologies have been pre-decided).
              </p>
              <p className="text-[18px] font-for-p font-normal leading-8 text-white w-[690px]">
                MERN is a pre-built technology stack based on JavaScript
                technologies. MERN stands for
                <span className="text-[22px] font-robot-h1 font-bold">M</span>
                ongoDB,
                <span className="text-[22px] font-robot-h1 font-bold">E</span>
                xpress,
                <span className="text-[22px] font-robot-h1 font-bold">R</span>
                eact, and
                <span className="text-[22px] font-robot-h1 font-bold">N</span>
                ode, after the four key technologies that make up the stack.
              </p>
            </div>
          </div>
          <div className="text-center mb-[80px]">
            <h2 className="text-[45px] font-robot-h1 font-bold text-white uppercase">
              How does the MERN stack work?
            </h2>
          </div>
          <div className="flex items-center justify-between ">
            <p className="text-[18px] font-for-p font-normal text-white w-[465px]">
              The MERN architecture allows you to easily construct a three-tier
              architecture (front end, back end, database) entirely using
              JavaScript and JSON.
            </p>
            <img
              className="w-[600px] rounded-full"
              src="mern-stack.png"
              alt="mern"
            />
          </div>
        </Container>
      </section>
      <Benner_3/>
    </>
  );
};

export default Benner_2;
