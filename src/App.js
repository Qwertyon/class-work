import React from "react";

import Painting from "./components/Painting";

const numbers = ["green", "yellow", "brown", "black", "pink"];

const painting = {
  id: "id-1",
  price: 500,
  author: "mike",
  quantity: 10,
};

const painting2 = {
  id: "id-2",
  price: 800,
  author: "kate",
  quantity: 20,
};

const App = () => {
  return (
    <div>
      <h1>main component-container App</h1>
      <ul>
        {numbers.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
      {/* {[<div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>, <div>5</div>]} */}
      {/* <Painting
        author={painting.author}
        // price={painting.price}
        quantity={painting.quantity}
      />
      <Painting
        author={painting2.author}
        price={painting2.price}
        quantity={painting2.quantity}
      /> */}
    </div>
  );
};

export default App;
