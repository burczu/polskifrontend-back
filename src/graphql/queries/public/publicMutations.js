import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import blogMutations from './blog/blogMutations';
import feedbackMutations from './feedback/feedbackMutations';
import userMutations from './user/userMutations';

export const PublicMutations = new GraphQLObjectType({
  name: 'PublicMutations',
  description: 'Public mutations.',
  fields: () => ({
    info: {
      type: GraphQLString,
      resolve: () => 'These are mutations for the public data'
    },
    ...blogMutations,
    ...feedbackMutations,
    ...userMutations
  })
});
