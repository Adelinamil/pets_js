import React from "react";
import NameInput from "../inputs/name_input";
import PhoneInput from "../inputs/phone_input";
import EmailInput from "../inputs/email_input";
import PasswordInput from "../inputs/password_input";
import ConfirmPasswordInput from "../inputs/confirm_password_input";
import PetInputs from "../inputs/pet_inputs";
import CheckboxAgree from "../inputs/checkbox_agree";


const AddPetForm = () => {
    return (
        <div className="p-3">
            <form className="w-50 m-auto border border-primary p-3">
                <NameInput/>
                <PhoneInput/>
                <EmailInput/>
                <div className="mb-3 form-check border p-3">
                    <input type="checkbox" className="form-check-input m-3" id="auto-reg"/>
                    <label className="form-check-label m-3" htmlFor="auto-reg">Пройти автоматическую
                        регистрацию</label>
                    <div className="hidden">
                        <PasswordInput/>
                        <ConfirmPasswordInput/>
                    </div>
                </div>
                <PetInputs/>
                <CheckboxAgree/>
                <input type="submit" className="btn btn-primary form-control" value="Зарегистрировать"/>
            </form>
        </div>
    );
}

export default AddPetForm;