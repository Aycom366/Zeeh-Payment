import { motion } from "framer-motion";
import {
  Flex,
  VStack,
  type StackProps,
  type FlexProps,
} from "@chakra-ui/layout";

export const MotionFlex = motion<FlexProps>(Flex);
export const MotionVStack = motion<StackProps>(VStack);
