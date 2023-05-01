import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "./Navbar";

type InitLayoutProps = {
  children: ReactNode;
  title: string;
};

const InitLayout = ({ children, title }: InitLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <meta name="description" content="" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section>{children}</section>
    </>
  );
};

export default InitLayout;
