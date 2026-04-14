export default App;
import Card, { CardBody } from "./components/card";
// import List from "./components/list";

function App() {
  return (
    <Card>
      <CardBody title={"Título del coumento"} description={"Description"} />
      {/* <List/> */}
    </Card>
  );
}
