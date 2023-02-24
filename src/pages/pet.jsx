import React from "react";
import AnimalCard from "../companents/animal_cards";


const Pet = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Карточка животного</h2>
            <AnimalCard edit_hidden="hidden"/>
        </div>
    );
}

export default Pet;