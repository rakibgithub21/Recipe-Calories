import { CiClock2 } from "react-icons/ci";
import { GiStrong } from "react-icons/gi";
import PropTypes from 'prop-types';



const Recipe = ({ recipe, wantToCock }) => {
    const { recipe_name, calories, ingredients, preparing_time, recipe_image, short_description } = recipe;
    // console.log(recipe);
    return (
        <div className="card bg-base-100 shadow-xl border-gray-300 border">
            <figure><img className="w-full p-7 rounded-[35px]" src={recipe_image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="space-y-3">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className="text-[#878787]">{short_description}</p>
                </div>
                <hr />
                <div>
                    <p className="text-xl font-semibold">Ingredients: {ingredients.length}</p>
                    <ol>
                        {ingredients.map((ingredient, index) => <li className="list-disc text-[#878787] font-normal"
                            key={index}
                        >{ingredient}</li>)}
                    </ol>
                </div>
                <hr />
                <div className="flex gap-8">
                    <div className="flex gap-2 items-center text-[#282828cc] text-lg">
                        <span><CiClock2 /></span>
                        <span>{preparing_time} minutes</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#282828cc] text-lg">
                        <span><GiStrong /></span>
                        <span>{calories} Calories</span>
                    </div>
                </div>


                <div className="card-actions ">
                    <button onClick={() => wantToCock(recipe)} className="btn bg-[#0BE58A] text-lg font-medium rounded-3xl">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
    wantToCock: PropTypes.func,
};

export default Recipe;