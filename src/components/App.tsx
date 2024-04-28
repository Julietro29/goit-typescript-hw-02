import { useEffect, useState } from "react";
import clsx from 'clsx';
import Modal from 'react-modal';
import { SearchBar } from './SearchBar/SearchBar';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import ImageModal  from './ImageModal/ImageModal';
import { fetchData } from '../api/fetch-data';
import styles from './App.module.css';

interface ImageData {
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

const App = () => {
  const [items, setItems] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [currPage, setCurrPage] = useState<number>(0);
  const [hasMorePages, setHasMorePages] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('');

  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const updateImages = async (strFilter: string, page: number) => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchData(strFilter, page);
      if (data.results.length > 0) {
        setItems(prevItems => [...prevItems, ...data.results]);
        setCurrPage(page);
        setHasMorePages(page >= data.total_pages ? false : true);
      } else {
        setError(true);
        setHasMorePages(false);
      }
    } catch (error) {
      setError(true);
      setHasMorePages(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (strFilter: string) => {
    setFilter(strFilter);
    setItems([]);
    setCurrPage(0);
    setHasMorePages(false);
    updateImages(strFilter, 1);
  };

  const handleMore = () => updateImages(filter, currPage + 1);
  const openModal = (image: ImageData) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <div className={clsx(styles.content, styles.section)}>
        <ErrorMessage isError={error} />
        <ImageGallery images={items} openModal={openModal} />
        <Loader isLoading={loading} />
        <LoadMoreBtn
          isVisible={hasMorePages && !loading}
          onClick={handleMore}
        ></LoadMoreBtn>
      </div>
      <ImageModal
        isOpen={modalIsOpen}
        image={selectedImage}
        onCloseClick={closeModal}
      />
    </div>
  );
};

export default App;
