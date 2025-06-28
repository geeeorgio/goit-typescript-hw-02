import { useState } from "react";
import Modal from "react-modal";
import { CircleX } from "lucide-react";

import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string | null;
}

const ImageModal = ({ isOpen, onRequestClose, imageUrl }: ImageModalProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const handleImageLoad = (): void => {
    setIsImageLoaded(true);
  };

  const handleAfterClose = (): void => {
    setIsImageLoaded(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onAfterClose={handleAfterClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.wrapper}>
        {imageUrl && (
          <img src={imageUrl} alt="Modal view" onLoad={handleImageLoad} />
        )}
        {isImageLoaded && (
          <button onClick={onRequestClose}>
            <CircleX />
          </button>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
