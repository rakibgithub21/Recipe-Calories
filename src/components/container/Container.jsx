import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";


const Container = () => {


    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('fakeapi.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    },[])


    return (
        <div className="container mx-auto grid grid-cols-5 gap-5 my-10">
            <div className="col-span-3  grid grid-cols-2 gap-5">
                {
                    recipes.map(recipe => <Recipe
                        key={recipe.recipe_id}
                        recipe={recipe}
                    ></Recipe>)
                }
            </div>
            <div className="col-span-2 border border-black">

            </div>
        </div>
    );
};

export default Container;