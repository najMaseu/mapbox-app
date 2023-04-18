import axios from 'axios';
import { CountryCodes } from 'types/common';

export const getCountryCodes = async () =>
  (await axios.get<CountryCodes>('https://flagcdn.com/en/codes.json')).data;
