"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BGCarousel from "./components/bg.carousel";
import Header from "../components/header/header";
// import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import InnerHome from "./components/inner.home/inner.home";
import Footer from "../components/footer/footer";
const _Home = () => {
    const scrollToInnerHome = () => {
        const element = document.getElementById("inner-home");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (_jsxs("div", { className: "w-screen h-max flex flex-col overflow-x-hidden", children: [_jsxs("div", { className: "  ", children: [_jsx("div", { className: "absolute -z-10 bg-[#00000066] w-screen h-[100vh] overflow-hidden" }), _jsx("div", { className: "absolute -z-20 w-screen h-screen overflow-hidden", children: _jsx(BGCarousel, {}) })] }), _jsx(Header, {}), _jsx("div", { className: "h-[83vh] w-screen flex justify-center items-center", children: _jsxs("div", { className: "w-[60%] h-[60%] flex justify-center flex-col items-end", children: [_jsxs("div", { className: "w-full h-full flex justify-center items-center", children: [_jsx("div", { className: "w-40 h-[2px] bg-slate-400" }), _jsxs("h1", { className: "text-white text-2xl text-center", children: ["Welcome to Evita Hotel ", _jsx("br", {}), " Where our luxury meets your standard"] }), _jsx("div", { className: "w-40 h-[2px] bg-slate-400" })] }), _jsx("div", { className: "w-full h-full flex justify-center items-center", children: _jsx("button", { onClick: scrollToInnerHome, className: "text-white flex justify-center animate-bounce p-5 items-center border-2 border-white rounded-full hover:bg-[#fff6] hover:text-white transition duration-600 ease-linear", children: _jsx("h1", { className: "text-[1.2rem] font-black bg-transparent uppercase", children: _jsx(FaChevronDown, {}) }) }) })] }) }), _jsx("div", { id: "inner-home", className: "w-screen ", children: _jsx(InnerHome, {}) }), _jsx(Footer, {})] }));
};
export default _Home;
