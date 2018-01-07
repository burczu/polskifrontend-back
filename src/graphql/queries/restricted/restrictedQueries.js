import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export const RestrictedQueries = new GraphQLObjectType({
  name: 'RestrictedQueries',
  description: 'Restricted queries.',
  fields: () => ({
    info: {
      type: GraphQLString,
      resolve: () => 'These are queries for the restricted data'
    }
  })
});
