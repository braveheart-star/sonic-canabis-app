import React from "react";
import { motion } from "framer-motion";
import { Header } from "./Header";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <div className="relative flex flex-col w-full min-h-screen ">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="min-h-screen bg-gray-100 "> {children}</div>
          {/* <Footer /> */}
        </motion.main>
      </div>
    </div>
  );
};
