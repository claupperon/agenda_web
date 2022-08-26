import React from 'react';
import { NavLink } from  'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">PROJETO REACT AGENDA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/acessar-conta" className="nav-link active" aria-current="page" >Acessar sua Conta</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/crie-sua-conta" className="nav-link" href="#">Crie sua Conta</NavLink>
                        </li>
                    </ul>    
                </div>
            </div>
        </nav>
    )
}
