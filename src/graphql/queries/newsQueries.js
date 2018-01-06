import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString
} from 'graphql';
import { NewsResultType } from '../types/newsResultType';
import { newsResolvers } from './newsResolvers';

export const NewsQueries = new GraphQLObjectType({
  name: 'NewsQueries',
  description: 'Feedback queries.',
  fields: () => ({
    info: {
      type: GraphQLString,
      resolve: () => 'This endpoint allows getting news about the service.'
    },
    getAll: {
      type: NewsResultType,
      description: 'List of all news (with pagination)',
      args: { page: { type: GraphQLNonNull(GraphQLInt) } },
      resolve: newsResolvers.getAll
    }
  })
});
