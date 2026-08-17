import './App.css'
import { Routes, Route } from 'react-router-dom'
import SliderDemo from './SliderDemo'
import Home from './Home'
import Navbar from './components/Navbar'
 
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/slider" element={<SliderDemo />}></Route>
    </Routes>
    </>
  )
}
 
export default App