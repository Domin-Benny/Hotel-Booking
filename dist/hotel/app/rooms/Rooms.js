"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var header_1 = __importDefault(require("../components/header/header"));
var footer_1 = __importDefault(require("../components/footer/footer"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Rooms = function () {
    return (react_1.default.createElement("div", { className: "relative w-screen h-max min-h-screen bg-blue-50 overflow-hidden" },
        react_1.default.createElement("div", { className: "absolute inset-0" },
            react_1.default.createElement("div", { className: "relative w-full h-full" }, __spreadArray([], Array(1000), true).map(function (_, index) {
                var size = Math.random() * 10 + 10; // Random size between 10 and 30
                var step = 20; // Define step size to align icons
                var x = (index % step) * (100 / step); // Align icons horizontally
                var y = Math.floor(index / step) * (100 / step); // Align icons vertically
                var opacity = Math.random() * 0.6 + 0.2; // Random opacity between 0.1 and 0.4
                var icons = [
                    free_solid_svg_icons_1.faBed, // Bed Icon
                    free_solid_svg_icons_1.faLightbulb, // Light Icon
                    free_solid_svg_icons_1.faUtensils, // Food Icon
                    free_solid_svg_icons_1.faGlassMartiniAlt, // Bar Icon
                    free_solid_svg_icons_1.faUsers, // Conference Icon
                    free_solid_svg_icons_1.faCalendarCheck, // Event Center Icon
                ];
                var icon = icons[Math.floor(Math.random() * icons.length)];
                var colors = [
                    "#FDBA74", // Bed Icon
                    "#60A5FA", // Light Icon
                    "#34D399", // Food Icon
                    "#A78BFA", // Bar Icon
                    "#F87171", // Conference Icon
                    "#FBBF24", // Event Center Icon
                ];
                var color = colors[Math.floor(Math.random() * colors.length)];
                return (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { key: index, icon: icon, style: {
                        width: "".concat(size, "px"),
                        height: "".concat(size, "px"),
                        color: color,
                        position: "absolute",
                        top: "".concat(y, "%"),
                        left: "".concat(x, "%"),
                        opacity: opacity,
                    } }));
            }))),
        react_1.default.createElement("div", { className: " w- h-max min-h-screen flex relative flex-col justify-center items-center " },
            react_1.default.createElement(header_1.default, null),
            react_1.default.createElement(footer_1.default, null))));
};
exports.default = Rooms;
