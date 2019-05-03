import React, {Fragment} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import FilmId from './FilmId';

const DisplayFilm = ({ film: { title, description, id } }) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">{title}</div>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <Router>
                    <Fragment>
                        <Link className="btn btn-primary m-3" to="/films/" >More Information</Link>
                        <Switch>
                            <Route path="/films/:id" component={FilmId} />
                        </Switch>
                    </Fragment>
                </Router>
            </div>

        </div>

    )
}

export default DisplayFilm;