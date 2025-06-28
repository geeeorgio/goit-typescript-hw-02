export interface UnsplashPhoto {
  id: string;
  alt_description: string;
  description: string;
  color: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
}
