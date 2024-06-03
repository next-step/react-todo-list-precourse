import "./styles/Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "ghost";
  size?: "sm" | "md" | "round";
  active?: boolean;
}

const Button = ({
  className,
  children,
  onClick,
  variant = "default",
  size = "sm",
  active = false,
  ...props
}: ButtonProps) => {
  const btnClassName =
    `btn btn-variant-${variant} btn-size-${size} btn-active-${active}` +
    ` ${className}`;

  return (
    <button className={btnClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export { Button };
