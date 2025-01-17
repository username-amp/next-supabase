import React from "react";
import clsx from "clsx"; // Optional: Use this to conditionally combine class names

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"; // Optional: Add a `variant` prop
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const variantClasses =
    variant === "outline"
      ? "bg-white text-black border border-gray-300"
      : "bg-indigo-600 text-white";

  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-md text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
        variantClasses,
        className // Merge custom classes
      )}
    >
      {children}
    </button>
  );
};
