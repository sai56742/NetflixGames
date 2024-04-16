import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const GamesCardContainer = ({ children }: props) => {
  return (
    <Box width="300px" borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GamesCardContainer;
