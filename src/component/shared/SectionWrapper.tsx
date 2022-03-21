import { Box, Flex, FlexProps, Heading, Text, VStack } from "@chakra-ui/react";
import useWindowSize from "../../utils/useWindowSize";

interface IProps extends FlexProps {
  children: React.ReactNode;
  bgColor: string;
  HeaderText: string;
  text: string;
  swap?: boolean;
  textSize?: string;
}
const SectionWrapper = ({
  children,
  bgColor,
  HeaderText,
  text,
  swap,
  textSize,
  ...rest
}: IProps) => {
  return (
    <Box py="100px" bg={bgColor} w="full" h="full" {...rest}>
      <Flex
        direction="column"
        w="full"
        h="full"
        maxW={"1400px"}
        m="0 auto"
        px="8"
      >
        <Heading textAlign="center">{HeaderText}</Heading>
        <Text
          textAlign="center"
          fontWeight={300}
          fontSize={textSize ? textSize : { base: "24px", sm: "36px" }}
        >
          {text}
        </Text>
        {children}
      </Flex>
    </Box>
  );
};

export default SectionWrapper;
