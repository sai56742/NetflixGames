import React from "react";
import useGenres, { Genre } from "../hooks/usegenres";
import useData from "../hooks/useData";

const GenresList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <ul>
      {data.map((gen) => (
        <li>{gen.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
