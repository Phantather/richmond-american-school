import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { ApiNewsData, getNews } from '~entities/shared/news/api';

export const newsAtom = atomWithDefault<ApiNewsData | null>((_get) => null);

export const setNewsAtom = atom<
  ApiNewsData | null,
  { page: number; offset: number },
  Promise<void>
>(
  (get) => get(newsAtom),
  async (_get, set, { page, offset }) => {
    const response = await getNews(page, offset);

    if (response.data?.error) {
      set(newsAtom, null);
    } else if (response) {
      set(newsAtom, response);
    }
  }
);
