"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var inner_map_1 = __importDefault(require("./inner.map"));
var image_1 = __importDefault(require("next/image"));
var link_1 = __importDefault(require("next/link"));
var InnerHome = function () {
    return (react_1.default.createElement("div", { className: "w-screen bg-blue-100 py-4 flex flex-col items-center justify-center " },
        react_1.default.createElement("div", { className: "w-screen h-max gap-5 flex flex-col items-center justify-center " },
            inner_map_1.default.map(function (i, index) { return (react_1.default.createElement("div", { key: i.key, className: "w-full h-[70vh]  overflow-hidden " },
                react_1.default.createElement("div", { className: "w-full h-[70vh] flex items-center justify-between gap-5 ".concat(index % 2 === 0 ? 'flex-row' : 'flex-row-reverse') },
                    react_1.default.createElement(image_1.default, { src: i.image, width: 500, height: 500, className: "w-[50%] h-auto object-cover", alt: "img" }),
                    react_1.default.createElement("div", { className: "w-[50%] h-max flex flex-col justify-center ".concat(index % 2 === 0 ? 'items-start' : 'items-end', " ") },
                        react_1.default.createElement("p", { className: "w-10/12 text-blue-900 text-2xl ".concat(index % 2 === 0 ? "text-left" : "text-right", " ") }, i.description.repeat(5)),
                        react_1.default.createElement(link_1.default, { className: "bg-blue-900 rounded text-white hover:bg-blue-800 transition duration-300 ease-linear w-52 h-12 flex items-center justify-center font-extrabold", href: i.link }, i.redirect))))); }),
            react_1.default.createElement("div", { className: " w-full h-[40vh] gap-10 flex flex-col items-center justify-center " },
                react_1.default.createElement("h1", { className: " text-2xl font-extrabold text-blue-900 uppercase underline decoration-double " }, "or Book Using"),
                react_1.default.createElement("div", { className: " w-full h-max flex justify-evenly items-center " },
                    react_1.default.createElement(link_1.default, { href: "" },
                        react_1.default.createElement(image_1.default, { className: " w-40 h-auto ", src: "/images/book/booking.com.png", width: 100, height: 100, alt: "Booking.com" })),
                    react_1.default.createElement(link_1.default, { href: "" },
                        react_1.default.createElement(image_1.default, { className: " w-40 h-auto ", src: "/images/book/tripadvisor.png", width: 100, height: 100, alt: "Tripadvisor" })))))));
};
exports.default = InnerHome;
