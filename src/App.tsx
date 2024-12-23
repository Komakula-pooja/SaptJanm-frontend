import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { HomeRedirect } from "./components/HomeRedirect"

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomeRedirect />} />
          <Route path='/home' element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
