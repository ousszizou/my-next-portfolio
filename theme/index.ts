import { config } from "./config";
import { extendTheme } from "@chakra-ui/react";
import { styles } from "./styles";

const theme = extendTheme({
  fonts: {
    heading: "Dosis",
    body: "Gothic A1",
  },
  config,
  styles,
});

export default theme;
