import React from 'react';

const Details = ({ bookingDetails }) => {

   console.log("booking", bookingDetails)
  return (
    <div className="booking-details">
      <h2>Booking Details</h2>
      {bookingDetails.map((booking, index) => (
        <div key={index} className="booking-item">
          <p>
            <strong>{booking.userName}:</strong> {booking.seats.join(', ')}
          </p>
        </div>
      ))}
      <p>Total Seats: {bookingDetails.reduce((acc, booking) => acc + booking.seats.length, 0)}</p>
      <p>Booked Seats: {bookingDetails.length}</p>
      <p>Available Seats: {48 - bookingDetails.reduce((acc, booking) => acc + booking.seats.length, 0)}</p>
    </div>
  );
};

export default Details;
