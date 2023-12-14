import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { CartContext } from '../context/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Swal from "sweetalert2";

const clearBuyer = {name: '', phone: '', email: ''}
export const Cart = () => {
    const [buyer, setBuyer] = useState (clearBuyer);
    const {clear, items, removeItem} = useContext(CartContext);

const total = items.reduce ( (acumulado, actual) =>
    acumulado + actual.price * actual.quantity, 0)

const handleSendOrder = () => {
  const order = { buyer, items, total};
  const db = getFirestore ();
  const orderCollection = collection (db, "orders");
  addDoc (orderCollection, order).then (({id}) =>{
    if (id ) {
        Swal.fire({
            title: "Genial!",
            text: "Su orden ha sido completada",
            icon: "success"
          });
    }
  }).finally (() => {
    setBuyer (clearBuyer);
    clear();
  });
};

const handleChange = (ev) => {
    const { name, value} = ev.target
    setBuyer (prev => {
        return{
           ...prev,
           [name]: value
        }
    })
}

  if (!items.length) return <div>Carrito de compras vacío</div>
    
    return (
        <Container>
            <div className='d-flex'>
                {items.map((item) => (
                    <div key={item.id}> 
                        <h1>{item.nombre}</h1>
                        <h2>Precio: {item.precio}</h2>
                        <h3>Cantidad: {item.quantity}</h3>
                        <p>{item.descripcion}</p>
                        <img src={item.img} width={200}/>
                        <div className='boton' onClick={() => removeItem (item.id)}>X</div>
                    </div>
                ))}
            </div>
            <form>
                <div className='input-group'>
                    <label>Nombre</label>
                    <input 
                        type='text' 
                        value={buyer.name} 
                        onChange={handleChange} 
                        required
                        name='name'/>
                </div>
                <div className='input-group'>
                    <label>Teléfono</label>
                    <input 
                        type='text' 
                        value={buyer.phone} 
                        onChange={handleChange} 
                        required
                        name='phone'/>
                </div>
                <div className='input-group'>
                    <label>eMail</label>
                    <input 
                        type='email' 
                        value={buyer.email} 
                        onChange={handleChange} 
                        required
                        name='email'/>
                </div>
                <div>${total}</div>
                <div>
                    <button className='boton' type='button' onClick={handleSendOrder}>Comprame!</button>
                    <span>
                    <button className='boton' onClick={clear}>Vaciar Carrito</button>
                </span>
                </div>
            </form>
        </Container>
    );
};
