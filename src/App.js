import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Characters from "./Components/Characters";
import DetailView from "./Components/DetailView";
import Spells from "./Components/Spells";
import Game from "./Components/Game";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                	<Route exact path='/' component={Home}/>
                	<Route exact path='/characters' component={Characters}/>
                    <Route path='/characters/:id' component={(props) => <DetailView {...props} subUrl={'characters'}/>}/>
                    <Route exact path='/spells' component={Spells}/>
                    <Route path='/spells/:id' component={(props) => <DetailView {...props} subUrl={'spells'}/>}/>
                    <Route exact path='/game' component={Game}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App