import {
  GraphQLNonNull,
  GraphQLInt
} from 'graphql';
import { NewsResultType } from '../../../types/newsResultType';
import { newsResolvers } from './newsResolvers';

export default {
  newses: {
    type: NewsResultType,
    description: 'List of all news (with pagination)',
    args: { page: { type: GraphQLNonNull(GraphQLInt) } },
    resolve: newsResolvers.getAll
  }
};
