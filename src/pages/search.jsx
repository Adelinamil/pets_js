import React from "react";


const Search = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Поиск по объявлениям</h2>
            <div className="p-3">
                <form className="animal-width300 w-50 m-auto border p-3">
                    <div className="mb-3">
                        <label htmlFor="district" className="form-label">Выберите район:</label>
                        <select id="district" className="form-select">
                            <option>Приморский</option>
                            <option>Петроградский</option>
                            <option>Василиостровский</option>
                            <option>Центральный</option>
                            <option>Красногвардейский</option>
                            <option>Выборгский</option>
                            <option>Калининский</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Введите вид животного:</label>
                        <input type="text" className="form-control" id="password"/>
                    </div>
                    <div className="text-center">
                        <input type="submit" className="btn btn-primary w-100" value="Найти"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;