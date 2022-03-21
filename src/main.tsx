import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//chakra-ui
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakraTheme";

//react router
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);