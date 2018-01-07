import {
  GraphQLObjectType
} from 'graphql';
import blogMutations from './blog/blogMutations';
import feedbackMutations from './feedback/feedbackMutations';
import userMutations from './user/userMutations';

export const PublicMutations = new GraphQLObjectType({
  name: 'PublicMutations',
  description: 'Public mutations.',
  fields: () => ({
    ...blogMutations,
    ...feedbackMutations,
    ...userMutations
  })
});
