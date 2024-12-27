"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var react_2 = require("react");
var BGCarousel = function () {
    var images = [
        "/images/bg.images/bg-01.jpg",
        "/images/bg.images/bg-02.jpg",
        "/images/bg.images/bg-03.jpg",
        "/images/bg.images/bg-04.jpg",
        "/images/bg.images/bg-05.jpg",
    ];
    var _a = (0, react_2.useState)(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    // Automatically change slides
    (0, react_2.useEffect)(function () {
        var interval = setInterval(function () {
            setCurrentIndex(function (prev) { return (prev + 1) % images.length; });
        }, 5000); // Change every 5 seconds
        // Clear the interval when the component unmounts
        return function () { return clearInterval(interval); };
    }, [images.length]);
    return (react_1.default.createElement("div", { className: "relative w-full h-screen overflow-hidden" },
        react_1.default.createElement("div", { className: "flex transition-transform duration-700 ease-in-out", style: { transform: "translateX(-".concat(currentIndex * 100, "%)") } }, images.map(function (src, index) { return (react_1.default.createElement("div", { key: index, className: "flex-shrink-0 w-full h-screen relative" },
            react_1.default.createElement(image_1.default, { src: src, alt: "Slide ".concat(index + 1), layout: "fill", objectFit: "cover", priority: true }))); }))));
};
exports.default = BGCarousel;
