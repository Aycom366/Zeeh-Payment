import { Link, Text, VStack } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { Links, LinksData } from "../../models";

const FooterSection = ({ HeaderText, links }: LinksData) => {
  return (
    <VStack alignItems={"flex-start"} spacing={{ base: 2, sm: 4 }}>
      <Text fontSize="18px" fontWeight={"bold"}>
        {HeaderText}
      </Text>
      <VStack alignItems={"flex-start"}>
        {links.map((link: Links, index: number) => (
          <Link key={index} to={link.url} as={RouterLink}>
            {link.label}
          </Link>
        ))}
      </VStack>
    </VStack>
  );
};

export default FooterSection;
