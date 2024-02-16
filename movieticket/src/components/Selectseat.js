import React from 'react';
import Seat from './Seat';

const Selectseat = ({ selectedSeats, setSelectedSeats }) => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const totalSeats = 8;

  const handleSeatSelection = (seatNumber) => {
    // Add or remove the selected seat
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };

  return (
    <div className="seat-selector">
      {rows.map((row) => (
        <div key={row} className="seat-row">
          {Array.from({ length: totalSeats }, (_, index) => (
            <Seat
              key={`${row}${index + 1}`}
              seatNumber={`${row}${index + 1}`}
              isBooked={false}  
              isSelected={selectedSeats.includes(`${row}${index + 1}`)}
              onSelect={handleSeatSelection}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Selectseat;
