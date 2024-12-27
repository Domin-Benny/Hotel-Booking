"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
var react_1 = __importDefault(require("react"));
require("./globals.css");
require("./assets/fonts.css");
exports.metadata = {
    title: "Evita Hotel",
    description: "Hotel Booking App",
};
function RootLayout(_a) {
    var children = _a.children;
    return (react_1.default.createElement("html", { lang: "en" },
        react_1.default.createElement("body", { className: " antialiased scroll-smooth overflow-x-hidden w-screen h-screen " }, children)));
}
