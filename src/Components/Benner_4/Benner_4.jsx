import React from "react";
import Container from "../container/Container";
import Benner_5 from "../Benner_5/Benner_5";

const Benner_4 = () => {
  return (
    <>
      <section className="bg-blue-800 pb-[200px]">
        <Container>
          <div className="text-center mb-[80px] ">
            <h2 className="text-[45px] font-robot-h1 font-bold text-white  ">
              WHAT IS MongoDB?
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="div_1 ">
              <img
                className=" w-[630px] h-[310px] rounded-full"
                src="mongo.png"
                alt="mongo_2"
              />
            </div>
            <div className="div_2">
              <p className="text-[18px] font-for-p font-normal leading-8 text-white w-[690px] mb-4">
                <span className="text-[20px] font-for-p font-semibold text-white leading-6">
                  MongoDB is
                </span>{" "}
                a document-oriented, open-source database management system
                (DBMS) that uses JSON-like documents to store and manage data
              </p>
              <li className="text-[20px] font-for-p font-semibold text-white leading-6 mb-4">
                What it is
              </li>
              <p className="text-[18px] font-for-p font-normal leading-8 text-white w-[690px] mb-4">
                MongoDB is a NoSQL database, which means it's an alternative to
                traditional Relational Database Management System (RDBMS)
                applications
              </p>
              <li className="text-[20px] font-for-p font-semibold text-white leading-6 mb-4">
                How it works
              </li>
              <p className="text-[18px] font-for-p font-normal leading-8 text-white w-[690px]">
                MongoDB stores data in documents instead of tables and rows.
                Documents can vary from document to document, and collections
                can be queried without a predefined schema
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Benner_5 />
    </>
  );
};

export default Benner_4;
