import React from "react";

const skillsData = [
    { name: "ReactJS", img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" },
    { name: "ExpressJS", img: "https://img.icons8.com/fluency/48/000000/node-js.png" },
    { name: "NodeJS", img: "https://img.icons8.com/color/48/000000/nodejs.png" },
    { name: "Redux", img: "https://img.icons8.com/color/48/000000/redux.png" },
    { name: "Firebase", img: "https://img.icons8.com/color/48/000000/firebase.png" },
    { name: "Android", img: "https://img.icons8.com/fluency/48/000000/android-os.png" },
    { name: "MaterialUI", img: "https://img.icons8.com/color/48/000000/material-ui.png" },
    { name: "AntDesign", img: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" },
    { name: "ChakraUI", img: "https://img.icons8.com/color/48/000000/chakra-ui.png" },
    { name: "TailwindCSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Bootstrap", img: "https://img.icons8.com/color/48/000000/bootstrap.png" },
    { name: "Sass", img: "https://img.icons8.com/color/48/000000/sass.png" },
    { name: "HTML", img: "https://img.icons8.com/color/48/000000/html-5--v1.png" },
    { name: "CSS", img: "https://img.icons8.com/color/48/000000/css3.png" },
    { name: "JavaScript", img: "https://img.icons8.com/color/48/000000/javascript--v1.png" },
    { name: "Java", img: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" },
    { name: "Python", img: "https://img.icons8.com/color/48/000000/python--v1.png" },
    { name: "C++", img: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
    { name: "MongoDB", img: "https://img.icons8.com/color/48/000000/mongodb.png" },
    { name: "MySQL", img: "https://img.icons8.com/color/48/000000/mysql-logo.png" },
    { name: "PostgreSQL", img: "https://img.icons8.com/color/48/000000/postgreesql.png" },
    { name: "AWS", img: "https://img.icons8.com/color/48/000000/amazon-web-services.png" },
    { name: "Heroku", img: "https://img.icons8.com/color/48/000000/heroku.png" },
    { name: "Netlify", img: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" },
    { name: "DigitalOcean", img: "https://img.icons8.com/ios-filled/48/0080FF/digitalocean.png" },
    { name: "GitHub", img: "https://img.icons8.com/glyph-neue/48/ffffff/github.png" },
];

const Skills = () => {
    return (
        <div>
            <h1 className="text-[30px] md:text-[60px] font-bold text-center my-8">Skills & Abilities</h1>
            <div className="skill-container container mx-auto py-6">
                <div className="row flex flex-wrap gap-6 justify-center" id="skillsContainer">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="bar w-[180px] hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer">
                            <div className="info flex flex-col items-center">
                                <img src={skill.img} alt={skill.name || "skill"} className="w-14 h-14"
                                />
                                <span className="mt-2 text-center font-medium">{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
