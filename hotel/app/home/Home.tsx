"use client";
import React from "react";
import BGCarousel from "./components/bg.carousel";
import Header from "../components/header/header";
// import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import InnerHome from "./components/inner.home/inner.home";
import Footer from "../components/footer/footer";

const Home: React.FC = () => {
  const scrollToInnerHome = () => {
    const element = document.getElementById("inner-home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <div className="w-screen h-max flex flex-col overflow-x-hidden">
      <div className="  ">
        <div className="absolute -z-10 bg-[#00000066] w-screen h-[100vh] overflow-hidden"></div>

        <div className="absolute -z-20 w-screen h-screen overflow-hidden">
          <BGCarousel />
        </div>
      </div>

      <Header />

      <div className="h-[83vh] w-screen flex justify-center items-center">
        <div className="w-[60%] h-[60%] flex justify-center flex-col items-end">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-40 h-[2px] bg-slate-400"></div>
            <h1 className="text-white text-2xl text-center">
              Welcome to Evita Hotel <br /> Where our luxury meets your standard
            </h1>
            <div className="w-40 h-[2px] bg-slate-400"></div>
          </div>

          <div className="w-full h-full flex justify-center items-center">
            <button
              onClick={scrollToInnerHome}
              className="text-white flex justify-center animate-bounce p-5 items-center border-2 border-white rounded-full hover:bg-[#fff6] hover:text-white transition duration-600 ease-linear"
            >
              <h1 className="text-[1.2rem] font-black bg-transparent uppercase">
                <FaChevronDown />
              </h1>
            </button>
          </div>
        </div>
      </div>

      <div id="inner-home" className="w-screen ">
        <InnerHome />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
