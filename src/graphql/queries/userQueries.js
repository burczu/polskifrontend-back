import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export const UserQueries = new GraphQLObjectType({
  name: 'UserQueries',
  description: 'User queries.',
  fields: () => ({
    info: {
      type: GraphQLString,
      resolve: () => 'This endpoint allows dealing with users.'
    }
  })
});
