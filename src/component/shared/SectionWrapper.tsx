import { Box, Flex, FlexProps, Heading, Text } from "@chakra-ui/react";

interface IProps extends FlexProps {
  children: React.ReactNode;
  bgColor: string;
  HeaderText: string;
  text: string;
  swap?: boolean;
  textSize?: string;
  id: string;
}

const SectionWrapper = ({
  children,
  bgColor,
  HeaderText,
  text,
  swap,
  id,
  textSize,
  ...rest
}: IProps) => {
  return (
    <Box
      overflow={"hidden"}
      py="100px"
      bg={bgColor}
      w="full"
      h="full"
      {...rest}
      id={id}
    >
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
          fontSize={textSize ? textSize : { base: "1.25rem", sm: "36px" }}
        >
          {text}
        </Text>
        {children}
      </Flex>
    </Box>
  );
};

export default SectionWrapper;
