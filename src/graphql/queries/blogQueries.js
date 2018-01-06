import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';
import { blogResolvers } from './blogResolvers';
import { BlogsResultType } from '../types/blogResultType';

export const BlogQueries = new GraphQLObjectType({
  name: 'BlogQueries',
  description: 'Blog queries.',
  fields: () => ({
    blogs: {
      type: BlogsResultType,
      description: 'List of all blogs (with pagination)',
      args: { page: { type: GraphQLNonNull(GraphQLInt) } },
      resolve: blogResolvers.getAll
    }
  })
});
