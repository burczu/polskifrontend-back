import {
  GraphQLObjectType,
  GraphQLInt
} from 'graphql';
import { blogResolvers } from './blogResolvers';
import { BlogsResultType } from '../types/blogResultType';

export const BlogQueries = new GraphQLObjectType({
  name: 'BlogQuery',
  description: 'Blog queries.',
  fields: () => ({
    blogs: {
      type: BlogsResultType,
      description: 'List of all blogs (with pagination)',
      args: { page: { type: GraphQLInt } },
      resolve: blogResolvers.getAll
    }
  })
});
