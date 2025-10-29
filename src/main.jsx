import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const root = document.getElementById('root')

// Error handler for React 18's createRoot
const onError = (error) => {
  console.error('React root error:', error)
  root.innerHTML = `
    <div style="
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgb(9, 9, 11);
      color: white;
      font-family: system-ui, -apple-system, sans-serif;
      text-align: center;
      padding: 20px;
    ">
      <div>
        <h2 style="font-size: 24px; margin-bottom: 16px;">Something went wrong</h2>
        <button 
          onclick="window.location.reload()" 
          style="
            background: rgb(16, 185, 129);
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            color: white;
            cursor: pointer;
          "
        >
          Reload Page
        </button>
      </div>
    </div>
  `
}

try {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} catch (error) {
  onError(error)
}
