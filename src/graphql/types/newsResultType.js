import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt
} from 'graphql';
import { NewsType } from './newsType';

export const NewsResultType = new GraphQLObjectType({
  name: 'NewsResultType',
  description: 'Result of getting all news, contains newses + next page info.',
  fields: () => ({
    newses: { type: GraphQLList(NewsType) },
    nextPage: { type: GraphQLInt }
  })
});
