import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { getcropImage } from "../services/crop-image";

interface props {
  onSelectGenre: (genre: Genre) => void;
}

const GenresList = ({ onSelectGenre }: props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={5}>
        Genres
      </Heading>
      <List>
        {data.map((gen) => (
          <ListItem paddingBottom={2}>
            <HStack gap={5}>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={5}
                src={getcropImage(gen.image_background)}
              />
              <Button
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(gen)}
              >
                {" "}
                {gen.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
