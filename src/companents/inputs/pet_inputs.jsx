import React from "react";


const PetInputs = (props) => {
    const pet = props.pet;
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="kind" className="form-label">Введите вид животного:</label>
                <input type="text" className="form-control" id="kind"/>
                <div className="form-text">Обязательное поле</div>
            </div>

            <div className="mb-3 p-3 border">
                <div className="form-text">Обязательное поле</div>
            </div>

            <div className="mb-3">
                <label htmlFor="chip" className="form-label">Электронный чип:</label>
                <input type="text" className="form-control" id="chip"/>
                <div className="form-text">Обязательное поле.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Описание:</label>
                <textarea className="form-control" id="description"></textarea>
                <div className="form-text">Обязательное поле.</div>
            </div>

        </div>
    );
}

export default PetInputs;