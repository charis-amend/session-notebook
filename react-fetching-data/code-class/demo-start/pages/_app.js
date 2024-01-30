import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const { data, error, isValidating, isLoading } = useSWR(`https://example-apis.vercel.app/api/bad-jokes/${id}`, fetcher);

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
