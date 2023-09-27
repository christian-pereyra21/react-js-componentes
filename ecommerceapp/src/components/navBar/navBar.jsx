import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return(
        <nav>
            <h1 style= {{color:"orange"}}>Bass Point</h1>
            <h2 style={{color:"lightblue"}}>Vibra a tu ritmo</h2>
            <div>
                <button>Auriculares</button>
                <button>Parlantes</button>
                <button>Consolas</button>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar