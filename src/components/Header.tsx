import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#c69774] py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-[#ffefe8] font-bold tracking-tight">
          <Link to="/">Musha</Link>
        </span>
        <span className="flex space-x-2">
          <Link to='login' className="flex items-center text-[#ffefe8] px-3 font-bold"></Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
