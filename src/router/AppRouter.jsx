import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import ReservationRoutes from '../Reservation/ReservationRoutes/ReservationRoutes'



const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<ReservationRoutes />} />
    </Routes>
  )
}

export default AppRouter