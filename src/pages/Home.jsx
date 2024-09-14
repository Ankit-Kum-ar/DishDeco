import { Search } from "lucide-react"
import RecipeCard from "../components/RecipeCard"

const Home = () => {
  return (
    <div className="p-10 flex-1 ">
      <div className="max-w-screen-lg mx-auto">
        <form className="border-t border-t-slate-600 rounded-lg">
          <label className="input shadow-md flex items-center gap-3">
            <Search size="1.5em" />
            <input type="text" className="text-sm md:text-base grow" placeholder="What do you want to cook today ?"/>
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4">
          {/* Recommendations */}
          Recommendations Recipes
        </h1>
        <p className="font-semibold ml-1 my-2 mb-6  tracking-tight">
          {/* Here are some recipes you might like */}
          Here are some recipes you might like
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          
        </div>
      </div>
      
    </div>
  )
}

export default Home
