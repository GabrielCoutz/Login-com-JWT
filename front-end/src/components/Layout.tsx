import React, { ReactNode } from "react";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
