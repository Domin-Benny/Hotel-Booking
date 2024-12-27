"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
const BedroomBooking = () => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [roomType, setRoomType] = useState('standard');
    const [guests, setGuests] = useState(1);
    const roomTypes = [
        { value: 'standard', label: 'Standard Room', price: "1,020.00" },
        { value: 'deluxe', label: 'Deluxe Room', price: "1,990.00" },
        { value: 'suite', label: 'Executive Suite', price: "2,909.00" },
    ];
    return (_jsxs("div", { className: " backdrop-blur-sm  bg-[#e8eeff5d] border border-[#e8eeff] rounded-lg shadow-lg p-6 max-w-md mx-auto", children: [_jsx("h2", { className: "text-2xl font-bold text-center mb-4", children: "Book a Room" }), _jsxs("form", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-bold mb-1", children: "Room Type" }), _jsx("select", { value: roomType, onChange: (e) => setRoomType(e.target.value), className: "block w-full border rounded-md p-2", children: roomTypes.map((room) => (_jsxs("option", { value: room.value, children: [room.label, " (\u20B5", room.price, "/night)"] }, room.value))) })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-bold mb-1", children: "Check-In" }), _jsx("input", { type: "date", value: checkIn, onChange: (e) => setCheckIn(e.target.value), className: "block w-full border rounded-md p-2" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-bold mb-1", children: "Check-Out" }), _jsx("input", { type: "date", value: checkOut, onChange: (e) => setCheckOut(e.target.value), className: "block w-full border rounded-md p-2" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-bold mb-1", children: "Number of Guests" }), _jsx("input", { type: "number", value: guests, onChange: (e) => setGuests(Number(e.target.value)), min: 1, max: 4, className: "block w-full border rounded-md p-2" })] }), _jsx("button", { type: "button", className: "w-full bg-blue-600 font-bold text-white py-2 rounded-md", children: "Book Room" })] })] }));
};
export default BedroomBooking;
