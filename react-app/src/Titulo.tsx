export default Titulo;

function Titulo() {
  const nombre = "Fernando";

  if (nombre) {
    return <h1>Hola mi nombre es {nombre}</h1>;
  }
  return <h1>Hola mundo</h1>;
}
