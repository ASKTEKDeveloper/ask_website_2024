// pages/_app.js
import "@/styles/globals.css";
import "@/styles/buttonStyle.css";
import "@/styles/layout.css";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import JeenaHead from "@/src/layout/JeenaHead";
// import Preloader from "@/src/layout/Preloader"; // Optional if you need it

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window.gtag === "function") {
        window.gtag("config", "G-Z2TZWNK0Y1", {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <Fragment>
      <JeenaHead />
      {/* {loading && <Preloader />} */}
      <Component {...pageProps} />
    </Fragment>
  );
}
