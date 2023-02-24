import React from "react";

const PhoneInput = () => {
    return (
        <div className="mb-3">
            <label htmlFor="phone" className="form-label">Введите свой телефон:</label>
            <input type="phone" className="form-control" id="phone" aria-describedby="phoneInputDiv" required/>
            <div id="phoneInputDiv" className="form-text">Используйте цифры, +, -.</div>
        </div>
    );
}

export default PhoneInput;