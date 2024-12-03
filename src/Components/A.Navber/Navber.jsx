import React from "react";
import Container from "../container/Container";
import Benner from "../Benner/Benner";

const Navber = () => {
  return (
    <>
      <nav className="bg-[#000080] opacity-80 py-[0px]">
        <Container>
          <div className="main flex justify-between items-center">
            <a href="#">
              <img
                className="w-[250px] h-[130px]"
                src="/Mern (2).png"
                alt="mern"
              />
            </a>
            <div className="flex gap-[80px] items-center">
              <ul className="flex">
                <li className="text-[20px] font-robot-h1 font-medium text-[#1E90FF] ml-5 hover:text-[#FFF] ease-in-out duration-300">
                  <a href="#">About us</a>
                </li>
                <li className="text-[20px] font-robot-h1 font-medium text-[#1E90FF] ml-5 hover:text-[#FFF] ease-in-out duration-300">
                  <a href="#">Contact us</a>
                </li>
              </ul>
              <button
                className="text-[20px] font-for-all font-medium text-[#FFf] border border-[#FFF]
              px-[30px] py-[12px] hover:bg-white hover:text-[#000080] ease-in-out duration-300"
              >
                Learn mern
              </button>
            </div>
          </div>
        </Container>
      </nav>
      <Benner />
    </>
  );
};

export default Navber;
