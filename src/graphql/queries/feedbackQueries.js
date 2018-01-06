import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export const FeedbackQueries = new GraphQLObjectType({
  name: 'FeedbackQueries',
  description: 'Feedback queries.',
  fields: () => ({
    info: {
      type: GraphQLString,
      resolve: () => 'This endpoint allows sending feedback about this service.'
    }
  })
});
