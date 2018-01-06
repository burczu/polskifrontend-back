import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { blogResolvers } from './blogResolvers';

export const BlogMutations = new GraphQLObjectType({
  name: 'BlogMutations',
  description: 'Blog mutations.',
  fields: () => ({
    submit: {
      type: GraphQLBoolean,
      description: 'Sends email with details about new blog to add to the service.',
      args: {
        blogName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLString }
      },
      resolve: blogResolvers.submit
    }
  })
});
