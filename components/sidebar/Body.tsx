import { Box, Flex, chakra } from "@chakra-ui/react";
import { MotionFlex, MotionSpan } from "utils";

import { links } from "data";

const linksVariants = {
  rest: {
    color: "#A0AEC0",
  },
  hover: {
    color: "#EDF2F7",
  },
};

const linksWidthVariants = {
  rest: { width: "1.25rem" },
  hover: { width: "2.5rem" },
};

const Body = () => {
  return (
    <Flex flexDirection="column" mt="16">
      {links.map((link, i) => (
        <Box key={i} mb={4} as="a" href={link.href}>
          <MotionFlex
            variants={linksVariants}
            initial="rest"
            fontWeight="medium"
            fontSize="xs"
            display="inline-flex"
            alignItems="center"
            whileHover="hover"
          >
            <chakra.span color="app.text" w={6}>
              {link.id}
            </chakra.span>
            <MotionSpan
              variants={linksWidthVariants}
              mx={4}
              h={0.5}
              bg="app.text"
              borderRadius="50px"
            />
            <chakra.span color="app.text" letterSpacing="0.3em">
              {link.name}
            </chakra.span>
          </MotionFlex>
        </Box>
      ))}
    </Flex>
  );
};

export default Body;
