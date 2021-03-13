import "../styles/globals.css";
import "../styles/timeline.css";
import "../styles/contact.css";
import "../styles/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Theme from "../components/Theme";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
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
