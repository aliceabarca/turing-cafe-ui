export function getFetch() {
  fetch('http://localhost:3001/api/v1/reservations')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => err.message('Could Not Find Reservations'))
}