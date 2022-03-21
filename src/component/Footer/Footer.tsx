import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

import logo from "../../images/LogoBig.png";
import { FooterItems } from "../../utils/FooterItems";
import FooterSection from "./FooterSection";

const Footer = () => {
  let sectionDelay = 100;
  return (
    <Box overflow={"hidden"} w="full" m="0 auto" maxW="1400px" px="8">
      <VStack>
        <SimpleGrid gridGap={4} py="50px" w="full" columns={[2, 3, 3, 5]}>
          <VStack w="full" data-aos="fade-up" alignItems={"flex-start"}>
            <Box w="136px" h="107px">
              <Image
                src={logo}
                w="full"
                h="full"
                objectFit="cover"
                alt="Zeeh"
              />
            </Box>
            {/* <Spacer /> */}
            <Link as={RouterLink} to="#">
              Privacy - Terms
            </Link>
          </VStack>
          {FooterItems.map((footerItem, index) => {
            sectionDelay += 100;
            return (
              <FooterSection
                w="full"
                data-aos="fade-up"
                sectionDelay={sectionDelay}
                data-aos-delay={sectionDelay}
                key={index}
                HeaderText={footerItem.HeaderText}
                links={footerItem.links}
              />
            );
          })}
        </SimpleGrid>
        <Flex
          py="20px"
          borderTop="2px solid #D7D7D7 "
          w="full"
          justifyContent="space-between"
        >
          <Text fontSize="14px" fontWeight="300">
            &copy; Copyright, Zeeh Africa 2022
          </Text>
          <HStack>
            <Link href="#">
              <FaTwitter color="#47ACDF" />
            </Link>
            <Link href="#">
              <FaLinkedinIn color="#47ACDF" />
            </Link>
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Footer;
