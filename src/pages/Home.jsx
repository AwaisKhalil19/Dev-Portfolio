import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Description from "../components/description";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 sm:px-6">

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">

            {/* LinkedIn */}
            <button
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/awais-khalil-55abbb372/")
              }
              className="rounded-lg border px-4 py-2 font-body text-sm text-hc transition hover:bg-hc hover:text-white sm:px-6 sm:text-base"
            >
              LinkedIn
            </button>

            {/* GitHub */}
            <button
              onClick={() =>
                (window.location.href =
                  "https://github.com/AwaisKhalil19")
              }
              className="rounded-lg border px-4 py-2 font-body text-sm text-hc transition hover:bg-hc hover:text-white sm:px-6 sm:text-base"
            >
              GitHub
            </button>

            {/* Hire Me */}
            <button
              onClick={() => navigate("/hire")}
              className="rounded-lg border px-4 py-2 font-body text-sm text-hc transition hover:bg-hc hover:text-white sm:px-6 sm:text-base"
            >
              Hire Me
            </button>

            {/* CV */}
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vRAolCUrzH9fMFgT8WeY8BJWc7CIZCduv5vK6vVPvRhNsjHmtk5mf0v_fknS5JxvYvr6Rn-w7bYDwv3/pub"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border px-4 py-2 font-body text-sm text-hc transition hover:bg-hc hover:text-white sm:px-6 sm:text-base"
            >
              View CV
            </a>

            {/* Email */}
            <button
              onClick={() =>
                (window.location.href =
                  "mailto:awaiskhalil476@gmail.com")
              }
              className="rounded-lg border px-4 py-2 font-body text-sm text-hc transition hover:bg-hc hover:text-white sm:px-6 sm:text-base"
            >
              Email
            </button>

          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4 py-8 sm:px-6 sm:py-12">

        <div className="w-full max-w-4xl rounded-xl bg-white p-5 shadow-2xl sm:p-8 md:p-10">

          {/* Main Heading */}
          <h1 className="font-heading text-3xl font-bold leading-tight text-hc sm:text-4xl md:text-5xl">
            MERN Stack
            <span className="px-2 text-gray-600 sm:px-4">
              &
            </span>
            WordPress Developer
          </h1>

          {/* About */}
          <h2 className="mb-2 mt-5 font-body text-lg font-bold sm:text-xl">
            About me:
          </h2>

          <Description
            className="mt-1 font-body text-sm leading-6 text-secondary sm:text-base sm:leading-7"
            text="I specialize in building modern, responsive, and user-friendly web applications using the MERN stack. I can develop full-stack applications, REST APIs, and modern React.js interfaces, along with WordPress websites and customizations. I also work with API integrations, bug fixing, performance optimization, and clean, scalable code to deliver reliable digital experiences."
          />

          {/* Navigation Links */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 font-body text-sm sm:gap-x-6 sm:text-base">

            <Link
              to="/skills"
              className="transition hover:text-hc"
            >
              [ Skills ]
            </Link>

            <Link
              to="/project"
              className="transition hover:text-hc"
            >
              [ Projects ]
            </Link>

            <Link
              to="/experience"
              className="transition hover:text-hc"
            >
              [ Experience ]
            </Link>

          </div>

        </div>
      </main>

    </div>
  );
};

export default Home;

