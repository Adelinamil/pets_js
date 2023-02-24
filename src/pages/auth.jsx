import AuthForm from "../companents/forms/auth_form";

const Auth = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Авторизация</h2>
            <AuthForm/>
        </div>
    );
};

export default Auth;