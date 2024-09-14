import RecipeCard from "../components/RecipeCard";

const Favorite = () => {
  const favourites = JSON.parse(localStorage.getItem("favorites")) || [];
  return (
    <div className="flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>

        {
          favourites.length === 0 && (
            <div className="h-[80vh] flex flex-col md:mt-9 items-center gap-4">
              <img src="/assets/404.svg" className="h-3/4" alt="404 error" />
            </div>
          )
        }

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-6">
          {
            favourites.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Favorite
