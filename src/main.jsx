
import { createRoot } from 'react-dom/client'
import './index.css'
import "remixicon/fonts/remixicon.css";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
