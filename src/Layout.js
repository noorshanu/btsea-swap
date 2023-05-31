import React from "react";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-5 min-h-screen flex justify-center items-center">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
