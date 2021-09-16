import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import { useParams } from "react-router-dom"

function Recipe() {
    const opa = {"Салаты": 1, "Супы": 2, "Горячее": 3}
    const params = useParams();
    const [recipe, setRecipe] = useState({isLoaded: false, items: []});
    useEffect(() => {
        updateItems();
      }, [recipe.isLoaded]);
    const updateItems =() => {
       axios.get('http://127.0.0.1:8000/api/cookbook/').then(res => {
           setRecipe({isLoaded: true, items: res.data.filter(item => item.id==params.id)})
        })
        console.log(recipe.items)
    }
    return recipe.isLoaded ? (
                <div>
                    <div>
                        <ul id="chooseRecip">
                            {recipe.items.map(recip => <li key={recip.id}>
                            <h2>{recip.title}</h2>
                            <h3>{recip.description}</h3>
                            <img src={recip.image} alt="epic fail"/>
                            </li>)}
                        </ul>
                    </div>

                </div>
    ) : "loading...";
}


export default Recipe;