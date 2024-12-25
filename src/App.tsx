import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Signin } from "./pages/Signin"
import { HomeRedirect } from "./pages/HomeRedirect"
import Profile from "./pages/Profile"
import Dashboard from "./pages/Dashboard"
import EditProfile from "./pages/EditProfile"
import OtherProfile from "./pages/OtherProfile"
import Settings from "./pages/settings"
import { ProtectedRoute } from "./components/protectRoute"

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomeRedirect />} />
          <Route path='/home' element={<Home/>} />
          <Route path="/signin"  element={<Signin />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />}/>} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />}/>} />
          <Route path="/EditProfile" element={<ProtectedRoute element={<EditProfile />}/>} />
          <Route path="/:id" element={<ProtectedRoute element={<OtherProfile />}/>} />
          <Route path="/settings" element={<ProtectedRoute element={<Settings />}/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
