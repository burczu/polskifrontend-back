import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export const RestrictedMutations = new GraphQLObjectType({
  name: 'RestrictedMutations',
  description: 'Restricted mutations.',
  fields: () => ({
    info: {
      type: GraphQLString,
      resolve: () => 'These are mutations for the restricted data'
    }
  })
});
