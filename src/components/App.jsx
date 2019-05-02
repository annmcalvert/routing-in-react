import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Films from './Films';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link><button className="btn btn-primary m-3">Go Home</button></Link>
                    <Link to="/films"><button className="btn btn-primary m-3">View Films</button></Link>
                    <Link><button className="btn btn-primary m-3">View People</button></Link>
                    <Switch>
                        <Route exact path="/films" component={Films}/>
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;