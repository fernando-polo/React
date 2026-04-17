// useEffect(() => {}) ----> Corre después de cada re-render
// useEffect(() => {},[]) ----> Corre sólo cuando se monta el elemento
// useEffect(() => {},[value]) ----> Corre sólo cuando se monta el elemento y cuando el valor cambia

import { useState, useEffect } from "react";

type ComponentProps = {};

function Component({}: ComponentProps) {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  //   Cada vez que hace re-render incluye la PRIMERA VEZ que se monta el componente
  //   useEffect(() => {
  //     document.title = `Count ${count}`;
  //   });

  //   Sólo ocurre cuando se monta el componente, NO en cada re-render
  //   useEffect(() => {
  //     document.title = `My counter program`;
  //   }, []);

  //   Sólo ocurre cuando se monta el elemento y cuando el valor dado cambia
  useEffect(() => {
    document.title = `Count ${count} ${color}`;
  }, [count]);

  const addCount = () => {
    setCount((count) => count + 1);
  };

  const substractCount = () => {
    setCount((count) => count - 1);
  };

  function changeColor() {
    setColor((f) => (f === "green" ? "green" : "red"));
  }

  return (
    <div>
      <p style={{ color: color }}>Count: {count}</p>
      <button type="button" className="btn btn-primary" onClick={addCount}>
        Add
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={substractCount}
      >
        Substract
      </button>
      <br />
      <button type="button" className="btn btn-primary" onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
}

export default Component;
