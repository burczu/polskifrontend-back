import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import { blogResolvers } from './blogResolvers';
import { BlogsResultType } from '../types/blogResultType';

export const BlogQueries = new GraphQLObjectType({
  name: 'BlogQueries',
  description: 'Blog queries.',
  fields: () => ({
    info: {
      type: GraphQLString,
      resolve: () => 'This endpoint is for getting and setting data about blogs.'
    },
    blogs: {
      type: BlogsResultType,
      description: 'List of all blogs (with pagination)',
      args: { page: { type: GraphQLNonNull(GraphQLInt) } },
      resolve: blogResolvers.getAll
    }
  })
});
