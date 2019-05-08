import React from 'react';
import { Link } from 'react-router-dom';

const DisplayPerson = ({ person: { name, age, gender, id } }) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">{name}</div>
            <div className="card-body">
                <p>Age: {age}</p>
                <p> Gender: {gender}</p>
                <Link className="btn btn-primary m-3" to={"/people/" + id}>More Information</Link>
            </div>
        </div>
    )
}

export default DisplayPerson;