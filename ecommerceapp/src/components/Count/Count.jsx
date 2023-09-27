import { useCount } from "../../hooks/useCount"

const Count = () => {
    const {count,decrement,increment} = useCount()
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>eliminar</button>
            <button onClick={increment}>agregar</button>
        </div>
    )
}
export default Count