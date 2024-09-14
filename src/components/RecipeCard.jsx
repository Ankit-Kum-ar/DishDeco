import { Crown, HeartPulse, Soup } from "lucide-react"
import { useState } from "react";

const RecipeCard = ({recipe}) => {

    const getTwoValues = (arr) => {
        return [arr[0], arr[1]];
    }
    const {label, image, yield: servings, cuisineType} = recipe;
    const healthLabels = getTwoValues(recipe.healthLabels);
    const [favorite, setFavorite] = useState(localStorage.getItem("favorites")?.includes(recipe.label));

    const addRecipeToFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const isRecipeAlreadyFavorited = favorites.some(fav => fav.label === recipe.label);
        
        if(isRecipeAlreadyFavorited) {
            favorites = favorites.filter(fav => fav.label !== recipe.label);
            setFavorite(false);
        }
        else {
            favorites.push(recipe);
            setFavorite(true);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    return (
        <div className="flex flex-col rounded-md bg-[#2827275a] border border-slate-700 overflow-hidden p-3 relative">
            <a 
            href= {`https://www.youtube.com/results?search_query=${label} recipe`} 
            target="_blank"
            className="relative h-32">
                <div className="skeleton absolute inset-0"/>
                <img src={image} alt="recipe-img" className="rounded-lg w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500" 
                onLoad={(e) => {
                    e.currentTarget.style.opacity = 1;
                    e.currentTarget.previousElementSibling.style.display = "none";
                }}/>

                <div className="absolute bottom-1 left-2 bg-slate-600 rounded-full p-1 cursor-pointer flex items-center gap-1 text-xs">
                    <Soup size={16} /> <span>{servings} Servings</span>
                </div> 

                <div className="absolute top-1 right-2 bg-slate-300 text-black rounded-full p-1 cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    addRecipeToFavorites()
                }
                }
                >
                    {
                    
                        favorite ? <Crown size={16} className="fill-yellow-400 text-yellow-400"/> : <Crown size={16} className="hover:fill-yellow-400 hover:text-yellow-400"/>
                    
                    }
                </div>
            </a>

            <div className="flex mt-1">
                <p className="font-bold tracking-wide">{label}</p>
            </div>
            <p className="my-2">{
                cuisineType[0].charAt(0).toUpperCase() + cuisineType[0].slice(1)
            } Kitchen</p>

            <div className="flex gap-2 mt-auto">
                {
                    healthLabels.map((label, index) => (
                        <div key={index} className="flex gap-1 bg-neutral items-center p-1 px-2 rounded-md">
                            <HeartPulse size={16} />
                            <span className="text-sm tracking-tighter font-semibold">{label}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecipeCard
