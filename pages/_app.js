import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../theme";

import "@fontsource/dosis/700.css";
import "@fontsource/dosis/400.css";
import "@fontsource/gothic-a1/300.css";
import "@fontsource/gothic-a1/500.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
