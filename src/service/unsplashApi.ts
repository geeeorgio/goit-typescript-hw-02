import axios from "axios";
import type { FetchDataResponse } from "../types/apiType";

const ACCESS_KEY: string = "vV8bCg0i7FWGTX0CDPI0zDUpMNzZCETFo2p0fY4iMjY";

export const fetchData = async (
  query: string,
  page: number = 1
): Promise<FetchDataResponse> => {
  const { data } = await axios.get<FetchDataResponse>(
    "https://api.unsplash.com/search/photos",
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
      params: {
        query,
        page,
        per_page: 10,
      },
    }
  );

  return data;
};
