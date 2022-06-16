import {useState} from "react"

const ItemCount = ({ stock, initial }) => {
    
    const [contador, setContador] = useState(initial)
    
    const aumentarContador = () => {

        // if (stock >= contador) {
        //     setContador(contador + 1)
        // }
        // else{
        //     console.log("nada")
        // }

        //contador = contador + 1
        //console.log(contador + 1)
        //console.log(contador)
        
        setContador(contador + 1)
    }

    const bajarContador = () => {

        // do {
        //     setContador(contador - 1)
        // } while (contador>=0);

        setContador(contador - 1)
        //setContador(?)
        //contador = ?
    }

    // const confirmarContador = () => { }
    while (contador <= stock) {}

    return (
        <div className="contador">
            <button onClick={bajarContador}>-</button>
            <p> {contador}</p>
            <button onClick={aumentarContador}>+</button>
            
            
            {/* <button>confirmar</button> */}
        </div>
    )

}

export default ItemCount