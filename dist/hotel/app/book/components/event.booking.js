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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var EventBooking = function () {
    var _a = (0, react_1.useState)("wedding"), eventType = _a[0], setEventType = _a[1];
    var _b = (0, react_1.useState)("indoor"), locationType = _b[0], setLocationType = _b[1];
    var _c = (0, react_1.useState)(""), date = _c[0], setDate = _c[1];
    var _d = (0, react_1.useState)(50), guestCount = _d[0], setGuestCount = _d[1];
    var eventTypes = ["wedding", "party", "conference", "other"];
    var locationOptions = ["indoor", "outdoor"];
    return (react_1.default.createElement("div", { className: "w-full max-w-md mx-auto p-4 shadow-lg bg-[#e8eeff5d] border border-[#e8eeff] backdrop-blur-sm rounded-md" },
        react_1.default.createElement("h2", { className: "text-2xl font-bold text-center mb-4" }, "Event Booking"),
        react_1.default.createElement("form", { className: "space-y-4" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", { className: "block text-sm font-bold" }, "Event Type"),
                react_1.default.createElement("select", { value: eventType, onChange: function (e) { return setEventType(e.target.value); }, className: "w-full p-2 border rounded-md" }, eventTypes.map(function (type) { return (react_1.default.createElement("option", { key: type, value: type }, type.charAt(0).toUpperCase() + type.slice(1))); }))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", { className: "block text-sm font-bold" }, "Location"),
                react_1.default.createElement("select", { value: locationType, onChange: function (e) { return setLocationType(e.target.value); }, className: "w-full p-2 border rounded-md" }, locationOptions.map(function (location) { return (react_1.default.createElement("option", { key: location, value: location }, location.charAt(0).toUpperCase() + location.slice(1))); }))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", { className: "block text-sm font-bold" }, "Event Date"),
                react_1.default.createElement("input", { type: "date", value: date, onChange: function (e) { return setDate(e.target.value); }, className: "w-full p-2 border rounded-md" })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", { className: "block text-sm font-bold" }, "Number of Guests"),
                react_1.default.createElement("input", { type: "number", value: guestCount, onChange: function (e) { return setGuestCount(Number(e.target.value)); }, min: 1, max: 500, className: "w-full p-2 border rounded-md" })),
            react_1.default.createElement("button", { type: "submit", className: "w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700" }, "Book Event"))));
};
exports.default = EventBooking;
