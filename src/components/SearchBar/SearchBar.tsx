import React, { FormEvent } from 'react';
import { Toaster } from 'react-hot-toast';
import { HiOutlineSearch } from 'react-icons/hi';
import { errNotify } from '../../notifications/error';
import { ERR_EMPTY_SEARCH } from '../../notifications/constants';

import styles from './SearchBar.module.css';

interface Props {
  onSearch: (searchStr: string) => void;
}

export const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const searchInput = form.elements.namedItem('search') as HTMLInputElement;
    const searchStr = searchInput.value;
    if (searchStr.trim() === '') {
      errNotify(ERR_EMPTY_SEARCH);
      return;
    }
    onSearch(searchStr);
    form.reset();
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <Toaster />
        </div>

        <button className={styles.button} type="submit">
          <HiOutlineSearch />
        </button>
      </form>
    </header>
  );
};