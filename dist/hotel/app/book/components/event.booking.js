"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
const EventBooking = () => {
    const [eventType, setEventType] = useState("wedding");
    const [locationType, setLocationType] = useState("indoor");
    const [date, setDate] = useState("");
    const [guestCount, setGuestCount] = useState(50);
    const eventTypes = ["wedding", "party", "conference", "other"];
    const locationOptions = ["indoor", "outdoor"];
    return (_jsxs("div", { className: "w-full max-w-md mx-auto p-4 shadow-lg bg-[#e8eeff5d] border border-[#e8eeff] backdrop-blur-sm rounded-md", children: [_jsx("h2", { className: "text-2xl font-bold text-center mb-4", children: "Event Booking" }), _jsxs("form", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-bold", children: "Event Type" }), _jsx("select", { value: eventType, onChange: (e) => setEventType(e.target.value), className: "w-full p-2 border rounded-md", children: eventTypes.map((type) => (_jsx("option", { value: type, children: type.charAt(0).toUpperCase() + type.slice(1) }, type))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-bold", children: "Location" }), _jsx("select", { value: locationType, onChange: (e) => setLocationType(e.target.value), className: "w-full p-2 border rounded-md", children: locationOptions.map((location) => (_jsx("option", { value: location, children: location.charAt(0).toUpperCase() + location.slice(1) }, location))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-bold", children: "Event Date" }), _jsx("input", { type: "date", value: date, onChange: (e) => setDate(e.target.value), className: "w-full p-2 border rounded-md" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-bold", children: "Number of Guests" }), _jsx("input", { type: "number", value: guestCount, onChange: (e) => setGuestCount(Number(e.target.value)), min: 1, max: 500, className: "w-full p-2 border rounded-md" })] }), _jsx("button", { type: "submit", className: "w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700", children: "Book Event" })] })] }));
};
export default EventBooking;
