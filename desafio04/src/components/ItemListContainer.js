import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {

    

    // }

    return (  
        <>          
            <h2>{props.greeting}</h2>
            <ItemCount stock={10} initial={1} />  
        </>        
    )
}

export default ItemListContainer