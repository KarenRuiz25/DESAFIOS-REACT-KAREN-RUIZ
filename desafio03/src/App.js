//IMPORTS: DEBEN ESTAR ARRIBA DE TODO
import NavBar from "./components/NavBar.js"
import ItemListContainer from "./components/ItemListContainer.js";

const App = () => {
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting="¡Bienvenidos a Sucuworld!"/>    
        </>
    )
}

export default App; //exporto el componente App para que lo pueda usar en otro archivo
