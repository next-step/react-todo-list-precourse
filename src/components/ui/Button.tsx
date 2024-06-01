import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "ghost";
  size?: "sm" | "md" | "round";
}

const Button = ({
  children,
  onClick,
  variant = "default",
  size = "sm",
  ...props
}: ButtonProps) => {
  const className = `btn btn-variant-${variant} btn-size-${size}`;

  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export { Button };
