import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-brown py-6">
      <div className="px-4 lg:container mx-auto flex justify-between">
        <span className="text-3xl text-vintage font-bold tracking-tight">
          <Link to="/">Musha</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/signup"
            className="flex bg-teal items-center text-vintage px-4 font-bold rounded-full shadow-lg"
          >
            Sign In
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
