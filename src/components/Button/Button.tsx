import { ReactNode, type ComponentPropsWithoutRef } from "react";

import "./button.css";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <button className="button" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
