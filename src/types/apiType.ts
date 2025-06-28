import type { UnsplashPhoto } from "./imagesType";

export interface FetchDataResponse {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}
