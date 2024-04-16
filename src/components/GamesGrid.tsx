import React, { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import GamesCard from "./GamesCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import GamesCardContainer from "./GamesCardContainer";

const GamesGrid = () => {
  const { data, error, isLoading } = useGames();
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <SimpleGrid
      columns={{
        lg: 3,
        xl: 4,
        md: 2,
        sm: 1,
      }}
      spacing={10}
      padding={10}
    >
      {isLoading &&
        array.map((game) => (
          <GamesCardContainer>
            <GameCardSkeleton />
          </GamesCardContainer>
        ))}
      {data.map((game) => (
        // <GamesCardContainer>
        <GamesCard game={game} />
        // </GamesCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
