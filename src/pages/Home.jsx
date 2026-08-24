import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Description from '../components/description'
import Project from '../pages/Project'
import Skills from '../pages/Skills'
import Hireme from '../pages/Hireme'
import Experience from '../pages/Experience'

const Home = () => {

    const navigate = useNavigate();




  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">

        <div className="flex flex-row gap-3">
             <button
             onClick={()=> window.location.href = "https://www.linkedin.com/in/awais-khalil-55abbb372/"} 
             className="px-6 py-2 border-1 bg-white rounded-lg text-hc font-body cursor-pointer hover:text-white hover:bg-hc">
                Linkedin
            </button>
            <button 
            onClick={() => window.location.href = "https://github.com/AwaisKhalil19"}
            className="px-6 py-2 border-1 bg-white rounded-lg text-hc font-body cursor-pointer hover:text-white hover:bg-hc">
                Github
            </button>
            <button 
            onClick={() => navigate("/hire")}
            className="px-6 py-2 border-1 bg-white rounded-lg text-hc font-body cursor-pointer hover:text-white hover:bg-hc">
                Hire me
            </button>
            <button
            className="px-6 py-2 border-1 bg-white rounded-lg text-hc font-body cursor-pointer hover:text-white hover:bg-hc">
            <a
            href='https://docs.google.com/document/d/e/2PACX-1vRAolCUrzH9fMFgT8WeY8BJWc7CIZCduv5vK6vVPvRhNsjHmtk5mf0v_fknS5JxvYvr6Rn-w7bYDwv3/pub'
            target='_blank'
            rel='noopener noreferrer'
            >
                View CV
            </a> 
            </button>
            <button 
            onClick={()=> window.location.href = "mailto:awaiskhalil476@gmail.com"}
            className="px-6 py-2 border-1 bg-white rounded-lg text-hc font-body cursor-pointer hover:text-white hover:bg-hc">
                Email
            </button>
          </div>

          
          {/* Links
          <div className="flex gap-8 font-body">
            <a href="#" className="text-gray-700 hover:text-hc">
              Linkedin
            </a>
            <a href="#" className="text-gray-700 hover:text-hc">
              Github
            </a>
            <a href="#" className="text-gray-700 hover:text-hc">
              Contact
            </a>
            <a href="#" className="text-gray-700 hover:text-hc">
              Projects
            </a>
          </div> */}

        </div>
      </nav>

      {/* Center Container */}
      <main className="flex justify-center items-center min-h-[calc(100vh-73px)] px-4 ">

        <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-8">
          {/* <h2 className="font-body text-2xl font-bold text-start text-gray-600">
            I'M
          </h2> */}

          <h1 className="font-heading text-hc text-start text-5xl/20 text-hc">
            MERN Stack<span className='text-gray-600 px-4'>&</span>WordPress Developer
          </h1>
          <h2 className='mt-5 mb-2 text-lg font-body font-bold'>About me:</h2>
          <Description
          className="font-body text-sm mt-1 text-secondary"
          text="I specialize in building modern, responsive, and user-friendly web applications using the MERN stack. I can develop full-stack applications, REST APIs, and modern React.js interfaces, along with WordPress websites and customizations. I also work with API integrations, bug fixing, performance optimization, and clean, scalable code to deliver reliable digital experiences." 
          />
        <div className="flex flex-row items-center gap-3 mt-8">
      <Link
        to="/skills"
        //target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-hc"
        >
        <span>[ Skills ]</span>
      </Link>

      <Link
        to="/project"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-hc"
        >
        <span>[ Projects ]</span>
      </Link>

      <Link
        to="/experience"
        //target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-hc"
        >
        <span>[ Experience ]</span>
      </Link>

      {/* <a
        href="#"
        className="flex items-center gap-2 hover:text-hc"
        >
        <span>[ Reviews ]</span>
      </a> */}
    </div>

  </div>
      </main>

    </div>

  )
}

export default Home