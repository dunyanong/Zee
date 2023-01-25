import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    darkblue: "#6001FF",
    purple: "#6001FF",
    pink: "#F890E5",
    darkpink: "#E044C4",
  },
  style: {
    global: {
      'html, body': {
        backgroundColor: 'bg-cyan-400',
      }
    }
  }
};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
