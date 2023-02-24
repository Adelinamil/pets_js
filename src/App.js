import Header from "./companents/header";
import Footer from "./companents/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <main style={{'minHeight': '70vh'}}>
                ...
            </main>
            <Footer/>
        </div>
    );
}

export default App;
