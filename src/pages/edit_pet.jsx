import React from "react";
import EditPetForm from "../companents/forms/edit_pet_form";
import {useParams} from "react-router-dom";


const EditPet = () => {
    const pet = useParams();
    const pet_id = pet.id;

    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Редактирование объявления</h2>
            <EditPetForm pet_id={pet_id}/>
        </div>
    );
}

export default EditPet;