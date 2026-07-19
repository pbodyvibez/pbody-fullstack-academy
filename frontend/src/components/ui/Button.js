import colors from "../../theme/colors";

export default function Button({
  children,
  onClick,
  href,
  type = "button",
}) {
  const style = {
    display: "inline-block",
    background: colors.primary,
    color: "#fff",
    padding: "15px 28px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "16px",
    textDecoration: "none",
    transition: ".3s",
  };

  if (href) {
    return (
      <a href={href} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}