import React from "react";
import Container from "../container/Container";

const Benner_7 = () => {
  return (
    <>
      <section className="bg-blue-800 pb-[200px]">
        <Container>
          <div className="text-center mb-[80px] ">
            <h2 className="text-[45px] font-robot-h1 font-bold text-white  ">
              WHAT IS NODE.JS?
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="div_1">
              <p className="text-[18px] font-for-p font-normal leading-8 text-white w-[690px] mb-4">
                <span className="text-[20px] font-for-p font-semibold text-white leading-6">
                  Node.js is
                </span>{" "}
                an open-source JavaScript server environment built on Chrome’s
                V8 engine. It is open-source and free and runs on various
                platforms like Windows, Linux, Unix, MacOS, etc.
              </p>
              <li className="text-[20px] font-for-p font-semibold text-white leading-6 mb-4">
                Why it is
              </li>
              <p className="text-[18px] font-for-p font-normal leading-8 text-white w-[690px]">
                Node.js is used to build back-end services like APIs like Web
                App, Mobile App or Web Server. A Web Server will open a file on
                the server and return the content to the client. It’s used in
                production by large companies such as Paypal, Uber, Netflix,
                Walmart, and so on
              </p>
            </div>
            <div className="div_2 ">
              <img
                className=" w-[630px] h-[310px] rounded-full"
                src="Node.js.png"
                alt="Node"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Benner_7;
