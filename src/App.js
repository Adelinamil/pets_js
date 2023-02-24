import {Routes, Route} from "react-router-dom";
import Header from "./companents/header";
import Footer from "./companents/footer";
import Main from "./pages/main";
import Profile from "./pages/profile";
import Registration from "./pages/registration";
import Auth from "./pages/auth";
import AddPet from "./pages/add_pet";
import EditPet from "./pages/edit_pet";
import Search from "./pages/search";
import SearchResult from "./pages/searchResult";
import Pet from "./pages/pet";


function App() {
    return (
        <div className="App">
            <Header/>
            <main style={{'minHeight': '70vh'}}>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/signup'} element={<Registration/>}/>
                    <Route path={'/login'} element={<Auth/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/pet/:pet_id'} element={<Pet/>}/>
                    <Route path={'/new_pet'} element={<AddPet/>}/>
                    <Route path={'/edit_pet/:pet_id'} element={<EditPet/>}/>
                    <Route path={'/search'} element={<Search/>}/>
                    <Route path={'/search/:query'} element={<SearchResult/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
