import React from 'react'
import useReservationStore from '../../hooks/useReservationStore'

const Reservations = () => {
  const {setReservations} = useReservationStore()

  setReservations()

  return (
    <div>Reservations</div>
  )
}

export default Reservations