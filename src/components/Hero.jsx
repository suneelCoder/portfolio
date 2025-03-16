// import { motion } from "framer-motion";

// import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
// import { userDetails } from "../constants";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>{userDetails.fullName}</span>
//           </h1>
//           <p className={`${styles.heroSubText} whitespace-pre mt-2 text-white-100`}>
//             {/* I develop Full-Stack Applications, user <br className='sm:block hidden' />
//             interfaces and android applications */}
//             {userDetails.shortInfo}
//           </p>
//         </div>
//       </div>

//       <ComputersCanvas />

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";
import { userDetails } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center mx-auto bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-16 h-16 bg-[#915EFF] opacity-20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-[#ff57b9] opacity-20 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Animated Name & Role */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl px-6 md:px-12"
      >
        <h1 className={`${styles.heroHeadText} text-white leading-tight relative inline-block`}>
          Hi, I'm{" "}
          <span className="text-[#915EFF] relative z-10">
            {userDetails.fullName}
            <span className="absolute inset-0 w-full h-full border-2 border-[#915EFF] opacity-50 rounded-lg animate-pulse"></span>
          </span>
        </h1>
        <p className="text-gray-300 mt-2 text-lg">
          Passionate software developer dedicated to building fast, scalable, and intuitive web applications.
          I thrive on solving complex problems and crafting seamless user experiences.
        </p>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "MERN Stack Specialist",
            2000,
            "Problem Solver",
            2000,
            "React Native Developer",
            2000,
            "Backend Developer",
            2000,
            "Frontend Developer",
            2000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="text-xl mt-4 text-gray-300 font-medium"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="btn btn-filled"
          style={{ pointerEvents: "auto" }}
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="btn btn-outlined"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Floating Quote Effect */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[12%] text-gray-400 text-lg italic"
      >
        "Transforming ideas into reality through code."
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 flex flex-col items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-3 h-3 rounded-full bg-[#915EFF] mb-1"
          />
        </motion.div>
        <p className="text-sm text-gray-300 mt-2">Scroll Down</p>
      </div>


    </section>
  );
};

export default Hero;
