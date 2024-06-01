import "./styles/Text.css";

interface TextProps {
  children: React.ReactNode;
  variant?: "default" | "primary";
  size?: "sm" | "2xl";
}

const Text = ({ children, variant = "default", size = "sm" }: TextProps) => {
  const className = `text-size-${size} text-variant-${variant}`;

  return <div className={className}>{children}</div>;
};

export { Text };
