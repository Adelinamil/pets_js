import React from "react";

const EmailInput = () => {
    return (
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Введите адрес электронной почты</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailInput" required/>
            <div id="emailInput" className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
        </div>
    );
};

export default EmailInput;