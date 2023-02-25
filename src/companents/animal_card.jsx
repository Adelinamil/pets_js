import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Animal = (props) => {
    const data = props.data
    return (
        <div
            className="animal-d-flex-300 d-flex justify-content-center flex-row flex-wrap border m-3 p-3">
            <Link className='text-center' to={'/pet/18'}><img src="/images/коза.jpeg" className="w-75"
                                                              alt="рисунок животного"/></Link>
            <p className="animal-width250 mt-2 text-center w-50 text-primary">id:</p>
            <p className="animal-width250 mt-2 text-center w-50">{data.id}</p>

            <p className="animal-width250 text-center w-50 text-primary">Вид животного:</p>
            <p className="animal-width250 text-center w-50">{data.kind}</p>

            <p className="animal-width300 text-center w-50 text-primary">Описание:</p>
            <p className="animal-width300 text-center w-50">{data.description}</p>

            <p className="animal-width300 text-center w-50 text-primary">Номер чипа:</p>
            <p className="animal-width300 text-center w-50">{data.mark}</p>

            <p className="animal-width300 text-center w-50 text-primary">Район:</p>
            <p className="animal-width300 text-center w-50">{data.district}</p>

            <p className="animal-width300 text-center w-50 text-primary">Дата:</p>
            <p className="animal-width300 text-center w-50">{data.date}</p>
            <div className="btn-group animal-width300" role="group">
                <div className="btn-group animal-width300" role="group">
                    <Link to={`/delete_pet/${data.id}`} className="btn btn-danger"
                          hidden={props.edit_hidden}>Удалить
                    </Link>
                    <Link to={`/edit_pet/${data.id}`} className="btn btn-primary"
                          hidden={props.edit_hidden}>Редактировать
                    </Link>
                </div>
            </div>
        </div>
    );
}


const AnimalCard = (props) => {
    let [card, setCards] = useState({data: {orders: []}});
    useEffect(() => requestCards(card, setCards), []);

    const requestCards = (card, setCards) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        fetch("https://pets.сделай.site/api/pets", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setCards(result)
            })
            .catch(error => console.log('error', error));

    };

    const cards = card.data.orders.map((pet) => {
        return <Animal data={pet} edit_hidden={props.edit_hidden}/>;
    })

    return (
        <div>
            <div className="d-flex justify-content-center flex-row flex-wrap">
                {cards}
            </div>
        </div>
    );
};

export default AnimalCard;