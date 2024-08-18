import React from 'react'
import ReactDOM from 'react-dom/client'
import { StreamingApp } from './StreamingApp.jsx'
import { BrowserRouter } from 'react-router-dom'

import './styles/styles.scss'
import 'animate.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <StreamingApp />
  </BrowserRouter>
  // </React.StrictMode>,
)
