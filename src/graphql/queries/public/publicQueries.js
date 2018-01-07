import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import articleQueries from './article/articleQueries';
import blogQueries from './blog/blogQueries';
import newsQueries from './news/newsQueries';

export const PublicQueries = new GraphQLObjectType({
  name: 'PublicQueries',
  description: 'Public queries.',
  fields: () => ({
    info: {
      type: GraphQLString,
      resolve: () => 'These are queries for the public data'
    },
    ...articleQueries,
    ...blogQueries,
    ...newsQueries
  })
});
