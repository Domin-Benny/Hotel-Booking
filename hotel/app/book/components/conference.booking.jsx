"use client"

import { useState } from "react"


const ConferenceRoomBooking = () => {
  const [date, setDate] = useState("")
  const [startTime, setStartTime] = useState("09:00")
  const [endTime, setEndTime] = useState("17:00")
  const [roomType, setRoomType] = useState("standard")

  const conferenceRooms = [
    { value: "standard", label: "Standard", capacity: 20, price: 250 },
    { value: "executive", label: "Executive ", capacity: 10, price: 400 },
    { value: "auditorium", label: "Large Auditorium", capacity: 100, price: 1000 },
  ]

  return (
    <div className=" backdrop-blur-sm  bg-[#e8eeff5d] border border-[#e8eeff] rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Book a Conference Room</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1">Room Type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="block w-full border rounded-md p-2"
          >
            {conferenceRooms.map((room) => (
              <option key={room.value} value={room.value}>
                {room.label} (Capacity: {room.capacity}, &#8373;{room.price}/day)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm  font-bold mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full border rounded-md p-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-bol font-bold mb-1">Start Time</label>
            <select
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="block w-full border rounded-md p-2"
            >
              {["08:00", "09:00", "10:00", "11:00"].map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">End Time</label>
            <select
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="block w-full border rounded-md p-2"
            >
              {["16:00", "17:00", "18:00", "19:00"].map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="button" className="w-full font-bold bg-blue-600 text-white py-2 rounded-md">
          Book
        </button>
      </form>
    </div>
  )
}

export default ConferenceRoomBooking
