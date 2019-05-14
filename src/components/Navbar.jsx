import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Link className="btn btn-primary m-3" to="/">Go Home</Link>
            <Link className="btn btn-primary m-3" to="/films">View Films</Link>
            <Link className="btn btn-primary m-3" to="/people">View People</Link>
        </>
    );
}

export default Navbar;