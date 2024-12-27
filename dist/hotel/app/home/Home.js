"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var bg_carousel_1 = __importDefault(require("./components/bg.carousel"));
var header_1 = __importDefault(require("../components/header/header"));
// import Link from "next/link";
var fa6_1 = require("react-icons/fa6");
var inner_home_1 = __importDefault(require("./components/inner.home/inner.home"));
var footer_1 = __importDefault(require("../components/footer/footer"));
var _Home = function () {
    var scrollToInnerHome = function () {
        var _a;
        (_a = document.getElementById("inner-home")) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    return (react_1.default.createElement("div", { className: "w-screen h-max flex flex-col overflow-x-hidden" },
        react_1.default.createElement("div", { className: "  " },
            react_1.default.createElement("div", { className: "absolute -z-10 bg-[#00000066] w-screen h-[100vh] overflow-hidden" }),
            react_1.default.createElement("div", { className: "absolute -z-20 w-screen h-screen overflow-hidden" },
                react_1.default.createElement(bg_carousel_1.default, null))),
        react_1.default.createElement(header_1.default, null),
        react_1.default.createElement("div", { className: "h-[83vh] w-screen flex justify-center items-center" },
            react_1.default.createElement("div", { className: "w-[60%] h-[60%] flex justify-center flex-col items-end" },
                react_1.default.createElement("div", { className: "w-full h-full flex justify-center items-center" },
                    react_1.default.createElement("div", { className: "w-40 h-[2px] bg-slate-400" }),
                    react_1.default.createElement("h1", { className: "text-white text-2xl text-center" },
                        "Welcome to Evita Hotel ",
                        react_1.default.createElement("br", null),
                        " Where our luxury meets your standard"),
                    react_1.default.createElement("div", { className: "w-40 h-[2px] bg-slate-400" })),
                react_1.default.createElement("div", { className: "w-full h-full flex justify-center items-center" },
                    react_1.default.createElement("button", { onClick: scrollToInnerHome, className: "text-white flex justify-center animate-bounce p-5 items-center border-2 border-white rounded-full hover:bg-[#fff6] hover:text-white transition duration-600 ease-linear" },
                        react_1.default.createElement("h1", { className: "text-[1.2rem] font-black bg-transparent uppercase" },
                            react_1.default.createElement(fa6_1.FaChevronDown, null)))))),
        react_1.default.createElement("div", { id: "inner-home", className: "w-screen " },
            react_1.default.createElement(inner_home_1.default, null)),
        react_1.default.createElement(footer_1.default, null)));
};
exports.default = _Home;
