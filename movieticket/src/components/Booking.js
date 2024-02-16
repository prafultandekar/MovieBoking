import React, { useState } from 'react';

const Booking = ({ selectedSeats, setBookingDetails, setSelectedSeats }) => {
  const [user, setuser] = useState('');
  const [tickets, settickets] = useState(1);

  const handleBooking = () => {
  
    if (user && selectedSeats.length === tickets) {
      setBookingDetails((prevDetails) => [...prevDetails, { user, seats: selectedSeats }]);
      setSelectedSeats([]); 
    } else {
      alert('Please provide a valid user and select the correct number of seats.');
    }
  };

  return (
    <div className="booking-form">
      <input
        type="text"
        placeholder="Your Name "
        value={user}
        onChange={(e) => setuser(e.target.value)}
      />
      <select value={tickets} onChange={(e) => settickets(e.target.value)}>
        {Array.from({ length: 8 }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1} Ticket{index !== 0 && 's'}
          </option>
        ))}
      </select>
      <button onClick={handleBooking}>Book</button>
    </div>
  );
};

export default Booking;
