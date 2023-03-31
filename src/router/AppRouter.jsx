import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import { auth } from '../firebase/firebase'
import useAuthStore from '../hooks/useAuthStore'
import ReservationRoutes from '../Reservation/ReservationRoutes/ReservationRoutes'
import { login, logout } from '../store/auth/authSlice'
import CheckingAuth from '../ui/CheckingAuth'



const AppRouter = () => {
  const dispatch = useDispatch()
  const { status } = useSelector(state => state.auth)


  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }))
    })

  }, [])


  if (status === "checking") {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {status === "authenticated" 
      ? <Route path="/*" element={<ReservationRoutes />} /> 
      : <Route path="/auth/*" element={<AuthRoutes />} />}
      <Route path='/*' element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}

export default AppRouter