import React from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import { Header } from "./Header"

export const Layout = ({ children, title = "Canabis" }: any) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex flex-col w-full min-h-screen ">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div> {children}</div>
          {/* <Footer /> */}
        </motion.main>
      </div>
    </div>
  )
}
