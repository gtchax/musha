import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import Footer from "../Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen w-screen">
      <Header />
      <Hero />
      <div className="px-4 lg:container lg:mx-auto py-4 flex-1">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
