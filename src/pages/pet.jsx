import React from "react";
import AnimalCard from "../companents/animal_card";


const Pet = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Карточка животного</h2>
            <AnimalCard edit_hidden="hidden"/>
        </div>
    );
}

export default Pet;