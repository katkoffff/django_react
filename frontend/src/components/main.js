import React, {Fragment} from "react";
import Categories from "./categories";
import Recipes from "./recipes";
import Recipe from "./recipe";
import "../styles/Main.css";
import { Route, Switch, Link } from "react-router-dom"


function Main() {

    return(
        <Fragment>
            <main>
                <Switch>
                    <Route exact path="/categories" >
                        <Categories />

                    </Route>
                    <Route exact path="/categories/:id">
                        <Recipes />
                    </Route>
                    <Route path="/categories/:id/:id">
                        <Recipe />
                    </Route>
                </Switch>
            </main>
        </Fragment>
    );

}

export default Main;