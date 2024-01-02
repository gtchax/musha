import { NavLink } from "react-router-dom";
import _ from "lodash";

type Props = {
  title: string;
  subtitle: string[];
};

const DashHeader = ({ title, subtitle }: Props) => {
  const breadcrumbs = (): string => {
    const newArray = _.map(subtitle, (el) => _.capitalize(el));
    return newArray.join(" > ");
  };
  return (
    <header className="w-full h-18 px-2 py-2 flex items-center justify-between border-b border-black ">
      <div className="flex flex-col">
        <h1 className="font-bold leading-wide font-sans text-2xl ">
          {_.capitalize(title)}
        </h1>
        <p className="text-sm text-gray-400 leading-none">
          {breadcrumbs()}
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <span className="flex space-x-2">
          <NavLink
            to="/signup"
            className="flex bg-teal items-center text-vintage w-8 h-8 justify-center font-bold rounded-full shadow-lg"
          >
            DA
          </NavLink>
        </span>
      </div>
    </header>
  );
};

export default DashHeader;
