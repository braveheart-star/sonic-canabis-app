import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div className="flex min-h-screen py-4 bg-gray-100 lg:py-8 ">
        {children}
      </div>
      <Footer />
    </div>
  );
};
