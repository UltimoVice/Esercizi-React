import { useState } from "react";

export function Color({ color }) {
  const [counter, setCounter] = useState(0);

  function handleIncrementCounter() {
    setCounter((c) => c + 1);
  }

  return (
    <li>
      <h4>{color.name}</h4>
      <p>{color.age} years old</p>
      <button onClick={handleIncrementCounter}>{counter}</button>
    </li>
  );
}

// Array
// export function Colors({ colors }) {
//   return (
//     <ul>
//       {colors.map((color) => (
//         <Color key={color.id} color={color} />
//       ))}
//     </ul>
//   );
// }

// Oggetti
export function Colors({ colors }) {
  return (
    <ul>
      {Object.entries(colors).map(([key, color]) => (
        <Color key={key} color={color} />
      ))}
    </ul>
  );
}

