import { createContext, useContext } from 'react';
import { CountryCodes } from 'types/common';

export const CountryCodesContext = createContext<CountryCodes | undefined>(undefined);

export const useCountryCodes = () => {
  const context = useContext(CountryCodesContext);

  if (!context) {
    throw new Error('Country codes context is required!');
  }

  return context;
};
