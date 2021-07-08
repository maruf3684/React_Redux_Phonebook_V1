import React from 'react';
import {Link} from "react-router-dom";

const Navber = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                <Link to="/" className="navbar-brand">Phonebook</Link>
                <div>
                    <Link to="/add" className="btn btn-sm btn-danger ml-auto">Add Contract</Link>
                </div>
                </div>
            </nav>
        </>
    );
};

export default Navber;