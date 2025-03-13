import { ReactTyped } from "react-typed"
import Button from "./Components/Button"
import kevenPhoto from './assets/keven_photo.jpg'
import javaPhoto from './assets/java_photo.png'
import djangoPhoto from './assets/django.png'
import grpcPhoto from './assets/grpc_python.png'
import fastApi from './assets/fastApi.png'
import CSharp from './assets/empployee_C.png'
import './index.css'
import ProjectsCard from "./Components/ProjectsCard"

import { FaGithub, FaJava, FaPython } from "react-icons/fa"
import { PiFileCSharp } from "react-icons/pi"
import { SiDjango, SiFastapi, SiHibernate, SiPostgresql, SiSqlalchemy, SiSqlite } from "react-icons/si"
import { AiOutlineDotNet } from "react-icons/ai"
import { BiLogoSpringBoot } from "react-icons/bi"
import { TbSql } from "react-icons/tb"
import { LiaGithub, LiaLinkedin } from "react-icons/lia"
import { useEffect, useRef, useState } from "react"
import { CgClose } from "react-icons/cg"


function App() {
  const goToSection = (sectionId: string) => {
    window.location.hash = sectionId;
    window.history.replaceState(null, "", window.location.pathname);
  };
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuRef = useRef(null);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("bg-black shadow-lg");
    } else {
      setBgColor("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (

    <div className="w-full h-auto bg-black flex flex-col items-center">
      <div className={`fixed w-full h-16 flex flex-row items justify-center z-[9999] items-center  top-0 p-2 ${bgColor} duration-300`}>
        <div className="w-[calc(100%-4rem)] flex flex-row justify-between items-center text-white">
          <h1 className="text-2xl text-green-700 font-grotesk">Keven Santos</h1>
          <nav
            className="hidden md:flex w-[45%] justify-between flex-row items-center"
          >
            <Button text={"About me"} goToSection={goToSection} specificPart={"about-me"} />
            <Button text={"Projects"} goToSection={goToSection} specificPart={"projects"} />
            <Button text={"Technical Skills"} goToSection={goToSection} specificPart={"technical-skills"} />
            <Button text={"Contact"} goToSection={goToSection} specificPart={"contacts"} />
          </nav>
          <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
            ☰
          </div>
        </div>

        <div ref={menuRef} className={`fixed  inset-0 h-full bg-black bg-opacity-50 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="sideMenu">
          <div className="bg-black text-white w-64 h-full duration-300 absolute right-0 p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white absolute text-2xl mb-4 left-[13rem]"
            >
              <CgClose />
            </button>
            <ul className="mt-10">
              <li><a href="#about-me" className="block py-2">About me</a></li>
              <li><a href="#technical-skills" className="block py-2">Technical Skills</a></li>
              <li><a href="#projects" className="block py-2">Projects</a></li>
              <li><a href="#contacts" className="block py-2">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="about-me" className="w-full flex flex-col md:flex-row mt-28 items-center justify-center h-auto md:h-[70%]">

        <div className="w-[60%] md:w-[29%] relative overflow-hidden z-20">
          <img
            src={kevenPhoto}
            alt="Styled"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-85"></div>
        </div>

        <div className="text-white flex flex-col justify-center h-auto md:h-[89%] md:ml-[7rem] font-sans p-7">
          <h1 className="text-2xl">Hi,</h1>
          <ReactTyped className="text-2xl font-bold text-green-700" strings={['I am Keven Santos']} typeSpeed={120} backSpeed={200} loop />
          <h1 className="text-2xl">Backend Developer</h1>
          <p className="mt-3">I have a degree in technical systems development from SENAI.</p>
          <p >I'm in the 3rd semester of the computer science degree course at Unimetrocamp Wyden.</p>
        </div>


      </div>

      <div id="projects" className="w-full flex gap-3 items-center justify-center flex-col mt-10">
        <h2 className="text-2xl ">Projects</h2>
        <div className="w-full flex flex-col gap-4 p-9">

          <ProjectsCard
            link="https://github.com/Hora-keven/Microservice-project.git"
            content={"This project was developed to deepen the study of microservices. A microservice is an application architecture designed to enhance code organization, maintainability, and scalability. The code provided is part of the Department Service, implemented using Java Spring Boot."}
            image={javaPhoto}
            title="Microservices - Java Spring Boot"
          />

          <ProjectsCard
            link="https://github.com/Hora-keven/Kebank-api.git"
            content={"This Senai project was developed to implement a fully functional banking system using Python and Django Rest Framework (DRF). The project includes essential banking functionalities, such as loan management, account operations, and transaction handling.The system follows RESTful principles to ensure scalability and maintainability, providing a solid foundation for financial applications."}
            image={djangoPhoto}
            title="Bank System - Python Django Rest Framework"
            rigth={false}
          />

          <ProjectsCard
            link="https://github.com/Hora-keven/grpc-communication.git"
            content={"gRPC (Google Remote Procedure Call) is a high-performance, open-source RPC framework that allows communication between distributed systems efficiently. It uses Protocol Buffers (protobuf) as the interface definition language and supports multiple programming languages, including Python."}
            image={grpcPhoto}
            title="GRPC Communication - Python"

          />
          <ProjectsCard
            link="https://github.com/Hora-keven/employee-api.git"
            content={"This project is a CRUD (Create, Read, Update, Delete) application for managing employees, built using ASP.NET. It provides functionalities to add, update, view, and delete employee records efficiently. Technologies Used: ASP.NET Core, Entity Framework, SQLite "}
            image={CSharp}
            title="Employee Management System - C# ASP.NET"
            rigth={false}

          />
          <ProjectsCard
            link="https://github.com/Hora-keven/book-api.git"
            content={"This is a RESTful API built using FastAPI that allows users to manage a collection of books. The application performs basic CRUD (Create, Read, Update, Delete) operations and is designed for easy book management."}
            image={fastApi}
            title="Book Management - Python"

          />

        </div>
      </div>

      <div id="technical-skills" className="w-full flex flex-col items-center justify-center mt-10">
        <h2 className="text-2xl">Technical Skills</h2>
        <div className="sm:w-[90%] flex flex-wrap justify-center gap-1 mt-4 mb-6 ">
          <div className=" w-full h-32 flex flex-col justify-around items-center sm:w-1/3 md:w-1/4">
            <div className="w-full flex flex-row justify-center items-center gap-4">
              <PiFileCSharp size={40} />
              <FaJava size={40} />
              <FaPython size={40} />
            </div>
            <h2 className="bg-green-950 p-2 rounded-2xl">Programming Languages</h2>
          </div>

          <div className=" h-32 flex flex-col justify-around items-center sm:w-1/3 md:w-1/4">
            <div className="w-full flex flex-row justify-center items-center gap-4">
              <AiOutlineDotNet size={40} />
              <SiDjango size={40} />
              <SiFastapi size={40} />
              <BiLogoSpringBoot size={40} />
            </div>
            <h2 className="bg-green-950 p-2  w-40 text-center rounded-2xl">Frameworks</h2>
          </div>

          <div className=" h-32 flex relative flex-col justify-around items-center sm:w-1/3 md:w-1/4">
            <div className="w-full flex flex-row justify-center items-center gap-4">
              <SiSqlite size={40} />
              <TbSql size={40} />
              <SiPostgresql size={40} />
            </div>
            <h2 className="bg-green-950 p-2 w-36 text-center rounded-2xl">Databases</h2>
          </div>

          <div className=" h-32 flex flex-col justify-around items-center sm:w-1/3 md:w-1/4">
            <div className="w-full flex flex-row justify-center items-center gap-4">
              <SiSqlalchemy size={40} />
              <SiHibernate size={40} />
            </div>
            <h2 className="bg-green-950 p-2 w-36 text-center rounded-2xl">ORM</h2>
          </div>

          <div className=" h-32 flex flex-col justify-around items-center sm:w-1/3 md:w-1/4">
            <div className="w-full flex flex-row justify-center items-center gap-4">
              <FaGithub size={40} />
            </div>
            <h2 className="bg-green-950 p-2 rounded-2xl">Version Control</h2>
          </div>
        </div>
      </div>


      <div id="contacts" className="w-full flex gap-3 items-center justify-center flex-col mt-10  h-44">
        <h2 className="text-2xl ">Contacts</h2>
        <div className="w-full flex flex-row justify-center items-center gap-2">
          <a className="flex flex-row justify-center items-center gap-2" href="https://www.linkedin.com/in/keven-santos-378974203/"><span><LiaLinkedin size={40} /></span></a>
          <a className=" flex flex-row justify-center items-center gap-2 " href="https://github.com/Hora-keven"><span><LiaGithub size={40} /></span></a>
        </div>
      </div>
    </div>
  )
}

export default App
