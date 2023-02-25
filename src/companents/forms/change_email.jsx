import React, {useState} from "react";
import EmailInput from "../inputs/email_input";

const ChangeEmailForm = () => {
    const [email, setEmail] = useState('');
    return (
        <div>
            <div className="animal-width300 w-50 m-auto p-3">
                <div className="mb-3 text-center">
                    <EmailInput onChange={setEmail}/>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary"
                            onClick={() => {
                                console.log(email)
                            }}>Отправить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChangeEmailForm;