import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import {projectLoader} from "./apiCall/projectLoader"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
loader:projectLoader  }
])

