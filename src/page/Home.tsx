import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

//components
import FutureOfFinance from "../component/FutureOfFinance/FutureOfFinance";
import Banner from "../component/Home/Banner";
import SectionBanner from "../component/shared/SectionBanner";

//utils
import { TrustedBy } from "../utils/TrustedBy";

//image
import phone from "../images/phone.png";
import Footer from "../component/Footer/Footer";

let count = 100; //for aos delaying

const Home = () => {
  return (
    <>
      <Banner />

      {/* Trusted By sections */}
      <VStack
        id="product"
        py="100px"
        px={8}
        overflow={"hidden"}
        maxW="1400px"
        m="0 auto"
        as="section"
      >
        <Text data-aos="zoom-in" fontSize={{ base: "1rem", sm: "1.5rem" }}>
          Trusted by
        </Text>
        <SimpleGrid gridGap={4} w="full" columns={[2, 3, 4]}>
          {TrustedBy.map((trust, index) => {
            count += 100;
            return (
              <Image
                data-aos="fade-up"
                data-aos-delay={count}
                h="70px"
                key={index}
                src={trust.img}
                alt={trust.img}
              />
            );
          })}
        </SimpleGrid>
      </VStack>

      <FutureOfFinance />

      {/* Developer experience */}
      <Box
        id="developers"
        overflow={"hidden"}
        py="100px"
        bg="brandBlue.100"
        w="full"
        h="full"
      >
        <VStack w="full" h="full" spacing={8} maxW={"1400px"} m="0 auto" px="4">
          <Text
            data-aos="fade-down"
            textAlign="center"
            fontSize={{ base: "1.2rem", sm: "24px" }}
            color="brandBlue.200"
          >
            DEVELOPER EXPERIENCE
          </Text>
          <Heading
            textAlign="center"
            data-aos="fade-up"
            fontWeight="600"
            fontSize={{ base: "1.5rem", sm: "48px" }}
          >
            Designed with developers in mind
          </Heading>
          <Text data-aos="zoom-in" w="full" maxWidth="900px">
            We are building a product that allows customers to link all their
            bank or financial accounts and bio data in one place. Hence, we help
            boost business operations by getting a full KYC profile for an
            individual or corporate entity across all banks in Nigeria— this
            protects their businesses from risk and fraud and helps them make a
            better and faster financial/lending decision
          </Text>
          <HStack>
            <Button
              data-aos="fade-right"
              fontWeight="700"
              p={{ base: "1rem", sm: "30px" }}
              fontSize={{ base: "1rem", sm: "24px" }}
              bg="brandBlue.200"
              colorScheme={"blue"}
            >
              Read our API docs
            </Button>
            <Spacer />
            <Button
              data-aos="fade-left"
              colorScheme={"white"}
              fontWeight="700"
              fontSize={{ base: "1rem", sm: "24px" }}
              p={{ base: "1rem", sm: "30px" }}
              bg="white"
              color="black"
            >
              Join us on Slack
            </Button>
          </HStack>
        </VStack>
      </Box>

      {/* Get Started */}
      <SectionBanner
        bannerImage={phone}
        bannerAlt="Zeeh Bank"
        bgColor={"brandPink.100"}
        headerText={"Get started with Zeeh"}
        HeaderSize={"48px"}
        sectionText={
          "Gain direct access to financial data and  process payments  straight from bank accounts."
        }
        isPadding
      />

      <Footer />
    </>
  );
};

export default Home;
