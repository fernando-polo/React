import { ReactNode } from "react";

// Card
interface CardProps {
  children: ReactNode;
}

function Card(props: CardProps) {
  const { children } = props;

  return (
    <div className="card">
      <div className="card-body">{children}</div>
    </div>
  );
}
export default Card;

// CardBody
interface CardBodyProps {
  title: string;
  description?: string;
}

function CardBody(props: CardBodyProps) {
  const { title, description } = props;

  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </>
  );
}

export { CardBody };
