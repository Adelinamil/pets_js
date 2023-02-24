import React from "react";
import AnimalCard from "../companents/animal_card";


const SearchResult = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Результаты поиска</h2>
            <AnimalCard edit_hidden="hidden"/>
        </div>
    );
};

export default SearchResult;