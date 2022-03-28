import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        newestOnTop
        role="alert"
        theme="colored"
      />
    </SessionProvider>
  );
}
export default App;
