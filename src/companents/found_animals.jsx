import React from "react";


const AnimalsSlider = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide m-auto bg-success bg-opacity-25 w-75 p-2"
                 data-bs-ride="carousel" style={{'minHeight': '400px'}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/собака.jpg" className="d-block m-auto mt-3" alt="Собака"
                             style={{'width': '300px'}}/>
                        <h2 className="text-center">Найдена собака</h2>
                        <p className="text-center">Собака рыжая, была утеряна в красногвардейчком райне районе</p>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/мышь.jpg" className="d-block m-auto mt-3" alt="Мышь"
                             style={{'width': '300px'}}/>
                        <h2 className="text-center">Найдена мышь</h2>
                        <p className="text-center">Мышь серая, была утеряна в центральном районе</p>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/горилла.jpg" className="d-block m-auto mt-3" alt="Горилла"
                             style={{'width': '300px'}}/>
                        <h2 className="text-center">Найдена горила</h2>
                        <p className="text-center">Горилла, была утеряна в красногвардейчком райне районе</p>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Следующий</span>
                </button>
            </div>
        </div>
    );
};

export default AnimalsSlider;