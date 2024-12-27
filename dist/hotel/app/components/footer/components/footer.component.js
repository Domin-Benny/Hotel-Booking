"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
var react_1 = __importDefault(require("react"));
var fa6_1 = require("react-icons/fa6");
var FooterComponents = function () {
    return (react_1.default.createElement("div", { className: " w-[96vw] flex justify-between items-center mb-5 " },
        react_1.default.createElement("div", { className: " w-1/4 flex flex-col justify-center items-center gap-3 list-none " },
            react_1.default.createElement("li", { className: " text-2xl font-extrabold " }, "Services"),
            react_1.default.createElement("li", null, "Events"),
            react_1.default.createElement("li", null, "Conference"),
            react_1.default.createElement("li", null, "Lodge"),
            react_1.default.createElement("li", null, "Restaurant")),
        react_1.default.createElement("div", { className: " w-1/4 flex flex-col justify-center items-center gap-3 list-none " },
            react_1.default.createElement("li", { className: " text-2xl font-extrabold " }, "Partners"),
            react_1.default.createElement("li", null, "Tripadvisor"),
            react_1.default.createElement("li", null, "Booking.com"),
            react_1.default.createElement("li", null, "Airbnb"),
            react_1.default.createElement("li", null, "Agoda.com")),
        react_1.default.createElement("div", { className: " w-1/4 flex flex-col justify-center items-center gap-3 list-none " },
            react_1.default.createElement("li", { className: " text-2xl font-extrabold text-blue-950 select-none " }, "."),
            react_1.default.createElement("li", null, "About Us"),
            react_1.default.createElement(link_1.default, { href: '/contact-us' }, "Contact Us"),
            react_1.default.createElement("li", null, "Terms & Conditions"),
            react_1.default.createElement("li", null, "Privacy Policy")),
        react_1.default.createElement("div", { className: " w-1/4 flex flex-col justify-center items-center gap-3 list-none " },
            react_1.default.createElement("li", { className: " text-2xl font-extrabold " }, "Follow Us"),
            react_1.default.createElement(link_1.default, { href: "/" },
                react_1.default.createElement(fa6_1.FaFacebook, null)),
            react_1.default.createElement(link_1.default, { href: "/" },
                react_1.default.createElement(fa6_1.FaXTwitter, null)),
            react_1.default.createElement(link_1.default, { href: "/" },
                react_1.default.createElement(fa6_1.FaInstagram, null)),
            react_1.default.createElement(link_1.default, { href: "/contact-us" },
                react_1.default.createElement(fa6_1.FaEnvelope, null)))));
};
exports.default = FooterComponents;
