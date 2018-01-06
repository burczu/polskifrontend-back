import { Blogs } from '../../models';
import sendMail from '../../utils/emailer';

export const blogResolvers = {
  getAll: async (root, { page }) => {
    const blogs = await Blogs.getBlogs(page - 1);
    return blogs;
  },
  submit: async (root, { blogName, email }) => {
    const body = `
        <p style="font-size: 1.4em;">
          Adres bloga: ${blogName},<br /> 
          Email: ${email || 'nie podano'}
        </p>
      `;
    const sendingResult = await sendMail(body, email);

    return sendingResult.success;
  }
};
