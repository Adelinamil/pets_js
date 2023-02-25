import AnimalsSlider from "../companents/animals_slider";
import AnimalCard from "../companents/animal_card";
import SubscribeForm from "../companents/forms/subscribe_news";

const Main = () => {
    return (
        <div>
            <AnimalsSlider/>
            <h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>
            <AnimalCard edit_hidden="hidden"/>
            <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
            <SubscribeForm/>
        </div>
    );
};

export default Main;