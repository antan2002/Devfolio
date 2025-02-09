// import Link from "next/link";
// import Image from "next/image";
// import { monaSans } from "../fonts/monaSans";
// import { motion } from "framer-motion";
// import { imageAnimation, bodyAnimation } from "../animations/animations";
// import AnimatedWords from "../animations/AnimatedWords";
// import profile from "../../public/profile.webp";

// const Hero = () => {
//   return (
//     <motion.section
//       className="relative z-10 flex h-[85vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover  bg-center py-0 sm:h-[90vh]  md:h-[100vh] 3xl:h-[85vh]"
//       id="home"
//       initial="initial"
//       animate="animate"
//     >
//       <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

//       <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
//         <div>
//           <Link
//             href=""
//             target="_blank"
//             aria-label="PORTFOLIO"
//           >
//             <motion.button
//               className="hidden rounded-md  py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block  md:text-[16px] lg:block"
//               variants={bodyAnimation}
//             >
//               Welcome to my Portfolio
//             </motion.button>
//           </Link>
//         </div>

//         <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
//           <Link
//             href="https://github.com/antan2002"
//             target="_blank"
//             aria-label="View GitHub Profile"
//           >
//             <motion.p
//               className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
//               variants={bodyAnimation}
//             >
//               GH
//             </motion.p>
//           </Link>
//           <Link
//             href="https://www.linkedin.com/in/antanroy/"
//             target="_blank"
//             aria-label="View LinkedIn Profile"
//           >
//             <motion.p
//               className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
//               variants={bodyAnimation}
//             >
//               LI
//             </motion.p>
//           </Link>
//           <Link
//             href="https://leetcode.com/u/antanroy/"
//             target="_blank"
//             aria-label="View Leetcode Profile"
//           >
//             <motion.p
//               className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
//               variants={bodyAnimation}
//             >
//               LC
//             </motion.p>
//           </Link>
//           <Link
//             href="https://www.instagram.com/antan.r_"
//             target="_blank"
//             aria-label="View Codolio Profile"
//           >
//             <motion.p
//               className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
//               variants={bodyAnimation}
//             >
//               IN
//             </motion.p>
//           </Link>
//         </div>
//       </div>

//       <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
//         <div
//           className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
//         >
//           <AnimatedWords
//             title="Antan Roy"
//             style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
//           />
//           <motion.div
//             className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]"
//             variants={imageAnimation}
//           >
//             <Image
//               src={profile}
//               priority
//               alt="Antan Roy"
//               data-blobity-tooltip="."
//               data-blobity-invert="false"
//               className="w-[150px] h-[150px] rounded-full grayscale hover:grayscale-0 md:w-[200px] md:h-[200px] lg:w-[245px] lg:h-[245px]"
//             />
//           </motion.div>
//         </div>
//       </div>

//       <div
//         className="absolute bottom-10 flex items-center 
//       justify-center
//       md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
//       >
//         <motion.div
//           className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
//           variants={bodyAnimation}
//         >
//           <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
//             Full Stack Developer and Embedded Software Engineer, Intern at{" "}
//             <Link
//               href="https://cnkbharat.com/"
//               target="_blank"
//               className="underline underline-offset-2 hover:no-underline"
//               aria-label="cnkbharat"
//             >
//               C&N Green Energy
//             </Link>{" "}
//           </p>
//         </motion.div>

//         <motion.div
//           className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
//           variants={bodyAnimation}
//         >
//           <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
//             3rd-year student passionate about coding, problem-solving, and learning new technologies.
//           </p>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;
import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center bg-[url('/hero.jpg')] bg-cover bg-center py-0 sm:h-[90vh] md:h-[100vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link href="" target="_blank" aria-label="PORTFOLIO">
            <motion.button
              className="hidden rounded-md py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              Welcome to my Portfolio
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link href="https://github.com/antan2002" target="_blank" aria-label="GitHub">
            <motion.p className="text-[16px] font-bold" variants={bodyAnimation}>GH</motion.p>
          </Link>
          <Link href="https://www.linkedin.com/in/antanroy/" target="_blank" aria-label="LinkedIn">
            <motion.p className="text-[16px] font-bold" variants={bodyAnimation}>LI</motion.p>
          </Link>
          <Link href="https://leetcode.com/u/antanroy/" target="_blank" aria-label="LeetCode">
            <motion.p className="text-[16px] font-bold" variants={bodyAnimation}>LC</motion.p>
          </Link>
          <Link href="https://www.instagram.com/antan.r_" target="_blank" aria-label="Instagram">
            <motion.p className="text-[16px] font-bold" variants={bodyAnimation}>IN</motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40">
        <div className={`relative flex flex-col items-center justify-center ${monaSans.className}`}>
          <AnimatedWords
            title="Antan Roy"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]"
            variants={imageAnimation}
          >
            <Image
              src="/profile.webp"
              alt="Antan Roy"
              width={245}
              height={245}
              priority
              className="w-[150px] h-[150px] rounded-full grayscale hover:grayscale-0 md:w-[200px] md:h-[200px] lg:w-[245px] lg:h-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 flex items-center justify-center md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between">
        <motion.div className="max-w-[350px] md:max-w-[400px] lg:max-w-[400px]" variants={bodyAnimation}>
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Full Stack Developer and Embedded Software Engineer, Intern at{" "}
            <Link
              href="https://cnkbharat.com/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
              aria-label="C&N Green Energy"
            >
              C&N Green Energy
            </Link>
          </p>
        </motion.div>

        <motion.div className="hidden max-w-[500px] lg:block lg:max-w-[420px]" variants={bodyAnimation}>
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            3rd-year student passionate about coding, problem-solving, and learning new technologies.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
