import React from "react";
import AddPetForm from "../companents/forms/pet_form";


const AddPet = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Добавление нового объявления</h2>
            <AddPetForm/>
        </div>
    );
}

export default AddPet;