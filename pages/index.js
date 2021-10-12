import Head from "next/head";
import {
  Box,
  Flex,
  Link,
  Text,
  chakra,
  HStack,
  VStack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useState } from "react";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionSpan = motion(chakra.span);

const links = [
  { id: "01", name: "PROJECTS", href: "#projects" },
  { id: "02", name: "TECHNOLOGIES I USE", href: "#technologies" },
];

const projects = [
  {
    type: "FULLSTACK",
    title: "Notion Clone",
    description:
      "This clone tries to replicate some of the great note-taking features Notion has.",
    link: "",
    stack: [],
  },
  {
    type: "FRONTEND",
    title: "Arabic Markdown Editor",
    description: "Modern markdown editor support RTL",
    link: "",
    stack: [],
  },
  {
    type: "FRONTEND",
    title: "Vupa Framework",
    description: "Framework components for vue.js (v2/v3)",
    link: "",
    stack: [],
  },
];

const technologies = [
  {
    type: "(programing language)",
    title: "JavaScript",
    icon: "https://xenodochial-yonath-b7c6a8.netlify.app/assets/static/js.64c089f.87711407412494d529d45ee76167583c.svg",
  },
  {
    type: "(programing language)",
    title: "TypeScript",
    icon: "https://xenodochial-yonath-b7c6a8.netlify.app/assets/static/ts.64c089f.9e8bfce4de1e3508a98fb887c593c11b.svg",
  },
  {
    type: "(JavaScript runtime)",
    title: "Node.js",
    icon: "https://xenodochial-yonath-b7c6a8.netlify.app/assets/static/nodejs.64c089f.94cafb0d1b4a2875215db17964f0938a.svg",
  },
  {
    type: "(programing language)",
    title: "Golang",
    icon: "https://xenodochial-yonath-b7c6a8.netlify.app/assets/static/go.cbda223.477657aa95f260720f170f4184b655da.svg",
  },
  {
    type: "(js framework)",
    title: "Vue.js",
    icon: "https://xenodochial-yonath-b7c6a8.netlify.app/assets/static/vue.64c089f.22efb7c22774c39c790448f62bda240d.svg",
  },
  {
    type: "(js framework)",
    title: "React.js",
    icon: "https://xenodochial-yonath-b7c6a8.netlify.app/assets/static/react.64c089f.9a28da9f2a3fa419eb399e49f98cda39.svg",
  },
  {
    type: "(css framework)",
    title: "Tailwindcss",
    icon: "https://xenodochial-yonath-b7c6a8.netlify.app/assets/static/tailwindcss.64c089f.3323dd0202edcaf8d4392e994668959c.svg",
  },
  {
    type: "(version control)",
    title: "Git",
    icon: "https://xenodochial-yonath-b7c6a8.netlify.app/assets/static/git-icon.64c089f.64d5e98f1a220cdcad2b1a70d52ab669.svg",
  },
  {
    type: "(vue.js framework)",
    title: "Nuxt.js",
    icon: "https://xenodochial-yonath-b7c6a8.netlify.app/assets/static/nuxt.64c089f.079dd83915c80beeccc886d186751b6c.svg",
  },
  {
    type: "(react.js framework)",
    title: "Next.js",
    icon: "https://xenodochial-yonath-b7c6a8.netlify.app/assets/static/nextjs.cbda223.e48e27f9d0eab488e665d8513578dfb5.svg",
  },
  {
    type: "(database)",
    title: "MySQL",
    icon: "https://xenodochial-yonath-b7c6a8.netlify.app/assets/static/mysql.64c089f.dd2a5a358ea682bed45bf98bc842b3ed.svg",
  },
  {
    type: "(database)",
    title: "MongoDB",
    icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
];

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

const projectsCardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1, cursor: "pointer" },
};

const technologyCardVariants = {
  reset: {
    scale: 1,
  },
  hover: { scale: 1.1 },
};

