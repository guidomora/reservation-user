import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Reservation'
import './index.css'
import Reservation from './Reservation'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Reservation />
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
)
