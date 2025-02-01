import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "../pages/dashboard"
import Signup from '../pages/signup'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
