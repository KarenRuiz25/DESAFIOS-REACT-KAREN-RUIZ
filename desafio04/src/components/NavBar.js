import CartWidget from "./CartWidget"

const NavBar = () => {
    return (                
        <header>
            <h1>Sucuworld</h1>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Tienda</a>
                <a href="#">Sobre nosotros</a>
                <a href="#">Contacto</a>
                <a href=""> <CartWidget/> </a>              
            </nav>
        </header>
    )
}

export default NavBar

