import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Change this import:
import { HashRouter } from 'react-router-dom' 
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Change this tag: */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)