import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { feedbackResolvers } from './feedbackResolvers';

export default {
  feedbackSubmit: {
    type: GraphQLBoolean,
    description: 'Sends email with feedback.',
    args: {
      email: { type: GraphQLNonNull(GraphQLString) },
      feedback: { type: GraphQLNonNull(GraphQLString) }
    },
    resolve: feedbackResolvers.submit
  }
};
