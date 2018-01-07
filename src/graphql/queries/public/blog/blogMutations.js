import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { blogResolvers } from './blogResolvers';

export default {
  blogSubmit: {
    type: GraphQLBoolean,
    description: 'Sends email with details about new blog to add to the service.',
    args: {
      blogName: { type: GraphQLNonNull(GraphQLString) },
      email: { type: GraphQLString }
    },
    resolve: blogResolvers.submit
  }
};
