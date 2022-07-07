import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { HStack, Link, chakra } from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { SocialLink } from "data/types";
import { socialLinks } from "data";

const SocialLinks = () => {
  return (
    <HStack spacing={6} mt="auto">
      {socialLinks.map(({ name, href }: SocialLink, i: number) => (
        <Link key={i} display="flex" alignItems="center" href={href} isExternal>
          {name === "GitHub" && <FaGithubSquare />}
          {name === "LinkedIn" && <FaLinkedin />}
          {name === "Phone(WhatsApp)" && <FaWhatsappSquare />}
          <chakra.span ms={1}>{name}</chakra.span> <ExternalLinkIcon ml={1} />
        </Link>
      ))}
    </HStack>
  );
};

export default SocialLinks;
