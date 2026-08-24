import React from "react";
import { Link } from "react-router-dom"


import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaElementor,
  FaGitAlt,
  FaGithub,
  FaArrowLeft,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiGooglesearchconsole,
  SiGoogleanalytics,
  SiGoogletagmanager,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    category: "Frontend",
    color: "#FF0000",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    category: "Frontend",
    color: "#ff5733",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    category: "Frontend",
    color: "#F0DB4F",
  },
  {
    name: "React.js",
    icon: <FaReact />,
    category: "Frontend",
    color: "#61DBFB",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    category: "Frontend",
    color: "#61DBFB",
  },
//   {
//     name: "Next.js",
//     icon: <SiNextdotjs />,
//     category: "Frontend",
//     color: "#0070f3",
//   },
//   {
//     name: "TypeScript",
//     icon: <SiTypescript />,
//     category: "Frontend",
//     color: "#3178C6",
//   },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    category: "Backend",
    color: "#339933",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    category: "Backend",
    color: "#000000",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    category: "Backend",
    color: "#001E2B",
  },
  {
    name: "WordPress",
    icon: <FaWordpress />,
    category: "Other",
    color: "#21759B",
  },
  {
    name: "Elementor",
    icon: <FaElementor />,
    category: "Editor",
    color: "#FF69B4",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    category: "Tools",
    color: "#F1502F",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    category: "Tools",
    color: "#000000",
  },
  {
    name: "Google Search Console",
    icon: <SiGooglesearchconsole />,
    category: "SEO",
    color: "#458CF5",
  },
  {
    name: "Google Analytics",
    icon: <SiGoogleanalytics />,
    category: "SEO",
    color: "#E37400",
  },
  {
    name: "Google Tag Manager",
    icon: <SiGoogletagmanager />,
    category: "SEO",
    color: "#246FDB",
  },
  {
    name: "Schema Markup",
    icon: <FaCode />,
    category: "SEO",
    color: "#6C63FF",
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen overflow-hidden px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 flex flex-row justify-between items-start">
        <div className="w-[70%] flex flex-col ">
          <p className="font-body text-2xl font-bold uppercase tracking-widest text-gray-400">
            My Skills
          </p>

          <h1 className="mt-5 font-heading text-md leading-[1.5em] font-bold text-hc md:text-6xl">
            Technologies & Tools
          </h1>

          <p className="mt-8 max-w-2xl font-body text-gray-500">
            I work with modern technologies to build responsive,
            user-friendly, and scalable web applications.
          </p>
        </div>    

        <div className="flex flex-row w-[30%] items-end justify-end">
          <Link
            to="/"
            className="flex w-fit items-center gap-2 rounded-lg border border-border-custom px-5 py-2.5 font-body font-bold text-hc transition duration-300 hover:bg-hc hover:text-white"
            >
            <FaArrowLeft />
            <span>Home</span>
          </Link>
        </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex min-h-32 flex-col items-center justify-center rounded-xl border border-border-custom p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl transition-transform duration-300 group-hover:scale-110"
              style={{color: skill.color}}
              >
                {skill.icon}
              </div>

              <h2 className="mt-4 font-body font-bold text-hc">
                {skill.name}
              </h2>

              <span className="mt-1 text-xs text-gray-400">
                {skill.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;