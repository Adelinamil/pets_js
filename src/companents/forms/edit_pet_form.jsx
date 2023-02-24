import PetInputs from "../inputs/pet_inputs";
import CheckboxAgree from "../inputs/checkbox_agree";
import React from "react";

const EditPetForm = () => {
    return (
        <div className="p-3">
            <form className="w-50 m-auto border border-primary p-3">
                <PetInputs/>
                <CheckboxAgree/>
                <input type="submit" className="btn btn-primary form-control" value="Зарегистрировать"/>
            </form>
        </div>
    );
}

export default EditPetForm;