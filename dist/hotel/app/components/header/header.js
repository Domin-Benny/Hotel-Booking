"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var header_map_1 = __importDefault(require("./components/header.map"));
var link_1 = __importDefault(require("next/link"));
var Header = function () {
    return (react_1.default.createElement("header", { className: " w-screen h-[100px] flex justify-center items-center " },
        react_1.default.createElement("div", { className: " relative flex justify-center items-center h-[100px] w-11/12 " },
            react_1.default.createElement("div", { className: "  absolute left-[1rem] w-max p-5 -mt-5 pb-3 rounded-b-2xl bg-white border-2 border-blue-500 " },
                react_1.default.createElement(link_1.default, { href: "/" },
                    react_1.default.createElement("h1", { className: " text-[4rem] text-black   font-04 " }, "Evita"),
                    react_1.default.createElement("h1", { className: " text-[1.2rem] mt-[-2rem] text-black ml-[2.5rem]  " }, "Hotel"))),
            react_1.default.createElement("div", { className: "  absolute right-[1rem] h-[110px] top- -m-5 w-max  p-5 flex items-end justify-center rounded-b-2xl bg-white border-2 border-blue-500 " },
                react_1.default.createElement(link_1.default, { href: "/book", className: " text-black px-3 py-2 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out rounded-sm  " },
                    react_1.default.createElement("h1", { className: " text-[1.2rem]  font-black bg-transparent uppercase " }, "Book"))),
            react_1.default.createElement("nav", { className: " w-max flex h-[100px] justify-center items-center " },
                react_1.default.createElement("div", { className: " w-full h-full flex justify-end items-center  " }, header_map_1.default.map(function (h) { return (react_1.default.createElement(link_1.default, { key: h.key, href: h.link, className: "mx-3 text-lg w-[8rem] h-12 border-2 bg-[#0b113636] border-blue-500 text-blue-500 rounded-md flex justify-center items-center hover:bg-[#00000066] transition duration-300 ease-in-out" }, h.title)); }))),
            react_1.default.createElement("nav", null))));
};
exports.default = Header;
