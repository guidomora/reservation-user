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
      Reservations
    </div>
  )
}

export default Reservations