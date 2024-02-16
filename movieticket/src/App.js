import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Selectseat from './components/Selectseat';
import Booking from './components/Booking';
import Details from './components/Details';
function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingDetails, setBookingDetails] = useState([]);

  return (
    <div className="App">
      <h1>Book My Movie</h1>
      <Selectseat selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
      <Booking
        selectedSeats={selectedSeats}
        setBookingDetails={setBookingDetails}
        setSelectedSeats={setSelectedSeats}
      />
      <Details bookingDetails={bookingDetails} />
    </div>
  );
}

export default App;
