import PetInputs from "../inputs/pet_inputs";
import CheckboxAgree from "../inputs/checkbox_agree";
import React from "react";

const EditPetForm = (props) => {
    const pet_id = props.pet_id
    const pet = () => pet_id; // TODO: change
    return (
        <div className="p-3">
            <form className="w-50 m-auto border border-primary p-3">
                <PetInputs pet={pet}/>
                <CheckboxAgree/>
                <input type="submit" className="btn btn-primary form-control" value="Зарегистрировать"/>
            </form>
        </div>
    );
}

export default EditPetForm;