export const routes = {
  createNews: () => `/post/create`,
  createNewNews: () => `/post/create/new`,
  updateNews: (id: number) => `/post/update/new/${id}`,
  deleteNews: (id: number) => `/post/delete/new/${id}`,
};
