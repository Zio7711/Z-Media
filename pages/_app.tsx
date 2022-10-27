import "../styles/globals.css";

import { useEffect, useState } from "react";

import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function App({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState<Boolean>(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return null;
  }

  return (
    <div>
      <NavBar />
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          <SideBar />
        </div>
        <div className="mt-4 flex flex-col  gap-10 overflow-auto h-[88vh] videos flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
