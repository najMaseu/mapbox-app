import { getCountryCodes } from 'api/flags';
import React from 'react';
import { useQuery } from 'react-query';
import { WithChildren } from 'types/common';
import { CountryCodesContext } from './CountryCodesContext';

function CountryCodesProvider({ children }: WithChildren) {
  const { data } = useQuery('countryCodes', getCountryCodes);

  return <CountryCodesContext.Provider value={data}>{children}</CountryCodesContext.Provider>;
}

export default CountryCodesProvider;
