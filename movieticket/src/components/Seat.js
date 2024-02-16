import React from 'react';

const Seat = ({ seatNumber, isBooked, isSelected, onSelect }) => {
  const seatClassName = `seat ${isBooked ? 'booked' : isSelected ? 'selected' : ''}`;

  return <div className={seatClassName} onClick={() => onSelect(seatNumber)}>{seatNumber}</div>;
};

export default Seat;