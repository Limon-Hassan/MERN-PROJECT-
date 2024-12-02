import Container from "../container/Container";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Benner = () => {
  const { text } = useTypewriter({
    words: ["MERN STACK DEVELOPERS", "MERN STACK DEVELOPERS"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <>
      <section className="bg-[url('/sobai.jpg')] w-full h-full">
        <Container>
          <div className="text-center">
            <h1>
              We Are {""}
              <span>{text}</span>
              <span>
                <Cursor cursorStyle="|" />
              </span>
            </h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Benner;
