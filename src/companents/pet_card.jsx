import React from "react";
import {Link} from "react-router-dom";


const PetCard = (props) => {
    const pet = props.pet
    const images = props.images.map((image) => {
        return <img src={'https://pets.сделай.site' + image} className="w-75" alt="рисунок животного"/>;
    })
    return (
        <div>
            <div className="d-flex justify-content-center flex-row flex-wrap">
                <div
                    className="animal-d-flex-300 d-flex justify-content-center flex-row flex-wrap border m-3 p-3">
                    <div className="d-flex flex-row flex-wrap justify-content-around border border">
                        {images}
                    </div>
                    <p className="animal-width250 mt-2 text-center w-50 text-primary">id:</p>
                    <p className="animal-width250 mt-2 text-center w-50">{pet.id}</p>

                    <p className="animal-width250 w-50 text-primary">Имя:</p>
                    <p className="animal-width250 w-50">{data.name}</p>

                    <p className="animal-width250 w-50 text-primary">Телефон:</p>
                    <p className="animal-width250 w-50">{data.phone}</p>

                    <p className="animal-width250 w-50 text-primary">E-mail:</p>
                    <p className="animal-width250 w-50">{data.email}</p>

                    <p className="animal-width250 text-center w-50 text-primary">Вид животного:</p>
                    <p className="animal-width250 text-center w-50">{pet.kind}</p>

                    <p className="animal-width300 text-center w-50 text-primary">Описание:</p>
                    <p className="animal-width300 text-center w-50">{pet.description}</p>

                    <p className="animal-width300 text-center w-50 text-primary">Номер чипа:</p>
                    <p className="animal-width300 text-center w-50">{pet.mark}</p>

                    <p className="animal-width300 text-center w-50 text-primary">Район:</p>
                    <p className="animal-width300 text-center w-50">{pet.district}</p>

                    <p className="animal-width300 text-center w-50 text-primary">Дата:</p>
                    <p className="animal-width300 text-center w-50">{pet.date}</p>
                </div>
            </div>
        </div>
    );
}

export default PetCard;