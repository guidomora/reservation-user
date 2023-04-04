import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import FirstForm from '../FirstForm'
import End from '../End'
import Admin from '../../admin/Admin'

const ReservationRoutes = () => {
  return (
    <Routes>
        <Route path='/Seleccion' element={<FirstForm />} />
        <Route path='/*' element={<Navigate to="/Seleccion" />} />
        <Route path= '/Seleccion/End' element ={<End />} />
        <Route path='/admin' element={<Admin />}/>
    </Routes>
  )
}

export default ReservationRoutes