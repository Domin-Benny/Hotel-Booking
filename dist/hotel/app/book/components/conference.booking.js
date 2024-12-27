"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const ConferenceRoomBooking = () => {
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("09:00");
    const [endTime, setEndTime] = useState("17:00");
    const [roomType, setRoomType] = useState("standard");
    const conferenceRooms = [
        { value: "standard", label: "Standard", capacity: 20, price: 250 },
        { value: "executive", label: "Executive ", capacity: 10, price: 400 },
        { value: "auditorium", label: "Large Auditorium", capacity: 100, price: 1000 },
    ];
    return (_jsxs("div", { className: " backdrop-blur-sm  bg-[#e8eeff5d] border border-[#e8eeff] rounded-lg shadow-lg p-6 max-w-md mx-auto", children: [_jsx("h2", { className: "text-2xl font-bold text-center mb-4", children: "Book a Conference Room" }), _jsxs("form", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-bold mb-1", children: "Room Type" }), _jsx("select", { value: roomType, onChange: (e) => setRoomType(e.target.value), className: "block w-full border rounded-md p-2", children: conferenceRooms.map((room) => (_jsxs("option", { value: room.value, children: [room.label, " (Capacity: ", room.capacity, ", \u20B5", room.price, "/day)"] }, room.value))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm  font-bold mb-1", children: "Date" }), _jsx("input", { type: "date", value: date, onChange: (e) => setDate(e.target.value), className: "block w-full border rounded-md p-2" })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-bol font-bold mb-1", children: "Start Time" }), _jsx("select", { value: startTime, onChange: (e) => setStartTime(e.target.value), className: "block w-full border rounded-md p-2", children: ["08:00", "09:00", "10:00", "11:00"].map((time) => (_jsx("option", { value: time, children: time }, time))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-bold mb-1", children: "End Time" }), _jsx("select", { value: endTime, onChange: (e) => setEndTime(e.target.value), className: "block w-full border rounded-md p-2", children: ["16:00", "17:00", "18:00", "19:00"].map((time) => (_jsx("option", { value: time, children: time }, time))) })] })] }), _jsx("button", { type: "button", className: "w-full font-bold bg-blue-600 text-white py-2 rounded-md", children: "Book" })] })] }));
};
export default ConferenceRoomBooking;
