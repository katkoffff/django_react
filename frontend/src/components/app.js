import React, {Fragment} from "react";
import "../styles/App.css";
import Header from "./header";
import Main from "./main";
import Footer from "./footer"
import Home from "./home"
import Swag from "./sw"
import { Route, Switch, Link } from "react-router-dom"


function App() {
    return (
        <div>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/categories"> Categories </Link>
                <Link to="/swagger"> Swagger </Link>
            </nav>
            <Switch>
                <Route exact path="/swagger">
                    <Swag />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
            <Fragment>
                <Header />
                <Main />
                <Footer />
            </Fragment>
        </div>
        );

}

export default App