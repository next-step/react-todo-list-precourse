import { InputHTMLAttributes, forwardRef } from "react";
import "./Input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    const className = `input input-${type}`;
    return <input type={type} className={className} ref={ref} {...props} />;
  },
);
Input.displayName = "Input";

export { Input };
