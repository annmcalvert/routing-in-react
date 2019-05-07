import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const DisplayFilm = ({ film: { title, description, id } }) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">{title}</div>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <Link className="btn btn-primary m-3" to={"/films/" + id}>More Information</Link>
            </div>
        </div>
    )
}

export default DisplayFilm;