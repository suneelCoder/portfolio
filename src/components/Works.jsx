import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { AiOutlineEye } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
//   projectLink
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           {projectLink && <div className={`absolute inset-0 flex justify-end card-img_hover ${source_code_link ? "m-16 mt-3 " : "m-3"}`}>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={"https://www.svgrepo.com/show/448579/redirect.svg"}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain invert opacity-90'
//               />
//             </div>
//           </div>}
//           {source_code_link && <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(projectLink, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div>}
//         </div>

//         <div className='mt-5'>

//           <h3 className='text-white font-bold text-[24px] cursor-pointer ' onClick={()=>{
//             window.open(projectLink, "_blank")
//           }}>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };


const ProjectCard = ({ index, name, description, tags, image, source_code_link, projectLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, delay: index * 0.2 }}
    >
      <Tilt
        options={{
          max: 20,
          scale: 1,
          speed: 400,
        }}
        className="bg-slate-800 p-5 rounded-2xl shadow-lg sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[180px] overflow-hidden rounded-2xl group">
          <img
            src={image}
            alt="project_image"
            className="w-full h-auto object-cover transition-transform duration-[3s] ease-in-out group-hover:translate-y-0"
            style={{ transform: "translateY(0)", transition: "transform 2s ease-in-out" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = `translateY(-${e.currentTarget.scrollHeight - 200}px)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          />


          {/* Links */}
          {projectLink && (
            <div className="absolute top-3 right-3 bg-black bg-opacity-60 p-2 rounded-full">
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <AiOutlineEye className="text-white text-xl hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          )}
          {source_code_link && (
            <div className="absolute top-3 left-3 bg-black bg-opacity-60 p-2 rounded-full">
              <a href={source_code_link} target="_blank" rel="noopener noreferrer">
                <BsGithub className="text-white text-xl hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3
            className="text-white font-bold text-[22px] cursor-pointer hover:text-blue-400"
            onClick={() => window.open(projectLink, "_blank")}
          >
            {name}
          </h3>
          <p className="mt-2 text-gray-400 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// export default ProjectCard;

const Works = () => {
  return (
    <section id='projects'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
