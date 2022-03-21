import {
  Heading,
  VStack,
  Flex,
  chakra,
  Box,
  Text,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";

//image
import mockup from "../../images/Mockups.png";

const Banner = () => {
  return (
    <Box
      id="home"
      h={["full", "full", "80vh"]}
      w="full"
      bg="brandPink.100"
      as="section"
      py={["100px", 0]}
      mt="64px"
    >
      <Box h="full" px="8" w="full" m="0 auto" maxW="1400px">
        <Flex
          alignItems="center"
          h="full"
          justifyContent="space-between"
          w="full"
          flexDirection={["column", "column", "row"]}
        >
          <VStack
            data-aos="fade-right" //strange it doesnt work, it must be vite issues
            mb={["2rem", "2rem", 0]}
            flex={[1, 1, 7]}
            w="full"
            spacing={8}
          >
            <Heading
              fontSize={{ base: "2rem", sm: "2rem", lg: "72px" }}
              as="h1"
            >
              <chakra.span color="brandPink.200">Get access </chakra.span>
              to bank accounts with confidence
            </Heading>
            <Text fontSize={["xl", "xl", "32px"]}>
              Zeeh facilitates seamless access to high-quality financial data
              and safe direct bank payments.
            </Text>
            <Flex
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
                p={{ base: 5, sm: 5, md: 6 }}
              />
              <Button
                py={{ base: 5, sm: 5, md: 6 }}
                px="12"
                fontSize={{ base: ".8rem", sm: ".8rem", md: "1rem" }}
                colorScheme="orange"
                bg="brandPink.200"
              >
                Get started for free
              </Button>
            </Flex>
          </VStack>
          <Box data-aos="fade-left" flex={{ base: 1, sm: 1, md: 5 }} w="full">
            <Image w="full" h="full" src={mockup} alt="Banner Image" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Banner;
