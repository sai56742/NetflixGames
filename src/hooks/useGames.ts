import React, { useEffect, useState } from "react";

import axios, { CanceledError } from "axios";
import apiClient from "../services/api-client";
import useData from "./useData";
import { QueryObject } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top:number

}

const useGames = (queryobject: QueryObject) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: queryobject.genre?.id,
        platforms: queryobject.platform?.id,
        ordering: queryobject.sortorder,
        search: queryobject.searchText,
      },
    },
    [queryobject]
  );

export default useGames;
