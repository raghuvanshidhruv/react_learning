import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hook from './Hook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hook />
  </StrictMode>,
)
