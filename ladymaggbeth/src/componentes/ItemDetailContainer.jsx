import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Container from 'react-bootstrap/Container';
import { ItemCounter } from './ItemCounter';

export const ItemDetailContainer= () => {
    const [item, setItem] = useState (null);
    const [loading, setLoading] = useState (true);
    const {id} = useParams (); 

    const {onAdd} = useContext (CartContext);
    useEffect(() =>{
        const db = getFirestore();
        const refDoc = doc(db, "items", id);
        getDoc(refDoc).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() });
    }).finally(() =>setLoading (false));
    } ,[id]); 

    const add= (quantity) => {
        onAdd(item, quantity);
    }
    if (loading) {
        return <>Loading</>
    }
    return (
        <Container className="mt-4"> 
            <h1>{item.nombre}</h1> 
            <img src={item.img} width={200} /> 
            <p>{item.descripcion}</p> 
            <p>Stock: {item.stock}</p>
            <h2>${item.precio}</h2>
            <ItemCounter initial={1} stock={item.stock} onAdd={add}/>
        </Container>
        );
};

