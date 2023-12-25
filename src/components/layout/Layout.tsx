import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import Footer from "../Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
