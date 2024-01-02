import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
type Props = {
  text: string;
  to: string;
  icon: ReactNode;
};

const DashLink = ({ text, icon, to }: Props) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Link
      to={to}
      //   className={({ isActive, isPending }) =>
      //     isPending ? "pending" : isActive ? "active" : ""
      //   }
      className={clsx(
        {
          "flex gap-2 text-vintage px-3 py-1 rounded-md bg-[#2d2d2d] md:w-44":
            location.pathname === to,
        },
        {
          "flex gap-2 px-3 py-1 rounded-md hover:bg-[#2d2d2d] hover:text-vintage md:w-44":
            true,
        }
      )}

      // isPending
      //   ? "flex gap-2 px-3 py-1 rounded-md w-18 md:w-44"
      //   : isActive
      //   ? "flex gap-2 text-vintage px-3 py-1 rounded-md bg-[#2d2d2d] md:w-44"
      //   : "flex gap-2 px-3 py-1 rounded-md hover:bg-brown md:w-44"
    >
      {icon}

      <span className="hidden md:flex font-medium">{text}</span>
    </Link>
  );
};

export default DashLink;
