import { NavLink } from "react-router-dom";
import DashSidebar from "./DashSidebar";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen  w-screen overflow-hidden">
      <div className="flex flex-1 overflow-hidden w-full">
        <DashSidebar />

        <section className="flex flex-1 overflow-y-auto w-full">
          <div className="flex flex-col w-full">
            <header className="w-full px-2 py-[19px] flex items-center justify-end border-b border-black ">
             
                <div className="flex items-center space-x-3">
                  <span className="flex space-x-2">
                    <NavLink
                      to="/signup"
                      className="flex bg-teal items-center text-vintage px-4 py-2 font-bold rounded-full shadow-lg"
                    >
                      Sign Out
                    </NavLink>
                  </span>
                </div>
            
            </header>
            <section className="p-4 overflow-y-auto">{children}</section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashLayout;
