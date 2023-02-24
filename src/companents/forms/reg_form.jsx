import React from "react";
import PhoneInput from "../inputs/phone_input";
import EmailInput from "../inputs/email_input";
import NameInput from "../inputs/name_input";
import PasswordInput from "../inputs/password_input";
import CheckboxAgree from "../inputs/checkbox_agree";
import ConfirmPasswordInput from "../inputs/confirm_password_input";


const RegForm = () => {
    return (
        <div className="p-3">
            <form className="animal-width300 w-50 m-auto border p-3">
                <NameInput/>
                <PhoneInput/>
                <EmailInput/>
                <PasswordInput/>
                <ConfirmPasswordInput/>
                <CheckboxAgree/>

                <div className="text-center">
                    <input type="submit" className="btn btn-primary w-100" value="Зарегистрироваться"/>
                </div>
            </form>
        </div>
    );
};

export default RegForm;