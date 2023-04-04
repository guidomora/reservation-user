import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import FirstForm from '../FirstForm'
import End from '../End'
import Admin from '../../admin/Admin'
import { useSelector } from 'react-redux'

const ReservationRoutes = () => {
  const {email} =useSelector(state => state.auth)


  
  return (
    <Routes> 
        <Route path='/Seleccion' element={<FirstForm />} />
        <Route path='/admin' element={<Admin />}/>
        <Route path='/*' element={<Navigate to="/Seleccion" />} />
        <Route path= '/Seleccion/End' element ={<End />} />
    </Routes>
  )
}

export default ReservationRoutes