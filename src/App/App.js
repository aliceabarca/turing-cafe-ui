import { getFetch } from '../api';
import Form from '../components/Form/Form';
import Reservation from '../components/Reservation/Reservation';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const data = [
    {
      id: 1,
      name: "Christie",
      date: "12/29",
      time: "7:00",
      number: 12
      }
  ]
  const [reservation, setReservation] = useState([])

  function customerAddRes(newRes) {
    setReservation([...reservation, newRes])
  }

  useEffect(() => {
    getFetch()
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