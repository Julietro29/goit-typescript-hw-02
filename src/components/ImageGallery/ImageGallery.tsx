import React from 'react';
import { ImageCard } from './ImageCard';

import styles from './ImageGallery.module.css';

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
}

interface Props {
  images: Image[];
  openModal: (image: Image) => void;
}

const ImageGallery: React.FC<Props> = ({ images, openModal }) => {
  const handleImageClick = (event: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const clickedCard = (event.target as HTMLElement).closest('li');
    if (clickedCard) {
      const imageId = clickedCard.dataset.imageid;
      console.log('key', imageId);
      const clickedImageObj = images.find(image => image.id === imageId);
      if (clickedImageObj) {
        openModal(clickedImageObj);
      }
    }
  };

  return (
    <>
      {images.length > 0 && (
        <ul className={styles.gallery} onClick={handleImageClick}>
          {images.map(image => (
            <li key={image.id} data-imageid={image.id}>
              <ImageCard image={image} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ImageGallery;