export default function Home() {
  const [isProjectCardHovered, setIsProjectCardHovered] = useState(false);
  const [projectCardId, setprojectCardId] = useState(null);

  const [isTechnologyCardHovered, setIsTechnologyCardHovered] = useState(false);
  const [technologyCardId, settechnologyCardId] = useState(null);

  return (
    <div>
      <Head>
        <title>Djaidri Oussama - Portfolio</title>
        <meta
          name="description"
          content="oussama djaidri full-stack web developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        pos={"relative"}
        display={"flex"}
        justifyContent={"space-between"}
        w={"100%"}
      >
        <Flex
          flexDirection={"column"}
          alignItems="flex-start"
          pos={"fixed"}
          w={"30%"}
          h={"100vh"}
          py={20}
        >
          <chakra.span as="h4" size="md">
            Hello 👋 Welcome to my portfolio!
          </chakra.span>
          <Heading as="h1" size="4xl">
            <chakra.span fontWeight={"medium"}>I&apos;m</chakra.span> Oussama
            Djaidri
          </Heading>
          <Text
            lineHeight={2}
            mt="8"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            I&apos;m a Self-Taught Full-stack Web Developer based in Sétif,
            Algeria. Passionate about javascript ecosystem & Golang development.
            <br /> I share what I learn on my YouTube Channel{" "}
            <Link
              textDecoration="underline"
              href="https://www.youtube.com/c/algorithmCoding"
              isExternal
              color="orange.300"
            >
              Algorithm Academy
            </Link>
            ,
            <br />
            or on my blog{" "}
            <Link
              textDecoration="underline"
              href="https://vigorous-minsky-a122f9.netlify.app/"
              isExternal
              color="orange.300"
            >
              Syntax
            </Link>
            .
          </Text>
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
                  <chakra.span w={6}>{link.id}</chakra.span>
                  <MotionSpan
                    variants={linksWidthVariants}
                    mx={4}
                    h={0.5}
                    bg="gray.400"
                    borderRadius="50px"
                  />
                  <chakra.span letterSpacing="0.3em">{link.name}</chakra.span>
                </MotionFlex>
              </Box>
            ))}
          </Flex>
          <HStack spacing={6} mt="auto">
            {/* <IconButton
              _focus={{ boxShadow: "none" }}
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="DarkMode Switch"
              icon={colorMode == "light" ? <SunIcon /> : <MoonIcon />}
            /> */}
            <Link display="flex" alignItems="center" href="#" isExternal>
              <chakra.span>GitHub</chakra.span> <ExternalLinkIcon ml={1} />
            </Link>
            <Link display="flex" alignItems="center" href="#" isExternal>
              <chakra.span>LinkedIn</chakra.span> <ExternalLinkIcon ml={1} />
            </Link>
            <Link display="flex" alignItems="center" href="#" isExternal>
              <chakra.span>Twitter</chakra.span> <ExternalLinkIcon ml={1} />
            </Link>
          </HStack>
        </Flex>
        <Flex flexDirection="column" py={20} ml={"auto"} w={"50%"}>
          <VStack>
            {projects.map((project, i) => (
              <MotionFlex
                bg="#202022"
                p={8}
                w="100%"
                flexDirection="column"
                variants={projectsCardVariants}
                initial="rest"
                whileHover={"hover"}
                onHoverStart={(e) => {
                  setIsProjectCardHovered(true);
                  setprojectCardId(e.target.id);
                }}
                onHoverEnd={(e) => {
                  setIsProjectCardHovered(false);
                  setprojectCardId(null);
                }}
                style={
                  isProjectCardHovered && projectCardId != i
                    ? { opacity: 0.5 }
                    : { opacity: 1 }
                }
                key={i}
                id={i}
              >
                <chakra.span mb={2} fontSize="xs" letterSpacing="0.2em">
                  {project.type}
                </chakra.span>
                <Heading mb={2}>{project.title}</Heading>
                <Text fontSize="sm">{project.description}</Text>
              </MotionFlex>
            ))}
          </VStack>

          <Flex mt={16} flexWrap="wrap">
            {technologies.map((technology, i) => (
              <MotionBox
                mt={i == 0 ? "" : i == 1 ? 6 : i % 2 == 0 ? -6 : ""}
                p={1}
                w="50%"
                key={i}
              >
                <MotionBox
                  variants={technologyCardVariants}
                  initial="rest"
                  whileHover="hover"
                  transition={{ duration: 0.2, type: "tween" }}
                  onHoverStart={(e) => {
                    setIsTechnologyCardHovered(true);
                    settechnologyCardId(e.target.id);
                  }}
                  onHoverEnd={(e) => {
                    setIsTechnologyCardHovered(false);
                    settechnologyCardId(null);
                  }}
                  style={
                    isTechnologyCardHovered && technologyCardId != i
                      ? { opacity: 0.5 }
                      : { opacity: 1 }
                  }
                  bg="#202022"
                  h={60}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  p={4}
                  id={i}
                >
                  <chakra.img
                    w="20"
                    h="20"
                    mb="3"
                    mx="auto"
                    src={technology.icon}
                  />
                  <chakra.span fontWeight="bold">
                    {technology.title}
                  </chakra.span>
                  <chakra.span fontStyle="italic">
                    {technology.type}
                  </chakra.span>
                </MotionBox>
              </MotionBox>
            ))}
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
