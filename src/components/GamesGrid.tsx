import React, { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import GamesCard from "./GamesCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import GamesCardContainer from "./GamesCardContainer";
import { QueryObject } from "../App";

interface props {
  selectedQuery: QueryObject;
}

const GamesGrid = ({ selectedQuery }: props) => {
  const { data, error, isLoading } = useGames(selectedQuery);
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <SimpleGrid
      columns={{
        lg: 3,
        xl: 4,
        md: 2,
        sm: 1,
      }}
      spacing={5}
      padding={5}
    >
      {isLoading &&
        array.map((game) => (
          <GamesCardContainer>
            <GameCardSkeleton />
          </GamesCardContainer>
        ))}
      {data.map((game) => (
        <GamesCard game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
