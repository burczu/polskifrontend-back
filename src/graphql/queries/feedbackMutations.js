import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { feedbackResolvers } from './feedbackResolvers';

export const FeedbackMutations = new GraphQLObjectType({
  name: 'FeedbackMutations',
  description: 'Feedback mutations.',
  fields: () => ({
    submit: {
      type: GraphQLBoolean,
      description: 'Sends email with feedback.',
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        feedback: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: feedbackResolvers.submit
    }
  })
});
