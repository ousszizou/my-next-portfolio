import { Box, Flex, Heading, Text, VStack, chakra } from "@chakra-ui/react";
import { MotionBox, MotionFlex } from "utils";
import { experiences, projects, technologies } from "data";

import { Experience } from "data/types";
import Head from "next/head";
import Sidebar from "components/sidebar";
import { useState } from "react";

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
        <meta name="description" content="oussama djaidri portfolio website" />
      </Head>
      <Box
        pos={"relative"}
        display={"flex"}
        justifyContent={"space-between"}
        w={"100%"}
      >
        <Sidebar />
        <Flex flexDirection="column" py={20} ml={"auto"} w={"50%"}>
          <Text align="center" fontSize={"4xl"} color="app.text">
            PORTFOLIOS ARE <chakra.span color="white">EVERYTHING</chakra.span>
            ,
            <br /> PROMISES ARE <chakra.span color="white">NOTHING</chakra.span>
            .
            <br /> <chakra.span color="white">DO</chakra.span> THE WORK.
          </Text>
          <VStack mt={16}>
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
                <Text color="app.text" fontSize="sm">
                  {project.description}
                </Text>
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
                  <chakra.span color="app.text" fontStyle="italic">
                    {technology.type}
                  </chakra.span>
                </MotionBox>
              </MotionBox>
            ))}
          </Flex>

          <VStack mt={16}>
            {experiences.map(
              (
                {
                  company,
                  id,
                  location,
                  position,
                  timeline,
                  colors,
                }: Experience,
                i: number
              ) => (
                <MotionFlex
                  w="100%"
                  border="3px solid"
                  borderColor="transparent"
                  bg={` 
            linear-gradient(135deg, ${colors.left}, ${colors.right}) border-box`}
                  flexDirection="row"
                  key={id}
                  id={i}
                >
                  <Box p={8} bg="#202022" w="full" h="full">
                    <VStack
                      ms={4}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                    >
                      <chakra.span fontSize="xs" letterSpacing="0.2em">
                        {company}
                      </chakra.span>
                      <Heading
                        bgClip="text"
                        bgGradient={`linear-gradient(135deg, ${colors.left}, ${colors.right})`}
                      >
                        {position}
                      </Heading>
                      <Text color="app.text" fontSize="sm">
                        {timeline} · {location}
                      </Text>
                    </VStack>
                  </Box>
                </MotionFlex>
              )
            )}
          </VStack>
        </Flex>
      </Box>
    </div>
  );
}
