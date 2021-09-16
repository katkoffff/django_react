import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import { useParams } from "react-router-dom"

function Recipes() {
    const opa = {"Салаты": 1, "Супы": 2, "Горячее": 3}
    const params = useParams();
    const [recipes, setRecipes] = useState({isLoaded: false, items: []});
    useEffect(() => {
        updateItems();
      }, [recipes.isLoaded]);
    const updateItems =() => {
       axios.get('http://127.0.0.1:8000/api/cookbook/').then(res => {
           setRecipes({isLoaded: true, items: res.data.filter(item => item.inCategory==params.id)})
        })
        console.log(recipes.items)
    }
    return recipes.isLoaded ? (
                <div>
                    <div>
                        <ul id="chooseRecipe">
                            {recipes.items.map(recipe => <li key={recipe.id}>
                            <h2><Link to={`/categories/${params.id}/${recipe.id}`}>{recipe.title}</Link></h2>
                            <img src={recipe.image} alt="epic fail"/>
                            </li>)}
                        </ul>
                    </div>

                </div>
    ) : "loading...";
}


export default Recipes;