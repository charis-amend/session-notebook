import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

// in _app.js file: 
const fetcher = (url) => fetch(url).then((response) => response.json())
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
