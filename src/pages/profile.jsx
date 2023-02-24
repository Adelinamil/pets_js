import PersonalAccount from "../companents/personal_account";
import AnimalCard from "../companents/animal_card";
import Pagination from "../companents/pagination";
import ChangeEmailForm from "../companents/forms/change_email";
import ChangePhoneForm from "../companents/forms/change_phone";

const Profile = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Личный кабинет</h2>
            <PersonalAccount/>
            <h2 className="text-center text-white bg-primary m-2">Изменить адрес электронной почты</h2>
            <ChangeEmailForm/>
            <h2 className="text-center text-white bg-primary m-2">Изменить номер телефона</h2>
            <ChangePhoneForm/>
            <h2 className="text-center text-white bg-primary m-2">Добавленные объявления</h2>
            <AnimalCard edit_hidden=""/>
            <Pagination/>
        </div>
    );
};

export default Profile;