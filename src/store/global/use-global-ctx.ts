import { GlobalContext } from './CTX';
import { useContext } from 'react';
import { ColorScheme, DefaultMantineColor } from '@mantine/core';

const useGlobalCtx = () => {
  const { dispatch, content } = useContext(GlobalContext);

  const translate = (content: string) => content || '<-- untranslated -->';

  return {
    content,
    translate,
  };
};

export default useGlobalCtx;
