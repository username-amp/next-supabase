import React from "react";
import clsx from "clsx"; // Optional: Use this to conditionally combine class names

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline"; // Optional: Add a `variant` prop
}

export const Button: React.FC<ButtonProps> = ({
  size = "md",
  children,
  className,
  variant = "default",
  ...props
}) => {
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variantClasses =
    variant === "outline"
      ? "bg-white text-black border border-gray-300"
      : "bg-indigo-600 text-white";

  const classes = cn(
    "rounded font-medium",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-md text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
        {classes},
        className // Merge custom classes
      )}
    >
      {children}
    </button>
  );
};
