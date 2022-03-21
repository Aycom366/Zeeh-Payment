import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

//Update the breakpoints
const breakpoints = createBreakpoints({
  xs: "400px",
  sm: "600px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

export const theme = extendTheme({
  styles: {
    //global styles to be applied to the application
    global: {
      "*,*::before,*::after": {
        scrollBehavior: "smooth",
      },
      "ul li": { listStyleType: "none" },
      "*:focus": { boxShadow: "none !important" },
    },
  },
  breakpoints, //include breakpoints in theme object
  colors: {
    brandPink: {
      100: "#FFF5ED",
      200: "#EE620C",
    },
    brandGrey: { 100: "#F4F4F4" },
    brandBlue: { 100: "#E6E7FF", 200: "#0D16EE" },
  },
  components: {
    //component styles to be applied to the application
    Button: {
      baseStyle: {
        //since all button has 20px borderRadius on px, I decided to set it as default
        borderRadius: "50px",
        color: "white",
        fontFamily: "Manrope, sans-serif",
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Montserrat, sans-serif",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "Manrope, sans-serif",
      },
    },
  },
});
