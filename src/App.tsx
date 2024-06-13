import React, { useEffect, useState } from "react";
import {
  Box,
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
import { Genre } from "./hooks/useGenres";
import GamesDropdown from "./components/GamesDropdown";
import { Platform } from "./hooks/usePlatforms";
import SortGames from "./components/SortGames";
import GamesHeading from "./components/GamesHeading";

export interface QueryObject {
  genre: Genre | null;
  platform: Platform | null;
  sortorder: String;
  searchText: string;
  rating_top: number;
}

const App = () => {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(  null);
  const [selectedQuery, setSelectedQuery] = useState<QueryObject>(
    {} as QueryObject
  );

  useEffect(() => {
    var deferredPrompt;

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then(function () {
        console.log("Service worker registered!");
      });
    }

    window.addEventListener("beforeinstallprompt", function (event) {
      console.log("beforeinstallprompt fired");
      event.preventDefault();
      deferredPrompt = event;
      return false;
    });
  }, []);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar
          onSearch={(searchText) => {
            setSelectedQuery({ ...selectedQuery, searchText });
          }}
        />
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"} paddingLeft={5}>
          <GenresList
            onSelectGenre={(genre) =>
              setSelectedQuery({ ...selectedQuery, genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GamesHeading selectQuery={selectedQuery} />
        <HStack ml={5} gap={10}>
          <GamesDropdown
            onSelectPlatform={(platform) => {
              setSelectedQuery({ ...selectedQuery, platform });
            }}
          />
          <SortGames
            onSelectSortOrder={(sortorder) =>
              setSelectedQuery({ ...selectedQuery, sortorder })
            }
          />
        </HStack>

        <GamesGrid selectedQuery={selectedQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
