import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom"

function Categories() {
    const [categories, setCategories] = useState({isLoaded: false, items: []});

    useEffect(() => {
        updateItems();
      }, [categories.isLoaded]);

    const updateItems =() => {
       axios.get('http://127.0.0.1:8000/api/category/').then(res => {
           setCategories({isLoaded: true, items: res.data})
        })
    }
    return categories.isLoaded ? (
                <div>
                    <div>
                        <h1>Категории блюд</h1>

                    </div>
                    <div>
                        <ul id="chooseCategory">
                            {categories.items.map(category => <li key={category.id}>
                            <h2><Link to={`/categories/${category.id}`}>{category.title}</Link></h2>
                            <h3>{category.description}</h3>
                            <img src={category.image} alt="epic fail"/>
                            </li>)}
                        </ul>
                    </div>

                </div>
    ) : "loading...";
}

export default Categories;