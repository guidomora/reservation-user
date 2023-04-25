import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import FirstForm from '../FirstForm'
import Admin from '../../admin/Admin'

const ReservationRoutes = () => {


  
  return (
    <Routes> 
        <Route path='/Seleccion' element={<FirstForm />} />
        <Route path='/admin' element={<Admin />}/>
        <Route path='/*' element={<Navigate to="/Seleccion" />} />
    </Routes>
  )
}

export default ReservationRoutes