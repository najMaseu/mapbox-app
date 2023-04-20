import { ReactNode } from 'react';

export type WithChildren = {
  children: ReactNode;
};

export type CountryCodes = Record<string, string>;

export type ServerDataResult = { name: 'string'; distance: number }[];
