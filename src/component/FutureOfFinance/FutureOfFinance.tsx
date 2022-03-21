import SectionWrapper from "../shared/SectionWrapper";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Table,
} from "@chakra-ui/react";
import { TabValues } from "../../utils/Tab";
import Authentication from "../TabsChildren/Authentication";
import Finance from "../TabsChildren/Finance";

const FutureOfFinance = () => {
  return (
    <SectionWrapper
      bgColor="white"
      HeaderText="create a foundation for the future of finance"
      text="With Zeeh, you have access to several amazing features"
    >
      <Box mt={8} w="full">
        <Tabs
          overflowWrap={"anywhere"}
          isFitted
          variant="soft-rounded"
          colorScheme="blue"
        >
          <TabList>
            {TabValues.map((tab, index) => (
              <Tab
                _selected={{ bg: "brandBlue.200", color: "white" }}
                key={index}
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel>
              <Authentication />
            </TabPanel>
            <TabPanel>
              <Finance />
            </TabPanel>
            <TabPanel>
              <Authentication />
            </TabPanel>
            <TabPanel>
              <Authentication />
            </TabPanel>
            <TabPanel>
              <Authentication />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </SectionWrapper>
  );
};

export default FutureOfFinance;
