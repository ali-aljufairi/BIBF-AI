import React from "react";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
