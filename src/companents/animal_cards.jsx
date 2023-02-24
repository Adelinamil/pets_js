import React from "react";


const AnimalCard = (props) => {
    return (
        <div>
            <div className="d-flex justify-content-center flex-row flex-wrap">
                <div
                    className="animal-d-flex-300 d-flex justify-content-center flex-row flex-wrap border m-3 p-3 position-relative">
                    <img src="/images/коза.jpeg" className="w-75" alt="рисунок животного"/>
                    <p className="animal-width250 mt-2 text-center w-50 text-primary">id:</p>
                    <p className="animal-width250 mt-2 text-center w-50">18</p>

                    <p className="animal-width250 text-center w-50 text-primary">Вид животного:</p>
                    <p className="animal-width250 text-center w-50"> Коза</p>

                    <p className="animal-width300 text-center w-50 text-primary">Описание:</p>
                    <p className="animal-width300 text-center w-50">Потерялась коза, последний раз видели
                        в здании
                        Московского вокзала
                        г. Санкт-Петербург. Коза белая, пуховая.</p>

                    <p className="animal-width300 text-center w-50 text-primary">Номер чипа:</p>
                    <p className="animal-width300 text-center w-50">go-011-spb</p>

                    <p className="animal-width300 text-center w-50 text-primary">Район:</p>
                    <p className="animal-width300 text-center w-50">Центральный</p>

                    <p className="animal-width300 text-center w-50 text-primary">Дата:</p>
                    <p className="animal-width300 text-center w-50">14-03-2022</p>
                    <div className="position-absolute text-danger"
                         style={{'top': '15px', 'right': '15px', 'cursor': 'pointer'}}
                         hidden={props.edit_hidden}>&#10060;</div>
                    <button type="submit" className="btn btn-primary animal-width300"
                            hidden={props.edit_hidden}>Редактировать
                        объявление
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnimalCard;