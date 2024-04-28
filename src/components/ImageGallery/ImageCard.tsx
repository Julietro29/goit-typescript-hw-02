import { useState } from 'react';
import styles from './ImageCard.module.css';

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
  user: {
    username: string;
  };
  likes: number;
}



interface Props {
  image: Image;
}

export const ImageCard: React.FC<Props> = ({ image }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image.urls.small} alt={image.description} onClick={handleClick} />
        {isClicked && <div className={styles.imgDarkened}></div>}
      </div>
    </div>
  );
};