import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Signin } from "./pages/Signin"
import { HomeRedirect } from "./components/HomeRedirect"
import Profile from "./pages/Profile"
import Dashboard from "./pages/Dashboard"
import EditProfile from "./pages/EditProfile"

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomeRedirect />} />
          <Route path='/home' element={<Home/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/EditProfile" element={<EditProfile />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
