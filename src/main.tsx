import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MainProvider } from './Context/MainContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <MainProvider>
    <App />
   </MainProvider>
  </StrictMode>,
)
