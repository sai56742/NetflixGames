import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import Score from "./Score";
import { getcropImage } from "../services/crop-image";

interface props {
  game: Game;
}

const GamesCard = ({ game }: props) => {

  


  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={getcropImage(game.background_image)} />

      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">


          <PlatformIconsList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <Score metacritic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GamesCard;
