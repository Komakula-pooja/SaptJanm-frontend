import DisplayProfile from "../components/DisplayProfile"
import { MainAppbar } from "../components/MainAppbar"
import MatchedProfile from "../components/MatchedProfile"


const Dashboard = () => {
  return (
    <div>
      <MainAppbar />
      <DisplayProfile />
      <MatchedProfile />
    </div>
  )
}

export default Dashboard
