import { ReactElement } from "react";

type Variants = "primary" | "secondary";
export interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg" | "vlg";
  onClick?: () => void;
  text: string | ReactElement;
  startIcon?: ReactElement;
  loading?: boolean;
}

const variantClasses: Record<Variants, string> = {
  primary: "bg-[#5046e4] text-white",
  secondary: "bg-[#e0e7fe] text-[#3e38a7]",
};

const sizeClasses = {
  sm: "px-2 py-1",
  md: "px-4 py-2",
  lg: "px-6 py-3",
  vlg: "px-8 py-4",
};

const defaultStyles = "flex justify-center items-center rounded-md shadow-lg cursor-pointer";

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  onClick,
  text,
  startIcon,
  loading,
}) => {
  return (
    <button className={`${sizeClasses[size]} ${variantClasses[variant]} ${defaultStyles} ${loading && `disabled opacity-60`}`} onClick={onClick}>
      {loading ? (
        <div className="flex items-center">
          <span>Loading...</span>
        </div>
      ) : (
        <div className="flex items-center">
          {startIcon && <div className="pr-2">{startIcon}</div>}
          {text}
        </div>
      )}
    </button>
  );
};
