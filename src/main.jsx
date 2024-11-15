import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavoriteProvider } from './context/FavoritesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
   
  </StrictMode>,
)
