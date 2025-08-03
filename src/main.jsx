import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomeLayout from './Layout/HomeLayout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeLayout />
  </StrictMode>,
)
