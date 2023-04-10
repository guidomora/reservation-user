import React, { useEffect } from 'react'
import useReservationStore from '../../hooks/useReservationStore'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import { addDays, formatISO } from 'date-fns'
import controlDates from '../../hooks/controlDates'

const ReservationsSideBar = () => {
  const {actualDay, secondDay, thirdDay, fourthDay, fifthDay} = controlDates()
  const { reservationsPerDay } = useSelector(state => state.reservation)
  const { setReservations } = useReservationStore()


  useEffect(() => {
    setReservations()
  }, [])

  
  return (
    <Grid mr={6}>
      <ul className="list-group lista">
        <li className="list-group-item active" onClick={actualDay}>{new Date().toLocaleDateString()}</li>
        <li className="list-group-item" onClick={secondDay}>{addDays(new Date(), 1).toLocaleDateString()}</li>
        <li className="list-group-item" onClick={thirdDay}>{addDays(new Date(), 2).toLocaleDateString()}</li>
        <li className="list-group-item" onClick={fourthDay}>{addDays(new Date(), 3).toLocaleDateString()}</li>
        <li className="list-group-item" onClick={fifthDay}>{addDays(new Date(), 4).toLocaleDateString()}</li>
      </ul>
    </Grid>
  )
}

export default ReservationsSideBar

