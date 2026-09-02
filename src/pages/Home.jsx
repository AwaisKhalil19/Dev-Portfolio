import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111]">

      {/* ================= NAVBAR ================= */}
      <header className="px-4 pt-4 sm:px-6 sm:pt-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-gray-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md sm:px-5">

          {/* Logo */}
          <Link
            to="/"
            className="font-heading text-lg font-bold tracking-tight text-hc sm:text-xl"
          >
            AK<span className="text-gray-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 sm:flex">

            <button
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/awais-khalil-55abbb372/")
              }
              className="rounded-xl px-4 py-2 font-body text-sm text-gray-600 transition hover:bg-gray-100 hover:text-hc"
            >
              LinkedIn
            </button>

            <button
              onClick={() =>
                (window.location.href =
                  "https://github.com/AwaisKhalil19")
              }
              className="rounded-xl px-4 py-2 font-body text-sm text-gray-600 transition hover:bg-gray-100 hover:text-hc"
            >
              GitHub
            </button>

            <button
              onClick={() => navigate("/hire")}
              className="ml-1 rounded-xl bg-hc px-4 py-2 font-body text-sm text-white transition hover:opacity-90"
            >
              Hire Me
            </button>

            <a
              href="https://docs.google.com/document/d/e/2PACX-1vRAolCUrzH9fMFgT8WeY8BJWc7CIZCduv5vK6vVPvRhNsjHmtk5mf0v_fknS5JxvYvr6Rn-w7bYDwv3/pub"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-4 py-2 font-body text-sm text-gray-600 transition hover:bg-gray-100 hover:text-hc"
            >
              CV
            </a>

          </div>

          {/* Mobile Hire Button */}
          <button
            onClick={() => navigate("/hire")}
            className="rounded-xl bg-hc px-4 py-2 font-body text-sm text-white sm:hidden"
          >
            Hire Me
          </button>

        </nav>

        {/* Mobile Links */}
        <div className="mx-auto mt-2 flex max-w-6xl items-center justify-center gap-1 sm:hidden">

          <button
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/awais-khalil-55abbb372/")
            }
            className="rounded-xl px-3 py-2 text-xs text-gray-500 transition hover:bg-white hover:text-hc"
          >
            LinkedIn
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "https://github.com/AwaisKhalil19")
            }
            className="rounded-xl px-3 py-2 text-xs text-gray-500 transition hover:bg-white hover:text-hc"
          >
            GitHub
          </button>

          <a
            href="https://docs.google.com/document/d/e/2PACX-1vRAolCUrzH9fMFgT8WeY8BJWc7CIZCduv5vK6vVPvRhNsjHmtk5mf0v_fknS5JxvYvr6Rn-w7bYDwv3/pub"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-3 py-2 text-xs text-gray-500 transition hover:bg-white hover:text-hc"
          >
            CV
          </a>

          <a
            href="mailto:awaiskhalil476@gmail.com"
            className="rounded-xl px-3 py-2 text-xs text-gray-500 transition hover:bg-white hover:text-hc"
          >
            Email
          </a>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <main className="mx-auto flex min-h-[calc(100vh-100px)] max-w-6xl items-center px-4 py-12 sm:px-6 sm:py-16">

        <section className="w-full">

          {/* Small Intro */}
          <div className="mb-6 flex items-center gap-2 sm:mb-8">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

            <p className="font-body text-xs font-medium uppercase tracking-[0.1em] text-gray-500 sm:text-sm">
              Available for freelance work
            </p>
          </div>


          {/* Heading */}
          {/* Heading */}
<h1 className="w-full max-w-5xl font-heading text-3xl font-black leading-[1.6em] tracking-tight text-hc sm:text-4xl md:text-5xl">
  MERN Stack

  <span className="block text-gray-300">
    &
  </span>

  <span className="block">
    WordPress Developer
  </span>
</h1>
          

          {/* Bottom Content */}
          <div className="mt-10 grid gap-8 border-t border-gray-200 pt-8 sm:mt-14 sm:grid-cols-[1fr_auto] sm:items-end">

            {/* About */}
            <div className="max-w-2xl">

              <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                About me
              </p>

              <p className="font-body text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                I build modern, responsive, and user-friendly web
                applications using the MERN stack, along with professional
                WordPress websites and custom solutions.
              </p>

              <Link
                to="/experience"
                className="mt-5 inline-flex font-body text-sm font-semibold text-hc underline decoration-gray-300 underline-offset-4 transition hover:decoration-hc"
              >
                More about me →
              </Link>

            </div>


            {/* Navigation */}
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:justify-end">

  <Link
    to="/skills"
    className="w-full rounded-full border border-gray-300 bg-white px-4 py-2.5 text-center font-body text-sm transition hover:border-hc hover:bg-hc hover:text-white sm:w-auto"
  >
   TechniKal Skills
  </Link>

  <Link
    to="/project"
    className="w-full rounded-full border border-gray-300 bg-white px-4 py-2.5 text-center font-body text-sm transition hover:border-hc hover:bg-hc hover:text-white sm:w-auto"
  >
    Projects
  </Link>

  <Link
    to="/experience"
    className="w-full rounded-full border border-gray-300 bg-white px-4 py-2.5 text-center font-body text-sm transition hover:border-hc hover:bg-hc hover:text-white sm:w-auto"
  >
    Experience
  </Link>

</div>
            {/* <div className="flex flex-wrap gap-2 sm:justify-end">

              <Link
                to="/skills"
                className="rounded-full border border-gray-300 bg-white px-4 py-2.5 font-body text-sm transition hover:border-hc hover:bg-hc hover:text-white"
              >
                Skills
              </Link>

              <Link
                to="/project"
                className="rounded-full border border-gray-300 bg-white px-4 py-2.5 font-body text-sm transition hover:border-hc hover:bg-hc hover:text-white"
              >
                Projects
              </Link>

              <Link
                to="/experience"
                className="rounded-full border border-gray-300 bg-white px-4 py-2.5 font-body text-sm transition hover:border-hc hover:bg-hc hover:text-white"
              >
                Experience
              </Link>

            </div> */}

          </div>

        </section>

      </main>

    </div>
  );
};

export default Home;