import './App.css'
import { Routes, Route } from 'react-router-dom'
import SliderDemo from './SliderDemo'
import Home from './Home'
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/slider" element={<SliderDemo />}></Route>
    </Routes>
  )
}
 
export default App