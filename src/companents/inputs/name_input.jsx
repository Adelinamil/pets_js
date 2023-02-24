import React from "react";

const NameInput = () => {
    return (
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Введите имя:</label>
            <input type="text" className="form-control" id="name" aria-describedby="nameInputDiv" required/>
            <div id="nameInputDiv" className="form-text">Используйте кириллические буквы</div>
        </div>
    );
};

export default NameInput;