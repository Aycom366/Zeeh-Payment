import { Link, Text, VStack, BoxProps } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { Links, LinksData } from "../../models";

interface IProps extends LinksData, BoxProps {
  sectionDelay: number;
}

const FooterSection = ({
  HeaderText,
  links,
  sectionDelay,
  ...rest
}: IProps) => {
  let sectionItem = 100;

  return (
    <VStack
      {...rest}
      w="full"
      alignItems={"flex-start"}
      spacing={{ base: 2, sm: 4 }}
    >
      <Text data-aos="zoom-in" fontSize="18px" fontWeight={"bold"}>
        {HeaderText}
      </Text>
      <VStack alignItems={"flex-start"}>
        {links.map((link: Links, index: number) => {
          sectionDelay += 100;
          return (
            <Link
              data-aos="fade-up"
              data-aos-delay={sectionItem + sectionDelay}
              key={index}
              to={link.url}
              as={RouterLink}
            >
              {link.label}
            </Link>
          );
        })}
      </VStack>
    </VStack>
  );
};

export default FooterSection;
