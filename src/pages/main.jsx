import AnimalsSlider from "../companents/found_animals";
import AnimalCard from "../companents/animal_cards";
import SubscribeForm from "../companents/forms/subscribe_news";

const Main = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
            <AnimalsSlider/>
            <h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>
            <AnimalCard edit_hidden="hidden"/>
            <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
            <SubscribeForm/>
        </div>
    );
};

export default Main;