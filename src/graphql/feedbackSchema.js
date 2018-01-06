import {
  GraphQLSchema
} from 'graphql';
import { FeedbackQueries } from './queries/feedbackQueries';
import { FeedbackMutations } from './queries/feedbackMutations';

export const FeedbackSchema = new GraphQLSchema({
  query: FeedbackQueries,
  mutation: FeedbackMutations
});
