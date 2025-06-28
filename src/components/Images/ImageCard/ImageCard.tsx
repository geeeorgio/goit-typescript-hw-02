import css from "./ImageCard.module.css";

interface ImageCardProps {
  alt: string;
  src: string;
  modalSrc: string;
  color: string;
  handleModal: (value: string) => void;
}

const ImageCard = ({
  alt,
  src,
  modalSrc,
  color,
  handleModal,
}: ImageCardProps) => {
  return (
    <div
      className={css.wrapper}
      style={{ backgroundColor: color, borderColor: color }}
    >
      <img
        className={css.image}
        src={src}
        alt={alt}
        onClick={() => handleModal(modalSrc)}
      />
    </div>
  );
};

export default ImageCard;
