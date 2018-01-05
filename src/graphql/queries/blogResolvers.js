import { Blogs } from '../../models';

export const blogResolvers = {
  getAll: async (root, { page }) => {
    const blogs = await Blogs.getBlogs(page - 1);
    return blogs;
  }
};
