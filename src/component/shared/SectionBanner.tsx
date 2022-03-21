import {
  Heading,
  VStack,
  Flex,
  Box,
  Text,
  Input,
  Button,
  Image,
  FlexProps,
} from "@chakra-ui/react";

import { IoIosArrowRoundForward } from "react-icons/io";

interface IProps extends FlexProps {
  bannerImage: string;
  bannerAlt: string;
  bgColor: string;
  headerText: string;
  HeaderSize: string;
  sectionText: string;
  isButton?: boolean;
  isPadding?: boolean;
}

const SectionBanner = ({
  bannerImage,
  bannerAlt,
  headerText,
  sectionText,
  bgColor,
  isButton,
  isPadding,
}: IProps) => {
  return (
    <Box
      overflow={"hidden"}
      borderRadius={"40px"}
      mb="12"
      h="full"
      w="full"
      bg={bgColor}
      as="section"
    >
      <Box
        h="full"
        px={isPadding ? "8" : "0"}
        py={{ sm: "100px", md: "0" }}
        w="full"
        m="0 auto"
        maxW="1400px"
      >
        <Flex
          alignItems="center"
          h="full"
          justifyContent="space-between"
          w="full"
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Box alignItems="flex-start" flex={{ base: 1, sm: 7 }} w="full">
            <VStack
              mt={{ base: 8, sm: 0 }}
              w="full"
              alignItems={{ base: "center", sm: "flex-start" }}
              maxW="600px"
              spacing={{ base: 4, sm: 8 }}
            >
              <Heading
                data-aos="fade-right"
                data-aos-delay="200"
                fontSize={{ base: "1.5rem", sm: "24px" }}
                as="h3"
              >
                {headerText}
              </Heading>
              <Text
                data-aos="fade-right"
                data-aos-delay="300"
                fontSize={{ base: "1rem", sm: "24px" }}
              >
                {sectionText}
              </Text>
              {isButton ? (
                <Button
                  data-aos="fade-right"
                  data-aos-delay="300"
                  rightIcon={<IoIosArrowRoundForward />}
                  color="brandBlue.200"
                  variant={"ghost"}
                >
                  Learn more
                </Button>
              ) : (
                <Flex
                  data-aos="fade-right"
                  data-aos-delay="300"
                  border="1px solid"
                  borderColor={"#B2B2B2"}
                  w="full"
                  alignItems="center"
                  borderRadius="40px"
                >
                  <Input
                    overflow="hidden"
                    border="none"
                    outline="none"
                    placeholder="Enter your email"
                    w="full"
                    p={{ base: 4, sm: 6 }}
                  />
                  <Button
                    py={{ base: 4, sm: 6 }}
                    px="12"
                    fontSize={{ base: ".8rem", sm: "1rem" }}
                    colorScheme="orange"
                    bg="brandPink.200"
                  >
                    Get started for free
                  </Button>
                </Flex>
              )}
            </VStack>
          </Box>

          <Box
            data-aos="fade-left"
            data-aos-delay="200"
            flex={{ base: 1, sm: 5 }}
          >
            <Image
              h="full"
              w="full"
              objectFit="cover"
              src={bannerImage}
              alt={bannerAlt}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SectionBanner;
