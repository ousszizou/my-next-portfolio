import {
  Heading,
  Link,
  Text,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <chakra.span as="h4" fontSize="md">
        Hello 👋 Welcome to my portfolio!
      </chakra.span>
      <Heading as="h1" size="4xl">
        <chakra.span fontWeight={"medium"}>I&apos;m</chakra.span> Djaidri
        Oussama
      </Heading>
      <Text
        lineHeight={2}
        mt="8"
        color={useColorModeValue("gray.700", "app.text")}
      >
        I&apos;m a Self-Taught Full-stack Web Developer{" "}
        <chakra.strong color="orange.300">
          (with a strong focus on Front-end engineering and system design)
        </chakra.strong>{" "}
        based in Sétif, Algeria. Passionate about javascript ecosystem & Golang
        development.
        <br /> I share my experience & what I learn on my
        <Link
          ms={2}
          textDecoration="underline"
          href="https://www.youtube.com/c/algorithmCoding"
          isExternal
          color="whiteAlpha.900"
        >
          YouTube Channel
        </Link>
        .
      </Text>
    </>
  );
};

export default Header;
