import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.png';
import Films from './Films';
import FilmId from './FilmId';
import People from './People';
import PersonId from './PersonId';
import Navbar from './Navbar';

const App = () => {
    return (
        <div className="container">
            <img src={logo} alt="logo"></img>
            <br></br>
            <Router>
                <>
                    <Navbar />
                    <Switch>
                        <Route exact path="/films" component={Films} />
                        <Route exact path="/films/:id" component={FilmId} />
                        <Route exact path="/people" component={People} />
                        <Route exact path="/people/:id" component={PersonId} />
                    </Switch>
                </>
            </Router>
        </div>
    );
}

export default App;