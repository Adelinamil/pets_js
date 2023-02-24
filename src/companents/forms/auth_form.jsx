import React from "react";
import EmailInput from "../inputs/email_input";
import PasswordInput from "../inputs/password_input";


const AuthForm = () => {
    return (
        <div className="p-3">
            <form className="animal-width300 w-50 m-auto border p-3">
                <EmailInput/>
                <PasswordInput/>
                <div className="text-center">
                    <a href="src/companents">Не зарегистрированы?</a>
                    <input type="submit" className="btn btn-primary mt-2 w-100" value="Войти"/>
                </div>
            </form>
        </div>
    );
}


export default AuthForm;