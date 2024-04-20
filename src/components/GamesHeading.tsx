import { Heading } from "@chakra-ui/react";
import React from "react";
import { QueryObject } from "../App";

interface props {
  selectQuery: QueryObject;
}

const GamesHeading = ({ selectQuery }: props) => {
  const heading = `${selectQuery.genre ? selectQuery?.genre.name : ""} ${
    selectQuery.platform ? selectQuery?.platform?.name : ""
  } Games`;

  return (
    <Heading as="h1" fontSize="4xl" marginY={5} marginLeft={10}>
      {heading}
    </Heading>
  );
};

export default GamesHeading;
