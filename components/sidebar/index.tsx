import Body from "./Body";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import SocialLinks from "./SocialLinks";

const Sidebar = () => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems="flex-start"
      pos={"fixed"}
      w={"30%"}
      h={"100vh"}
      py={20}
    >
      <Header />
      <Body />
      <SocialLinks />
    </Flex>
  );
};

export default Sidebar;
