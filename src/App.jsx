import { Route, Routes } from "react-router-dom"
import SideBar from "./components/SideBar"
import Home from "./pages/Home"

function App() {
  return (
    <div className="flex">
      <SideBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
