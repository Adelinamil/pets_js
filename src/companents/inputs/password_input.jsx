import React from "react";

const PasswordInput = () => {
    return (
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Введите пароль:</label>
            <input type="password" className="form-control" id="password"
                   pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$"
                   onChange="onChange()" aria-describedby="passwordInputDiv" required/>
            <div id="passwordInputDiv" className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная
                буква, 1 - заглавная
                буква
            </div>
        </div>
    );
}

export default PasswordInput;