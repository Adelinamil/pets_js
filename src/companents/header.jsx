import {Link} from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light">
                <Link className="navbar-brand me-0" to={'/'}><img src='/images/logo.jpg'
                                                                  className="w-25 rounded-3"
                                                                  alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item fs-6">
                            <Link className="nav-link" to={'/'}><span
                                className="small">Главная</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/profile'}><span
                                className="small">Профиль</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/login'}><span className="small">Авторизация</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/new_pet'}><span className="small">Добавить объявление</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/search'}><span
                                className="small">Поиск по объявлениям</span></Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
                        <button className="btn btn-primary me-3" onClick="">Поиск</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};


export default Header;