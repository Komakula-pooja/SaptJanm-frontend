import Footer from "../components/Footer"
import { Navbar } from "../components/Navbar"
import Quote from "../components/Quote"
import Signup  from "../components/Signup"



export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 ">
            <div>
                <Signup />
            </div>
            <div>
                <Quote />
            </div>
        </div>
        <div >
            <Footer />
        </div>
    </div>
  )
}


