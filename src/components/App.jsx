import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Films from './Films';
import Error from './Error';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link className="btn btn-primary m-3" to="/">Go App</Link>
                    <Link className="btn btn-primary m-3" to="/films">View Films</Link>
                    <Link className="btn btn-primary m-3" to="/people">View People</Link>

                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/films" component={Films} />
                        <Route component={Error} />
                        {/* <Route path="/films/:id" component={Films} /> */}
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;