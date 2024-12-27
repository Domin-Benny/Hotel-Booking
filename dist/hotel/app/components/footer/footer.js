"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var footer_component_1 = __importDefault(require("./components/footer.component"));
var year = new Date().getFullYear();
var Footer = function () {
    return (react_1.default.createElement("div", { className: "w-screen h-[50vh] flex flex-col justify-center items-center bg-blue-950 " },
        react_1.default.createElement(footer_component_1.default, null),
        react_1.default.createElement("div", { className: "w-10/12  border-t border-gray-400 border-d " }),
        react_1.default.createElement("footer", { className: "w-10/12 h-[60px] flex justify-between items-center" },
            react_1.default.createElement("p", { className: "text-gray-400 text-sm" },
                "Copyright \u00A9 ",
                year,
                " "),
            react_1.default.createElement("i", { className: " not-italic " },
                react_1.default.createElement("p", { className: "text-gray-400  text-[40px] font-04 " }, "Evita "),
                react_1.default.createElement("p", { className: "text-gray-400 text-[13px] -mt-5 ml-6 " }, "Hotel ")))));
};
exports.default = Footer;
