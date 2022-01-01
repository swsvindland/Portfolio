import "../styles/globals.css";

import Theme from "../src/components/Theme";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
