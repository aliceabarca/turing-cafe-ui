import { useState } from 'react';
import './Form.css'

function Form({ customerAddRes }) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [number, setNumber] = useState(0)

  function newRes(e) {
    e.preventDefault()

    const newReservation = {
      id: Date.now(),
      name,
      date,
      time,
      number,
    }

    customerAddRes(newReservation)
  }

  return (
    <form>
      <input 
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <input 
        type='text'
        placeholder='Date (MM/DD)'
        name='date'
        value={date}
        onChange={event => setDate(event.target.value)}
      />

      <input 
        type='text'
        placeholder='Time'
        name='time'
        value={time}
        onChange={event => setTime(event.target.value)}
      />

      <input 
        type='number'
        placeholder='Number Of Guest'
        name='number-of-guest'
        min='1'
        max='20'
        value={number}
        onChange={event => setNumber(event.target.value)}
      />
      <button onClick={event => newRes(event)}>Make Reservation</button>
    </form>
  )
}

export default Form;