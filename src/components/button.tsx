import React from "react";

type Props = {
  // onClick(): string; method returns string
  // onClick(): void; method returns nothing
  // onClick(text: string): void; method w/ params
  // onClick: () => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ onClick, children }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
