import { useState } from "react";
import "./style.css";

const FruitList = () => {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  return (
    <>
      <h1>
        preço total = {fruits.reduce((total, atual) => total + atual.price, 0)}
      </h1>
      <ul>
        {fruits.map((fruits, index) => (
          <li key={index}>{fruits.name}</li>
        ))}
      </ul>
      <button
        className="btn"
        onClick={() => {
          setFruits(fruits.filter((fruits) => fruits.color === "red"));
        }}
      >
        mostrar frutas vermelhas
      </button>
    </>
  );
};

export default FruitList;
