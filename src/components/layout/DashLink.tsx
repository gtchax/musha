import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  text: string;
  to: string;
  icon: ReactNode;
};

const DashLink = ({ text, icon, to }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending
          ? "flex gap-2 px-3 py-1 rounded-md w-18 md:w-44"
          : isActive
          ? "flex gap-2 text-vintage px-3 py-1 rounded-md bg-[#2d2d2d] md:w-44"
          : "flex gap-2 px-3 py-1 rounded-md hover:bg-brown md:w-44"
      }
    >
      {icon}

      <span className="hidden md:flex font-medium">{text}</span>
    </NavLink>
  );
};

export default DashLink;
