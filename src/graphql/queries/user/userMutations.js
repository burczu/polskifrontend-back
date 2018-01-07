import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { UserAuthResultType } from '../../types/userTokenType';
import { userResolvers } from './userResolvers';

export default {
  userAuthenticate: {
    type: UserAuthResultType,
    description: 'Tries authenticate user and get auth token.',
    args: {
      user: { type: GraphQLNonNull(GraphQLString) },
      password: { type: GraphQLNonNull(GraphQLString) }
    },
    resolve: userResolvers.authenticate
  }
};
