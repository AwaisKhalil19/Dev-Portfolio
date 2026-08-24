import React from "react";
import { Link } from "react-router-dom";

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
    <section className="min-h-screen overflow-x-hidden px-4 py-10 sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col gap-8 sm:mb-12 md:flex-row md:items-start md:justify-between">

          {/* Left Content */}
          <div className="w-full md:w-[70%]">
            <p className="font-body text-lg font-bold uppercase tracking-widest text-gray-400 sm:text-2xl">
              My Skills
            </p>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-hc sm:text-5xl md:mt-5 md:text-6xl">
              Technologies & Tools
            </h1>

            <p className="mt-5 max-w-2xl font-body text-sm leading-6 text-gray-500 sm:mt-8 sm:text-base sm:leading-7">
              I work with modern technologies to build responsive,
              user-friendly, and scalable web applications.
            </p>
          </div>

          {/* Home Button */}
          <div className="flex w-full justify-start md:w-[30%] md:justify-end">
            <Link
              to="/"
              className="flex w-fit items-center gap-2 rounded-lg border border-border-custom px-4 py-2.5 font-body text-sm font-bold text-hc transition duration-300 hover:bg-hc hover:text-white sm:px-5 sm:text-base"
            >
              <FaArrowLeft />
              <span>Home</span>
            </Link>
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex min-h-32 w-full flex-col items-center justify-center rounded-xl border border-border-custom p-4 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
            >

              {/* Icon */}
              <div
                className="text-4xl transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h2 className="mt-4 font-body text-sm font-bold leading-5 text-hc sm:text-base">
                {skill.name}
              </h2>

              {/* Category */}
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
