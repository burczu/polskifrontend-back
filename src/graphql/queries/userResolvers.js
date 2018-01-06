import jwt from 'jsonwebtoken';
import { Users } from '../../models';
import app from '../../main';

export const userResolvers = {
  authenticate: async (root, { user, password }) => {
    const userData = await Users.getUser(user);

    if (!userData) {
      return { success: false };
    } else if (userData) {
      // check if password matches
      if (userData.password !== password) {
        return { success: false };
      }

      // if user is found and password is right
      // create a token
      const token = jwt.sign(userData.toJSON(), app.get('secret'), {
        expiresIn: 18000 // expires in 24 hours
      });

      // return the information including token
      return { success: true, token };
    }
  }
};
