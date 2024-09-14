import { Crown, House } from "lucide-react"
import { Link } from "react-router-dom"

const MobileSideBar = () => {
  return (
    <div className="flex justify-center gap-24 border-t fixed w-full left-0 bottom-0 bg-[#272424] z-10 p-2 sm:hidden">
      <Link to={"/"} className="flex gap-3">
        <House />
      </Link>
      <Link to={"/favorites"} className="flex gap-3">
        <Crown />
      </Link>
    </div>
  )
}

export default MobileSideBar
