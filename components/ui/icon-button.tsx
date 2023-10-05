import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

interface IconButtonProps {
  icon: React.ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}

const IconButton = ({ icon, className, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
