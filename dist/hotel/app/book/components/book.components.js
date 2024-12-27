"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import BedroomBooking from "./room.booking";
import ConferenceRoomBooking from "./conference.booking";
import RestaurantBooking from "./bars.booking";
import EventBooking from "./event.booking";
const BookComponent = () => {
    const [activeTab, setActiveTab] = useState("bedroom");
    const getBackgroundClass = () => {
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
    return (_jsx("div", { className: `w-screen min-h-screen ${getBackgroundClass()} bg-cover bg-center mt-10 text-blue-900 p-8`, children: _jsxs("div", { className: "container mx-auto", children: [_jsx("div", { className: "flex justify-center mb-6", children: _jsx("div", { className: "inline-flex rounded-md shadow-sm", role: "group", children: ["bedroom", "restaurant", "conference", "event"].map((tab) => (_jsx("button", { type: "button", onClick: () => setActiveTab(tab), className: `w-[150px] py-2 text-sm font-bold border-t border-b border-gray-300 transition duration-300 ease-in-out
                  ${activeTab === tab ? "bg-blue-600 text-white" : "bg-[#e8eeff8f] backdrop-blur-sm text-blue-600 hover:bg-[#8aa6fb66]"}
                  ${tab === "bedroom" ? "rounded-l-md border" : ""}
                  ${tab === "event" ? "rounded-r-md border" : ""}
                  ${tab === "restaurant" ? "border-r" : ""}`, children: tab === "bedroom"
                                ? "Hotel Room"
                                : tab === "restaurant"
                                    ? "Restaurant"
                                    : tab === "conference"
                                        ? "Conference Room"
                                        : "Event" }, tab))) }) }), activeTab === "bedroom" && _jsx(BedroomBooking, {}), activeTab === "restaurant" && _jsx(RestaurantBooking, {}), activeTab === "conference" && _jsx(ConferenceRoomBooking, {}), activeTab === "event" && _jsx(EventBooking, {})] }) }));
};
export default BookComponent;
