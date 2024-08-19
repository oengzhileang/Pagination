import React, { ButtonHTMLAttributes, Children, ReactNode } from "react";
import { cn } from "@/app/utils/cn";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "contain" | "outline" | "text";
  color?: "primary" | "secondary" | "success" | "error";
  // backgroundColor?: string;
  size?: "small" | "medium" | "large";
  props?: HTMLButtonElement;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "contain",
  color = "primary",
  // backgroundColor = "#0070f3",
  size = "small",
  disabled = false,
  ...props
}) => {
  const baseStyle = "px-8 py-4 rounded font-medium transition-colors ";
  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : " ";
  const varaintStyles = {
    contain: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
      success: "bg-green-500 text-white",
      error: "bg-red-500 text-white",
    },
    outline: {
      primary: "bg-transparent border border-blue-500 text-slate-200",
      secondary: "bg-transparent border border-purple-500 text-slate-200",
      success: "bg-transparent border border-green-500 text-slate-200",
      error: "bg-transparent border border-red-500 text-slate-200",
    },
    text: {
      primary: "text-blue-500",
      secondary: "text-purple-500",
      success: "text-green-500",
      error: "text-red-500",
    },
  };
  const sizeStyles = {
    small: "text-[12px] p-[10px]",
    medium: "text-[22px] p-[20px]",
    large: "text-[32px] p-[30px]",
  };

  return (
    // <button
    //   className={`${baseStyle} ${sizeStyles[size]} ${varaintStyles[variant]?.[color]} ${disabledStyle} `}
    //   disabled={disabled}
    //   {...props}
    // >
    //   {children}
    // </button>
    <button
      className={cn(baseStyle, varaintStyles[variant]?.[color], disabledStyle)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
