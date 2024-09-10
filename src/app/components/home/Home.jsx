"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdOutlineLaptopWindows } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoIosBulb } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { GrVmMaintenance } from "react-icons/gr";
import html from "../../../public/img/html.png";

function Home() {
  const [filter, setFilter] = useState("all");
  const cards = [
    {
      id: 1,
      category: "web-designing",
      title: "HTML 5",
      description: "Markup language for Web pages.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiVWSWZQcgO8ckDCUFwKEpNUziIO5yhU4RdPlGZvcm7WecbZCtUJsERpZX4J-8SjrUww&usqp=CAU",
    },
    {
      id: 2,
      category: "web-development",
      title: "React js",
      description: "JavaScript library for interactive UIs.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLimkxKgVwum5XDrN89s2lmt_EFlBdJeItA&s",
    },
    {
      id: 3,
      category: "web-designing",
      title: "HTML 5",
      description: "Markup language for Web pages.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiVWSWZQcgO8ckDCUFwKEpNUziIO5yhU4RdPlGZvcm7WecbZCtUJsERpZX4J-8SjrUww&usqp=CAU",
    },
    {
      id: 4,
      category: "web-development",
      title: "React js",
      description: "JavaScript library for interactive UIs.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLimkxKgVwum5XDrN89s2lmt_EFlBdJeItA&s",
    },
    {
      id: 5,
      category: "web-designing",
      title: "HTML 5",
      description: "Markup language for Web pages.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiVWSWZQcgO8ckDCUFwKEpNUziIO5yhU4RdPlGZvcm7WecbZCtUJsERpZX4J-8SjrUww&usqp=CAU",
    },
    {
      id: 6,
      category: "web-development",
      title: "React js",
      description: "JavaScript library for interactive UIs.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLimkxKgVwum5XDrN89s2lmt_EFlBdJeItA&s",
    },
    {
      id: 7,
      category: "web-designing",
      title: "HTML 5",
      description: "Markup language for Web pages.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiVWSWZQcgO8ckDCUFwKEpNUziIO5yhU4RdPlGZvcm7WecbZCtUJsERpZX4J-8SjrUww&usqp=CAU",
    },
    {
      id: 8,
      category: "web-development",
      title: "React js",
      description: "JavaScript library for interactive UIs.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLimkxKgVwum5XDrN89s2lmt_EFlBdJeItA&s",
    },
  ];

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
      {/* what are you waiting for */}
      <div
        className="container mx-auto bg-cover bg-no-repeat py-[80px]"
        style={{
          background:
            "url('https://pninfosys.com/assets/frontend/images/banner.png')",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center text-white uppercase md:space-y-1">
          <h1 className="lg:text-2xl md:text-lg text-[10px] font-bold">
            what are you waiting for?
          </h1>
          <h2 className="lg:text-5xl md:text-3xl text-lg md:font-bold font-semibold">
            Our PN Infosys <br /> We're ready to help you grow!.
          </h2>
          <br />
          <div className="flex justify-center items-center floating-image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ebanner%2Fbanner2.png?alt=media&token=ca3ffc74-514c-4d79-9af4-c025e88b89aa"
              alt=""
              className="w-[30%]"
            />
          </div>
        </div>
      </div>
      {/* what is pn infosys */}
      <div className="container mx-auto py-14">
        <br />
        <h2 className=" mx-auto text-center px-4 md:text-lg lg:text-2xl text-[13px] font-light">
          PN INFOSYS is a leading global business
          <br className="lg:hidden md:hidden block" /> consulting and IT
          <br className="md:block lg:hidden hidden" /> service company,
          <br className="lg:block hidden" />
          Whether you need to run your business more efficiently or accelerate
          revenue growth, PN INFOSYS can get you there.
        </h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-10 px-5 md:px-6 lg:px-10">
          <div className="group relative overflow-hidden shadow-xl rounded-2xl py-[50px] bg-white parent">
            <div className="bg-white child w-1/2 mx-auto overflow-hidden flex justify-center rounded-full p-3">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Efeature%2Fcollaborative1.jpg?alt=media&token=b8ce06a7-a1c9-41e7-a4ed-3e65be127f11"
                alt="Image"
                className="transform transition-transform duration-1000 ease-in-out w-[100%]"
              />
            </div>
            <div className="second-child pt-8 px-5 text-center">
              <h2 className="lg:text-3xl md:text-2xl text-xl mb-3 font-semibold">
                Collaborative <br />
                Spirit
              </h2>
              <h3 className="md:lg font-light">
                We believe in developing true partnerships and making clients
                happy.
              </h3>
            </div>
          </div>
          <div className="group relative overflow-hidden shadow-xl rounded-2xl py-[50px] bg-white parent">
            <div className="bg-white child w-1/2 mx-auto overflow-hidden flex justify-center rounded-full p-3 ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Efeature%2Fthinking.png?alt=media&token=a4d7e55a-cc39-443b-bcbc-92921ae35f6a"
                alt="Image"
                className="transform transition-transform duration-1000 ease-in-out w-[100%]"
              />
            </div>
            <div className="second-child pt-8 px-5 text-center">
              <h2 className="lg:text-3xl md:text-2xl text-xl mb-3 font-semibold">
                Expert <br />
                Thinking
              </h2>
              <h3 className="md:lg font-light">
                We brings robust skill and forward looking perspectives to solve
                customer challenges.
              </h3>
            </div>
          </div>
          <div className="group relative overflow-hidden shadow-xl rounded-2xl py-[50px] bg-white parent">
            <div className="bg-white child w-1/2 mx-auto overflow-hidden flex justify-center rounded-full p-3">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Efeature%2Fdedication.jpg?alt=media&token=2b6177d8-816a-45d8-acec-ca235232235e"
                alt="Image"
                className="transform transition-transform duration-1000 ease-in-out w-[100%]"
              />
            </div>
            <div className="second-child pt-8 px-5 text-center">
              <h2 className="lg:text-3xl md:text-2xl text-xl mb-3 font-semibold">
                Exorbitant
                <br />
                Dedication
              </h2>
              <h3 className="md:lg font-light">
                PN Infosys is driven to meet client needs with determination and
                grit. We embrace tough challenges.
              </h3>
            </div>
          </div>
          <div className="group relative overflow-hidden shadow-xl rounded-2xl py-[50px] bg-white parent">
            <div className="bg-white child w-1/2 mx-auto overflow-hidden flex justify-center rounded-full p-3">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Efeature%2Ftraining.png?alt=media&token=9f731de1-607f-4ce5-999b-3b5b940a78ae"
                alt="Image"
                className="transform transition-transform duration-1000 ease-in-out w-[100%]"
              />
            </div>
            <div className="second-child pt-8 px-5 text-center">
              <h2 className="lg:text-3xl md:text-2xl text-xl mb-3 font-semibold">
                Industrial
                <br />
                Training
              </h2>
              <h3 className="md:lg font-light">
                We provide free Industrial Internship to novice undergratuates.
                Basically our aim is to help students.
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Learning environment */}
      <div className="container bg-[#009df2] mx-auto text-white lg:pl-[70px] md:pl-[50px] py-[70px] px-5">
        <h2 className="text-3xl font-bold mb-10">
          Learning environment,Free <br /> Internship to novice students.
        </h2>
        <div className="md:flex">
          <div className="md:w-1/2 w-full space-y-5">
            <div className="flex items-center gap-5 md:gap-10">
              <div className="bg-white flex items-center px-3 h-[74px] rounded-[100px]">
                <MdOutlineLaptopWindows className="text-red-600 text-[50px]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">WEB DESIGNING</h4>
                <p className="text-md text-justify font-light">
                  Something which makes PN INFOSYS different from other IT
                  companies is that we train novice students and also make them
                  work on Live projects.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 md:gap-10">
              <div className="bg-white flex items-center px-3 h-[74px] rounded-[100px]">
                <MdOutlineLaptopWindows className="text-red-600 text-[50px]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">WEB DEVELOPMENT</h4>
                <p className="text-md text-justify font-light">
                  Something which makes PN INFOSYS different from other IT
                  companies is that we train novice students and also make them
                  work on Live projects.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 md:gap-10">
              <div className="bg-white flex items-center px-4 h-[74px] rounded-[100px]">
                <FaMobileAlt className="text-red-600 text-[40px]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">APP DEVELOPMENT</h4>
                <p className="text-md text-justify font-light">
                  Something which makes PN INFOSYS different from other IT
                  companies is that we train novice students and also make them
                  work on Live projects.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 md:gap-10">
              <div className="bg-white flex items-center px-3 h-[74px] rounded-[100px]">
                <MdOutlineLaptopWindows className="text-red-600 text-[50px]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">
                  ANGULAR, PYTHON, DJ text-justifyANGO, LARAVEL
                </h4>
                <p className="text-md text-justify font-light">
                  Something which makes PN INFOSYS different from other IT
                  companies is that we train novice students and also make them
                  work on Live projects.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="md:w-1/2 w-full ">
            <div className="moveUpDown h-full flex items-center justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Etips%2Flearning.png?alt=media&token=ce9f919b-595f-44e0-bbbd-aa72aba5b8f6"
                alt=""
                className="w-[80%]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Technologies We work on... */}
      <div className="container mx-auto md:px-10 px-4 py-[70px]">
        <div className="md:flex justify-between items-center space-y-5 lg:space-x-0 md:mb-5">
          <div className="w-full md:w-2/5 font-semibold md:text-left text-center">
            <p className="lg:text-3xl md:text-2xl">Technologies</p>
            <p className="text-[#009df2] lg:text-5xl md:text-4xl text-3xl">
              We work on...
            </p>
          </div>
          <div className="w-full md:w-3/5 flex md:justify-end justify-center">
            <ul className="uppercase flex lg:gap-10 md:gap-5 gap-2 text-[13px] lg:text-[18px] md:text-[16px] text-center font-semibold">
              <li
                className={`filter-btn ${
                  filter === "all" ? "text-[#009df2]" : "text-black"
                } hover:text-[#009df2]`}
                onClick={() => handleFilterChange("all")}
              >
                Show all
              </li>
              <li
                className={`filter-btn ${
                  filter === "web-designing" ? "text-[#009df2]" : "text-black"
                } hover:text-[#009df2]`}
                onClick={() => handleFilterChange("web-designing")}
              >
                Web Designing
              </li>
              <li
                className={`filter-btn ${
                  filter === "web-development" ? "text-[#009df2]" : "text-black"
                } hover:text-[#009df2]`}
                onClick={() => handleFilterChange("web-development")}
              >
                Web Development
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 md:gap-6 gap-3">
            {cards
              .filter((card) => filter === "all" || card.category === filter)
              .map((card) => (
                <div
                  key={card.id}
                  className="card bg-white group relative overflow-hidden shadow-2xl rounded-2xl py-4 md:px-8 px-2 opacity-100 scale-100 translate-y-0 transition-all duration-700 ease-in-out"
                >
                  <div className="first-child overflow-hidden flex justify-center lg:h-32 md:h-24 h-24 w-full">
                    <img
                      src={card.imgSrc}
                      alt={card.title}
                      className="transform transition-transform duration-1000 ease-in-out group-hover:scale-110 w-[70%]"
                    />
                  </div>
                  <div className="second-child text-center uppercase mt-4">
                    <h2 className="md:text-2xl text-xl font-bold">
                      {card.title}
                    </h2>
                    <p className="lg:text-lg md:text-[13px] text-[12px] transition-all group-hover:underline group-hover:text-[#3596ca] font-semibold text-[#009DF2]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* Our Portfolio */}
      <div className="container mx-auto mb-[70px] lg:px-10 md:px-6 px-6">
        <div className="mb-10 font-semibold lg:text-left text-center">
          <h2 className="md:text-3xl">Our</h2>
          <h2 className="md:text-5xl text-3xl text-[#009df2]">Portfolio</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-6 gap-7">
          <div className="box relative shadow-xl overflow-hidden rounded-2xl">
            <div
              className="relative overflow-hidden w-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fidtrnew.png?alt=media&token=724ae9b3-fc39-4e1d-9def-8f717da38d66')",
                padding: "30px 20px",
              }}
            >
              <div className="py-[100px]"></div>
              {/* Overlay div */}
              <div className="overlay absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="flex gap-3 justify-center text-[50px] text-[#009df2]">
                  <IoSearch className="p-4 bg-white rounded-full hover:text-white hover:bg-[#009df2] transform transition-transform ease-in-out duration-500 hover:scale-110 hover:shadow-mxl" />
                  <FaLink className="p-4 bg-white rounded-full hover:text-white hover:bg-[#009df2] transform transition-transform ease-in-out duration-500 hover:scale-110 hover:shadow-mxl" />
                </div>
                <h2 className="text-2xl font-semibold text-center mt-3">
                  Institute of Drivers Training and Research
                </h2>
                <p className="text-lg">Gwalior</p>
              </div>
            </div>
          </div>
          <div className="box relative shadow-xl overflow-hidden rounded-2xl">
            <div
              className="relative overflow-hidden w-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fidtrnew.png?alt=media&token=724ae9b3-fc39-4e1d-9def-8f717da38d66')",
                padding: "30px 20px",
              }}
            >
              <div className="py-[100px]"></div>
              {/* Overlay div */}
              <div className="overlay absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="flex gap-3 justify-center text-[50px] text-[#009df2]">
                  <IoSearch className="p-4 bg-white rounded-full hover:text-white hover:bg-[#009df2] transform transition-transform ease-in-out duration-500 hover:scale-110 hover:shadow-mxl" />
                  <FaLink className="p-4 bg-white rounded-full hover:text-white hover:bg-[#009df2] transform transition-transform ease-in-out duration-500 hover:scale-110 hover:shadow-mxl" />
                </div>
                <h2 className="text-2xl font-semibold text-center mt-3">
                  Institute of Drivers Training and Research
                </h2>
                <p className="text-lg">Gwalior</p>
              </div>
            </div>
          </div>
          <div className="box relative shadow-xl overflow-hidden rounded-2xl">
            <div
              className="relative overflow-hidden w-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fidtrnew.png?alt=media&token=724ae9b3-fc39-4e1d-9def-8f717da38d66')",
                padding: "30px 20px",
              }}
            >
              <div className="py-[100px]"></div>
              {/* Overlay div */}
              <div className="overlay absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="flex gap-3 justify-center text-[50px] text-[#009df2]">
                  <IoSearch className="p-4 bg-white rounded-full hover:text-white hover:bg-[#009df2] transform transition-transform ease-in-out duration-500 hover:scale-110 hover:shadow-mxl" />
                  <FaLink className="p-4 bg-white rounded-full hover:text-white hover:bg-[#009df2] transform transition-transform ease-in-out duration-500 hover:scale-110 hover:shadow-mxl" />
                </div>
                <h2 className="text-2xl font-semibold text-center mt-3">
                  Institute of Drivers Training and Research
                </h2>
                <p className="text-lg">Gwalior</p>
              </div>
            </div>
          </div>
          <div className="box relative shadow-xl overflow-hidden rounded-2xl">
            <div
              className="relative overflow-hidden w-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fidtrnew.png?alt=media&token=724ae9b3-fc39-4e1d-9def-8f717da38d66')",
                padding: "30px 20px",
              }}
            >
              <div className="py-[100px]"></div>
              {/* Overlay div */}
              <div className="overlay absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="flex gap-3 justify-center text-[50px] text-[#009df2]">
                  <IoSearch className="p-4 bg-white rounded-full hover:text-white hover:bg-[#009df2] transform transition-transform ease-in-out duration-500 hover:scale-110 hover:shadow-mxl" />
                  <FaLink className="p-4 bg-white rounded-full hover:text-white hover:bg-[#009df2] transform transition-transform ease-in-out duration-500 hover:scale-110 hover:shadow-mxl" />
                </div>
                <h2 className="text-2xl font-semibold text-center mt-3">
                  Institute of Drivers Training and Research
                </h2>
                <p className="text-lg">Gwalior</p>
              </div>
            </div>
          </div>
          <div className="box relative shadow-xl overflow-hidden rounded-2xl">
            <div
              className="relative overflow-hidden w-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fidtrnew.png?alt=media&token=724ae9b3-fc39-4e1d-9def-8f717da38d66')",
                padding: "30px 20px",
              }}
            >
              <div className="py-[100px]"></div>
              {/* Overlay div */}
              <div className="overlay absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="flex gap-3 justify-center text-[50px] text-[#009df2]">
                  <IoSearch className="p-4 bg-white rounded-full hover:text-white hover:bg-[#009df2] transform transition-transform ease-in-out duration-500 hover:scale-110 hover:shadow-mxl" />
                  <FaLink className="p-4 bg-white rounded-full hover:text-white hover:bg-[#009df2] transform transition-transform ease-in-out duration-500 hover:scale-110 hover:shadow-mxl" />
                </div>
                <h2 className="text-2xl font-semibold text-center mt-3">
                  Institute of Drivers Training and Research
                </h2>
                <p className="text-lg">Gwalior</p>
              </div>
            </div>
          </div>
          <div className="box relative shadow-xl overflow-hidden rounded-2xl">
            <div
              className="relative overflow-hidden w-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fidtrnew.png?alt=media&token=724ae9b3-fc39-4e1d-9def-8f717da38d66')",
                padding: "30px 20px",
              }}
            >
              <div className="py-[100px]"></div>
              {/* Overlay div */}
              <div className="overlay absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="flex gap-3 justify-center text-[50px] text-[#009df2]">
                  <IoSearch className="p-4 bg-white rounded-full hover:text-white hover:bg-[#009df2] transform transition-transform ease-in-out duration-500 hover:scale-110 hover:shadow-mxl" />
                  <FaLink className="p-4 bg-white rounded-full hover:text-white hover:bg-[#009df2] transform transition-transform ease-in-out duration-500 hover:scale-110 hover:shadow-mxl" />
                </div>
                <h2 className="text-2xl font-semibold text-center mt-3">
                  Institute of Drivers Training and Research
                </h2>
                <p className="text-lg">Gwalior</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Services */}
      <div className="container bg-[#009df2] mx-auto text-white md:pl-[50px] py-[70px] px-4">
        <h2 className="text-4xl text-center lg:text-left font-semibold mb-10">
          Our Services
        </h2>
        <div className="md:flex">
          <div className="md:w-1/2 w-full space-y-4">
            <div className="flex items-center gap-5 md:gap-10">
              <div className="bg-white flex items-center px-3 h-[74px] rounded-[100px]">
                <IoIosBulb className="text-red-600 text-[50px]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">INNOVATIVE Ideas</h4>
                <p className="text-md text-justify font-light">
                  PN INFOSYS believes in developing true partnerships. We foster
                  a collegial environment where individual perspectives are
                  respected and honest dialogue is expected.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 md:gap-10">
              <div className="bg-white flex items-center px-3 h-[74px] rounded-[100px]">
                <AiFillCodeSandboxCircle className="text-red-600 text-[50px]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">CREATIVE Designing</h4>
                <p className="text-md text-justify font-light">
                  PN INFOSYS brings robust skills and forward looking
                  perspectives to solve customer challenges. We use proven
                  knowledge to make recommendations and provide expert guidance
                  to our customers.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 md:gap-10">
              <div className="bg-white flex items-center px-4 h-[74px] rounded-[100px]">
                <FaPeopleGroup className="text-red-600 text-[40px]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">CLIENT'S Happiness</h4>
                <p className="text-md text-justify font-light">
                  PN INFOSYS is driven to meet client needs with determination
                  and grit. We embrace tough challenges and do not rest until
                  the problem is solved, the right way.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 md:gap-10">
              <div className="bg-white flex items-center px-3 h-[74px] rounded-[100px]">
                <GrVmMaintenance className="text-red-600 text-[50px]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">FULL Maintenance</h4>
                <p className="text-md text-justify font-light">
                  PN INFOSYS Company provides a full range of maintenance and
                  compliance services for Government and Commercial facilities
                  both large and small.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 md:gap-10">
              <div className="bg-white flex items-center px-3 h-[74px] rounded-[100px]">
                <GoGoal className="text-red-600 text-[50px]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">PRACTICAL Training</h4>
                <p className="text-md text-justify font-light">
                  We don't use paper and pencil at all in our training
                  sessions.We are provided only practical work at training class
                  session.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="md:w-1/2 w-full ">
            <div className="moveUpDown h-full flex items-center justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eservices%2Fe-learning.png?alt=media&token=71eaebcc-1041-4891-bb3d-68cc30b0173b"
                alt=""
                className="w-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* News Events */}
      <div class="container mx-auto md:px-12 px-4 py-14">
        <div className="font-semibold lg:text-left text-center">
          <p className="text-4xl lg:ml-1">News</p>
          <p className="text-6xl text-[#009df2] mb-7">Events</p>
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white group relative overflow-hidden shadow-xl rounded-2xl">
            <div class="first-child overflow-hidden">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eclient%2Fe1.jpg?alt=media&token=e6e44a43-8e57-4d03-a8c5-5c120f33f9f0"
                alt="Image"
                class="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
            </div>
            <div class="second-child py-5 px-10">
              <div class="transition-all group-hover:underline text-justify">
                <h2 class="lg:text-2xl text-center font-semibold">
                  Workshop by Senior <br />
                  Advisor
                </h2>
                <br />
                <ul class="font-light list-with-dots text-[14px] space-y-1">
                  <li>
                    Workshop was enacted by Vaibhav Shrivastava, who is Product
                    Owner at Xiaomi, China.
                  </li>
                  <li>
                    He is our Senior Advisor, he conducted the workshop in which
                    he holistically motivated the team of PN INFOSYS.
                  </li>
                </ul>
              </div>
            </div>
            <div class="btn w-[40%] mx-auto my-8">Read More...</div>
          </div>
          <div class="bg-white group relative overflow-hidden shadow-xl rounded-2xl">
            <div class="first-child overflow-hidden">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eclient%2Fe1.jpg?alt=media&token=e6e44a43-8e57-4d03-a8c5-5c120f33f9f0"
                alt="Image"
                class="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
            </div>
            <div class="second-child py-5 px-10">
              <div class="transition-all group-hover:underline text-justify">
                <h2 class="lg:text-2xl text-center font-semibold">
                  Workshop by Senior <br />
                  Advisor
                </h2>
                <br />
                <ul class="font-light list-with-dots text-[14px] space-y-1">
                  <li>
                    Workshop was enacted by Vaibhav Shrivastava, who is Product
                    Owner at Xiaomi, China.
                  </li>
                  <li>
                    He is our Senior Advisor, he conducted the workshop in which
                    he holistically motivated the team of PN INFOSYS.
                  </li>
                </ul>
              </div>
            </div>
            <div class="btn w-[40%] mx-auto my-8">Read More...</div>
          </div>
          <div class="bg-white group relative overflow-hidden shadow-xl rounded-2xl">
            <div class="first-child overflow-hidden">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eclient%2Fe1.jpg?alt=media&token=e6e44a43-8e57-4d03-a8c5-5c120f33f9f0"
                alt="Image"
                class="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
            </div>
            <div class="second-child py-5 px-10">
              <div class="transition-all group-hover:underline text-justify">
                <h2 class="lg:text-2xl text-center font-semibold">
                  Workshop by Senior <br />
                  Advisor
                </h2>
                <br />
                <ul class="font-light list-with-dots text-[14px] space-y-1">
                  <li>
                    Workshop was enacted by Vaibhav Shrivastava, who is Product
                    Owner at Xiaomi, China.
                  </li>
                  <li>
                    He is our Senior Advisor, he conducted the workshop in which
                    he holistically motivated the team of PN INFOSYS.
                  </li>
                </ul>
              </div>
            </div>
            <div class="btn w-[40%] mx-auto my-8">Read More...</div>
          </div>
          <div class="bg-white group relative overflow-hidden shadow-xl rounded-2xl">
            <div class="first-child overflow-hidden">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eclient%2Fe1.jpg?alt=media&token=e6e44a43-8e57-4d03-a8c5-5c120f33f9f0"
                alt="Image"
                class="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
            </div>
            <div class="second-child py-5 px-10">
              <div class="transition-all group-hover:underline text-justify">
                <h2 class="lg:text-2xl text-center font-semibold">
                  Workshop by Senior <br />
                  Advisor
                </h2>
                <br />
                <ul class="font-light list-with-dots text-[14px] space-y-1">
                  <li>
                    Workshop was enacted by Vaibhav Shrivastava, who is Product
                    Owner at Xiaomi, China.
                  </li>
                  <li>
                    He is our Senior Advisor, he conducted the workshop in which
                    he holistically motivated the team of PN INFOSYS.
                  </li>
                </ul>
              </div>
            </div>
            <div class="btn w-[40%] mx-auto my-8">Read More...</div>
          </div>
          <div class="bg-white group relative overflow-hidden shadow-xl rounded-2xl">
            <div class="first-child overflow-hidden">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eclient%2Fe1.jpg?alt=media&token=e6e44a43-8e57-4d03-a8c5-5c120f33f9f0"
                alt="Image"
                class="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
            </div>
            <div class="second-child py-5 px-10">
              <div class="transition-all group-hover:underline text-justify">
                <h2 class="lg:text-2xl text-center font-semibold">
                  Workshop by Senior <br />
                  Advisor
                </h2>
                <br />
                <ul class="font-light list-with-dots text-[14px] space-y-1">
                  <li>
                    Workshop was enacted by Vaibhav Shrivastava, who is Product
                    Owner at Xiaomi, China.
                  </li>
                  <li>
                    He is our Senior Advisor, he conducted the workshop in which
                    he holistically motivated the team of PN INFOSYS.
                  </li>
                </ul>
              </div>
            </div>
            <div class="btn w-[40%] mx-auto my-8">Read More...</div>
          </div>
          <div class="bg-white group relative overflow-hidden shadow-xl rounded-2xl">
            <div class="first-child overflow-hidden">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eclient%2Fe1.jpg?alt=media&token=e6e44a43-8e57-4d03-a8c5-5c120f33f9f0"
                alt="Image"
                class="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
            </div>
            <div class="second-child py-5 px-10">
              <div class="transition-all group-hover:underline text-justify">
                <h2 class="lg:text-2xl text-center font-semibold">
                  Workshop by Senior <br />
                  Advisor
                </h2>
                <br />
                <ul class="font-light list-with-dots text-[14px] space-y-1">
                  <li>
                    Workshop was enacted by Vaibhav Shrivastava, who is Product
                    Owner at Xiaomi, China.
                  </li>
                  <li>
                    He is our Senior Advisor, he conducted the workshop in which
                    he holistically motivated the team of PN INFOSYS.
                  </li>
                </ul>
              </div>
            </div>
            <div class="btn w-[40%] mx-auto my-8">Read More...</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
