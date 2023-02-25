import PhoneInput from "../inputs/phone_input";
import {useState} from "react";

const ChangePhoneForm = () => {
    const [phone, setPhone] = useState('');

    return (
        <div>
            <div className="animal-width300 w-50 m-auto p-3">
                <div className="mb-3 text-center">
                    <PhoneInput onChange={setPhone}/>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary"
                            onClick={() => console.log(phone)}>Отправить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChangePhoneForm;