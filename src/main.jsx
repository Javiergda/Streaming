import React from 'react'
import ReactDOM from 'react-dom/client'
import { StreamingApp } from './StreamingApp.jsx'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <StreamingApp />
  </BrowserRouter>
  // </React.StrictMode>,
)
