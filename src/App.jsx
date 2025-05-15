import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import { Home } from './Pages/Home/Home'
import FloatingIcon from './components/FloatingIcon/FloatingIcon'

function App() {
  return (
    <Router>
      <FloatingIcon />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
