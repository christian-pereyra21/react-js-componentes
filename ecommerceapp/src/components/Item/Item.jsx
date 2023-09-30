import ItemList from "../ItemList/ItemList";

const Item = ({producto}) =>{
    return(
        <div>
            <h1>nombre: {producto.nombre}</h1>
            <h1>precio: {producto.precio}</h1>
        </div>
    )
}

export default Item