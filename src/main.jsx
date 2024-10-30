import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './contextapi.jsx'
import Contextdata from './contexts/Contextdata.jsx'

createRoot(document.getElementById('root')).render(
<Contextdata>
  <App/ >
</Contextdata>
)
