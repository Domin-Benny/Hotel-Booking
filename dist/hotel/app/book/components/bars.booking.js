"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var RestaurantBooking = function () {
    var _a = (0, react_1.useState)(""), date = _a[0], setDate = _a[1];
    var _b = (0, react_1.useState)("19:00"), time = _b[0], setTime = _b[1];
    var _c = (0, react_1.useState)(2), guests = _c[0], setGuests = _c[1];
    var availableTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];
    return (React.createElement("div", { className: " backdrop-blur-sm  bg-[#e8eeff5d] border border-[#e8eeff] rounded-lg shadow-lg p-6 max-w-md mx-auto" },
        React.createElement("h2", { className: "text-2xl font-bold text-center mb-4" }, "Restaurant Table Reservation"),
        React.createElement("form", { className: "space-y-4" },
            React.createElement("div", null,
                React.createElement("label", { className: "block text-sm font-bold mb-1" }, "Date"),
                React.createElement("input", { type: "date", value: date, onChange: function (e) { return setDate(e.target.value); }, className: "block w-full border rounded-md p-2" })),
            React.createElement("div", null,
                React.createElement("label", { className: "block text-sm font-bold mb-1" }, "Time"),
                React.createElement("select", { value: time, onChange: function (e) { return setTime(e.target.value); }, className: "block w-full border rounded-md p-2" }, availableTimes.map(function (availTime) { return (React.createElement("option", { key: availTime, value: availTime }, availTime)); }))),
            React.createElement("div", null,
                React.createElement("label", { className: "block text-sm font-bold mb-1" }, "Number of Guests"),
                React.createElement("input", { type: "number", value: guests, onChange: function (e) { return setGuests(Number(e.target.value)); }, min: 1, max: 8, className: "block w-full border rounded-md p-2" })),
            React.createElement("button", { type: "button", className: "w-full bg-blue-600 font-bold text-white py-2 rounded-md" }, "Reserve Table"))));
};
exports.default = RestaurantBooking;
