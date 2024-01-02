import {  useLocation } from "react-router-dom";
import DashSidebar from "./DashSidebar";
import DashHeader from "./DashHeader";
import _ from 'lodash'

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const heading = location.pathname.split('/')
  const sub = _.compact(heading)

  return (
    <div className="flex flex-col h-screen xl:container overflow-hidden">
      <div className="flex flex-1 overflow-hidden w-full">
        <DashSidebar />

        <section className="flex flex-1 overflow-y-auto w-full">
          <div className="flex flex-col w-full">
            <DashHeader
              title={heading[heading.length -1]}
              subtitle={sub}
            />
            <section className="p-4 overflow-y-auto flex flex-col flex-1">{children}</section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashLayout;
