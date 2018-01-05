import { Articles } from '../../models';

export const articleResolvers = {
  getAll: async (root, { page }) => {
    const articles = await Articles.getArticles(page - 1);
    return articles;
  }
};
