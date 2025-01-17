import React from "react";
import clsx from "clsx"; // Optional: For conditional class names

// Define a type for CardProps, extending React's default div attributes
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customProp: string;
}

// Card component
export const Card: React.FC<CardProps> = ({
  children,
  className,
  customProp,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx("bg-white shadow-md rounded-lg", className)}
    >
      <p>{customProp}</p>
      {children}
    </div>
  );
};

// CardHeader component
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx("px-4 py-2 border-b border-gray-200 text-black", className)}
    >
      {children}
    </div>
  );
};

// CardContent component
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,

  ...props
}) => {
  return (
    <div {...props} className={clsx("px-4 py-2", className)}>
      {children}
    </div>
  );
};

// CardFooter component
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx("px-4 py-2 border-t border-gray-200", className)}
    >
      {children}
    </div>
  );
};
