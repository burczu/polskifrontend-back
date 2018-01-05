import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt
} from 'graphql';
import { ArticleType } from './articleType';

export const ArticleResultType = new GraphQLObjectType({
  name: 'ArticleListResult',
  description: 'Result of getting all articles, contains articles + next page info.',
  fields: () => ({
    articles: { type: GraphQLList(ArticleType) },
    nextPage: { type: GraphQLInt }
  })
});
