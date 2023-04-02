import "@/styles/globals.css";
import React from "react";
import Layout from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.css";
// eslint-disable-next-line camelcase
import { Teko, Gideon_Roman } from "@next/font/google";
const teko = Teko({
  variable: "--teko-font",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const giden = Gideon_Roman({
  variable: "--giden-font",
  weight: ["400"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <div className={`${teko.variable} ${giden.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
