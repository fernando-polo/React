import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("P.ej. Alfonso");
  const [age, setAge] = useState<number | undefined>();
  const [className, setClassName] = useState("btn-primary");

  const updateName = () => {
    setName("AJ");
  };

  const updateAge = () => {
    setAge(18);
  };

  const updateClass = () => {
    setClassName("btn-success");
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button type="button" className={`btn ${className}`} onClick={updateName}>
        Set Name
      </button>

      <p>Age: {age}</p>
      <button type="button" className={`btn ${className}`} onClick={updateAge}>
        Set Age
      </button>

      <button
        type="button"
        className={`btn ${className}`}
        onClick={updateClass}
      >
        Set Class
      </button>
    </div>
  );
}

export default MyComponent;
