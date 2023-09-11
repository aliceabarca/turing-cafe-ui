import './Reservation.css'

function Reservation({ reservation }) {
  console.log(reservation)
  const reservationList = reservation.map(res => {
    return (
      <div className='reservations' key={res.id}>
        <p>{res.name}</p>
        <p>{res.date}</p>
        <p>{res.time}</p>
        <p>Number Of Guest: {res.number}</p>
      </div>
    )
  })

  return (
    <div className='res'>
      {reservationList}
    </div>
  )
  
}

export default Reservation;