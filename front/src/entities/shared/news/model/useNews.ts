import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import { newsAtom, setNewsAtom } from '~entities/shared/news/model/atoms';

export const useNews = () => {
  return useAtomValue(newsAtom);
};

export const useSetNews = () => {
  return useSetAtom(setNewsAtom);
};

export const useResetNews = () => {
  return useResetAtom(newsAtom);
};
