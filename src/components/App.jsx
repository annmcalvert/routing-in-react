import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.png';
import Films from './Films';
import FilmId from './FilmId';
import People from './People';
import PersonId from './PersonId';
// import Error from './Error';

class App extends Component {
    render() {
        return (
            <div className="container">
                <img src={logo} alt="logo"></img>
                <br></br>
                <Router>
                    <Fragment>
                        <Link className="btn btn-primary m-3" to="/">Go Home</Link>
                        <Link className="btn btn-primary m-3" to="/films">View Films</Link>
                        <Link className="btn btn-primary m-3" to="/people">View People</Link>

                        <Switch>
                            {/* <Route exact path="/" component={App} /> */}
                            <Route exact path="/films" component={Films} />
                            <Route exact path="/films/:id" component={FilmId} />
                            <Route exact path="/people" component={People} />
                            <Route exact path="/people/:id" component={PersonId} />
                            {/* <Route component={Error} /> */}
                        </Switch>
                    </Fragment>
                </Router>
            </div>
        );
    }
}

export default App;