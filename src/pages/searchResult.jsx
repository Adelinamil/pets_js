import React from "react";
import AnimalCard from "../companents/animal_card";
import {useLocation} from "react-router-dom";


const SearchResult = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    console.log(query)
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Результаты поиска</h2>
            <AnimalCard edit_hidden="hidden"/>
        </div>
    );
};

export default SearchResult;