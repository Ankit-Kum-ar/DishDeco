import { Crown, House } from "lucide-react"
import { Link } from "react-router-dom"

const DekstopSideBar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
            <img src="/assets/logo2.png" alt="" className="hidden md:block rounded-lg"/>
            <img src="/assets/mobile-logo.svg" alt="" className="block md:hidden"/>
        </div>
        <ul className="flex flex-col items-center md:items-start gap-8 ">
            <Link to={"/"} className="flex gap-3">
                <House />
                <span className="font-bold hidden md:block text-white">Home</span>
            </Link>
            <Link to={"/favorites"} className="flex gap-3">
              <Crown />
              <span className="font-bold hidden md:block text-white">Favourites</span>
            </Link>
        </ul>
      </div>
    </div>
  )
}

export default DekstopSideBar
