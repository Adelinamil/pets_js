import React from "react";

const ConfirmPasswordInput = () => {
    return (
        <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label">Повторите пароль пароль:</label>
            <input type="password" className="form-control" id="confirm_password"/>
        </div>
    );
}

export default ConfirmPasswordInput;