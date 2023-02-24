import React from "react";
import EditPetForm from "../companents/forms/edit_pet_form";


const EditPet = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Редактирование объявления</h2>
            <EditPetForm/>
        </div>
    );
}

export default EditPet;