import Benner_2 from "../Benner_2/Benner_2";
import Container from "../container/Container";
import { Typewriter } from "react-simple-typewriter";

const Benner = () => {
  return (
    <>
      <section className="bg-[url('/sobai.jpg')]  w-full h-full relative bg-no-repeat bg-cover ">
        <img
          className=" w-[1000px] h-[500px] absolute top-[230px] left-[100px] z-10"
          src="/com_2.png"
          alt="com_1"
        />
        <img
          className=" w-[900px] h-[500px] absolute top-[150px] right-0 z-10"
          src="/file.png"
          alt="com_1"
        />
        <div className="backdrop-blur-[12px] bg-blue-800/50 w-full h-screen">
          <Container>
            <div className="text-center">
              <div className="flex mx-auto justify-center items-center pt-[180px] mb-5">
                <div>
                  <h1 className="text-[30px] font-popin font-bold text-white mx-auto uppercase tracking-wide">
                    We Are
                  </h1>
                </div>
                <span className="text-[30px] font-popin font-bold text-white w-[12%] tracking-wide">
                  <Typewriter
                    words={["MERN  ", "MERN  ", "MERN  ", "MERN  "]}
                    loop={""}
                    typeSpeed={200}
                    deleteSpeed={100}
                    delaySpeed={1000}
                  />
                </span>
                <h1 className="text-[30px] font-popin font-bold text-white uppercase tracking-wide">
                  Stack Developers
                </h1>
              </div>
              <p className="text-[18px] font-normal font-for-p text-white w-[400px] mx-auto leading-8">
                <span className="text-[22px] font-for-p font-semibold text-white hover:border-b hover:border-blue-50 leading-6">
                  since
                </span>{" "}
                in 28 December 2023 with a specialist Mentor wasim Mahmood Reja
                sir we started to learn . we learning at most wonderful IT
                industry it is Creative IT institute. Its south asian most
                awarded Industry. From there we got 24 hours support and lifetime
                support . They have career placement department (CPD) , most
                valuable part of creative it institute
              </p>
            </div>
          </Container>
        </div>
      </section>
      <Benner_2/>
    </>
  );
};

export default Benner;
