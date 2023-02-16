import React, { useReducer } from 'react';
import { Global_Context } from '@ts/global.types';
import { initialState, globalReducer } from './reducer';
import { useRouter } from 'next/router';

export const GlobalContext = React.createContext<Global_Context>(initialState);

export const GlobalCTXProvider = ({ children }) => {
  const { locale } = useRouter();
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        ...state,

        // Dynamically get initial value for translations
        content: require(`../../../public/locales/${locale}/translations.json`),
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
