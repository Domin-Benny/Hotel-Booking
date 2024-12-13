"use client"
import React, { useState } from "react";
import BedroomBooking from "./room.booking";
import ConferenceRoomBooking from "./conference.booking";
import RestaurantBooking from "./bars.booking";
import EventBooking from "./event.booking";

const BookingComponent = () => {
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

  return (
    <div className={` w-screen min-h-screen ${getBackgroundClass()} bg-cover bg-center mt-10 text-blue-900 p-8`}>
      <div className="container mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {["bedroom", "restaurant", "conference", "event"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`w-[150px] py-2 text-sm font-bold  border-t border-b border-gray-300 transition duration-300 ease-in-out
                  ${activeTab === tab ? " bg-blue-600 text-white  " : "bg-[#e8eeff8f] backdrop-blur-sm  text-blue-600 hover:bg-[#8aa6fb66] "}
                  ${tab === "bedroom" ? "rounded-l-md border " : ""}
                  ${tab === "event" ? "rounded-r-md border " : ""}
                  ${tab === "restaurant" ? " border-r " : ""}`}
              >
                {tab === "bedroom"
                  ? "Hotel Room"
                  : tab === "restaurant"
                  ? "Restaurant"
                  : tab === "conference"
                  ? "Conference Room"
                  : "Event"}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "bedroom" && <BedroomBooking />}
        {activeTab === "restaurant" && <RestaurantBooking />}
        {activeTab === "conference" && <ConferenceRoomBooking />}
        {activeTab === "event" && <EventBooking />}
      </div>
    </div>
  );
};

export default BookingComponent;
