"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ConferenceRoomBooking = function () {
    var _a = (0, react_1.useState)(""), date = _a[0], setDate = _a[1];
    var _b = (0, react_1.useState)("09:00"), startTime = _b[0], setStartTime = _b[1];
    var _c = (0, react_1.useState)("17:00"), endTime = _c[0], setEndTime = _c[1];
    var _d = (0, react_1.useState)("standard"), roomType = _d[0], setRoomType = _d[1];
    var conferenceRooms = [
        { value: "standard", label: "Standard", capacity: 20, price: 250 },
        { value: "executive", label: "Executive ", capacity: 10, price: 400 },
        { value: "auditorium", label: "Large Auditorium", capacity: 100, price: 1000 },
    ];
    return (React.createElement("div", { className: " backdrop-blur-sm  bg-[#e8eeff5d] border border-[#e8eeff] rounded-lg shadow-lg p-6 max-w-md mx-auto" },
        React.createElement("h2", { className: "text-2xl font-bold text-center mb-4" }, "Book a Conference Room"),
        React.createElement("form", { className: "space-y-4" },
            React.createElement("div", null,
                React.createElement("label", { className: "block text-sm font-bold mb-1" }, "Room Type"),
                React.createElement("select", { value: roomType, onChange: function (e) { return setRoomType(e.target.value); }, className: "block w-full border rounded-md p-2" }, conferenceRooms.map(function (room) { return (React.createElement("option", { key: room.value, value: room.value },
                    room.label,
                    " (Capacity: ",
                    room.capacity,
                    ", \u20B5",
                    room.price,
                    "/day)")); }))),
            React.createElement("div", null,
                React.createElement("label", { className: "block text-sm  font-bold mb-1" }, "Date"),
                React.createElement("input", { type: "date", value: date, onChange: function (e) { return setDate(e.target.value); }, className: "block w-full border rounded-md p-2" })),
            React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                React.createElement("div", null,
                    React.createElement("label", { className: "block text-bol font-bold mb-1" }, "Start Time"),
                    React.createElement("select", { value: startTime, onChange: function (e) { return setStartTime(e.target.value); }, className: "block w-full border rounded-md p-2" }, ["08:00", "09:00", "10:00", "11:00"].map(function (time) { return (React.createElement("option", { key: time, value: time }, time)); }))),
                React.createElement("div", null,
                    React.createElement("label", { className: "block text-sm font-bold mb-1" }, "End Time"),
                    React.createElement("select", { value: endTime, onChange: function (e) { return setEndTime(e.target.value); }, className: "block w-full border rounded-md p-2" }, ["16:00", "17:00", "18:00", "19:00"].map(function (time) { return (React.createElement("option", { key: time, value: time }, time)); })))),
            React.createElement("button", { type: "button", className: "w-full font-bold bg-blue-600 text-white py-2 rounded-md" }, "Book"))));
};
exports.default = ConferenceRoomBooking;
