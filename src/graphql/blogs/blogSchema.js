import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql';
import { BlogsResultType } from './types/blogResultType';
import { blogResolvers } from './queries/blogResolvers';

// generate graphql schema
export const BlogSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'BlogQuery',
    description: 'Blog queries.',
    fields: {
      blogs: {
        type: BlogsResultType,
        description: 'List of all blogs (with pagination)',
        args: { page: { type: GraphQLInt } },
        resolve: blogResolvers.getAll
      }
    }
  })
});
