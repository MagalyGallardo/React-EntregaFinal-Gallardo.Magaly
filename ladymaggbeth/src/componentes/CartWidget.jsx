import {Link} from "react-router-dom";
import cart from "../assets/carrito.png";
import { CartContext } from '../context/CartContext';
import { useContext } from "react";

export const CartWidget = () => {
    const { items } = useContext(CartContext);
    
    const total = items.reduce(
        (acumulador, actual) => acumulador + actual.quantity, 0)
    
    return ( 
    <Link to= "/cart" className="nav-link"> 
    <img src={cart}alt="carrito" width="40"/> 
    <span className= "texto-personalizado">{total}</span>
    </Link>
    );
}