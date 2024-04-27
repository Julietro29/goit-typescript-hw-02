import React from 'react';
import Button from '../Button/Button';
import { MOREBTN_CAPTION } from '../../notifications/constants';

interface Props {
  isVisible: boolean;
  onClick: () => void;
}

export const LoadMoreBtn: React.FC<Props> = ({ isVisible, onClick }) => {
  return (
    <>
      {isVisible && (
        <Button onClick={onClick}>{MOREBTN_CAPTION}</Button>
      )}
    </>
  );
};
