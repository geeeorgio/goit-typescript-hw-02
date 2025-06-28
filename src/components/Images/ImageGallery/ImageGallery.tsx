import type { UnsplashPhoto } from "../../../types/imagesType";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  photos: UnsplashPhoto[];
  handleModal: (value: string) => void;
}

const ImageGallery = ({ photos, handleModal }: ImageGalleryProps) => {
  return (
    <ul className={css.list}>
      {photos.map(({ id, description, color, urls: { small, regular } }) => (
        <li key={id}>
          <ImageCard
            color={color}
            alt={description}
            src={small}
            modalSrc={regular}
            handleModal={handleModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
