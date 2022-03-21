import SectionWrapper from "../shared/SectionWrapper";

import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { TabValues } from "../../utils/Tab";
import Authentication from "../TabsChildren/Authentication";
import Finance from "../TabsChildren/Finance";
import { useState } from "react";
import { MotionFlex } from "../Framer/Index";
import { AnimatePresence } from "framer-motion";

const FutureOfFinance = () => {
  const [selectedTab, setSelectedTab] = useState(TabValues[0]);

  return (
    <SectionWrapper
      id="why"
      bgColor="white"
      HeaderText="create a foundation for the future of finance"
      text="With Zeeh, you have access to several amazing features"
    >
      <Flex
        data-aos="zoom-in"
        data-aos-delay="200"
        as="nav"
        justifyContent="space-between"
        mt={8}
        w="full"
      >
        <UnorderedList overflowX={"auto"}>
          {TabValues.map((tab) => (
            <ListItem
              fontWeight={600}
              fontSize={[".8rem", "20px"]}
              onClick={() => setSelectedTab(tab)}
              w="full"
              p={"10px"}
              minWidth="200px"
              color={selectedTab === tab ? "white" : "#1f1f1f"}
              bg={selectedTab === tab ? "brandBlue.200" : "white"}
              _notLast={{ marginRight: "1rem" }}
              key={tab.label}
              d="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius={"40px"}
              fontFamily="Manrope"
              userSelect={"none"}
              cursor={"pointer"}
            >
              {tab.label}
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
      <AnimatePresence exitBeforeEnter>
        <MotionFlex
          w="full"
          mt={4}
          key={selectedTab ? selectedTab.label : "empty"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.15 } }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.15 } }}
        >
          {selectedTab.label === "Authentication" ? (
            <Authentication />
          ) : selectedTab.label === "Finance" ? (
            <Finance />
          ) : selectedTab.label === "Direct Debit" ? (
            <Authentication />
          ) : selectedTab.label === "Universal Card" ? (
            <Authentication />
          ) : (
            <Authentication />
          )}
        </MotionFlex>
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default FutureOfFinance;
