import "./styles/Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "ghost";
  size?: "sm" | "md" | "round";
  active?: boolean;
}

const Button = ({
  children,
  onClick,
  variant = "default",
  size = "sm",
  active = false,
  ...props
}: ButtonProps) => {
  const className = `btn btn-variant-${variant} btn-size-${size} btn-active-${active}`;

  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export { Button };
