import "../styles/globals.css";
import "../styles/timeline.css";
import "../styles/contact.css";
import "../styles/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Theme from "../components/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
