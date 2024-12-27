"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var room_booking_1 = __importDefault(require("./room.booking"));
var conference_booking_1 = __importDefault(require("./conference.booking"));
var bars_booking_1 = __importDefault(require("./bars.booking"));
var event_booking_1 = __importDefault(require("./event.booking"));
var BookComponent = function () {
    var _a = (0, react_1.useState)("bedroom"), activeTab = _a[0], setActiveTab = _a[1];
    var getBackgroundClass = function () {
        switch (activeTab) {
            case "bedroom":
                return "bg-room";
            case "restaurant":
                return "bg-restaurant";
            case "conference":
                return "bg-conference";
            case "event":
                return "bg-event";
            default:
                return "bg-blue-50";
        }
    };
    return (react_1.default.createElement("div", { className: "w-screen min-h-screen ".concat(getBackgroundClass(), " bg-cover bg-center mt-10 text-blue-900 p-8") },
        react_1.default.createElement("div", { className: "container mx-auto" },
            react_1.default.createElement("div", { className: "flex justify-center mb-6" },
                react_1.default.createElement("div", { className: "inline-flex rounded-md shadow-sm", role: "group" }, ["bedroom", "restaurant", "conference", "event"].map(function (tab) { return (react_1.default.createElement("button", { key: tab, type: "button", onClick: function () { return setActiveTab(tab); }, className: "w-[150px] py-2 text-sm font-bold border-t border-b border-gray-300 transition duration-300 ease-in-out\n                  ".concat(activeTab === tab ? "bg-blue-600 text-white" : "bg-[#e8eeff8f] backdrop-blur-sm text-blue-600 hover:bg-[#8aa6fb66]", "\n                  ").concat(tab === "bedroom" ? "rounded-l-md border" : "", "\n                  ").concat(tab === "event" ? "rounded-r-md border" : "", "\n                  ").concat(tab === "restaurant" ? "border-r" : "") }, tab === "bedroom"
                    ? "Hotel Room"
                    : tab === "restaurant"
                        ? "Restaurant"
                        : tab === "conference"
                            ? "Conference Room"
                            : "Event")); }))),
            activeTab === "bedroom" && react_1.default.createElement(room_booking_1.default, null),
            activeTab === "restaurant" && react_1.default.createElement(bars_booking_1.default, null),
            activeTab === "conference" && react_1.default.createElement(conference_booking_1.default, null),
            activeTab === "event" && react_1.default.createElement(event_booking_1.default, null))));
};
exports.default = BookComponent;
