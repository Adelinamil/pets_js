import React from "react";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light">
                <a className="navbar-brand me-0" href=""><img src='/images/logo.jpg'
                                                              className="w-25 rounded-3"
                                                              alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item fs-6">
                            <a className="nav-link" aria-current="page" href=""><span
                                className="small">Главная</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href=""><span
                                className="small">Профиль</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href=""><span className="small">Авторизация</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href=""><span className="small">Добавить объявление</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href=""><span className="small">Поиск по объявлениям</span></a>
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