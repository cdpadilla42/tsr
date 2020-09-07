import React from "react";

type Props = {
  // onClick(): string; method returns string
  // onClick(): void; method returns nothing
  // onClick(text: string): void; method w/ params
  // onClick: () => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
