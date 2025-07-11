
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I'M ANTAN ROY , A SOFTWARE ENGINEER."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "An aspiring developer passionate about crafting innovative solutions. I excel in C++, HTML5, CSS3, JavaScript, React.js, Next.js, Node.js, MongoDB, and have strong problem-solving skills in Data Structures & Algorithms."
              }
            />
            <AnimatedBody
              text={
                "As a motivated Computer Science student, I thrive in collaborative environments and am dedicated to continuous learning and growth in web development."
              }
            />
            <AnimatedBody
              text={
                "I am currently pursuing Bachelor of Technology degree in Computer Science at Maulana Abul Kalam Azad University of Technology (MAKAUT, WB), with an expected graduation year of 2026 and a current grade of 7.5."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Skills"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "C++, JavaScript, TypeScript, HTML/CSS, React.js, Next.js, Node.js, Express.js, Bootstrap, RESTAPI, MongoDB, PostgreSQL, Socket.io, OpenAI, GenAI, Tailwind CSS, LLM"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Visual Studio Code, GitHub, Postman, Canva"
                }
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Coursework"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Data Structure & Algorithm, Database Management Systems, Object Oriented Programming, Operating System, Computer Network, Low Level Design"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
