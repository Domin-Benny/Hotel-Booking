"use client"
import React, { useState } from 'react';

// Bedroom Booking Component
const BedroomBooking = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('standard');
  const [guests, setGuests] = useState(1);

  const roomTypes = [
    { value: 'standard', label: 'Standard Room', price: 129 },
    { value: 'deluxe', label: 'Deluxe Room', price: 199 },
    { value: 'suite', label: 'Executive Suite', price: 299 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Book a Hotel Room</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Room Type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="block w-full border rounded-md p-2"
          >
            {roomTypes.map((room) => (
              <option key={room.value} value={room.value}>
                {room.label} (${room.price}/night)
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Check-In</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="block w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Check-Out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="block w-full border rounded-md p-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Number of Guests</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            min={1}
            max={4}
            className="block w-full border rounded-md p-2"
          />
        </div>

        <button type="button" className="w-full bg-blue-600 text-white py-2 rounded-md">
          Book Room
        </button>
      </form>
    </div>
  );
};

// Restaurant Table Booking Component
const RestaurantBooking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState(2);

  const availableTimes = ['18:00', '19:00', '20:00', '21:00', '22:00'];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Restaurant Table Reservation</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Time</label>
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
          <label className="block text-sm font-medium mb-1">Number of Guests</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            min={1}
            max={8}
            className="block w-full border rounded-md p-2"
          />
        </div>

        <button type="button" className="w-full bg-blue-600 text-white py-2 rounded-md">
          Reserve Table
        </button>
      </form>
    </div>
  );
};

// Conference Room Booking Component
const ConferenceRoomBooking = () => {
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:00');
  const [roomType, setRoomType] = useState('standard');

  const conferenceRooms = [
    { value: 'standard', label: 'Standard Conference Room', capacity: 20, price: 250 },
    { value: 'executive', label: 'Executive Meeting Room', capacity: 10, price: 400 },
    { value: 'auditorium', label: 'Large Auditorium', capacity: 100, price: 1000 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Conference Room Booking</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Room Type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="block w-full border rounded-md p-2"
          >
            {conferenceRooms.map((room) => (
              <option key={room.value} value={room.value}>
                {room.label} (Capacity: {room.capacity}, ${room.price}/day)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Booking Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full border rounded-md p-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Start Time</label>
            <select
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="block w-full border rounded-md p-2"
            >
              {['08:00', '09:00', '10:00', '11:00'].map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Time</label>
            <select
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="block w-full border rounded-md p-2"
            >
              {['16:00', '17:00', '18:00', '19:00'].map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="button" className="w-full bg-blue-600 text-white py-2 rounded-md">
          Book Conference Room
        </button>
      </form>
    </div>
  );
};

// Main App Component
const BookingComponent = () => {
  const [activeTab, setActiveTab] = useState('bedroom');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {['bedroom', 'restaurant', 'conference'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium border border-gray-300 
                  ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 hover:bg-gray-200'}
                  ${tab === 'bedroom' ? 'rounded-l-md' : ''}
                  ${tab === 'conference' ? 'rounded-r-md' : ''}`}
              >
                {tab === 'bedroom'
                  ? 'Hotel Room'
                  : tab === 'restaurant'
                  ? 'Restaurant'
                  : 'Conference Room'}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'bedroom' && <BedroomBooking />}
        {activeTab === 'restaurant' && <RestaurantBooking />}
        {activeTab === 'conference' && <ConferenceRoomBooking />}
      </div>
    </div>
  );
};

export default BookingComponent;
