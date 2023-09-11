import Form from '../components/Form/Form';
import Reservation from '../components/Reservation/Reservation';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [reservation, setReservation] = useState([])

  function customerAddRes(newRes) {
    setReservation([...reservation, newRes])
  }

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => setReservation(data))
    .catch(err => err.message('Could Not Find Reservations'))
  }, [])

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form customerAddRes={customerAddRes}/>
      </div>
      <div className='resy-container'>
        <Reservation reservation={reservation}/>
      </div>
    </div>
  );
}

export default App; 