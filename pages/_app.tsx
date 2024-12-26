import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/component/organisms/Layout";
import { Provider } from "react-redux";
import { store } from "@/reduxStore/store";
import AuthState from "@/firebase/authentication/AuthState";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthState>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthState>
    </Provider>
  );
}
