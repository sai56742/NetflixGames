import React from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
  Text,
} from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"}>
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
