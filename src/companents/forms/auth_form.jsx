import React from "react";
import EmailInput from "../inputs/email_input";
import PasswordInput from "../inputs/password_input";
import {Link} from "react-router-dom";


const AuthForm = () => {
    return (
        <div className="p-3">
            <form className="animal-width300 w-50 m-auto border p-3">
                <EmailInput/>
                <PasswordInput/>
                <div className="text-center">
                    <Link to={'/signup'}>Не зарегистрированы?</Link>
                    <input type="submit" className="btn btn-primary mt-2 w-100" value="Войти"/>
                </div>
            </form>
        </div>
    );
}


export default AuthForm;