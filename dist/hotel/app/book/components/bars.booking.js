"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const RestaurantBooking = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("19:00");
    const [guests, setGuests] = useState(2);
    const availableTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];
    return (_jsxs("div", { className: " backdrop-blur-sm  bg-[#e8eeff5d] border border-[#e8eeff] rounded-lg shadow-lg p-6 max-w-md mx-auto", children: [_jsx("h2", { className: "text-2xl font-bold text-center mb-4", children: "Restaurant Table Reservation" }), _jsxs("form", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-bold mb-1", children: "Date" }), _jsx("input", { type: "date", value: date, onChange: (e) => setDate(e.target.value), className: "block w-full border rounded-md p-2" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-bold mb-1", children: "Time" }), _jsx("select", { value: time, onChange: (e) => setTime(e.target.value), className: "block w-full border rounded-md p-2", children: availableTimes.map((availTime) => (_jsx("option", { value: availTime, children: availTime }, availTime))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-bold mb-1", children: "Number of Guests" }), _jsx("input", { type: "number", value: guests, onChange: (e) => setGuests(Number(e.target.value)), min: 1, max: 8, className: "block w-full border rounded-md p-2" })] }), _jsx("button", { type: "button", className: "w-full bg-blue-600 font-bold text-white py-2 rounded-md", children: "Reserve Table" })] })] }));
};
export default RestaurantBooking;
