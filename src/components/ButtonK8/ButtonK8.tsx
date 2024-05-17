import React from "react";

export interface ButtonProps {
  label: string;
}

const ButtonK8 = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default ButtonK8;
