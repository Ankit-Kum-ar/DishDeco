import { Crown, HeartPulse, Soup } from "lucide-react"

const RecipeCard = () => {
  return (
    <div className="flex flex-col rounded-md bg-[#2827275a] border border-slate-700 overflow-hidden p-3 relative">
        <a href="#" className="relative h-32">
            <img src="/assets/1.png" alt="recipe-img" className="rounded-lg w-full h-full object-cover cursor-pointer" />

            <div className="absolute bottom-1 left-2 bg-slate-600 rounded-full p-1 cursor-pointer flex items-center gap-1 text-xs">
                <Soup size={16} /> <span>4 Servings</span>
            </div> 

            <div className="absolute top-1 right-2 bg-slate-300 text-black rounded-full p-1 cursor-pointer">
                <Crown size={16} className="hover:fill-yellow-400 hover:text-yellow-400"/>
            </div>
        </a>

        <div className="flex mt-1">
            <p className="font-bold tracking-wide">Roasted Chicken</p>
        </div>
        <p className="my-2">Turkish Kitchen</p>

        <div className="flex gap-2 mt-auto">
            <div className="flex gap-1 bg-neutral items-center p-1 px-2 rounded-md">
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">Gluten-free</span>
            </div>
            <div className="flex gap-1 bg-neutral items-center p-1 px-2 rounded-md">
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">Heart-Healthy</span>
            </div>
        </div>
    </div>
  )
}

export default RecipeCard
