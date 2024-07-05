import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<!-- Google Font -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&family=Playfair+Display:wght@400;500;700&display=swap"
    rel="stylesheet"
/>
<title>News Feeder | Learn with Sumit</title>
<link rel="stylesheet" href="./styles/output.css" />
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
