import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';
import { ArticleResultType } from '../types/articleResultType';
import { articleResolvers } from './articleResolvers';

export const ArticleQueries = new GraphQLObjectType({
  name: 'ArticleQueries',
  description: 'Article queries.',
  fields: () => ({
    articles: {
      type: ArticleResultType,
      description: 'List of all articles (with pagination)',
      args: { page: { type: GraphQLNonNull(GraphQLInt) } },
      resolve: articleResolvers.getAll
    }
  })
});
