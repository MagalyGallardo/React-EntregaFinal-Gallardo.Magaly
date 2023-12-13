import { useState } from "react";

export const ItemCounter = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);
  const handleDecrease = () => {
    if (count > initial ) setCount ((c) => c - 1)
  };
  const handleIncrease = () => {
    if (stock > count) setCount ((c) => c + 1)
  };
  const handleAdd = () => {
    onAdd (count);
    setCount (initial);
  }

    return (
        <>
        <br />
        <br />
        <div style={{ display: "flex"}}>
            <div style={{ fontSize: 32 }} onClick={handleDecrease}>
                -
            </div>
            <mark>{count} </mark>
            <div style={{ fontSize: 32}} onClick={handleIncrease}>
                +
            </div>
        </div>
        <br />
        <button onClick={handleAdd}>Agregar al carrito</button>
        </>
    )
}