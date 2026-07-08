export default function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`
        rounded-xl
        bg-blue-600
        px-6
        py-3
        text-white
        font-semibold
        transition-all
        duration-300
        hover:bg-blue-700
        hover:-translate-y-1
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}