import React, { useEffect, useState } from "react";

import axios, { CanceledError } from "axios";
import apiClient from "../services/api-client";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
