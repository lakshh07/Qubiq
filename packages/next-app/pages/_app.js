import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiClient, chains } from "../helpers/rainbowSetup";
import { useState } from "react";
import LoadingContext from "../context/loading";
import Loading from "./components/Loading";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  const appInfo = {
    appName: "Qubiq",
  };

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        showRecentTransactions={true}
        coolMode
        appInfo={appInfo}
        chains={chains}
        theme={darkTheme()}
      >
        <ChakraProvider>
          <LoadingContext.Provider value={{ loading, setLoading }}>
            <Loading />
            <Box className={loading ? "blur" : null}>
              <Component {...pageProps} />
            </Box>
          </LoadingContext.Provider>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
