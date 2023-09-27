import { getProductos } from '../../asyncMock'
import { useState, useEffect } from 'react'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect (() =>{
        getProductos().then(result => {
            setProductos(result)
        })
    },[])

    const productosComponentes= productos.map(productos =>{
        return(
            <div key={productos.id}>
                <h3>{productos.nombre}</h3>
                <p>precio AR$ {productos.precio}</p>
            </div>
        )
    })
    console.log(productosComponentes)
    return(
        <main>
            {productosComponentes}

        </main>
    )
}
export default ItemListContainer