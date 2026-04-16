interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  const { title } = props;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.textContent = "Hola toño";
    console.log(e);
  };
  return (
    <button type="button" className="btn btn-primary" onClick={handleClick}>
      {title}
    </button>
  );
}

export default Button;
