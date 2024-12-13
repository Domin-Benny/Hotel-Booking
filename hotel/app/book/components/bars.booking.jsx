"use client"

import { useState } from "react"



const RestaurantBooking = () => {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("19:00")
  const [guests, setGuests] = useState(2)

  const availableTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"]

  return (
    <div className=" backdrop-blur-sm  bg-[#e8eeff5d] border border-[#e8eeff] rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Restaurant Table Reservation</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">Time</label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="block w-full border rounded-md p-2"
          >
            {availableTimes.map((availTime) => (
              <option key={availTime} value={availTime}>
                {availTime}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">Number of Guests</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            min={1}
            max={8}
            className="block w-full border rounded-md p-2"
          />
        </div>

        <button type="button" className="w-full bg-blue-600 font-bold text-white py-2 rounded-md">
          Reserve Table
        </button>
      </form>
    </div>
  )
}

export default RestaurantBooking
