import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const fetchPlanets = async (
  page: number = 1
): Promise<{
  info: Info;
  results: Planet[];
}> => {
  try {
    const response = await axios.get(`/location?page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const fetchAllPlanets = async (): Promise<{
  info: Info;
  results: Planet[];
}> => {
  try {
    const response = await axios.get(`/location`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const fetchOnePlanet = async (id: string): Promise<Planet> => {
  try {
    const response = await axios.get(`/location/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const fetchOneCharacter = async (id: string): Promise<Character> => {
  try {
    const response = await axios.get(`/character/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const fetchMultiplyCharacters = async (
  ids: string
): Promise<Character[]> => {
  try {
    const response = await axios.get(`/character/${ids}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
