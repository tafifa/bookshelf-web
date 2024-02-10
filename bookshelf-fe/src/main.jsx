import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById("root")
)
