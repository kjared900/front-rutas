import { NavLink } from 'react-router-dom';
import React from 'react';

const Navi = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <h1 className='navbar-brand'>Alumnos React Router</h1>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/registrar">Registrar</NavLink>
                        </li>
                        <li className="nav-item">
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navi;
