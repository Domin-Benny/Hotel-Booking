"use client"

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

  return (
    <div className=" backdrop-blur-sm  bg-[#e8eeff5d] border border-[#e8eeff] rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Book a Room</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1">Room Type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="block w-full border rounded-md p-2"
          >
            {roomTypes.map((room) => (
              <option key={room.value} value={room.value}>
                {room.label} (&#8373;{room.price}/night)
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold mb-1">Check-In</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="block w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Check-Out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="block w-full border rounded-md p-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">Number of Guests</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            min={1}
            max={4}
            className="block w-full border rounded-md p-2"
          />
        </div>

        <button type="button" className="w-full bg-blue-600 font-bold text-white py-2 rounded-md">
          Book Room
        </button>
      </form>
    </div>
  );
};


export default BedroomBooking