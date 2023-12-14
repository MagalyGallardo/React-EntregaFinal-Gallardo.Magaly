import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ItemList } from './ItemList';
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";


export const ItemListContainer = () => {
    const [items, setItems] = useState ([ ]);
    const [loading, setLoading] = useState (true);
    const {id} = useParams ();

    useEffect(() =>{
        const db = getFirestore();

        const refCollection = id 
        ? query (
            collection(db, "items"),
            where ("categoria", "==", id)
        )
        : collection (db, "items"); 
    
        getDocs(refCollection).then((snapshot) => {
          if (snapshot.size === 0) console.log("no results");
          else
            setItems(
              snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              })
            );
        });
    },[id]);
    return (
        <Container className='mt-4'>
            <h1>Tejidos </h1>
            <ItemList items={items} />
        </Container>
    );
};