import {Link} from "react-router-dom"; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({item}) => {
 return (    
    <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={item.img} />
        <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>{item.descripcion}</Card.Text>
            <Link to={`/item/${item.id} `}> <button variant="primary" className="boton">Más Información</button></Link>
        </Card.Body>
    </Card>
    ); 
};
export default Item;




