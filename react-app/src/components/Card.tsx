import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card(props: CardProps) {
  const { children } = props;

  return (
    <div className="card">
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  description?: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, description } = props;

  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </>
  );
}
