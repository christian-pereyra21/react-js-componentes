import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Item from "../Item/Item"

const ItemList = ({productos})=>{
    return(
        <div>
            {productos.map((producto)=>{
                return(
                    <div >
                        <Item producto={producto} key= {producto.id}/>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default ItemList