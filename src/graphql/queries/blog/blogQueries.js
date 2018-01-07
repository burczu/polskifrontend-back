import {
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';
import { blogResolvers } from './blogResolvers';
import { BlogsResultType } from '../../types/blogResultType';

export default {
  blogs: {
    type: BlogsResultType,
    description: 'List of all blogs (with pagination)',
    args: { page: { type: GraphQLNonNull(GraphQLInt) } },
    resolve: blogResolvers.getAll
  }
};
