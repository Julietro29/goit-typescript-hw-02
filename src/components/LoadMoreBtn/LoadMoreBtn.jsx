import Button from '../Button/Button';
import { MOREBTN_CAPTION } from '../../notifications/constants';

export const LoadMoreBtn = ({ isVisible, onClick }) => {
  return (
    <>
      {isVisible && (
        <Button onClick={onClick}>{MOREBTN_CAPTION}</Button>
      )}
    </>
  );
};

