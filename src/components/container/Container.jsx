import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Table from "../Table/Table";
import LastTable from "../LastTable/LastTable";


const Container = () => {


    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('fakeapi.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])



    // want to cock button handler:
    const [items, setItems] = useState([])



    const wantToCock = (recipe) => {
        if (items.includes(recipe)) {
            alert('You select this before')
        }
        else {
            const newItems = [...items, recipe];
            setItems(newItems)
        }
    }

    //preparing button handler :
    const [arrays, setArrays] = useState([])

    const prepairing = (item) => {
        const remaining = items.filter(i => i.recipe_id !== item.recipe_id);
        const matched = recipes.find(i => i.recipe_id === item.recipe_id);
        const array = [...arrays, matched]
        setArrays(array)
        setItems(remaining);


    }

    console.log(arrays);




    return (
        <div className="container mx-auto grid grid-cols-5 gap-5 my-10">
            <div className="col-span-3  grid grid-cols-2 gap-5">
                {
                    recipes.map(recipe => <Recipe
                        key={recipe.recipe_id}
                        recipe={recipe}
                        wantToCock={wantToCock}
                    ></Recipe>)
                }
            </div>
            <div className="col-span-2 border border-[#28282833] rounded-2xl h-[640px]">
                <h1 className="text-center text-2xl font-semibold my-3">Want to cook: {items.length}</h1>
                <hr className="w-4/5 mx-auto " />
                <Table
                    items={items}
                    prepairing={prepairing}

                ></Table>
                <h1 className="text-center text-2xl font-semibold my-3">Currently cooking: {arrays.length}</h1>
                <hr className="w-4/5 mx-auto " />
                <LastTable
                    arrays={arrays}
                ></LastTable>


            </div>
        </div>
    );
};

export default Container;