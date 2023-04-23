import { Input } from 'components/Input/Input';
import { ChangeEvent } from 'react';
import { search, searchLabel } from './SearchBar.styles';
import { ReactComponent as SearchIcon } from 'assets/search.svg';

interface SearchBarProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const SearchBar = ({ onChange, value }: SearchBarProps) => {
  return (
    <span className={search}>
      <label className={searchLabel} htmlFor='searchBar'>
        Search country
      </label>
      <SearchIcon />
      <Input
        id='searchBar'
        placeholder='Search country...'
        variant='ghost'
        onChange={onChange}
        value={value}
      />
    </span>
  );
};
