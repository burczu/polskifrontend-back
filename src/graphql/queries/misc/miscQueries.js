import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import { miscResolvers } from './miscResolvers';

export const MiscQueries = new GraphQLObjectType({
  name: 'MiscQueries',
  description: 'Misc queries.',
  fields: () => ({
    feed: {
      type: GraphQLString,
      resolve: miscResolvers.getFeed
    },
    sitemap: {
      type: GraphQLString,
      resolve: miscResolvers.getSitemap
    }
  })
});
