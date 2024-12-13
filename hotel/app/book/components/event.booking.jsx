"use client"
import React, { useState } from "react"

const EventBooking = () => {
  const [eventType, setEventType] = useState("wedding")
  const [locationType, setLocationType] = useState("indoor")
  const [date, setDate] = useState("")
  const [guestCount, setGuestCount] = useState(50)

  const eventTypes = ["wedding", "party", "conference", "other"]
  const locationOptions = ["indoor", "outdoor"]

  return (
    <div className="w-full max-w-md mx-auto p-4 shadow-lg bg-[#e8eeff5d] border border-[#e8eeff] backdrop-blur-sm rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4">Event Booking</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-bold">Event Type</label>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold">Location</label>
          <select
            value={locationType}
            onChange={(e) => setLocationType(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            {locationOptions.map((location) => (
              <option key={location} value={location}>
                {location.charAt(0).toUpperCase() + location.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold">Event Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-bold">Number of Guests</label>
          <input
            type="number"
            value={guestCount}
            onChange={(e) => setGuestCount(Number(e.target.value))}
            min={1}
            max={500}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Book Event
        </button>
      </form>
    </div>
  )
}

export default EventBooking