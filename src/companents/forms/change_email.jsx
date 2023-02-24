import React from "react";
import EmailInput from "../inputs/email_input";

const ChangeEmailForm = () => {
    return (
        <div>
            <form className="animal-width300 w-50 m-auto p-3">
                <div className="mb-3 text-center">
                    <EmailInput/>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Отправить</button>
                </div>
            </form>
        </div>
    );
}

export default ChangeEmailForm;