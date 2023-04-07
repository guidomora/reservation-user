import React, { useEffect } from 'react'
import useReservationStore from '../../hooks/useReservationStore'
import { useSelector } from 'react-redux'

const Reservations = () => {
  const { reservations } = useSelector(state => state.reservation)
  const { setReservations } = useReservationStore()

  useEffect(() => {
    setReservations()
  }, [])


  return (
    <div>
      {reservations.map(objeto => ( 
      <p>{objeto.fecha.toDate().toLocaleDateString()}</p>  
      ))}
    </div>
  )
}

export default Reservations