import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const gods = [
    { id: 1, name: "Kratos", lvl: 100 },
    { id: 2, name: "Freya", lvl: 90 },
    { id: 3, name: "Atreus", lvl: 80 },
  ];

  return (
    <Card>
      <CardBody title={"Título del coumento"} description={"Description"} />
      {gods.length > 0 && <List data={gods} />}
    </Card>
  );
}

export default App;
