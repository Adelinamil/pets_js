import React from "react";


const PersonalAccount = () => {
    return (
        <div>
            <div className="p-3">
                <div className="animal-width300 d-flex flex-row flex-wrap border m-auto p-3 w-50">

                    <p className="animal-width250 w-50 text-primary">id:</p>
                    <p className="animal-width250 w-50">14</p>

                    <p className="animal-width250 w-50 text-primary">Телефон:</p>
                    <p className="animal-width250 w-50">+7-911-456-78-78</p>

                    <p className="animal-width300 w-50 text-primary">email:</p>
                    <p className="animal-width300 w-50">leonid@yandex.ru</p>

                    <p className="animal-width300 w-50 text-primary">Имя:</p>
                    <p className="animal-width300 w-50">Леонид</p>

                    <p className="animal-width300 w-50 text-primary">Дата регистрации:</p>
                    <p className="animal-width300 w-50">26-06-2015</p>

                    <p className="animal-width300 w-50 text-primary">Количество найденных животных:</p>
                    <p className="animal-width300 w-50">2</p>

                    <p className="animal-width300 w-50 text-primary">Количество объявлений:</p>
                    <p className="animal-width300 w-50">4</p>
                </div>
            </div>
        </div>
    );
};

export default PersonalAccount;