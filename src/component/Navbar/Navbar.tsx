import { useState } from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Image,
  Link,
} from "@chakra-ui/react";

//image imports
import logo from "../../images/Logo.png";

//react icons
import { FaBars, FaTimes } from "react-icons/fa";

//router
import { Link as RouteLink } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Box px="8" maxW="1400px" w="full" m="0 auto">
      <Flex
        w="full"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        as="nav"
      >
        {/* logo and mobile toggler */}
        <Flex w={{ base: "full", sm: "auto" }}>
          <Box>
            <Image
              w="full"
              h="full"
              objectFit="cover"
              src={logo}
              alt="ZEEH AFRICA"
            />
          </Box>
          <IconButton
            d={{ base: "flex", sm: "none" }}
            size="sm"
            onClick={() => setIsNavOpen(!isNavOpen)}
            icon={isNavOpen ? <FaTimes /> : <FaBars />}
            aria-label="mobile menu toggler"
          />
        </Flex>

        {/* nav links */}
        <Flex
          maxW="400px"
          w="full"
          m={"0 auto"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Link as={RouteLink} to="/">
            Product
          </Link>
          <Link as={RouteLink} to="/">
            Developers
          </Link>
          <Link as={RouteLink} to="/">
            Blog
          </Link>
          <Link as={RouteLink} to="/">
            Why Zeeh
          </Link>
        </Flex>

        <Button px="20px" size={"sm"} colorScheme="orange" bg="brandPink.200">
          Sign in
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
