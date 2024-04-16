import { Badge } from "@chakra-ui/react";
import React from "react";
interface props {
  metacritic: number;
}

const Score = ({ metacritic }: props) => {
  return <Badge colorScheme="green">{metacritic}</Badge>;
};

export default Score;
