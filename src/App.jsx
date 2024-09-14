import { Route, Routes } from "react-router-dom"
import SideBar from "./components/SideBar"
import Home from "./pages/Home"
import Favorite from "./pages/Favorite"

function App() {
  return (
    <div className="flex">
      <SideBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </div>
  )
}

export default App
