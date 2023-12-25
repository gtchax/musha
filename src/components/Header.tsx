import { Link } from "react-router-dom";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className="bg-brown py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-vintage font-bold tracking-tight">
          <Link to="/">Musha</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="login"
            className="flex bg-teal items-center text-vintage px-3 font-bold rounded-full shadow-lg"
          >
            Sign In
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
