import React, { useContext } from 'react';
import { CountryCodes } from 'types/common';

export const CountryCodesContext = React.createContext<CountryCodes | undefined>({});

export const useCountryCodes = () => {
  const context = useContext(CountryCodesContext);

  return context;
};
