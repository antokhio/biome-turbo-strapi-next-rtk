import { wrapper } from "@store/store";
import "@styles/globals.css";
import { AppCacheProvider } from "@mui/material-nextjs/v16-pagesRouter";
import type {
  AppInitialProps as NextAppInitialProps,
  AppProps as NextAppProps,
} from "next/app";
import NextApp from "next/app";
import { Provider } from "react-redux";

export interface AppProps extends NextAppProps {}

const App = ({ Component, pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <AppCacheProvider>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </AppCacheProvider>
  );
};

export default App;

App.getInitialProps = wrapper.getInitialAppProps(
  () =>
    async (ctx): Promise<NextAppInitialProps> => {
      const childrenGip = await NextApp.getInitialProps(ctx);
      return {
        pageProps: {
          ...childrenGip,
        },
      };
    },
);
