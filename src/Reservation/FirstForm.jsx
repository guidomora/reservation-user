import React from 'react'
import { useSelector } from 'react-redux'
import Admin from '../admin/Admin'
import Main from './main'

const FirstForm = () => {
  const {uid} = useSelector(state => state.auth)

  return (
    <div>
      {uid === "CIhjCYGgvrOzhBbeo2uxebNkP7h2" ? <Admin /> : <Main />}
    </div>
  )
}

export default FirstForm
