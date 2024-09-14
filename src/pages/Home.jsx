import { Search } from "lucide-react"
import RecipeCard from "../components/RecipeCard"
import { useEffect, useState } from "react";
import { appId, appKey } from "../utils/constant";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);

    try {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${appId}&app_key=${appKey}&type=public&q=${searchQuery}`);
      const data = await response.json();
      console.log(data);
      
      setRecipes(data.hits);

    } catch (error) {
      console.error(error.message);
    }
    finally {
      setLoading(false);
    }
    
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    const searchQuery = e.target[0].value;
    fetchRecipes(searchQuery);
  }

  useEffect(() => {
    fetchRecipes("Indian");
  }, []);

  return (
    <div className="p-10 flex-1 ">
      <div className="max-w-screen-lg mx-auto">
        <form className="border-t border-t-slate-600 rounded-lg" onSubmit={handleSumbit}>
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
          {
            loading ? (
              // For 9 times to show the skeleton
              [...Array(9)].map((_, index) => (
                <div key={index} className="flex w-52 flex-col gap-4">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              ))
            ) : 
            (
              recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe.recipe} />
              ))
            )
          }          
        </div>
      </div>
      
    </div>
  )
}

export default Home
