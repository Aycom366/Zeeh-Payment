import { useState } from "react";

import { Box, Button, Flex, IconButton, Image, Link } from "@chakra-ui/react";

//image imports
import logo from "../../images/Logo.png";

//react icons
import { FaBars, FaTimes } from "react-icons/fa";

//framer
import { MotionFlex } from "../Framer/Index";
import { AnimatePresence } from "framer-motion";
import { navVariants } from "../Framer/Variants";

import { NavLinks } from "./NavLinks";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Box
      px="8"
      w="full"
      position="fixed"
      top={0}
      left={0}
      bg="white"
      zIndex={99}
    >
      <Flex
        w="full"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        as="nav"
        maxW="1400px"
        m="0 auto"
        position="relative"
      >
        {/* logo and mobile toggler */}
        <Flex justifyContent="space-between" w={["full", "full", "auto"]}>
          <Link href="#home">
            <Image
              w="full"
              h="full"
              objectFit="cover"
              src={logo}
              alt="ZEEH AFRICA"
            />
          </Link>
          <IconButton
            d={["flex", "flex", "none"]}
            size="sm"
            color="black"
            onClick={() => setIsNavOpen(!isNavOpen)}
            icon={isNavOpen ? <FaTimes /> : <FaBars />}
            aria-label="mobile menu toggler"
          />
        </Flex>

        {/* nav links for desktop */}
        <Flex
          maxW="400px"
          w="full"
          m={"0 auto"}
          justifyContent="space-between"
          alignItems="center"
          d={["none", "none", "flex"]}
        >
          {NavLinks.map((link, index) => (
            <Link key={index} href={link.url}>
              {link.label}
            </Link>
          ))}
        </Flex>

        {/* navLinks for mobile */}
        <AnimatePresence exitBeforeEnter>
          {isNavOpen && (
            <MotionFlex
              variants={navVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              position={"absolute"}
              top="105%"
              left="0"
              w="full"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              bg="white"
              p={"20px"}
            >
              {NavLinks.map((link, index: number) => (
                <Link
                  key={index}
                  onClick={() => setIsNavOpen(false)}
                  mb="0.5rem"
                  href={link.url}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                onClick={() => setIsNavOpen(false)}
                px="20px"
                size={"sm"}
                colorScheme="orange"
                bg="brandPink.200"
                w="full"
              >
                Sign in
              </Button>
            </MotionFlex>
          )}
        </AnimatePresence>

        <Button
          d={["none", "none", "flex"]}
          px="20px"
          size={"sm"}
          colorScheme="orange"
          bg="brandPink.200"
        >
          Sign in
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
