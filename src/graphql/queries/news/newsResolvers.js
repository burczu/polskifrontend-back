import { Newses } from '../../../models';

export const newsResolvers = {
  getAll: async (root, { page }) => {
    const result = await Newses.getNewses(page - 1);
    return result;
  }
};
