import React from 'react';
import { useQuery } from 'react-query';
import { WithChildren } from 'types/common';
import { CountryCodesContext } from './CountryCodesContext';
import { getCountryCodes } from 'api/flags';
import { Loader } from 'components/Loader/Loader';

export const CountryCodesProvider = ({ children }: WithChildren) => {
  const { data, isLoading } = useQuery('countryCodes', getCountryCodes);
  return !isLoading ? (
    <CountryCodesContext.Provider value={data}>{children}</CountryCodesContext.Provider>
  ) : (
    <Loader />
  );
};
