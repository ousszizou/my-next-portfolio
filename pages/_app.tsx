import "@fontsource/dosis/700.css";
import "@fontsource/dosis/400.css";
import "@fontsource/gothic-a1/300.css";
import "@fontsource/gothic-a1/500.css";

import { ChakraProvider, Container } from "@chakra-ui/react";

import { AppProps } from "next/app";
import NextNProgress from "components/NextNProgress";
import theme from "theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl">
        <NextNProgress />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
