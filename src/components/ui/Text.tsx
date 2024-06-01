import "./Text.css";

interface TextProps {
  children: React.ReactNode;
  size?: "2xl" | "sm";
}

const Text = ({ children, size = "sm" }: TextProps) => {
  const className = `text-${size}`;

  return <div className={className}>{children}</div>;
};

export { Text };
