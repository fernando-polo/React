interface God {
  id: number;
  name: string;
  lvl: number;
}

interface ListProps {
  data: God[];
}

function List(props: ListProps) {
  const { data } = props;

  return (
    <ul className="list-group">
      {data.map(({ id, name, lvl }) => (
        <li key={id} className={`list-group-item`}>
          Lvl: {lvl} - Name: {name}
        </li>
      ))}
    </ul>
  );
}

export default List;
