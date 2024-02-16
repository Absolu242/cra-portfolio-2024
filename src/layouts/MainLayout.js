import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <Box backgroundColor={"#000000"}>
      <Box>
        {children}
        <Footer />
      </Box>
    </Box>
  );
}
