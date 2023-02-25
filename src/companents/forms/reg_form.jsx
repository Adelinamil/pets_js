import React, {useState} from "react";
import PhoneInput from "../inputs/phone_input";
import EmailInput from "../inputs/email_input";
import NameInput from "../inputs/name_input";
import PasswordInput from "../inputs/password_input";
import CheckboxAgree from "../inputs/checkbox_agree";
import ConfirmPasswordInput from "../inputs/confirm_password_input";


const RegForm = () => {
    let [input, setInput] = useState({
        name: "", phone: "", email: "", password: "", confirmPassword: ""
    });
    const [error, setError] = useState({password: "", confirmPassword: ""});
    const onInputChange = e => {
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }
    const validateInput = e => {
        let {name, value} = e.target;
        setError(prev => {
            const stateObj = {...prev, [name]: ""};
            switch (name) {
                case "password":
                    if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if (input.password && value !== input.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;
                default:
                    break;
            }
            return stateObj;
        });
    }


    return (
        <div className="p-3">
            <form className="animal-width300 w-50 m-auto border p-3">
                <NameInput onChange={onInputChange} onBlur={validateInput}/>
                <PhoneInput onChange={onInputChange} onBlur={validateInput}/>
                <EmailInput onChange={onInputChange} onBlur={validateInput}/>
                <PasswordInput onChange={onInputChange} onBlur={validateInput}/>
                <ConfirmPasswordInput onChange={onInputChange} onBlur={validateInput}/>
                <CheckboxAgree/>
                <div id="reg_error" className="alert alert-danger mb-3 text-center" role="alert">
                    {error.username || error.confirmPassword}
                </div>
                <div className="text-center">
                    <input type="submit" className="btn btn-primary w-100" value="Зарегистрироваться"/>
                </div>
            </form>
        </div>
    );
};

export default RegForm;