import {createContext} from 'react';
import {fallbackLng} from './settings';

type LngContextType = {
  lng: string;
};

export const LngContext = createContext<LngContextType>({lng: fallbackLng});
