import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Table from "../Table/Table";
import LastTable from "../LastTable/LastTable";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from "react-toastify";


const Container = () => {
    // const notify = () => toast("Wow so easy !");

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
            // alert('You select this before')
            toast.error('😡 You already add this before', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

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
        <div className="container mx-auto grid lg:grid-cols-5 gap-5 my-10">
            <div className="lg:col-span-3  grid lg:grid-cols-2 gap-5">
                {
                    recipes.map(recipe => <Recipe
                        key={recipe.recipe_id}
                        recipe={recipe}
                        wantToCock={wantToCock}
                    ></Recipe>)
                }
            </div>
            <div className="col-span-2 border border-[#28282833] rounded-2xl h-[740px] overflow-auto sticky top-0">
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
            <ToastContainer />
        </div>
    );
};

export default Container;