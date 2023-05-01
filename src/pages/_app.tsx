import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { AppPropsWithLayout } from "@/types/layout_types";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
