import { getProductos } from '../../asyncMock'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Item from '../Item/Item'
const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    console.log(productos)
    useEffect (() =>{
        getProductos().then(result => {
            setProductos(result)
        })
    },[])

        return(
            <div >
                <ItemList productos= {productos}/>
            </div>
        )
    }

export default ItemListContainer